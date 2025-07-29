import React from "react";
import Image from "next/image";
import { heroSection, socialMedia } from "../../data/profile";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const { heroImg } = heroSection;
  const { phone, email } = socialMedia;

  return (
    <section className="contact-section p-4">
      <figure>
        <Image
          src={heroImg}
          alt="Hero Background"
          style={{ width: "50%", height: "auto" }}
          className="flex justify-center items-center mx-auto"
        />
      </figure>

      <div className="text-center mt-4">
        <h3 className="font-bold underline">Contact Us</h3>
        <p className="lg:max-w-md mx-auto">
          I'd love to hear from you Got a project you would like me to work on?
          Or how about just a friendly chat?
        </p>
      </div>

      <div className="flex flex-col items-center mt-4">
        <address className="flex flex-col gap-3 not-italic">
          {[
            { href: phone, icon: faPhone, name: "+6281288825373" },
            { href: email, icon: faEnvelope, name: "@sandis17@outlook.com" },
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
      </div>
    </section>
  );
};

export default Contact;
