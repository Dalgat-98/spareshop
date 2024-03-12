import "./style.scss";

import NavTop from "./NavTop/NavTop";
import NavBottom from "./NavBottom/NavBotoom";

const Header = () => {
  return (
    <header className="header">
      <NavTop />
      <NavBottom />
    </header>
  );
};

export default Header;
