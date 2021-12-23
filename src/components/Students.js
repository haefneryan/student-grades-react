import React from "react";
import Student from "./Student";

import classes from "./Students.css";

function Students(props) {
  const { data, filteredData, filterName, filterTag, addTag } = props;

  return (
    <div className="boundingBox">
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
      <Student filteredData={filteredData} data={data} addTag={addTag} />
    </div>
  );
}

export default Students;
