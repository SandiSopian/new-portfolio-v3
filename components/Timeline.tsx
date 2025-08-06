"use client";

import React from "react";
import { motion } from "framer-motion";

const timelineItems = [
  {
    date: "2025",
    title: "Resumed Front-End Development & Became a Content Creator",
    description:
      "Returned to the field of modern web development as a Front-End Developer while also creating educational content and sharing knowledge through various platforms.",
    link: "https://github.com/SandiSopian",
    hasLink: true,
  },
  {
    date: "2023–2024",
    title: "Korean Language Studies at LPK Seoulina",
    description:
      "Studied Korean language informally in preparation for the EPS-TOPIK exam, a requirement for the opportunity to work in South Korea.",
    hasLink: false,
  },
  {
    date: "2021–2022",
    title: "Junior Front-End Developer",
    description:
      "Started a career in front-end development by learning the fundamentals of web technologies such as HTML, CSS, JavaScript, and modern frameworks.",
    hasLink: false,
  },
  {
    date: "2016–2021",
    title: "Bachelor's Degree at Universitas Bale Bandung",
    description:
      "Pursued a degree in Informatics Engineering through an evening class program while working full-time, focusing on programming and software development.",
    hasLink: false,
  },
  {
    date: "2013–2021",
    title: "Printing Lab Operator – PT Cita Bahana Inti Persada",
    description:
      "Worked as a laboratory operator in the printing division, responsible for creating small-scale print samples to ensure quality before mass production.",
    hasLink: false,
  },
  {
    date: "2010–2012",
    title: "Sales Assistant & Cashier – PT Yomart Rukun Selalu",
    description:
      "Handled customer service and cashier operations, maintained store cleanliness, and ensured product arrangement and availability.",
    hasLink: false,
  },
];

const Timeline = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
    >
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        {timelineItems.map((item, index) => (
          <motion.li
            key={index}
            className="mb-10 ms-4"
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, ease: "easeOut" },
              },
            }}
          >
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {item.date}
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {item.title}
            </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400 mb-4">
              {item.description}
            </p>
            {item.hasLink && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
              >
                Learn more
                <svg
                  className="w-3 h-3 ms-2 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            )}
          </motion.li>
        ))}
      </ol>
    </motion.div>
  );
};

export default Timeline;
