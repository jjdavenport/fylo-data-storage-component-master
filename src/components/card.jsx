import ToolTip from "./tooltip";
import Bar from "./bar";

const Card = () => {
  return (
    <>
      <main className="bg-darkBlue text-paleBlue flex flex-col items-center rounded-xl p-8">
        <label className="flex w-full flex-col gap-2 text-center">
          <p>
            You’ve used <span className="font-bold">815 GB</span> of your
            storage
          </p>
          <Bar value={815} max={1000} />
          <div className="flex justify-between font-bold">
            <span>0 GB</span>
            <span>1000 GB</span>
          </div>
        </label>
        <ToolTip className="-mb-14 w-fit rounded-xl bg-white p-4" />
      </main>
    </>
  );
};

export default Card;
