import { Project, projects } from "../data/data";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const isOdd = index % 2 !== 0;

  return (
    <div
      className={`project-card-container flex items-center justify-between w-full h-[600px] rounded-[30px] mb-6 ${isOdd ? "flex-row-reverse pr-[50px]" : "pl-[50px]"}`}
    >
      <div className="w-[50%]">
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
      </div>
      <div
        className={`w-[41%] h-[450px] bg-customColor-lightGray2 ${isOdd ? "rounded-r-[30px]" : "rounded-l-[30px]"}`}
      ></div>
    </div>
  );
}

type TechHighlightProps = {
  tech: string;
};

function TechHighlight({ tech }: TechHighlightProps) {
  return (
    <div className="bg-customColor-lightGray2 inline-block py-2 px-4 rounded-md mr-[10px]">
      <p className="text-sm font-medium">{tech}</p>
    </div>
  );
}
