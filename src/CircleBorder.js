import "./App.css";

const CircleBorder = (props) => {
  const radius = 300;
  const strokeWidth = 8;
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
        r={radius}
        fill="none"
        stroke="white"
        strokeWidth={strokeWidth}
      />

      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        fill="white"
        fontSize="90px"
        dy=".3em"
      >
        {props.countdownText}
      </text>
    </svg>
  );
};

export default CircleBorder;
