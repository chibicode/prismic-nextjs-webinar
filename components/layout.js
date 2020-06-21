import Link from 'next/link'

export default function Layout({ title, menuItems, children }) {
  return (
    <div className='max-w-3xl mx-auto my-8 md:my-20 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 text-lg px-4'>
      <div className='col-span-1 order-last md:order-first'>
        <h2 className='font-bold mb-4'>Menu</h2>
        <ul>
          <li className='list-none mb-4'>
            <Link href='/[[...slug]]' as='/'>
              <a>Home</a>
            </Link>
          </li>
          {menuItems.map(({ slug, title }) => (
            <li className='list-none mb-4' key={slug}>
              <Link href='/[[...slug]]' as={`/${slug}`}>
                <a>{title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className='col-span-2'>
        <h1 className='text-4xl font-bold leading-tight mb-4'>{title}</h1>
        {children}
      </div>
    </div>
  )
}
