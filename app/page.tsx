// import Image from "next/image";
"use client";

import "./css/Home.css";
import { FaGithub } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { ProjectCard } from "./components/ProjectCard";
import { Inter } from "next/font/google";
import { projects } from "./data/data";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Home() {
  return (
    <main className={`container ${inter.className}`}>
      <div className="flex flex-col justify-center items-center pb-[52px]">
        <h1 className="text-center max-w-[1045px]">
          Something about myself and what I can do for you.
        </h1>
        <p className="flex justify-center font-light my-6">
          My slogan is &ldquo;I deliver,&rdquo; and hire me. Please.
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
        <h3 className="pt-[48px] pb-[48px]">My Work</h3>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </main>
  );
}
