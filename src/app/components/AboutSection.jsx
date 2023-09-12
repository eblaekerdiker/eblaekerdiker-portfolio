"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>JavaScript</li>
        <li>React</li>
        <li>SQL</li>
        <li>Python</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Tailwind CSS</li>
        <li>Bootstrap</li>
        <li>Git</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <div>
        <div className="text-xl font-semibold mb-2">
          Undergraduate - Computer and Software Engineering
        </div>
        <div className="text-sm italic mb-2">
          Toros University, Mersin
        </div>
        <div className="text-xl font-semibold mb-2">
          Master&apos;s - Computer Engineering
        </div>
        <div className="text-sm italic">
          Eskişehir Technical University
        </div>
      </div>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <div>
        <div className="text-xl font-semibold mb-2">
          Frontend Web Development
        </div>
        <div className="text-sm italic mb-2">
          Re:Coded
        </div>
      </div>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a dedicated Frontend Web Developer with a background in Computer Engineering. Proficient in JavaScript, HTML, CSS,
            TypeScript, and React, I blend technical expertise with creative flair to craft engaging and user-centric web applications. My
            commitment to clean, maintainable code reflects my engineering background, while my passion for web development drives me
            to stay abreast of the latest industry trends. I take pride in my ability to create user-friendly interfaces, optimize website
            performance, and collaborate effectively with cross-functional teams, all while delivering exceptional digital experiences.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
