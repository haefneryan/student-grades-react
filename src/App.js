import React, { useState, useEffect } from "react";
import axios from "axios";
import Students from "./components/Students";

function App() {
  const url = "https://api.hatchways.io/assessment/students";
  const [data, setData] = useState(null);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [tags, setTags] = useState([]);
  const [filteredData, setFilteredData] = useState(null);
  const [filterValues, setFilterValues] = useState({
    nameFilter: "",
    tagFilter: "",
  });

  const getData = async () => {
    await axios.get(url)
    .then((response) => {
      setData(response.data.students)
      setDataLoaded(true)
      setFilteredData(response.data.students)
    });
  };

  useEffect(() => {
    getData();
  }, [url]);

  useEffect(() => {
    if (dataLoaded) {
      setFilteredData(data);
      calcAverage()
      data.forEach((obj) => {
        obj.tags = [];
      });
    }
  }, [dataLoaded]);

  useEffect(() => {
    if (dataLoaded) {
      let result = [];
      if (filterValues.nameFilter.indexOf(" ") > 0) {
        result = data.filter((x) => {
          let fullname_first = x.firstName.toLowerCase();
          let fullname_last = x.lastName.toLowerCase();
          let name = fullname_first + " " + fullname_last;
          if (name.includes(`${filterValues.nameFilter}`)) {
            return x;
          }
        });
      } else if (filterValues.nameFilter.indexOf(" ") === -1) {
        result = data.filter((x) => {
          let name_first = x.firstName.toLowerCase();
          let name_last = x.lastName.toLowerCase();
          if (name_first.includes(`${filterValues.nameFilter}`)) {
            return x;
          }
          if (name_last.includes(`${filterValues.nameFilter}`)) {
            return x;
          }
        });
        if (filterValues.tagFilter.length > 0) {
          result = result.filter((x) => {
            if (x.tags.some((y) => y.includes(`${filterValues.tagFilter}`))) {
              return x;
            }
          });
        }
      }
      setFilteredData(result);
    }
  }, [filterValues]);

  const filterName = (e) => {
    setFilterValues({
      ...filterValues,
      nameFilter: e.target.value.toLowerCase(),
    });
  };

  const filterTag = (e) => {
    setFilterValues({
      ...filterValues,
      tagFilter: e.target.value.toLowerCase(),
    });
  };

  const addTag = (student, e) => {
    let text = document.getElementById("text_" + student.id).value;
    text = text.toLowerCase();
    student.tags.push(text);
    setTags([...tags, text]);
    let value = e.target.previousSibling.value
    let createTag = document.createElement('div')
    createTag.innerHTML = value
    createTag.classList.add('tag')
    e.target.previousSibling.previousSibling.appendChild(createTag)
    document.getElementById("text_" + student.id).value = "";
  };

  const calcAverage = () => {
    const students = data
    students.forEach((x, index) => {
      const grades = x.grades;
      for (let i = 0; i < grades.length; i++) {
        grades[i] = parseInt(grades[i]);
      }
      let runningTotal = 0;
      let z = 0;
      let avg = 0;
      grades.forEach((num) => {
        runningTotal = runningTotal + num
      })
      z = grades.length
      avg = runningTotal/(z)
      setData([...data], data[index].average = avg)
    })
  }

  return (
    <>
      {dataLoaded === false && filteredData === null && <p>loading...</p>}
      {dataLoaded === true && filteredData !== null && (
        <Students
          filteredData={filteredData}
          data={data}
          filterName={filterName}
          filterTag={filterTag}
          addTag={addTag}
          calcAverage={calcAverage}
        />
      )}
    </>
  );
}

export default App;
