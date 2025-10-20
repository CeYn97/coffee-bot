import React from 'react';
import './Header.css';

interface HeaderProps {
  onBackClick?: () => void;
  showBackButton?: boolean;
}

const Header: React.FC<HeaderProps> = ({ onBackClick, showBackButton = false }) => {
  return (
    <header className="header">
      <div className="header-content">
        {showBackButton && (
          <button className="back-button" onClick={onBackClick}>
            ←
          </button>
        )}
        <div className="logo-section">
          <div className="logo">☕</div>
          <h1 className="coffee-name">Coffee Bot</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
