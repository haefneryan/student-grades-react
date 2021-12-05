import React, { useState, useEffect }from 'react';
import axios from 'axios';
import Students from './components/Students';


function App() {
  const url = 'https://api.hatchways.io/assessment/students';
  const [data, setData] = useState([{ 'data': null }]);

  useEffect(() => {
    axios.get(url)
      .then(response => {
        setData(response.data.students)
        console.log(response)
      })
  }, [url])

  if(!data) {
    return (
      <p>loading...</p>
    )
  }

  return (
    <>
        <Students data={data}/>
    </>
  );
}

export default App;
