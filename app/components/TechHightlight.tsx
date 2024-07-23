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

export default TechHighlight;
