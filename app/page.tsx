import React from "react";
import Image from "next/image";
import { heroSection, profile, socialMedia } from "../data/profile";
import Button from "../components/Button";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBehance,
  faGithub,
  faInstagram,
  faLinkedin,
  faMediumM,
} from "@fortawesome/free-brands-svg-icons";
import Timeline from "@/components/Timeline";

export default function Home() {
  const { heroImg } = heroSection;
  const { profileImg } = profile;
  const { github, linkedin, instagram, behance, medium } = socialMedia;

  return (
    <main>
      <section className="hero-section p-4">
        <figure>
          <Image
            src={heroImg}
            alt="Hero Background"
            style={{ width: "50%", height: "auto" }}
            className="flex justify-center items-center mx-auto"
          />
        </figure>

        <p className="rounded-lg bg-gray-400 p-4 flex justify-center items-center">
          {`Hello, I'm Indie Front End Developer`}
        </p>

        <div className="md:flex md:justify-between mt-4">
          <header className="flex flex-col items-center md:items-start text-center md:text-left mt-4">
            <h1 className="text-2xl md:text-4xl">Sandi Sopian</h1>
            <h2 className="max-w-xs">
              Front End Developer <span>( Web Design / Web Developer )</span>
            </h2>
          </header>

          <figure className="flex justify-center items-center mt-4">
            <Image
              src={profileImg}
              alt="Profile Image"
              width={100}
              height={100}
              className="rounded-full border-2 border-gray-300"
            />
          </figure>
        </div>

        <article>
          <h3 className="font-bold underline mb-2">Work</h3>
          <p className="max-w-prose leading-relaxed text-wrap">
            I&apos;m a Front-End Developer with a background in Informatics
            Engineering and over a decade of diverse work experience. I started
            my career in customer service, transitioned into manufacturing as a
            printing lab operator, and later pursued a degree while working
            full-time. My passion for technology led me to web development,
            where I now focus on building responsive and user-friendly
            interfaces. I also share my learning journey through content
            creation, aiming to inspire and help others grow in the tech space.
          </p>
        </article>

        <div className="flex justify-center items-center mt-8">
          <Button />
        </div>
      </section>

      <section className="journey-section p-4 mt-4">
        <h3 className="font-bold underline">My Journey</h3>
        <div>
          <Timeline />
        </div>
      </section>

      <section className="hobbies-section p-4 mt-4">
        <h3 className="font-bold underline">Hobbies</h3>
        <p>
          Gaming, Watching Movies, Reading Books, Music, Coding and Writing.
        </p>
      </section>

      <section className="socmed-section p-4 mt-4">
        <div>
          <h3 className="font-bold underline mb-4">Connect With Me</h3>
        </div>

        <address className="flex flex-col gap-3 not-italic">
          {[
            { href: github, icon: faGithub, name: "@sandisopian" },
            { href: linkedin, icon: faLinkedin, name: "@sandisopian" },
            { href: behance, icon: faBehance, name: "@sandisopian" },
            { href: medium, icon: faMediumM, name: "@sandis1" },
            { href: instagram, icon: faInstagram, name: "@sarendia__" },
          ].map((item, i) => (
            <div key={i} className="flex items-center">
              <FontAwesomeIcon icon={item.icon} className="w-5 h-5" />
              <Link
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 relative inline-block group"
              >
                <span>{item.name}</span>
                <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-sky-600 transition-all duration-500 group-hover:w-full"></span>
              </Link>
            </div>
          ))}
        </address>
      </section>
    </main>
  );
}
