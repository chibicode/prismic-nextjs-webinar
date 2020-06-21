import Layout from '../components/layout'

export default function Page() {
  return (
    <Layout
      title='Test Page'
      menuItems={[
        {
          slug: '',
          title: 'Test Page'
        }
      ]}
    >
      <p>Body</p>
    </Layout>
  )
}
