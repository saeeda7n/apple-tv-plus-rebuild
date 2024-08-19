import React from "react";
import {
  RiAppleFill,
  RiSearch2Line,
  RiShoppingBagLine,
} from "@remixicon/react";
import Link from "next/link";

const menuItems = [
  "Store",
  "Mac",
  "iPhone",
  "iPad",
  "Watch",
  "Vision",
  "AirPods",
];

const Header = async () => {
  return (
    <React.Fragment>
      <header className="relative z-[60] flex h-12 items-center bg-zinc-900 px-5 text-white">
        <div className="mx-auto flex w-full max-w-5xl items-center gap-8 text-neutral-300">
          <h1 className="sr-only">Apple TV+</h1>
          <Link href="/">
            <RiAppleFill className="mb-1 size-4" />
          </Link>

          <ul className="hidden w-full text-xs font-light md:contents">
            {menuItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="ms-auto flex items-center gap-8">
            <RiSearch2Line className="size-4" />
            <RiShoppingBagLine className="size-4" />
          </div>
        </div>
      </header>
      <div className="sticky top-0 z-[60] flex h-12 items-center border-b border-b-zinc-700 bg-zinc-900 px-5 text-gray-100">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between">
          <a className="text-xl font-medium">Apple TV+</a>

          <Link
            href="/"
            className="rounded-full bg-gray-100 px-3 py-1.5 text-xs leading-none text-black"
          >
            Stream now
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
