import React from 'react';
import Image from 'next/image';

export default function About() {
  return (
    <section className="w-full bg-white py-12 font-sans">
      <div id="about" className="container mx-auto flex flex-col items-center justify-between p-4 md:flex-row md:w-4/5">
        <div className="about-left text-center md:text-left md:w-1/2 pt-8">
          <h3 className="text-4xl tracking-widest text-black font-bold">About Us</h3>
          <h1 className="text-2xl md:text-3xl my-2 tracking-wide mt-4 text-gray-500">Welcome</h1>
          <p className="text-base tracking-wide text-black mt-4">
            Indulge in an unforgettable culinary experience where every dish is crafted with passion, fresh ingredients,
            and flavors that celebrate the art of dining.
          </p>
          <br />
          <p className="text-base tracking-wide text-black mt-4">
            Experience a symphony of flavors in a warm, inviting atmosphere where every meal tells a story, and every
            guest is treated like family. Savor the perfect blend of taste and tradition in a place where exceptional
            service meets authentic cuisine, creating memories that linger long after the last bite.
          </p>
          <button className="mt-10 px-10 py-3 text-lg bg-transparent border border-gray-300 text-gray-700 tracking-wider transition hover:bg-gray-100">
            Learn More About Us
          </button>
        </div>
        {/* About-left */}

        <div className="about-right w-full md:w-2/5 pt-8">
          <Image src="/about-page.jpg" alt="about-pic" width={500} height={500} className="w-full h-auto" />
        </div>
        {/* About-right */}
      </div>
      {/* Container */}
    </section>
  );
}
