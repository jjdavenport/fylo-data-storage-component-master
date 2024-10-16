const Tooltip = ({ className }) => {
  return (
    <>
      <div className={className}>
        <span className="text-veryDarkBlue flex items-center gap-2 text-4xl font-bold">
          185
          <span className="text-grayishBlue text-sm uppercase">GB Left</span>
        </span>
      </div>
    </>
  );
};

export default Tooltip;
