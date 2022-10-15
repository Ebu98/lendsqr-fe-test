import React from "react";
import { ReactComponent as SearchIcon } from "../../assests/icon/search.svg";

import "./search.scss";

const Search = (props) => {
  return (
    <div className="search-input">
      <div className="input">
        <input {...props} type="text" placeholder="Search for anything" />
      </div>
      <button>
        <SearchIcon />
      </button>
    </div>
  );
};

export default Search;
