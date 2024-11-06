import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoMdMenu } from "react-icons/io";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import HemeBurger from "./Hemeburger";

export default function Header() {
  return (
    <header className="relative z-50"> {/* Ensure header has higher z-index */}
      <div className="stic fixed top-0 left-0 w-full bg-white flex justify-between items-center  px-5 shadow-md">
        <div className="logo">
          <Image src={"/logo.png"} alt="logo" width={70} height={70} />
        </div>

        <div className="hidden md:flex">
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="text-gray-800 hover:text-orange-500 font-semibold">
                HOME
              </Link>
            </li>
            <li>
              <Link href="/#about" className="text-gray-800 hover:text-orange-500 font-semibold">
                ABOUT US
              </Link>
            </li>
            <li>
              <Link href="/#menu-section" className="text-gray-800 hover:text-orange-500 font-semibold">
                SEE MENU
              </Link>
            </li>
            <li>
              <Link href="/#blog" className="text-gray-800 hover:text-orange-500 font-semibold">
                BLOG
              </Link>
            </li>
            <li>
              <Link href="/#contact" className="text-gray-800 hover:text-orange-500 font-semibold">
                CONTACT US
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger className="md:hidden">
            <IoMdMenu className="text-gray-800 text-3xl" />
          </SheetTrigger>
          <SheetContent className="bg-white">
            <HemeBurger />
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
