import React from "react";
import Link from "next/link";

const NavLink = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-8 p-4">
      <Link href="/">Home</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/portfolio">Portfolio</Link>
      <Link href="https://sarendia.hashnode.dev/">Blog</Link>
      <Link href="https://lynk.id/digisanshop">Product</Link>
    </div>
  );
};

export default NavLink;
