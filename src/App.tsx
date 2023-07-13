import { useState } from "react";
import "./App.css";

const messages = ["Learn React", "Build cool stuff!", "I'm the SHIT!"];

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  const handleStep = (stepButton: string) => {
    stepButton == "next" && step < 3
      ? setStep((s) => s + 1)
      : stepButton == "prev" && step > 1
      ? setStep((s) => s - 1)
      : null;
  };
  return (
    <>
      <button className="close" onClick={() => setIsOpen((s) => !s)}>
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">{messages[step - 1]}</p>

          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={() => handleStep("prev")}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={() => handleStep("next")}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
