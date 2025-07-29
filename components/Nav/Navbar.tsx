// components/Navbar.tsx

"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import NavLink from "./NavLink";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* Navbar Utama */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/60 dark:bg-black/50 shadow-md border-b border-gray-200 dark:border-gray-700 mx-auto">
        <div className="p-4 flex mx-auto justify-between md:justify-center lg:justify-center items-center gap-4 md:mr-54 lg:mr-0 lg:gap-12">
          {/* Logo */}
          <Link href="/" className="flex items-center hover:cursor-pointer">
            <Image
              src="/images/cup.svg"
              alt="Logo"
              width={50}
              height={50}
              className="inline-block"
            />
            <span className="text-xl font-bold ml-2">Sandi Sopian</span>
          </Link>

          {/* NavLink (Mobile) */}
          <div
            className={`absolute top-20 right-4 md:right-54 w-56 bg-white dark:bg-black shadow-lg rounded-md px-4 flex flex-col gap-4 transition-all duration-300 ease-in-out origin-top-right lg:hidden  ${
              open
                ? "opacity-100 scale-100"
                : "opacity-0 scale-0 pointer-events-none"
            }`}
          >
            <NavLink />
          </div>

          {/* NavLink (Desktop) */}
          <div className="hidden lg:flex gap-8">
            <NavLink />
          </div>

          {/* Toggle Button (Mobile Only) */}

          <div
            onClick={() => setOpen(!open)}
            className="lg:hidden absolute top-8 right-10 md:right-56 hover:cursor-pointer"
          >
            <FontAwesomeIcon
              icon={open ? faXmark : faBars}
              className="text-2xl hover:scale-110 transition-transform duration-200"
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
