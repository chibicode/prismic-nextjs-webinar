import Layout from '../components/layout'
import { getSlugs, getData } from '../lib/api'
import { useRouter } from 'next/router'
import Error from 'next/error'

export default function Page({ allPages, page }) {
  const router = useRouter()
  if (router.isFallback) {
    return (
      <Layout title='Loading' menuItems={[]}>
        Please wait…
      </Layout>
    )
  }
  if (!page) {
    return <Error statusCode={404} />
  }
  return (
    <Layout title={page.title} menuItems={allPages}>
      {page.body}
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = await getSlugs()
  return {
    paths,
    fallback: true
  }
}

export async function getStaticProps({ params, previewData }) {
  const { allPages, page } = await getData(params.slug[0], previewData)
  return {
    props: {
      allPages,
      page
    },
    unstable_revalidate: 5
  }
}
