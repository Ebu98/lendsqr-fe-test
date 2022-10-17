import React from "react";
import { SearchIcon } from "../../assests/icon"

import "./search.scss";

type Props = {
  props?: React.ReactNode
};
const Search: React.FC<Props> = (props) => {
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
