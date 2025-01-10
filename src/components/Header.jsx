import PropTypes from "prop-types";
import { MenuSvg } from "../assets/svg";
import "../styles/header.scss";
import { useState } from "react";
import SearchAreaComponent from "./SearchAreaComponent";

const Header = ({ show, setShow }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <div className="header">
      <div className="page-title">
        <div className="show-only-on-tabs">
          <button onClick={() => setShow(!show)}>
            <MenuSvg />
          </button>
        </div>
        <span>Dashboard</span>
      </div>
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="show-only-on-tabs"
      >
        <MenuSvg />
      </button>

      {showDropdown && (
        <div className="dropdown show-only-on-tabs">
          <SearchAreaComponent />
        </div>
      )}

      <div className="hide-only-on-tabs">
        <SearchAreaComponent />
      </div>
    </div>
  );
};

Header.propTypes = {
  show: PropTypes.bool,
  setShow: PropTypes.func,
};

export default Header;
