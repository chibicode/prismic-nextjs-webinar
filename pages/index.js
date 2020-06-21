import Head from 'next/head'

export default function Home() {
  return (
    <div className='max-w-3xl mx-auto my-8 md:my-20 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 text-lg px-4'>
      <div className='col-span-1 order-last md:order-first'>
        <h2 className='font-bold mb-4'>Menu</h2>
        <ul>
          <li className='list-none mb-4'>Page 1</li>
          <li className='list-none mb-4'>Page 1</li>
          <li className='list-none mb-4'>Page 1</li>
          <li className='list-none mb-4'>Page 1</li>
        </ul>
      </div>
      <div className='col-span-2'>
        <h1 className='text-4xl font-bold leading-tight mb-4'>Home</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lacinia
          nec urna a sollicitudin. Cras pretium orci nec nulla pharetra, quis
          scelerisque tellus euismod. Mauris nulla lectus, condimentum varius
          sem non, gravida mattis magna. Vivamus in magna quis diam tempor
          convallis fringilla ac augue. Phasellus et nulla ut ante convallis
          fermentum consectetur vel arcu. Nulla facilisi. Nulla et diam ut
          sapien lacinia pulvinar id eu orci. Aliquam erat volutpat. Vestibulum
          ac dui a felis mattis tempus quis et justo. Phasellus blandit eros nec
          lectus viverra imperdiet. Donec eleifend volutpat augue ac pharetra.
          Proin in pellentesque turpis. Proin accumsan efficitur augue et
          cursus. Maecenas quis aliquam risus. Ut volutpat metus mauris.
        </p>
      </div>
    </div>
  )
}
