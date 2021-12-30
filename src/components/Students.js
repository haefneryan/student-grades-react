import React from "react";
import Student from "./Student";

import classes from "./Students.css";

function Students(props) {
  const { data, filteredData, filterName, filterTag, addTag, calcAverage } = props;

  return (
    <div className="boundingBox">
      <div className="searchBars">
        <div className="inputBox">
          <input
            id="searchBar"
            type="text"
            onChange={(e) => filterName(e)}
            placeholder="Search by Name"
          ></input>
        </div>
        <div className="inputBox">
          <input
            id="tagSearchBar"
            type="text"
            onChange={(e) => filterTag(e)}
            placeholder="Search by Tag"
          ></input>
        </div>
      </div>
      <Student filteredData={filteredData} addTag={addTag} calcAverage={calcAverage} />
    </div>
  );
}

export default Students;
