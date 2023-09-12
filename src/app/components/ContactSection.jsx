import React from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import EmailIcon from "../../../public/email-icon.svg";
import Link from "next/link";
import Image from "next/image";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I&apos;m currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I&apos;ll try my best
          to get back to you!
        </p>
      </div>
      <div className="socials flex flex-row gap-2 justify-center">
        <Link href="https://github.com/eblaekerdiker">
          <Image src={GithubIcon} alt="Github Icon" />
        </Link>
        <Link href="https://www.linkedin.com/in/ebla-ekerdiker/">
          <Image src={LinkedinIcon} alt="Linkedin Icon" />
        </Link>
        <Link href="mailto:eblaekerdiker@gmail.com">
          <Image
            src={EmailIcon}
            alt="Email Icon"
            width={48}
            height={48}
          />
        </Link>
      </div>
    </section>
  );
};

export default ContactSection;
