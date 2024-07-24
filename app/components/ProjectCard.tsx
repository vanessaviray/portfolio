"use client";

import { Project, projects } from "../data/data";
import TechHighlight from "./TechHightlight";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const isOdd = index % 2 !== 0;

  return (
    <div
      className={`project-card-container flex flex-col lg:flex-row items-center justify-between w-full h-[100%] lg:h-[600px] rounded-[30px] mb-6 px-[16px] ${isOdd ? "lg:flex-row-reverse lg:pr-[50px] lg:pl-0" : "lg:pl-[50px] lg:pr-0"}`}
    >
      <div className="w-[100%] lg:w-[50%] mt-9 lg:mt-0">
        <h2>{project.name}</h2>
        <p className="font-light my-6">{project.shortDescription}</p>
        <div className="hidden lg:row lg:mb-[52px]">
          <div className="mr-[64px]">
            <p className="font-light">{project.duration}</p>
            <p className="text-sm text-customColor-lightGray">Duration</p>
          </div>
          <div className="mr-[64px]">
            <p className="font-light">{project.teamSize}</p>
            <p className="text-sm text-customColor-lightGray">Team Size</p>
          </div>
          <div>
            <p className="font-light">{project.completionDate}</p>
            <p className="text-sm text-customColor-lightGray">Completed</p>
          </div>
        </div>
        <div className="tech-highlights">
          {project.techHighlights.map((tech, index) => (
            <TechHighlight key={index} tech={tech} />
          ))}
        </div>
      </div>
      <div
        className={`w-[88%] lg:w-[41%] h-[180px] lg:h-[450px] bg-customColor-lightGray2 mt-[51px] lg:mt-0 rounded-t-[15px] ${isOdd ? "lg:rounded-r-[30px] lg:rounded-l-[0px]" : "lg:rounded-r-[0px] lg:rounded-l-[30px]"}`}
      ></div>
    </div>
  );
}

// type TechHighlightProps = {
//   tech: string;
// };

// function TechHighlight({ tech }: TechHighlightProps) {
//   return (
//     <div className="bg-customColor-lightGray2 inline-block py-2 px-4 rounded-md mr-[10px]">
//       <p className="text-sm font-medium">{tech}</p>
//     </div>
//   );
// }
