import './Header.css';
import logo from "../../assets/logo.png";
import profileAvatar from "../../assets/profileAvatar.png";
import { Bell, Plus, Search } from 'lucide-react';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <img 
          src={logo}
          alt="ProTrack Logo" 
          className="logo"
        />
        <span className="brand-name">ProTrack</span>
        
        <div className="search-container">
          <Search className="search-icon" size={18} />
          <input 
            type="text"
            placeholder="Search..."
            className="search-input"
          />
        </div>

        <div className="actions-container">
          <button className="add-task-button">
            <Plus size={16} />
            ADD TASKS
          </button>
          
          <button className="notification-button">
            <Bell size={20} />
            <span className="notification-dot"></span>
          </button>

          <img 
            src={profileAvatar}
            alt="User Profile"
            className="avatar"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
