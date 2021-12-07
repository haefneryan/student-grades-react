import React, { useState, useEffect }from 'react';
import axios from 'axios';
import Students from './components/Students';


function App() {
  const url = 'https://api.hatchways.io/assessment/students';
  const [data, setData] = useState({ dataLoaded: false, students: null });
  const [filterValues, setFilterValues] = useState({
    nameFilter: '',
    tagFilter: ''
  })
  console.log(data)
  console.log(data.students)

  const getData = () => {
    axios.get(url)
      .then(response => {
        setData({dataLoaded: true, students: response.data.students})
      })
  }

  useEffect(() => {
    getData();
  }, [url])

  useEffect(() => {
    console.log(filterValues.nameFilter)
    if(data.dataLoaded) {
      //console.log(filterValues.nameFilter)
      (data.students).filter((x) => {
        x.firstName.includes(filterValues.nameFilter)
      })
      console.log(data.students)
    }
  }, [filterValues])

  const filterName = (e) => {
    setFilterValues({...filterValues, nameFilter: e.target.value})
  }

  const filterTag = (e) => {
      setFilterValues({...filterValues, tagFilter: e.target.value})
  }

  return (
    <>
      {data.dataLoaded === false && <p>loading...</p>}
      {data.dataLoaded === true && <Students data={data} filterName={filterName} filterTag={filterTag}/>}
    </>
  );
}

export default App;
