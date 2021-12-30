import React from 'react';

import classes from './Grades.css'

function Grades(props) {
    const { student } = props
    const grades = student.grades;
    let z = 0;
    
    for (let i = 0; i < grades.length; i++) {
        grades[i] = parseInt(grades[i]);
    }

    return (
        
        <div className='grades' id={student.id}>
            {grades.map((item, index) => {
                z++;
                return (
                    <div className='grade' key={index}>
                        <p>Test {z}: {item}%</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Grades
