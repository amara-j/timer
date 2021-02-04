import "./App.css";

const CircleAnimation = (props) => {
  const radius = 250;
  const circumference = 2 * Math.PI * radius;
  const strokeWidth = 4;
  const circleContainerSize = 2 * radius + 4 * strokeWidth;

  return (
    <svg
      className="circle-container"
      height={circleContainerSize}
      width={circleContainerSize}
    >
      <circle
        className="progress-ring-circle"
        cx="50%"
        cy="50%"
        r={radius}
        fill="none"
        stroke="#2CC8DD"
        strokeWidth={strokeWidth}
        strokeDasharray={`${circumference} ${circumference}`}
        strokeDashoffset={circumference * (1 - props.percentDone)}
      />
    </svg>
  );
};

export default CircleAnimation;
