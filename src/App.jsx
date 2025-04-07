import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import "./index.css";
import Steps from "./Steps.jsx";
import DatePicker from "./DatePicker.jsx";
import FlashCards from "./flashcards.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/steps" element={<Steps />} />
        <Route path="/pick-date" element={<DatePicker />} />
        <Route path="/flashcards" element={<FlashCards />} />
      </Routes>
    </Router>
  );
}

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Welcome to the Launcher!</h1>
      <ul>
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

        <Spacer height="10px" />

        <div className="buttons">
          <button
            style={{ backgroundColor: "grey", color: "white" }}
            onClick={() => navigate("/flashcards")}
          >
            Flashcards
          </button>
        </div>
      </ul>
    </div>
  );
}

function Spacer({ height = "10px" }) {
  return <div style={{ height }} />;
}

export default App;
