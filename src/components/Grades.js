import React from 'react';

import classes from './Grades.css'

function Grades(props) {
    const { student } = props
    const grades = student.grades;
    
    for (let i = 0; i < grades.length; i++) {
        grades[i] = parseInt(grades[i]);
    }

    return (
        <div className='grades' id={student.id}>
            <p>GRADES</p>
            {grades.map((item, index) => {
                return (
                    <div className='grade' key={index}>
                        <p>{item}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Grades
