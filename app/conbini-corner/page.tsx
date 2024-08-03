import ProjectDetails from "@/app/components/ProjectDetails";
import React from "react";

function ProjectPage() {
  return (
    <div>
      <ProjectDetails />
      <div className=" container relative top-[183px] lg:top-[261px] flex flex-col gap-[36px] lg:gap-[100px]">
        <div className="flex flex-col gap-[16px]">
          <h3>Section Header</h3>
          <p className="text-[16px] lg:text-[24px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae
            ante ligula. Aliquam vel turpis dapibus ligula viverra placerat.
            Phasellus a iaculis felis. Duis eleifend finibus massa ac gravida.
            Donec tempus quam ac ante dictum, id faucibus mi eleifend. Maecenas
            pretium nulla vitae lorem ultricies, sit amet mollis augue
            pellentesque. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Donec fermentum, odio a
            porta facilisis, turpis sem ullamcorper leo, at dignissim lectus
            quam quis mi. Sed fermentum facilisis pellentesque. In dictum
            placerat erat, vitae facilisis quam faucibus vel. Fusce facilisis
            sem quis aliquet volutpat. Nunc rhoncus id quam nec mollis.
            Suspendisse facilisis velit eget magna sodales, sit amet auctor
            augue convallis.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-[36px]">
          <div className="w-full lg:w-[44%] h-[240px] lg:h-[400px] rounded-[15px] bg-customColor-lightGray2"></div>
          <div className="w-full lg:w-[48.5%] flex flex-col gap-[16px] items-center lg:items-start text-center lg:text-left">
            <h3>Section Header</h3>
            <p className="text-[16px] lg:text-[24px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae
              ante ligula. Aliquam vel turpis dapibus ligula viverra placerat.
              Phasellus a iaculis felis. Duis eleifend finibus massa ac gravida.
              Donec tempus quam ac ante dictum, id faucibus mi eleifend.
              Maecenas pretium nulla vitae lorem ultricies, sit amet mollis
              augue pellentesque.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-[16px]">
          <h3>Section Header</h3>
          <p className="text-[16px] lg:text-[24px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae
            ante ligula. Aliquam vel turpis dapibus ligula viverra placerat.
            Phasellus a iaculis felis. Duis eleifend finibus massa ac gravida.
            Donec tempus quam ac ante dictum, id faucibus mi eleifend. Maecenas
            pretium nulla vitae lorem ultricies, sit amet mollis augue
            pellentesque. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Donec fermentum, odio a
            porta facilisis, turpis sem ullamcorper leo, at dignissim lectus
            quam quis mi. Sed fermentum facilisis pellentesque. In dictum
            placerat erat, vitae facilisis quam faucibus vel. Fusce facilisis
            sem quis aliquet volutpat. Nunc rhoncus id quam nec mollis.
            Suspendisse facilisis velit eget magna sodales, sit amet auctor
            augue convallis.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row-reverse lg:justify-between lg:items-center gap-[36px]">
          <div className="w-full lg:w-[44%] h-[240px] lg:h-[400px] rounded-[15px] bg-customColor-lightGray2"></div>
          <div className="w-full lg:w-[48.5%] flex flex-col gap-[16px] items-center lg:items-start text-center lg:text-left">
            <h3>Section Header</h3>
            <p className="text-[16px] lg:text-[24px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae
              ante ligula. Aliquam vel turpis dapibus ligula viverra placerat.
              Phasellus a iaculis felis. Duis eleifend finibus massa ac gravida.
              Donec tempus quam ac ante dictum, id faucibus mi eleifend.
              Maecenas pretium nulla vitae lorem ultricies, sit amet mollis
              augue pellentesque.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;
