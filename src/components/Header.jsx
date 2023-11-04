import Logo from "./Logo";
function Header() {
  return (
    <header>
      <Logo />
      <div className="my-12 bg-primary text-white font-black text-center lg:text-xl py-3">
        CAMPAGNE DE RAPPEL - AIRBAG TAKATA
      </div>
    </header>
  );
}

export default Header;
