import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';
import './Missions.css';

function Missions() {
  return (
    <div className="missions-div">
      <Title headline="Missões" />
      <ul className="missions-list">
        {missions.map((mission) => (
          <li className="missions-items" key={ mission.name }>
            <MissionCard
              name={ mission.name }
              year={ mission.year }
              country={ mission.country }
              destination={ mission.destination }
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Missions;
