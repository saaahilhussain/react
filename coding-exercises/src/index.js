import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar photoName="sahil.jpeg" name="sahil" />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar(props) {
  console.log(props);
  return <img src={props.photoName} alt={props.name} className="avatar" />;
}

function Intro() {
  return (
    <div>
      <h1>Sahil Hussain</h1>
      <p>
        Pursuing B.Tech CSE at The Assam Royal Global University. Learning React
        from Jonas Schmedtmann. Skills include:
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="C/C++" color="MediumSeaGreen" />
      <Skill skill="HTML+CSS" color="orangered" />
      <Skill skill="JavaScript" color="yellow" />
      <Skill skill="React" color="DodgerBlue" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
