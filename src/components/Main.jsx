import { useEffect, useState } from "react";
import InfoContact from "./InfoContact";
import Intro from "./Intro";
import Recherche from "./Recherche";
import Table from "./Table";
import Accordion from "./Accordion";

function Main() {
  const [open, setOpen] = useState(1);
  const [faqs, setFaqs] = useState([]);
  useEffect(function () {
    async function fetchFaqs() {
      const res = await fetch(
        "https://api.citroen-ds-campagne-de-rappel.nc/wp-json/prestige/v1/faq"
      );
      const data = await res.json();
      setFaqs(data);
    }
    fetchFaqs();
  }, []);

  return (
    <main className="mx-auto max-w-screen-lg px-6 lg:px-0">
      <Intro />
      <Table />
      <Recherche />
      <InfoContact />

      <Accordion faqs={faqs} />
    </main>
  );
}

export default Main;
