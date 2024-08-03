"use client";

import { PreviewImageCarousel } from "./PreviewImageCarousel";
import { useProject } from "./ProjectContext";
import TechHighlight from "./TechHightlight";

const ProjectDetails = () => {
  const { project, loading } = useProject();

  if (loading) {
    return <div className="container">Loading...</div>;
  }

  if (!project) {
    return <div className="container">No project selected</div>;
  }

  return (
    <>
      <div className="container relative">
        <div
          className={`flex flex-col-reverse lg:flex-row items-center justify-between w-full lg:h-[600px] lg:mt-[153px] mb-6`}
        >
          <div className="w-full lg:w-[47%] flex flex-col mt-[36px] lg:mt-0 gap-[24px]">
            <h2 className="order-1">{project.name}</h2>
            <p className="order-2 font-light">{project.shortDescription}</p>
            <div className="order-4 lg:order-3 flex flex-col lg:flex-row mt-0 lg:mt-[16px] gap-[24px] lg:gap-0">
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
            <div className="order-5 lg:order-4 tech-highlights mt-0 lg:mt-[16px] mb-0 lg:mb-[24px]">
              {project.techHighlights.map((tech, index) => (
                <TechHighlight key={index} tech={tech} />
              ))}
            </div>
            <div className="order-3 lg:order-5 flex flex-col lg:flex-row justify-between gap-[8px] lg:gap-0">
              <button className="bg-black text-white text-[16px] lg:text-[22px] rounded-[30px] pt-[10px] pb-[10px] pl-[36px] pr-[36px] w-full lg:w-[304px]">
                View the Live Project!
              </button>
              <button className="border-2 border-solid border-black text-[16px] lg:text-[22px] rounded-[30px] pt-[10px] pb-[10px] pl-[36px] pr-[36px] w-full lg:w-[304px]">
                GitHub
              </button>
            </div>
          </div>
          <div
            className={`w-full lg:w-[46.1%] h-[250px] lg:h-[500px] bg-customColor-lightGray2 rounded-[25px] lg:rounded-[50px]`}
          ></div>
        </div>
        <div className="absolute w-[377px] lg:w-[1360px]">
          <PreviewImageCarousel />
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;
