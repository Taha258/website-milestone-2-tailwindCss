import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Blog() {
  return (
    <section>
      <div id='blog' className="w-full py-12 bg-[#eeeded]">
        <div className='container w-[90%] mx-auto py-16 px-4'>
          <h2 className='text-center text-4xl mb-10'>Our Recent Blog</h2>

          <div className='flex flex-wrap justify-center gap-12 mt-12 p-5'>
            <div className='w-[350px] bg-white shadow-md rounded-lg overflow-hidden'>
              <Image src={'/blog-1.jpg'} alt='image' width={500} height={400} className='w-full h-auto' />
              <div className="px-4 py-2">
                <Link href="/" className="text-[#383838] mr-5">Apr. 19 2024</Link>
                <Link href="/" className="text-[#383838]">Admin</Link>
              </div>
              <h3 className='text-xl px-4 py-2'>Taste the delicious food in Karachi</h3>
              <button className="px-4 py-2 mb-5"><Link href="/" className="border border-[#f0a211] text-white px-4 py-2 bg-[#f0a211] hover:bg-transparent hover:text-[#383838] transition-all">Read More</Link></button>
            </div>

            <div className='w-[350px] bg-white shadow-md rounded-lg overflow-hidden'>
              <Image src={'/blog-2.jpg'} alt='image' width={500} height={400} className='w-full h-auto' />
              <div className="px-4 py-2">
                <Link href="/" className="text-[#383838] mr-5">Apr. 19 2024</Link>
                <Link href="/" className="text-[#383838]">Admin</Link>
              </div>
              <h3 className='text-xl px-4 py-2'>Taste the delicious food in Karachi</h3>
              <button className="px-4 py-2 mb-5"><Link href="/" className="border border-[#f0a211] text-white px-4 py-2 bg-[#f0a211] hover:bg-transparent hover:text-[#383838] transition-all">Read More</Link></button>
            </div>

            <div className='w-[350px] bg-white shadow-md rounded-lg overflow-hidden'>
              <Image src={'/blog-3.jpg'} alt='image' width={500} height={400} className='w-full h-auto' />
              <div className="px-4 py-2">
                <Link href="/" className="text-[#383838] mr-5">Apr. 19 2024</Link>
                <Link href="/" className="text-[#383838]">Admin</Link>
              </div>
              <h3 className='text-xl px-4 py-2'>Taste the delicious food in Karachi</h3>
              <button className="px-4 py-2 mb-5"><Link href="/" className="border border-[#f0a211] text-white px-4 py-2 bg-[#f0a211] hover:bg-transparent hover:text-[#383838] transition-all">Read More</Link></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
