import LookupForm from "./LookupForm";

function Recherche() {
  return (
    <div
      id="recherche"
      className="border-2 border-primary rounded-3xl p-10 lg:py-10 lg:px-36 mb-12 scroll-m-12">
      <h2 className="font-black text-xl lg:text-3xl text-center mb-4">
        MON VÉHICULE EST-IL CONCERNÉ ?
      </h2>
      <p className=" mb-4 text-sm lg:text-base">
        <strong className="text-center block">
          Vérifiez votre numéro de série (VIN) ou plaque d’immatriculation.
        </strong>
        <br />
        Le numéro de série de votre véhicule (VIN) est composé de 17 caractères.{" "}
        <br />
        Pour le trouver, cherchez dans le coin inférieur de votre pare-brise
        avant, côté conducteur ou dans votre carnet d’entretien. Vous pouvez
        également inscrire votre numéro d’immatriculation au format suivant :
        XXXXXXNC.
      </p>
      <p className="mb-4 text-sm lg:text-base">
        Pour les véhicules re exportés à Wallis, et en provenance de
        Nouvelle-Calédonie,{" "}
        <strong>le VIN doit impérativement être renseigné</strong>.
        L’immatriculation du véhicule n’est pas suffisante pour déterminer si le
        véhicule est concerné par une campagne de rappel relative aux airbags du
        fournisseur Takata. 
      </p>
      <br />
      <LookupForm />
    </div>
  );
}

export default Recherche;
