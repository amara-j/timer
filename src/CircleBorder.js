import "./App.css";

const CircleBorder = () => {
  const radius = 250;
  const strokeWidth = 4;
  const circleContainerSize = 2 * radius + 4 * strokeWidth;

  return (
    <svg
      className="circle-border-container"
      height={circleContainerSize}
      width={circleContainerSize}
    >
      <circle
        className="circle-border"
        cx="50%"
        cy="50%"
        r={radius - strokeWidth - 1}
        fill="none"
        stroke="black"
        strokeWidth={strokeWidth}
      />
    </svg>
  );
};

export default CircleBorder;
