import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
      <h1 className=" my-5 flex items-center justify-center">
        <img
          src="./logos_ds_citroen.png"
          alt="Logos des marques automobile DS et Citroen"
          className="w-96"
        />
      </h1>
    </Link>
  );
}

export default Logo;
