const Bar = ({ value, max }) => {
  const percent = (value / max) * 100;
  return (
    <>
      <div className="bg-veryDarkBlue flex h-4 items-center rounded-full px-[3px] py-[11px]">
        <div
          style={{ width: `${percent}%` }}
          className="bg-gradientCustom flex h-4 items-center justify-end rounded-full pr-[2px]"
        >
          <div className="z-10 h-3 w-3 rounded-full bg-white"></div>
        </div>
      </div>
    </>
  );
};

export default Bar;
