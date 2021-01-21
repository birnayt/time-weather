import React from 'react';
import CapitalsWeather from './components/CapitalsWeather';
import FormSearchWeather from './components/FormSearchWeather';

import './styles/general.css';
import { Body } from './styles/main';

const Home: React.FC = () => {
  return (
    <Body>
      <h1 className="app-title">Previsão do tempo</h1>
      <FormSearchWeather />
      <hr className="divider" />
      <CapitalsWeather />
    </Body>
  );
};

export default Home;
