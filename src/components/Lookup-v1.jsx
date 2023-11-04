import { useState } from "react";
import Response from "./Response";
import Error from "./Error";

function isValidVIN(vin) {
  // Expression régulière pour vérifier le format du VIN
  const vinRegex = /^[A-HJ-NPR-Z0-9]{17}$/i;

  // Vérifier si le VIN correspond au format attendu
  return vinRegex.test(vin);
}

function LookupForm() {
  const [vin, setVin] = useState("");
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState("");
  const [hasReponse, setHasResponse] = useState(false);
  const [hasMatch, setHasMatch] = useState(false);

  const URL =
    "https://api-citroen.contact.nc/wp-json/serial-checker/v1/check-serial";

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setHasMatch(null);
    setHasResponse(false);
    if (!vin && isValidVIN(vin)) return;

    try {
      setIsloading(true);
      const newVin = { serial_number: vin };
      const res = await fetch(URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newVin),
      });
      const data = await res.json();
      if (data.present === "oui") {
        setHasMatch(true);
        setHasResponse(true);
      }
      if (data.present === "non") {
        setHasMatch(false);
        setHasResponse(true);
      }
      if (data.error) {
        setError(data.error);
      }
    } catch (error) {
      setError(error);
    } finally {
      setIsloading(false);
    }

    console.log(error);
  }

  return (
    <div className="bg-transparent border rounded-lg dark:border-gray-700 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20">
      <form
        role="search"
        id="search-form"
        action="/#recherche"
        method="post"
        className="flex justify-between flex-row m-0"
        onSubmit={handleSubmit}>
        <input
          id="search"
          type="text"
          value={vin}
          name="s"
          title="VIN ou numéro d'immatriculation"
          placeholder="VIN ou numéro d'immatriculation"
          className="text-sm lg:text-base font-bold flex-1 px-4 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none h-12 max-w-[75%] lg:max-w-none dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0"
          required="required"
          disabled={isLoading}
          onChange={e => setVin(e.target.value)}
        />
        <button
          type="submit"
          className="flex items-center justify-center m-1 text-white transition-colors duration-300 transform rounded-lg w-12 h-12 p-0 bg-primary hover:bg-primary/70 focus:outline-none focus:bg-primary/70">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </button>
      </form>
      {hasReponse && <Response hasMatch={hasMatch} />}
      {error && <Error error={error} />}
    </div>
  );
}

export default LookupForm;
