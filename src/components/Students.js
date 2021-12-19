import React from "react";
import Student from "./Student";

import classes from "./Students.css";

function Students(props) {
  const { data, filteredData, filterName, filterTag, addTag } = props;

  return (
    <div className="students">
      <input type="text" onChange={(e) => filterName(e)}></input>
      <input type="text" onChange={(e) => filterTag(e)}></input>
      <p>({filteredData.length})</p>
      <Student filteredData={filteredData} data={data} addTag={addTag} />
    </div>
  );
}

export default Students;
