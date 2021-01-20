import React from 'react';
import CapitalsWeather from './components/CapitalsWeather';

import './styles.css';
import { Body } from './styles';

const Home: React.FC = () => {
  return (
    <Body>
      <h1 className="app-title">Previsão do tempo</h1>
      <hr className="divider" />
      <CapitalsWeather />
    </Body>
  );
};

export default Home;
