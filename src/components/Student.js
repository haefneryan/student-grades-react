import React from 'react';

import classes from './Student.css';

function Student(props) {
    const { data } = props
    console.log(data);
    return (
        <>
            {data.map(student => {
                return (
                    <div className='student'>
                        <p>{student.firstName + ' ' + student.lastName}</p>
                        <p>Email: {student.email}</p>
                        <p>Company: {student.company}</p>
                        <p>Skill: {student.skill}</p>
                        <p>Average: </p>
                        {/* <p>Average: {(student.grades)}</p> */}
                        <hr></hr>
                    </div>
                )
            }

            )}
        </>
    )
}

export default Student
