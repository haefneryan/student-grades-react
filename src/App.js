import React, { useState, useEffect } from "react";
import axios from "axios";
import Students from "./components/Students";

function App() {
  const url = "https://api.hatchways.io/assessment/students";
  const [data, setData] = useState({ dataLoaded: false, students: null });
  const [tags, setTags] = useState([]);
  const [filteredData, setFilteredData] = useState(null);
  const [filterValues, setFilterValues] = useState({
    nameFilter: "",
    tagFilter: "",
  });

  const getData = async () => {
    await axios.get(url).then((response) => {
      setData({ dataLoaded: true, students: response.data.students });
      setFilteredData(response.data.students);
    });
  };

  useEffect(() => {
    getData();
  }, [url]);

  useEffect(() => {
    if (data.dataLoaded) {
      setFilteredData(data.students);
      data.students.forEach(function (obj) {
        obj.tags = [];
      });
      console.log(data.students);
    }
  }, [data]);

  useEffect(() => {
    if (data.dataLoaded) {
      console.log(filterValues);
      let result = [];
      if (filterValues.nameFilter.indexOf(" ") > 0) {
        result = data.students.filter((x) => {
          let fullname_first = x.firstName.toLowerCase();
          let fullname_last = x.lastName.toLowerCase();
          let name = fullname_first + " " + fullname_last;
          if (name.includes(`${filterValues.nameFilter}`)) {
            return x;
          }
        });
      } else if (filterValues.nameFilter.indexOf(" ") === -1) {
        result = data.students.filter((x) => {
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

  const addTag = (student) => {
    let text = document.getElementById("text_" + student.id).value;
    text = text.toLowerCase();
    student.tags.push(text);
    document.getElementById("text_" + student.id).value = "";
    setTags([...tags, text]);
    console.log(data);
  };

  return (
    <>
      {data.dataLoaded === false && filteredData === null && <p>loading...</p>}
      {data.dataLoaded === true && filteredData !== null && (
        <Students
          filteredData={filteredData}
          data={data}
          filterName={filterName}
          filterTag={filterTag}
          addTag={addTag}
        />
      )}
    </>
  );
}

export default App;
