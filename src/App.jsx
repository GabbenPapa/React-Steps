import { useState } from "react";
import "./App.css";
import "./index.css";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(1);

  function handlePrev() {
    setStep((prevStep) => {
      if (prevStep > 1) {
        return prevStep - 1;
      }
      return prevStep;
    });
  }

  function handleNext() {
    setStep((prevStep) => {
      if (prevStep < messages.length) {
        return prevStep + 1;
      }
      return prevStep;
    });
  }

  return (
    <div className="steps">
      <div className="numbers">
        <div className={step >= 1 ? "active" : ""}>1</div>
        <div className={step >= 2 ? "active" : ""}>2</div>
        <div className={step >= 3 ? "active" : ""}>3</div>
      </div>

      <p className="message">
        Step {step}: {messages[step - 1]}
      </p>
      <div className="buttons">
        <button
          style={{ backgroundColor: "#7950f2", color: "white" }}
          onClick={handlePrev}
        >
          Prev
        </button>
        <button
          style={{ backgroundColor: "#7950f2", color: "white" }}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
