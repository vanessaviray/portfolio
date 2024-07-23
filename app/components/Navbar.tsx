import Link from "next/link";

export function Navbar() {
  return (
    <nav className="flex items-center justify-between container mx-auto px-[40px] pt-[45px] w-[1360px]">
      <p>Vanessa Viray</p>
      <ul className="flex space-x-6">
        <li>
          <Link href="/">Work</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/resume">Resume</Link>
        </li>
      </ul>
      <button className="border border-solid border-1 rounded-[30px] pt-[10px] pb-[10px] pl-[36px] pr-[36px] mx-2">
        Let&apos;s Talk
      </button>
    </nav>
  );
}
