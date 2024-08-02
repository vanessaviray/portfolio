"use client";

import { PreviewImageCarousel } from "./PreviewImageCarousel";
import { useProject } from "./ProjectContext";
import TechHighlight from "./TechHightlight";

const ProjectDetails = () => {
  const { project } = useProject();

  if (!project) {
    return <div>No project selected</div>;
  }

  return (
    <div>
      <div
        className={`flex items-center justify-between w-full h-[600px] rounded-[30px] mb-6`}
      >
        <div className="w-[46%]">
          <h2>{project.name}</h2>
          <p className="font-light my-6">{project.shortDescription}</p>
          <div className="row mb-[52px]">
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
          <div className="flex">
            <button>View the Live Project!</button>
            <button>GitHub</button>
          </div>
        </div>
        <div
          className={`w-[46%] h-[500px] bg-customColor-lightGray2 rounded-[50px]`}
        ></div>
      </div>
      <PreviewImageCarousel />
    </div>
  );
};

export default ProjectDetails;
