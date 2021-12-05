import React from 'react';
import Student from './Student';

import classes from './Students.module.css';

function Students(props) {
    const { data } = props;

    return (
        <div className={classes.students}>
            <Student data={data}>
                {props.children}
            </Student>
        </div>
    )
}

export default Students
