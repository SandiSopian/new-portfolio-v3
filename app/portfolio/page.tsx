import React from "react";
import Image from "next/image";
import { heroSection } from "../../data/profile";

const Portfolio = () => {
  const { heroImg } = heroSection;

  return <div>
      <figure>
              <Image
                src={heroImg}
                alt="Hero Background"
                style={{ width: "50%", height: "auto" }}
                className="flex justify-center items-center mx-auto"
              />
            </figure>
  </div>;
};

export default Portfolio;
