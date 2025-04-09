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
  function handleReset() {
    setCount(0);
    setStep(1);
  }

  return (
    <div className="card">
      <div className="counter-container">
        <div className="counter-controls">
          <span>Step: {step}</span>

          <input
            type="range"
            min="1"
            max="10"
            value={step}
            onChange={(e) => {
              setStep(Number(e.target.value));
            }}
          />
          <span>Count: {count}</span>
          <div className="counter-row">
            <button
              onClick={DecreaseCounter}
              style={{ backgroundColor: "#7950f2", color: "white" }}
            >
              -
            </button>

            <input
              type="text"
              value={count}
              onChange={(e) => setCount(Number(e.target.value))}
            />
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

        {count !== 0 || step !== 1 ? (
          <div className="step-controls">
            <button
              onClick={handleReset}
              style={{ backgroundColor: "#7950f2", color: "white" }}
            >
              Reset
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default DatePicker;
