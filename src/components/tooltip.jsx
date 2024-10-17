const Tooltip = ({ className }) => {
  return (
    <>
      <div className={className}>
        <span className="flex items-center gap-2 text-4xl font-bold text-veryDarkBlue">
          185
          <span className="text-sm uppercase text-grayishBlue">GB Left</span>
        </span>
        <div className="absolute -bottom-4 right-0 hidden h-0 w-0 border-l-[20px] border-t-[20px] border-l-transparent border-t-white md:block"></div>
      </div>
    </>
  );
};

export default Tooltip;
