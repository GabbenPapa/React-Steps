import React, { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrev() {
    setStep((prevStep) => Math.max(prevStep - 1, 1));
  }

  function handleNext() {
    setStep((prevStep) => Math.min(prevStep + 1, messages.length));
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <StepMessage step={step}>{messages[step - 1]}</StepMessage>

          <div className="buttons">
            <PagerButton
              bgColor="#7950f2"
              txtColor="white"
              onClick={handlePrev}
            >
              <span>👈 </span>Prev
            </PagerButton>
            <PagerButton
              bgColor="#7950f2"
              txtColor="white"
              onClick={handleNext}
            >
              Next <span>👉</span>
            </PagerButton>
          </div>
        </div>
      )}
    </>
  );

  function StepMessage({ step, children }) {
    return (
      <p className="message">
        <h3>Step{step}</h3>
        {children}
      </p>
    );
  }

  function PagerButton({ bgColor, txtColor, onClick, children }) {
    return (
      <button
        style={{ backgroundColor: bgColor, color: txtColor }}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
}

export default Steps;
