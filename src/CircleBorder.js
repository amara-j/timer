import "./App.css";

const CircleBorder = (props) => {
  const radius = 250;
  const strokeWidth = 4;
  const circleContainerSize = 2 * radius + 4 * strokeWidth;
  return (
    <svg
      className="circle-container"
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

      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        fill="black"
        fontSize="90px"
        dy=".3em"
      >
        {props.countdownText}
      </text>
    </svg>
  );
};

export default CircleBorder;
