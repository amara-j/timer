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
      <circle
        className="circle-border"
        cx="50%"
        cy="50%"
        r={radius + strokeWidth / 2 + 1}
        fill="none"
        stroke="#ffb700"
        strokeWidth="2"
      />

      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        fill="white"
        stroke="#d10892"
        strokeWidth="2"
        fontSize="90px"
        dy=".3em"
      >
        {props.countdownText}
      </text>
    </svg>
  );
};

export default CircleBorder;
