import "./App.css";

const CircleAnimation = (props) => {
  const radius = 300;
  const circumference = 2 * Math.PI * radius;
  const strokeWidth = 4;
  const circleContainerSize = 2 * radius + 4 * strokeWidth;

  return (
    <div>
      <svg
        className="progress-ring"
        height={circleContainerSize}
        width={circleContainerSize}
      >
        <circle
          className="progress-ring__circle"
          cx="50%"
          cy="50%"
          r={radius}
          fill="none"
          stroke="black"
          strokeWidth={strokeWidth}
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={circumference * (1 - props.percentDone)}
        />
      </svg>
    </div>
  );
};

export default CircleAnimation;
