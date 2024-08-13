// import Image from "next/image";
"use client";

import "./css/Home.css";
import { FaGithub } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { ProjectCard } from "./components/ProjectCard";
import { Inter } from "next/font/google";
import { Project, projects } from "./data/data";
import Link from "next/link";
import { useProject } from "./components/ProjectContext";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Home() {
  const { setProject } = useProject();

  const handleProjectClick = (project: Project) => {
    setProject(project);
  };

  return (
    <main className={`container ${inter.className}`}>
      <div className="flex flex-col justify-center items-center mb-[95px] lg:mb-[52px] mt-[70px] lg:mt-[163px]">
        <h1 className="text-center max-w-[1045px]">
          Something about myself and what I can do for you.
        </h1>
        <p className="flex justify-center text-center font-light my-6">
          This is placeholder text for the hero section.
        </p>
        <div className="flex justify-center">
          <button className="border border-solid border-1 rounded-[30px] pt-[10px] pb-[10px] pl-[36px] pr-[36px] mx-2">
            Let&apos;s Talk
          </button>
          <button className="socials-frame mx-2">
            <FaGithub size={46} />
          </button>
          <button className="mx-2 rounded-full overflow-hidden inline-flex items-center justify-center">
            <IoLogoLinkedin size={46} />
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <h3 className="pt-0 lg:pt-[48px] pb-[27px] lg:pb-[48px]">My Work</h3>
        {projects.map((project, index) => (
          <Link
            className="w-full"
            key={index}
            href={`/${project.url}`}
            passHref
          >
            <div onClick={() => handleProjectClick(project)}>
              <ProjectCard project={project} index={index} />
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
