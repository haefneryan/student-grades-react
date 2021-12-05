import React from 'react';

function Student(props) {
    const { data } = props
    console.log(data);
    return (
        <div>
            <h1>STUDENT</h1>
            {data.map(student => {
                return (
                    <div key={student.id}>
                        <p>{student.firstName + ' ' + student.lastName}</p>
                        <p>Email: {student.email}</p>
                        <p>Company: {student.company}</p>
                        <p>Skill: {student.skill}</p>
                        <p>Average: {(student.grades)}</p>
                        {/* <p>Grades: {(student.grades).map(grade => {
                            <p>{grade}</p>
                        }
                        )}</p> */}
                        <hr></hr>
                    </div>
                )
            }

            )}
        </div>
    )
}

export default Student
