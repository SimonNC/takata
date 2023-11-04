import { NavLink, Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="mx-auto max-w-screen-lg px-6 lg:px-0">
        <div className="legals">
          <div>
            <ul>
              <li>
                <NavLink
                  to="https://www.citroen.nc/mentions-legales/"
                  aria-label="Mentions légales"
                  target="_blank"
                  title="Mentions légales">
                  Mentions légales
                </NavLink>
              </li>
              <li>
                <Link
                  target="_blank"
                  to="https://www.citroen.nc/declaration-de-confidentialite/"
                  aria-label="Déclaration de Confidentialité"
                  title="Déclaration de Confidentialité">
                  Déclaration de Confidentialité
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
