import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';
import './SolarSystem.css';

function SolarSystem() {
  return (
    <div>
      <Title />
      <ul className="planet-list">
        {planets.map((planet) => (
          <li className="list-items" key={ planet.name }>
            <PlanetCard
              planetImage={ planet.image }
              planetName={ planet.name }
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SolarSystem;
