import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import PlanetCard from './components/PlanetCard';
import Missions from './components/Missions';
import MissionCard from './components/MissionCard';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <h2 className="titulo">Planetas</h2>
        <SolarSystem />
        <Missions />
        <PlanetCard />
        <MissionCard />
      </div>
    );
  }
}

export default App;
