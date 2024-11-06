import React from 'react';

export default function Hero() {
  return (
    <section>
      <div className="relative w-full max-w-full">
        {/* Hero Video */}
        <div className="absolute top-0 left-0 w-full h-screen overflow-hidden z-[-1]">
          <video 
            src="/video.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover object-center"
          ></video>
        </div>

        {/* Content Wrapper */}
        <div className="relative flex flex-col justify-center items-center w-full h-screen text-center text-white z-10 px-4">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold text-[#ffa500] mb-5">
            Welcome To Our Rasoi
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-light text-yellow-400 mb-5 tracking-wide">
            Come and taste healthy and delicious food from our{' '}
            <span className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#f0a211]">Rasoi</span>
          </h2>
          <div className="mt-8">
            <button className="text-white px-8 py-3 text-lg font-semibold bg-black/60 border border-[#e0dede] tracking-wider transition-all hover:bg-[#f0a211] hover:text-white">
              Book Table
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
