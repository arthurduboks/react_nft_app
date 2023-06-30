import AppLogo from "@/assets/app-logo.png";
import "./style.css";

function Header() {
  return (
    <nav className="header">
      <div className="header-wrapper">
        <img className="header_logo" src={AppLogo} alt="app logo" />
        <span className="header_sign-up">Sign Up</span>
      </div>
    </nav>
  );
}

export default Header;
