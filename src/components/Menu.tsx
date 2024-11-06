import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Menu() {
  return (
    <section>
      <div id='menu-section' className="w-full py-12 bg-[#f8e3e3]">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-5xl mb-10">Delicious Menu</h2>
          <div className="flex flex-wrap gap-5 justify-center">
            <div className="menu-card max-w-[550px] w-full bg-white border border-[#c4c3c3] flex items-center rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
              <div className="menu-image w-1/2 h-[220px] overflow-hidden">
                <Image src={'/menu-1.png'} alt='Grilled Chicken with Potatoes' width={300} height={200} className='w-full h-full object-cover' />
              </div>
              <div className="menu-text w-1/2 p-5 flex flex-col items-start">
                <h4 className="text-xl mb-2">Grilled Chicken with Potatoes</h4>
                <p className="mb-2">Chicken Garlic Potatoes Tomatoes</p>
                <p className="text-xl font-semibold mb-2">$ 30</p>
                <p className="btn"><Link href={'/'} className="bg-[#f0a211] px-5 py-2 text-white hover:bg-transparent hover:border hover:border-gray-500 hover:text-gray-500 transition duration-300">Order Now</Link></p>
              </div>
            </div>

            <div className="menu-card max-w-[550px] w-full bg-white border border-[#c4c3c3] flex items-center rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
              <div className="menu-image w-1/2 h-[220px] overflow-hidden">
                <Image src={'/menu-2.jpg'} alt='Grilled Chicken with Potatoes' width={300} height={200} className='w-full h-full object-cover' />
              </div>
              <div className="menu-text w-1/2 p-5 flex flex-col items-start">
                <h4 className="text-xl mb-2">Grilled Chicken with Potatoes</h4>
                <p className="mb-2">Chicken Garlic Potatoes Tomatoes</p>
                <p className="text-xl font-semibold mb-2">$ 30</p>
                <p className="btn"><Link href={'/'} className="bg-[#f0a211] px-5 py-2 text-white hover:bg-transparent hover:border hover:border-gray-500 hover:text-gray-500 transition duration-300">Order Now</Link></p>
              </div>
            </div>

            <div className="menu-card max-w-[550px] w-full bg-white border border-[#c4c3c3] flex items-center rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
              <div className="menu-image w-1/2 h-[220px] overflow-hidden">
                <Image src={'/menu-3.jpg'} alt='Grilled Chicken with Potatoes' width={300} height={200} className='w-full h-full object-cover' />
              </div>
              <div className="menu-text w-1/2 p-5 flex flex-col items-start">
                <h4 className="text-xl mb-2">Grilled Chicken with Potatoes</h4>
                <p className="mb-2">Chicken Garlic Potatoes Tomatoes</p>
                <p className="text-xl font-semibold mb-2">$ 30</p>
                <p className="btn"><Link href={'/'} className="bg-[#f0a211] px-5 py-2 text-white hover:bg-transparent hover:border hover:border-gray-500 hover:text-gray-500 transition duration-300">Order Now</Link></p>
              </div>
            </div>

            <div className="menu-card max-w-[550px] w-full bg-white border border-[#c4c3c3] flex items-center rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
              <div className="menu-image w-1/2 h-[220px] overflow-hidden">
                <Image src={'/menu-4.jpg'} alt='Grilled Chicken with Potatoes' width={300} height={200} className='w-full h-full object-cover' />
              </div>
              <div className="menu-text w-1/2 p-5 flex flex-col items-start">
                <h4 className="text-xl mb-2">Grilled Chicken with Potatoes</h4>
                <p className="mb-2">Chicken Garlic Potatoes Tomatoes</p>
                <p className="text-xl font-semibold mb-2">$ 30</p>
                <p className="btn"><Link href={'/'} className="bg-[#f0a211] px-5 py-2 text-white hover:bg-transparent hover:border hover:border-gray-500 hover:text-gray-500 transition duration-300">Order Now</Link></p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
