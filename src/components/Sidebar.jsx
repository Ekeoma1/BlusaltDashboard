import "../styles/sidebar.scss";
import Logo from "../assets/Logo.svg";
import Profile from "../assets/profile.png"

import {
  AdministrationSvg,
  AuditTrailSvg,
  CloseSvg,
  CustomersSvg,
  DashboardSvg,
  KYCSvg,
  ReportsSvg,
  RequestSvg,
  SettingsSVg,
  TasksSvg,
  UsersSvg,
} from "../assets/svg";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const Sidebar = ({ show, setShow }) => {
  return (
    <aside className={show ? "open" : "close"}>
      <div className="logo-wrapper">
        <img src={Logo} alt="logo" />
        {show &&(
          <button onClick={() => setShow(!show)} className="show-only-on-tabs">
            <CloseSvg />
          </button>
        )}
      </div>

      <nav className="menu-wrapper">
        <div className="menu-container">
          <NavLink to="/">
            <DashboardSvg /> <span>Dashboard</span>
          </NavLink>
        </div>

        <div className="menu-container">
          <NavLink to="/request">
            <RequestSvg /> <span>Request</span>
          </NavLink>
        </div>

        <div className="menu-container">
          <NavLink to="/request">
            <KYCSvg /> <span>KYC</span>
          </NavLink>
        </div>

        <div className="menu-container">
          <NavLink to="/request">
            <ReportsSvg /> <span>Reports</span>
          </NavLink>
        </div>

        <div className="menu-container">
          <NavLink to="/request">
            <TasksSvg /> <span>Tasks</span>
          </NavLink>
        </div>

        <div className="menu-container">
          <NavLink to="/request">
            <AuditTrailSvg /> <span>Audit Trail</span>
          </NavLink>
        </div>

        <div className="menu-container">
          <NavLink to="/request">
            <CustomersSvg /> <span>Customers</span>
          </NavLink>
        </div>

        <div className="menu-container">
          <NavLink to="/request">
            <UsersSvg /> <span>Users</span>
          </NavLink>
        </div>

        <div className="menu-container">
          <NavLink to="/request">
            <SettingsSVg /> <span>Settings</span>
          </NavLink>
        </div>

        <div className="menu-container">
          <NavLink to="/request">
            <AdministrationSvg /> <span>Administration</span>
          </NavLink>
        </div>
      </nav>

      <div className="profile">
        <div style={{backgroundImage: `url(${Profile})`}} className="profile-img"></div>
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
