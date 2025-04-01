import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { useState } from "react";
import "./App.css";
import "./index.css";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/steps" element={<Steps />} />
        <Route path="/pick-date" element={<DatePickerScreen />} />
      </Routes>
    </Router>
  );
}

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Welcome to the Launcher!</h1>
      <div className="buttons">
        <button
          style={{ backgroundColor: "grey", color: "white" }}
          onClick={() => navigate("/steps")}
        >
          Steps
        </button>
      </div>

      <Spacer height="10px" />

      <div className="buttons">
        <button
          style={{ backgroundColor: "grey", color: "white" }}
          onClick={() => navigate("/pick-date")}
        >
          Pick Date
        </button>
      </div>
    </div>
  );
}

function Steps() {
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
      )}
    </>
  );
}

function DatePickerScreen() {
  return (
    <div className="date-picker">
      <h2>Pick a Date</h2>
      <p>Ez itt a dátumválasztó képernyő 🚀</p>
    </div>
  );
}

function Spacer({ height = "10px" }) {
  return <div style={{ height }} />;
}

export default App;
