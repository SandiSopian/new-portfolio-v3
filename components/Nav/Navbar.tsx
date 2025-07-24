// components/Navbar.tsx

"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import NavLink from "./NavLink";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* Navbar Utama */}
      <nav className="p-4 flex items-center justify-between relative z-50 bg-white dark:bg-black shadow-md">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/images/cup.svg"
            alt="Logo"
            width={50}
            height={50}
            className="inline-block"
          />
          <span className="text-xl font-bold ml-2">Sandi Sopian</span>
        </div>

        {/* NavLink (Mobile) */}
        <div
          className={`absolute top-20 right-4 w-56 bg-white dark:bg-black shadow-lg rounded-md px-4 flex flex-col gap-4 transition-all duration-300 ease-in-out origin-top-right md:hidden ${
            open
              ? "opacity-100 scale-100"
              : "opacity-0 scale-0 pointer-events-none"
          }`}
        >
          <NavLink />
        </div>

        {/* NavLink (Desktop) */}
        <div className="hidden md:flex gap-8">
          <NavLink />
        </div>

        {/* Toggle Button (Mobile Only) */}
        <div
          onClick={() => setOpen(!open)}
          className="md:hidden absolute top-8 right-10 hover:cursor-pointer"
        >
          <FontAwesomeIcon
            icon={open ? faXmark : faBars}
            className="text-2xl hover:scale-110 transition-transform duration-200"
          />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
