import Prismic from 'prismic-javascript'

const REPOSITORY = process.env.PRISMIC_REPOSITORY_NAME
const REF_API_URL = `https://${REPOSITORY}.prismic.io/api/v2`
const GRAPHQL_API_URL = `https://${REPOSITORY}.prismic.io/graphql`
export const API_TOKEN = process.env.PRISMIC_API_TOKEN
export const API_LOCALE = process.env.PRISMIC_REPOSITORY_LOCALE

export const PrismicClient = Prismic.client(REF_API_URL, {
  accessToken: API_TOKEN
})

async function fetchAPI(query, { variables } = {}) {
  const prismicAPI = await PrismicClient.getApi()
  const res = await fetch(
    `${GRAPHQL_API_URL}?query=${query}&variables=${JSON.stringify(variables)}`,
    {
      headers: {
        'Prismic-Ref': prismicAPI.masterRef.ref,
        'Content-Type': 'application/json',
        'Accept-Language': API_LOCALE,
        Authorization: `Token ${API_TOKEN}`
      }
    }
  )

  if (res.status !== 200) {
    console.log(await res.text())
    throw new Error('Failed to fetch API')
  }

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }
  return json.data
}

export async function getSlugs() {
  const data = await fetchAPI(`
    {
      allPages(sortBy: meta_firstPublicationDate_ASC) {
        edges {
          node {
            _meta {
              uid
            }
          }
        }
      }
    }
  `)
  return (data?.allPages?.edges || []).map((edge) => `/${edge.node._meta.uid}`)
}

export async function getData(slug) {
  const data = await fetchAPI(
    `
    query Page($slug: String!, $lang: String!) {
      allPages(sortBy: meta_firstPublicationDate_ASC) {
        edges {
          node {
            _meta {
              uid
            }
            title
            body
          }
        }
      }
      page(uid: $slug, lang: $lang) {
        title
        body
      }
    }
  `,
    {
      variables: {
        slug,
        lang: API_LOCALE
      }
    }
  )
  return {
    allPages: (data?.allPages?.edges || []).map((edge) => ({
      slug: edge.node._meta.uid,
      title: edge.node.title
    })),
    page: data.page
  }
}
