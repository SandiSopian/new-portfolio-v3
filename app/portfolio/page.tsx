import React from "react";
import Image from "next/image";
import { heroSection } from "../../data/profile";
import { projectsList } from "../../data/projects";

const Portfolio = () => {
  const { heroImg } = heroSection;

  return (
    <section>
      <figure>
        <Image
          src={heroImg}
          alt="Hero Background"
          style={{ width: "50%", height: "auto" }}
          className="flex justify-center items-center mx-auto"
        />
      </figure>

      <div className="mt-4">
        <h3 className="font-bold underline text-xl lg:text-lg ml-10 lg:ml-0">
          Work
        </h3>

        <div className="mx-auto">
          <ul className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-4 mx-6 lg:mx-0">
            {projectsList.map((project, index) => (
              <li key={index} className="p-4 lg:p-2 rounded-lg text-center">
                <figure className="lg:w-[250px] mx-auto">
                  <Image
                    src={project.projectImg}
                    alt={project.projectTitle}
                    width={300}
                    height={200}
                    className="w-full h-auto rounded-lg mb-2"
                  />
                </figure>
                <h4 className="font-semibold text-xl lg:text-lg">
                  {project.projectTitle}
                </h4>
                <p className="text-black lg:text-sm dark:text-white">
                  {project.projectDesc}
                </p>
                <a
                  href={project.projectLink}
                  className="text-accentPrimary dark:text-blue-400 lg:text-sm hover:underline"
                >
                  View Project
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
