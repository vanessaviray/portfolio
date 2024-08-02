export function PreviewImageCarousel() {
  return (
    <div className="relative w-[100%]">
      <div className="overflow-x-auto whitespace-nowrap w-[100%]">
        <div className="space-x-4">
          <div className="inline-block w-[240px] h-[160px] bg-customColor-lightGray2 rounded-[25px]"></div>
          <div className="inline-block w-[240px] h-[160px] bg-customColor-lightGray2 rounded-[25px]"></div>
          <div className="inline-block w-[240px] h-[160px] bg-customColor-lightGray2 rounded-[25px]"></div>
          <div className="inline-block w-[240px] h-[160px] bg-customColor-lightGray2 rounded-[25px]"></div>
          <div className="inline-block w-[240px] h-[160px] bg-customColor-lightGray2 rounded-[25px]"></div>
          <div className="inline-block w-[240px] h-[160px] bg-customColor-lightGray2 rounded-[25px]"></div>
          <div className="inline-block w-[240px] h-[160px] bg-customColor-lightGray2 rounded-[25px]"></div>
        </div>
      </div>
      <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
    </div>
  );
}
