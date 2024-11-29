import { useEffect, useState } from "react";

const Bar = ({ value, max }) => {
  const [width, setWidth] = useState(0);
  const percent = (value / max) * 100;

  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(percent);
    }, 50);

    return () => clearTimeout(timer);
  }, [percent]);

  return (
    <div className="flex h-4 items-center rounded-full bg-veryDarkBlue px-[3px] py-[11px]">
      <div
        style={{ width: `${width}%` }}
        className="flex h-4 items-center justify-end rounded-full bg-gradientCustom pr-[2px] transition-[width] duration-[2000ms] ease-in-out"
      >
        <div className="z-10 h-3 w-3 rounded-full bg-white"></div>
      </div>
    </div>
  );
};

export default Bar;
