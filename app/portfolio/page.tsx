import React from "react";
import Image from "next/image";
import { heroSection } from "../../data/profile";
import ProjectCard from "@/components/ProjectCard";

const Portfolio = () => {
  const { heroImg } = heroSection;

  return (
    <section className="portfolio-section p-4">
      <figure>
        <Image
          src={heroImg}
          alt="Hero Background"
          style={{ width: "50%", height: "auto" }}
          className="flex justify-center items-center mx-auto"
        />
      </figure>

      <div className="mt-4">
        <h3 className="font-bold underline text-xl lg:text-lg ml-10 lg:ml-4">
          Work
        </h3>

        <div className="mx-auto">
          <ProjectCard />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
