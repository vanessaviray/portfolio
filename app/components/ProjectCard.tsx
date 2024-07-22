export function ProjectCard() {
  return (
    <div className="project-card-container flex items-center w-full h-[600px] rounded-[30px] pl-[50px]">
      <div>
        <h2>Project Name</h2>
        <p className="font-light my-6">Short Description of project</p>
        <div className="row mb-[52px]">
          <div className="mr-[64px]">
            <p className="font-light"># Weeks</p>
            <p className="text-sm text-customColor-lightGray">Duration</p>
          </div>
          <div className="mr-[64px]">
            <p className="font-light">Independent</p>
            <p className="text-sm text-customColor-lightGray">Team Size</p>
          </div>
          <div>
            <p className="font-light">Month Day, Year</p>
            <p className="text-sm text-customColor-lightGray">Completed</p>
          </div>
        </div>
        <TechHighlight />
      </div>
    </div>
  );
}

function TechHighlight() {
  return (
    <div className="bg-customColor-lightGray2 inline-block py-2 px-4 rounded-md">
      <p className="text-sm font-medium">Tech</p>
    </div>
  );
}
