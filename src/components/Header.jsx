import "./Header.css";
import PropTypes from "prop-types";

const Header = ({ text }) => {
  return (
    <div>
      <h1 className="header">{text}</h1>
    </div>
  );
};

Header.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Header;
