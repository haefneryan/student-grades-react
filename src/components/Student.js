import React from "react";
import Grades from "./Grades";

import classes from "./Student.css";

function Student(props) {
  const { filteredData, addTag, calcAverage } = props;

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

  const plusMinus = (e) => {
    if (getComputedStyle(e.target).getPropertyValue('--minus') === 'none') {
      e.target.style.setProperty('--minus', 'block')
    } else {
      e.target.style.setProperty('--minus', 'none')
    }
  }

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
                <p>Average: {student.average}%</p>
              </div>
            </div>
            <Grades student={student}/>
            {/* {calcAverage(student, index)} */}
            <div className="tags">
              {student.tags.map((tag) => {
                <div className="tag">{tag}</div>
              })}
            </div>
              <input
                className="tagInput"
                type="text"
                id={`text_${student.id}`}
                placeholder="Add a tag..."
              />
              <button className="addTag" onClick={(e) => addTag(student, e)}>Add Tag</button>
            <button
              className="button expandable"
              onClick={(e) => {expandGrades(index); plusMinus(e)}}
            ></button>
            <br></br>
            <br></br>
          </div>
        );
      })}
    </div>
  );
}

export default Student;
