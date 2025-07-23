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

export default function Home() {
  const { heroImg } = heroSection;
  const { profileImg } = profile;
  const { github, linkedin, instagram, behance, medium } = socialMedia;

  return (
    <>
      <section className="hero-section p-4">
        <figure>
          <Image
            src={heroImg}
            alt="Hero Background"
            style={{ width: "50%", height: "auto" }}
            className="flex justify-center items-center mx-auto"
          />
        </figure>

        <article className="rounded-lg bg-gray-400 p-4 flex justify-center items-center">
          Hello, I’am Indie Front End Developer
        </article>

        <article className="flex flex-col items-center text-center mt-4">
          <h1 className="text-2xl">Sandi Sopian</h1>
          <h2 className="max-w-xs">
            Front End Developer <span>( Web Design / Web Developer )</span>
          </h2>
        </article>

        <figure className="flex justify-center items-center mt-4">
          <Image
            src={profileImg}
            alt="Profile Image"
            width={100}
            height={100}
            className="rounded-full border-2 border-gray-300"
          />
        </figure>

        <article>
          <h3 className="font-bold underline">Work</h3>
          <p>
            Lorem ipsum faucibus est at vel est donec odio ut urna proin quam
            proin adipiscing amet facilisi arcu ac congue nulla donec duis
            adipiscing nunc mattis est arcu quis nisi ultricies justo nascetur
            et volutpat aenean massa urna penatibus placerat imperdiet est non
            nibh non ultrices tristique arcu volutpat lacus egestas odio nunc
            velit massa elit commodo nibh adipiscing leo felis sagittis senectus
            tristique a at.
          </p>
        </article>

        <div className="flex justify-center items-center mt-8">
          <Button />
        </div>
      </section>

      <section className="journey-section p-4 mt-4">
        <h3 className="font-bold underline">My Journey</h3>
        <p>
          February 2022 Application UI code in Tailwind CSS Get access to over
          20+ pages including a dashboard layout, charts, kanban board,
          calendar, and pre-order E-commerce & Marketing pages. Learn more March
          2022 Marketing UI design in Figma All of the pages and components are
          first designed in Figma and we keep a parity between the two versions
          even as we update the project. April 2022 E-Commerce UI code in
          Tailwind CSS Get started with dozens of web components and interactive
          elements built on top of Tailwind CSS.
        </p>
      </section>

      <section className="hobbies-section p-4 mt-4">
        <h3 className="font-bold underline">Hobbies</h3>
        <p>
          February 2022 Application UI code in Tailwind CSS Get access to over
          20+ pages including a dashboard layout, charts, kanban board,
          calendar, and pre-order E-commerce & Marketing pages.
        </p>
      </section>

      <section className="socmed-section p-4 mt-4">
        <h3 className="font-bold underline">Connect With Me</h3>
        <div className="flex flex-col items-start gap-2">
          <Link href={github} className="flex items-center">
            <FontAwesomeIcon icon={faGithub} />
            <span className="ml-2">@sandisopian</span>
          </Link>

          <Link href={linkedin} className="flex items-center">
            <FontAwesomeIcon icon={faLinkedin} />
            <span className="ml-2">@sandisopian</span>
          </Link>

          <Link href={behance} className="flex items-center">
            <FontAwesomeIcon icon={faBehance} />
            <span className="ml-2">@sandisopian</span>
          </Link>

          <Link href={medium} className="flex items-center">
            <FontAwesomeIcon icon={faMediumM} />
            <span className="ml-2">@sandis1</span>
          </Link>

          <Link href={instagram} className="flex items-center">
            <FontAwesomeIcon icon={faInstagram} />
            <span className="ml-2">@sarendia__</span>
          </Link>
        </div>
      </section>
    </>
  );
}
