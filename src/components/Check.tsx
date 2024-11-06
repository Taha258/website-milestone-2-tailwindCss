import React from 'react'
import Image from 'next/image'

export default function About() {
  return (
    <section>
      <div id="about" className="w-full py-12 bg-white">
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center">
          <div className="about-left w-full md:w-1/2 text-center md:text-left p-6">
            <h3 className="text-gray-500 text-xl md:text-2xl tracking-wide">About Us</h3>
            <h1 className="text-4xl md:text-5xl tracking-wide my-2">Welcome</h1>
            <p className="text-lg text-black tracking-wide mt-4">
              Indulge in an unforgettable culinary experience where every dish is crafted with passion, fresh ingredients, and flavors that celebrate the art of dining.
            </p>
            <br />
            <p className="text-lg text-black tracking-wide">
              Experience a symphony of flavors in a warm, inviting atmosphere where every meal tells a story, and every guest is treated like family. Savor the perfect blend of taste and tradition in a place where exceptional service meets authentic cuisine, creating memories that linger long after the last bite.
            </p>
            <button className="mt-10 px-10 py-4 text-lg text-gray-800 border border-gray-300">Learn More About Us</button>
          </div>
          <div className="about-right w-full md:w-2/5 flex justify-center p-6">
            <Image src="/about-page.jpg" alt="about-pic" width={500} height={500} className="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  )
}
