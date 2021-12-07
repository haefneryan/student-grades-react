import React from 'react';
import Student from './Student';

import classes from './Students.module.css';

function Students(props) {
    const { data, filterName, filterTag } = props;

    return (
        <div className={classes.students}>
            <input type='text' onChange={(e) => filterName(e)}></input>
            <input type='text' onChange={(e) => filterTag(e)}></input>
            <Student data={data} />
        </div>
    )
}

export default Students
