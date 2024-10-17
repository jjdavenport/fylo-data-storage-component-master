import ToolTip from "./tooltip";
import Bar from "./bar";

const Card = () => {
  return (
    <>
      <main className="relative flex flex-col items-center rounded-xl bg-darkBlue p-8 text-paleBlue md:h-fit md:w-full md:max-w-md">
        <label className="flex w-full flex-col gap-3 text-center md:text-start">
          <p>
            You’ve used <span className="font-bold">815 GB</span> of your
            storage
          </p>
          <div className="flex flex-col gap-1">
            <Bar value={815} max={1000} />
            <div className="flex justify-between font-bold">
              <span>0 GB</span>
              <span>1000 GB</span>
            </div>
          </div>
        </label>
        <ToolTip className="absolute -bottom-12 w-fit rounded-xl bg-white p-4 md:-top-14 md:bottom-auto md:right-6 md:rounded-l-xl md:rounded-br-none md:rounded-tr-xl" />
      </main>
    </>
  );
};

export default Card;
