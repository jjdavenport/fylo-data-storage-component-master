import ToolTip from "./tooltip";
const Card = () => {
  return (
    <>
      <main>
        <h2>You’ve used 815 GB of your storage</h2>
        <span>0 GB</span>
        <span>1000 GB</span>
      </main>
      <ToolTip />
    </>
  );
};

export default Card;
