import PropTypes from 'prop-types';
import './MissionCard.css';
import { FaCalendar, FaFlag, FaMapMarkerAlt } from 'react-icons/fa';

function MissionCard({ name, year, country, destination }) {
  return (
    <div data-testid="mission-card">
      <p className="planet-name">{ name }</p>
      <div className="mission-description">
        <span className="data-icon">
          <FaCalendar />
          { year }
        </span>
        <span className="location-icon">
          <FaMapMarkerAlt />
          { country }
        </span>
        <span className="planet-icon">
          <FaFlag />
          { destination }
        </span>
      </div>
    </div>
  );
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
