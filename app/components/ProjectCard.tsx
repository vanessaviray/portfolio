import { Project, projects } from "../data/data";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="project-card-container flex items-center w-full h-[600px] rounded-[30px] pl-[50px] mb-6">
      <div>
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
