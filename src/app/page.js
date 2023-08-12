import Image from 'next/image'
import Card from './components/Card'
import Navbar from './components/navbar'

export default function Home() {
  return (<>


   
    <h1 className='text-8xl text-blue-950 font-extrabold text-center'>Products</h1>
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          <Card />
          <Card />
          <Card />

          <Card />
          <Card />
        </div>
      </div>
    </section>


  </>
  )
}
