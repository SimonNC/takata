import { useState } from "react";
import AccordionItem from "./AccordionItem";
import "./Accordion.css";

function Accordion({ faqs }) {
  const [curOpen, setCurOpen] = useState(1);
  return (
    <div className="accordion enphase">
      <h2>QUESTIONS FREQUENTES</h2>
      {faqs.map((el, i) => (
        <AccordionItem
          curOpen={curOpen}
          onOpen={setCurOpen}
          title={el.question_reponse.question}
          key={i + 1}
          num={i + 1}>
          {el.question_reponse.reponse}
        </AccordionItem>
      ))}
    </div>
  );
}

export default Accordion;
