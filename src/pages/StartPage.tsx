import React from 'react';
import Header from '../components/Header';
import Start from '../components/Start';
import './StartPage.css';

interface StartPageProps {
  onViewMenu: () => void;
}

const StartPage: React.FC<StartPageProps> = ({ onViewMenu }) => {
  return (
    <div className="start-page">
      <Header />
      <Start onViewMenu={onViewMenu} />
    </div>
  );
};

export default StartPage;
