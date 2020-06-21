import Layout from '../components/layout'
import { getSlugs, getData } from '../lib/api'

export default function Page({ allPages, page }) {
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
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const { allPages, page } = await getData(params.slug[0])
  return {
    props: {
      allPages,
      page
    }
  }
}
