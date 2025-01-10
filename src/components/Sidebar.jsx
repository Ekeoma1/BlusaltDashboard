import "../styles/sidebar.scss";
import Logo from "../assets/Logo.svg";
import Profile from "../assets/profile.png";

import { CloseSvg } from "../assets/svg";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { menuItems } from "./sidebarList";

const Sidebar = ({ show, setShow }) => {
  return (
    <aside className={show ? "open" : "close"}>
      <div className="logo-wrapper">
        <img src={Logo} alt="logo" />
        {show && (
          <button onClick={() => setShow(!show)} className="show-only-on-tabs">
            <CloseSvg />
          </button>
        )}
      </div>

      <nav className="menu-wrapper">
        {menuItems.map((menu, id) => {
          return (
            <div key={id} className="menu-container">
              <NavLink to={`${menu.path}`}>
                {menu.icon} <span>{menu.label}</span>
              </NavLink>
            </div>
          );
        })}
      </nav>

      <div className="profile">
        <div
          style={{ backgroundImage: `url(${Profile})` }}
          className="profile-img"
        ></div>
        <span>Bye Wind</span>
      </div>
    </aside>
  );
};

Sidebar.propTypes = {
  show: PropTypes.bool,
  setShow: PropTypes.func,
};

export default Sidebar;
