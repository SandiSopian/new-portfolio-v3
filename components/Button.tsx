import Link from "next/link";
import React from "react";

const Button = () => {
  return (
    <button className="bg-walnutBrown text-white px-6 py-3 rounded-lg shadow-lg hover:bg-terracottaRoot transition duration-300">
      <Link href="/portfolio">My Portfolio &gt;</Link>
    </button>
  );
};

export default Button;
