import Image from "next/image";
import Link from "next/link";
import HeadShot from "../public/Headshot.png"

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
        <div className="flex items-center space-x-2">
            <Link href="/">
                <Image
                src={HeadShot}
                width={50}
                className="rounded-full"
                height={50}
                alt="logo"
                />
            </Link>
            <h1>Brett Westwood</h1>
        </div>
        <div className="flex gap-2">
          <Link
          href="/"
          className="px-5 py-3 text-sm md:text-base bg-[#5651e5] text-white flex items-center rounded-full text-center hover:scale-105 ease-in-out duration-150"
          >
            Contact Me Today
          </Link>
          <a className="px-5 py-3 text-sm md:text-base bg-[#5651e5] text-white flex items-center rounded-full text-center hover:scale-105 ease-in-out duration-150" href="https://www.brettwestwood.dev">
              Back to my Portfolio
          </a>
        </div>
    </header>
  )
}

export default Header