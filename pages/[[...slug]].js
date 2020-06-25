import Layout from '../components/layout'
import { getSlugs, getData } from '../lib/api'
import { useRouter } from 'next/router'
import Error from 'next/error'

export default function Page({ allPages, page, preview }) {
  const router = useRouter()
  if (router.isFallback) {
    return (
      <Layout title='Loading' menuItems={[]}>
        <p>Please wait…</p>
      </Layout>
    )
  }
  if (!page) {
    return <Error statusCode={404} />
  }
  return (
    <Layout title={page.title} menuItems={allPages}>
      <p>{page.body}</p>
      {preview && (
        <p className='mt-4'>
          (
          <a href='/api/exit-preview' className='underline'>
            Exit Preview Mode
          </a>
          )
        </p>
      )}
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

export async function getStaticProps({ params, preview = false, previewData }) {
  const { allPages, page } = await getData(params.slug[0], previewData)
  return {
    props: {
      allPages,
      page,
      preview
    },
    unstable_revalidate: 5
  }
}
