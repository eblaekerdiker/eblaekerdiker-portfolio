"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Learning app - Learnification",
    description: "Learnification is a learning application that offers video-based educational content.",
    image: "/images/projects/learn5.png",
    tag: ["All", "Latest"],
    gitUrl: "https://github.com/202303-PRM-TR-FEW/Learnification",
    previewUrl: "https://learn-u-team-7.vercel.app",
  },
  {
    id: 2,
    title: "Movie Website",
    description: "Developed a feature-rich movie database web application using JavaScript, HTML, CSS, and React. The application interfaces with The Movie DB API to provide users with detailed information about movies, including cast, ratings, trailers, related movies, and genres.",
    image: "/images/projects/movie1.png",
    tag: ["All", "Latest"],
    gitUrl: "https://github.com/202303-PRM-TR-FEW/movie-project-room-7-hunc-ebla-abdulrahman",
    previewUrl: "https://202303-prm-tr-few.github.io/movie-project-room-7-hunc-ebla-abdulrahman/",
  },
  {
    id: 3,
    title: "Simon Game",
    description: "The Simple Simon Memory Game is a classic memory and pattern recognition game that challenges players to remember and replicate a sequence of colors and sounds",
    image: "/images/projects/simongame.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/eblaekerdiker/Simon-Game",
    previewUrl: "https://eblaekerdiker.github.io/Simon-Game/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Latest"
          isSelected={tag === "Latest"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
