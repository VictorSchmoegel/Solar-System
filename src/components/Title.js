import PropTypes from 'prop-types';

function Title({ headline }) {
  return (
    <h2 className="missions-title">{headline}</h2>
  );
}

Title.propTypes = {
  headline: PropTypes.string.isRequired,
};

export default Title;
