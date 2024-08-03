import { useEffect, useRef, useState } from "react";

export function PreviewImageCarousel() {
  const [isVisible, setIsVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
        // Check if scrolled to the end
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      }
    };

    const containerElement = containerRef.current;
    containerElement?.addEventListener("scroll", handleScroll);

    // Cleanup event listener
    return () => {
      containerElement?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative w-full">
      <div className="overflow-x-auto whitespace-nowrap w-full">
        <div className="space-x-4">
          <div className="inline-block w-[210px] lg:w-[240px] h-[140px] lg:h-[160px] bg-customColor-lightGray2 rounded-[25px]"></div>
          <div className="inline-block w-[210px] lg:w-[240px] h-[140px] lg:h-[160px] bg-customColor-lightGray2 rounded-[25px]"></div>
          <div className="inline-block w-[210px] lg:w-[240px] h-[140px] lg:h-[160px] bg-customColor-lightGray2 rounded-[25px]"></div>
          <div className="inline-block w-[210px] lg:w-[240px] h-[140px] lg:h-[160px] bg-customColor-lightGray2 rounded-[25px]"></div>
          <div className="inline-block w-[210px] lg:w-[240px] h-[140px] lg:h-[160px] bg-customColor-lightGray2 rounded-[25px]"></div>
          <div className="inline-block w-[210px] lg:w-[240px] h-[140px] lg:h-[160px] bg-customColor-lightGray2 rounded-[25px]"></div>
          <div className="inline-block w-[210px] lg:w-[240px] h-[140px] lg:h-[160px] bg-customColor-lightGray2 rounded-[25px]"></div>
          <div className="inline-block"></div>
        </div>
      </div>
      <div
        className={`absolute inset-y-0 right-0 w-16 bg-gradient-to-l lg:from-white to-transparent ${isVisible ? "overlay-visible" : "overlay-hidden"}`}
      ></div>
    </div>
  );
}
