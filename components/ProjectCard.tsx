"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { projectsList } from "../data/projects";

const ProjectCard = () => {
  return (
    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-4 mx-6 lg:mx-0">
      {projectsList.map((project, index) => (
        <motion.li
          key={index}
          className="p-4 lg:p-2 rounded-lg text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.5,
            delay: index * 0.15,
            ease: "easeOut",
          }}
        >
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
            className="text-walnutBrown dark:text-sky-600 lg:text-sm hover:underline font-semibold"
          >
            View Project &gt;
          </a>
        </motion.li>
      ))}
    </ul>
  );
};

export default ProjectCard;
