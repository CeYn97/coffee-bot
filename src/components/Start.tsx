import React from 'react';
import './Start.css';

interface StartProps {
  onViewMenu: () => void;
}

const Start: React.FC<StartProps> = ({ onViewMenu }) => {
  return (
    <div className="start-container">
      <div className="welcome-content">
        <div className="welcome-icon">☕</div>
        <h2 className="welcome-title">Добро пожаловать!</h2>
        <p className="welcome-description">
          Добро пожаловать в нашу уютную кофейню! 
          Мы готовим лучший кофе из отборных зерен и 
          предлагаем вкусные десерты.
        </p>
        <button className="view-menu-button" onClick={onViewMenu}>
          Посмотреть меню
        </button>
      </div>
    </div>
  );
};

export default Start;
