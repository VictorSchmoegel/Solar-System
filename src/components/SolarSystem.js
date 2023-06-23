import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

function SolarSystem() {
  return (
    <div data-testid="solar-system">
      <Title />
      {planets.map((planet) => (<PlanetCard
        key={ planet.name }
        planetName={ planet.name }
        planetImage={ planet.image }
        />
      ))}
    </div>
  );
}

export default SolarSystem;
