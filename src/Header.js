import { ThemeContext } from "./contexts/ThemeContext";
import { useContext } from "react";
function Header() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="padT4 padB4">
      <div className="container mobile-container">
        <div className="d-flex justify-content-between">
          <div>
            <img alt="SVCC HOME PAGE" src="/images/SVCCLogo.png" />
          </div>
          <div className="light">
            <h4
              className="header-title"
              className={theme === "dark" ? "text-white" : "text-dark"}
            >
              Silicon Valley Code Camp
            </h4>
          </div>
          <div className={theme === "dark" ? "text-white" : "text-dark"}>
            Hello Mr. Justin &nbsp;&nbsp;
            <span>
              <a href="#">Sign-out</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
