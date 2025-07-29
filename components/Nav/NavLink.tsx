"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = () => {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/contact", label: "Contact" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "https://sarendia.hashnode.dev/", label: "Blog", external: true },
    { href: "https://lynk.id/digisanshop", label: "Product", external: true },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-4 md:gap-8 p-4">
      {links.map(({ href, label, external }) =>
        external ? (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-white hover:text-black dark:hover:text-gray-300"
          >
            {label}
          </a>
        ) : (
          <Link
            key={href}
            href={href}
            className={
              pathname === href
                ? "text-black dark:text-white font-bold underline"
                : "text-gray-600 dark:text-white hover:text-black dark:hover:text-gray-300"
            }
          >
            {label}
          </Link>
        )
      )}
    </div>
  );
};

export default NavLink;
