import Upgrade from "../UpgradeToPro/Upgrade";
import "./Sidebar.css";
import { HomeIcon, Calendar, FileText, LayoutGrid } from "lucide-react";
import avatar from "../../assets/profileAvatar.png";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-menu">
        <div className="menu-item active">
          <HomeIcon size={20} />
          <span>Home</span>
        </div>
        <div className="menu-item">
          <Calendar size={20} />
          <span>Calendar</span>
        </div>
        <div className="menu-item">
          <LayoutGrid size={20} />
          <span>Tasks</span>
        </div>
        <div className="menu-item">
          <FileText size={20} />
          <span>Notes</span>
        </div>
      </div>

      <Upgrade />

      <div className="user-profile">
        <img
          src={avatar}
          alt="User Avatar"
          className="user-avatar"
        />
        <div className="user-info">
          <h4>Dalton Smith</h4>
          <span>Free Account</span>
        </div>
        <button className="settings-button">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <circle cx="10" cy="10" r="2" fill="currentColor" />
            <circle cx="3" cy="10" r="2" fill="currentColor" />
            <circle cx="17" cy="10" r="2" fill="currentColor" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
