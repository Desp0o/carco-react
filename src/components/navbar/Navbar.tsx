import * as navbarStyles from "./navbar.module.css";
import { Link } from "react-router-dom";
import logo from "../../utils/images/logo.png";
import engLang from "../../utils/images/united-kingdom.png";
import rusLang from "../../utils/images/russia.png";

export default function Navbar() {
  return (
    <div className={navbarStyles.navbar}>
      <div className={navbarStyles.navbar_inner}>
        <Link to="/">
          <img className={navbarStyles.carco_logo} src={logo} alt="carco" />
        </Link>

        <div className={navbarStyles.left_side}>
          <div className={navbarStyles.links_container}>
            <Link to="/" className={navbarStyles.navbar_links}>
              მთავარი
            </Link>
            <Link to="/" className={navbarStyles.navbar_links}>
              ჩვენ შესახებ
            </Link>
            <Link to="/" className={navbarStyles.navbar_links}>
              კალკულაცია
            </Link>
            <Link to="/" className={navbarStyles.navbar_links}>
              კონტეინერის შემოწმება
            </Link>
            <Link to="/" className={navbarStyles.navbar_links}>
              კონტაქტი
            </Link>
          </div>

          <div className={navbarStyles.language_container}>
            <img className={navbarStyles.languageIcon} src={engLang} alt="eng language" />
            <img className={navbarStyles.languageIcon} src={rusLang} alt="rus language" />
          </div>
        </div>
      </div>
    </div>
  );
}
