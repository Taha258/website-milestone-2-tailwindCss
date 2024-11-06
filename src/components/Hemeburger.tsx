import Image from "next/image"
import Link from "next/link";

export default function HemeBurger() {
  return (
    <div className="px-4 py-6">
      <div className="flex justify-center mb-6">
        <Image src={'/logo.png'} alt="logo" width={80} height={80} />
      </div>
      <div>
        <ul className="mt-6">
          <li className="px-4 py-2 text-black hover:bg-gray-400 hover:text-orange-500 rounded">
            <Link href={"/"} className="nav-link">
              HOME
            </Link>
          </li>
          <li className="px-4 py-2 text-black hover:bg-gray-400 hover:text-orange-500 rounded">
            <Link href={"/#about"} className="nav-link">
              ABOUT US
            </Link>
          </li>
          <li className="px-4 py-2 text-black hover:bg-gray-400 hover:text-orange-500 rounded">
            <Link href={"/#menu-section"} className="nav-link">
              SEE MENU
            </Link>
          </li>
          <li className="px-4 py-2 text-black hover:bg-gray-400 hover:text-orange-500 rounded">
            <Link href={"/#blog"} className="nav-link">
              BLOG
            </Link>
          </li>
          <li className="px-4 py-2 text-black hover:bg-gray-400 hover:text-orange-500 rounded">
            <Link href={"/#contact"} className="nav-link">
              CONTACT US
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
