import React from "react";
import Grades from "./Grades";

import classes from "./Student.css";

function Student(props) {
  const { data, filteredData, addTag } = props;

  const expandGrades = (index) => {
    index++;
    document.getElementById(index).classList.toggle("active");
    let x = document.getElementById(index).style.display;
    if (x === "" || x === "none") {
      document.getElementById(index).style.display = "block";
    } else {
      document.getElementById(index).style.display = "none";
    }
  };

  return (
    <div className="students">
      {filteredData.map((student, index) => {
        return (
          <div className="container" id={index} key={student.id}>
            <div className="student">
              <img src={student.pic} />
              <p className="name">
                {student.firstName + " " + student.lastName}
              </p>
              <div className="info">
                <p>Email: {student.email}</p>
                <p>Company: {student.company}</p>
                <p>Skill: {student.skill}</p>
                <p>Average: </p>
              </div>
            </div>
            <p>{student.tags}</p>
            {student.tags.map((tag) => {
              <p>{tag}</p>;
            })}
            <div className="tags">
              <input
                className="tagInput"
                type="text"
                id={`text_${student.id}`}
              />
              <button onClick={() => addTag(student)}>ADD TAG</button>
            </div>
            <Grades student={student} />
            <button
              className="button expandable"
              onClick={() => expandGrades(index)}
            ></button>
            <br></br>
            <br></br>
            <hr></hr>
          </div>
        );
      })}
    </div>
  );
}

export default Student;
