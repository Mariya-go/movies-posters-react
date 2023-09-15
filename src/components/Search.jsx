import { useState } from "react";
import PropTypes from "prop-types";

import "./Search.css";

const Search = ({ getSearchQuery }) => {
  const [value, setValue] = useState("");

  const changeInputHandler = (e) => {
    const val = e.target.value.trim();
    setValue(val);
    getSearchQuery(val);
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder="🔍"
        onChange={(e) => changeInputHandler(e)}
        value={value}
      />
    </div>
  );
};

Search.propTypes = {
  getSearchQuery: PropTypes.func.isRequired,
};

export default Search;
