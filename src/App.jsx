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
import Accordion from "./Accordion.jsx";
import StarRating from "./StarRating.jsx";
import TextExpander from "./TextExpander.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/steps" element={<Steps />} />
        <Route path="/pick-date" element={<DatePicker />} />
        <Route path="/flashcards" element={<FlashCards />} />
        <Route path="/accordion" element={<Accordion />} />
        <Route path="/star" element={<StarRating />} />
        <Route path="/text-expander" element={<TextExpander />} />
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
        <Spacer height="10px" />

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

        <Spacer height="10px" />

        <div className="buttons">
          <button
            style={{ backgroundColor: "grey", color: "white" }}
            onClick={() => navigate("/accordion")}
          >
            Accordion
          </button>
        </div>

        <Spacer height="10px" />

        <div className="buttons">
          <button
            style={{ backgroundColor: "grey", color: "white" }}
            onClick={() => navigate("/star")}
          >
            Stars
          </button>
        </div>

        <Spacer height="10px" />

        <div className="buttons">
          <button
            style={{ backgroundColor: "grey", color: "white" }}
            onClick={() => navigate("/text-expander")}
          >
            Text Expander
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
