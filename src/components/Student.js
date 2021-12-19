import React from "react";
import Grades from "./Grades";

import classes from "./Student.css";

function Student(props) {
  const { data, filteredData } = props;

  const expandGrades = (index) => {
    index++;
    let x = document.getElementById(index).style.display;
    if (x === "" || x === "none") {
      document.getElementById(index).style.display = "block";
    } else {
      document.getElementById(index).style.display = "none";
    }
  };

  return (
    <>
      {filteredData.map((student, index) => {
        return (
          <div className="student" key={student.id}>
            <img src={student.pic} />
            <p>{student.firstName + " " + student.lastName}</p>
            <p>Email: {student.email}</p>
            <p>Company: {student.company}</p>
            <p>Skill: {student.skill}</p>
            <p>Average: </p>
            <Grades student={student} />
            <button onClick={() => expandGrades(index)}>EXPAND</button>
            <hr></hr>
          </div>
        );
      })}
    </>
  );
}

export default Student;
