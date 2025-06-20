import { useState } from "react";
import "./styles.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />;
    </div>
  );
}

function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(null);
  return (
    <div className="accordion">
      {data.map((el, i) => (
        <Accordionitem
          curOpen={curOpen}
          onOpen={setCurOpen}
          num={i}
          title={el.title}
          key={el.title}
        >
          {el.text}
        </Accordionitem>
      ))}
      <Accordionitem
        curOpen={curOpen}
        onOpen={setCurOpen}
        num={48}
        title="Thinking in React"
        key="test 1"
      >
        <p>Allows React developers to: </p>
        <ul>
          <li>Break up UI into components</li>
          <li>Make components reusable</li>
          <li>Place state effectively</li>
        </ul>
      </Accordionitem>
    </div>
  );
}

function Accordionitem({ num, title, children, curOpen, onOpen }) {
  const isOpen = num === curOpen;
  function handleToggleText() {
    onOpen(isOpen ? null : num);
  }

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggleText}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && (
        <div className="content-box">
          <p className="text">{children}</p>
        </div>
      )}
    </div>
  );
}
