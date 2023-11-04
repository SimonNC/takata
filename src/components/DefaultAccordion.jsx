import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function DefaultAccordion({ faqs, handleOpen, open }) {
  return (
    <>
      {faqs.map((qr, i) => (
        <Accordion open={open === i + 1} key={i + 1} className="mb-2">
          <AccordionHeader onClick={() => handleOpen(i + 1)}>
            {qr.question_reponse.question}
          </AccordionHeader>
          <AccordionBody>{qr.question_reponse.reponse}</AccordionBody>
        </Accordion>
      ))}
    </>
  );
}

export default DefaultAccordion;
