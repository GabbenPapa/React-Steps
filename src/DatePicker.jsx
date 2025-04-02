import React from "react";
import "./index.css";

export function DatePicker() {
  return (
    <div className="date-picker">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = React.useState(0);
  const [step, setStep] = React.useState(1);

  const date = new Date();
  date.setDate(date.getDate() + count);

  function DecreaseCounter() {
    setCount((setCount) => setCount - step);
  }

  function IncreaseCounter() {
    setCount((setCount) => setCount + step);
  }

  function DecreaseStep() {
    setStep((setStep) => setStep - 1);
  }

  function IncreaseStep() {
    setStep((setStep) => setStep + 1);
  }

  return (
    <div className="counter-container">
      <div className="counter-controls">
        <div className="counter-row">
          <button
            onClick={DecreaseStep}
            style={{ backgroundColor: "#7950f2", color: "white" }}
          >
            -
          </button>
          <span>Step: {step}</span>
          <button
            onClick={IncreaseStep}
            style={{ backgroundColor: "#7950f2", color: "white" }}
          >
            +
          </button>
        </div>
        <div className="counter-row">
          <button
            onClick={DecreaseCounter}
            style={{ backgroundColor: "#7950f2", color: "white" }}
          >
            -
          </button>
          <span>Count: {count}</span>
          <button
            onClick={IncreaseCounter}
            style={{ backgroundColor: "#7950f2", color: "white" }}
          >
            +
          </button>
        </div>
      </div>

      <p className="date-text">
        {count === 0
          ? "Today"
          : count > 0
          ? `${count} days from today is`
          : `${Math.abs(count)} days ago was`}
      </p>
      <p className="date-text">Date: {date.toDateString()}</p>
    </div>
  );
}

export default DatePicker;
