import React, { useState, useEffect } from "react";
import axios from "axios";
import Students from "./components/Students";

function App() {
  const url = "https://api.hatchways.io/assessment/students";
  const [data, setData] = useState({ dataLoaded: false, students: null });
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
    }
  }, [data]);

  useEffect(() => {
    if (data.dataLoaded) {
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

  return (
    <>
      {data.dataLoaded === false && filteredData === null && <p>loading...</p>}
      {data.dataLoaded === true && filteredData !== null && (
        <Students
          filteredData={filteredData}
          data={data}
          filterName={filterName}
          filterTag={filterTag}
        />
      )}
    </>
  );
}

export default App;
