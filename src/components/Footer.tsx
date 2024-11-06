import React from 'react'
import Image from 'next/image'
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoTwitter } from "react-icons/io";

export default function Footer() {
  return (
    <footer className="bg-[#333333] w-full">
      <div className="container mx-auto py-12 px-6">
        <div className="flex flex-wrap justify-between">
          {/* Top Footer */}
          <div className="w-full md:w-1/4 mb-8">
            <Image src="/logo.png" alt="logo" width={150} height={150} className="w-36" />
          </div>

          {/* Footer Links */}
          <div className="w-full md:w-1/4 mb-8">
            <div className="font-semibold text-xl text-white mb-4">CONTACT</div>
            <ul className="space-y-4 text-white">
              <li>Phone: +91 900xxx999</li>
              <li>Email: example@gmail.com</li>
              <li>Open Hours: Monday - Sunday 8:00AM - 9:00PM</li>
              <li>Address: 123 xyz Karachi</li>
            </ul>
          </div>

          <div className="w-full md:w-1/4 mb-8">
            <div className="font-semibold text-xl text-white mb-4">OUR STORY</div>
            <ul className="space-y-4 text-white">
              <li>Who We Are</li>
              <li>Our Chef</li>
              <li>Blog</li>
              <li>Menu</li>
              <li>Events</li>
            </ul>
          </div>

          <div className="w-full md:w-1/4 mb-8">
            <div className="font-semibold text-xl text-white mb-4">THE RESTAURANT</div>
            <ul className="space-y-4 text-white">
              <li>Qorma</li>
              <li>Biryani</li>
              <li>Pilao</li>
              <li>Poached Eggs</li>
              <li>Toast</li>
            </ul>
          </div>

          <div className="w-full md:w-1/4 mb-8">
            <div className="font-semibold text-xl text-white mb-4">SOCIAL LINKS</div>
            <div className="flex space-x-4 text-white mb-6">
              <Link href="#"><FaFacebook className="text-xl hover:text-[#f0a211] transition" /></Link>
              <Link href="#"><FaInstagramSquare className="text-xl hover:text-[#f0a211] transition" /></Link>
              <Link href="#"><IoLogoLinkedin className="text-xl hover:text-[#f0a211] transition" /></Link>
              <Link href="#"><IoLogoTwitter className="text-xl hover:text-[#f0a211] transition" /></Link>
            </div>

            <div className="newsletter">
              <input 
                type="email" 
                placeholder="Enter your Email address..." 
                className="w-full px-4 py-2 mb-4 rounded-md outline-none"
              />
              <button className="w-full bg-[#f0a211] text-white py-2 rounded-md font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <hr className="my-6 border-[#a3a2a2]" />

        <div className="footer-bottom text-center text-sm text-[#e6e4e4] py-4">
          <p>Copyright 2024 All Right Reserved | Made By Taha Hussain</p>
        </div>
      </div>
    </footer>
  );
}
