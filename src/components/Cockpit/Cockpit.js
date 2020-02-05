import React, { useEffect } from 'react';
// import styled from 'styled-components';
import classes from "./Cockpit.css";


// const StyledButton = styled.button`
// background-color: red;
// font: inherit;
// border: 1px solid blue;
// boxShadow: 0 2px 3px #ccc;
// padding: 8;
// &:hover {
//   background-color: ${props => props.alt ? 'yellow' : 'salmon'};
// }
// `


const Cockpit = (props) => {

    useEffect(() => {
        console.log('[Cockpit.js] rendering begins');
        return () => {
            alert('clean upppp')
        }
    }, []);

    // ************useeeffect to clean timeout*************
    // useEffect(() => {
    //     console.log('[Cockpit.js] clear rendering begins');
    //     const time = setTimeout(() => {
    //         alert('data to data');
    //     }, 1000);
    //     return () => {
    //         console.log('clear clean up');
    //         clearTimeout(time);
    //     }
    // });

    useEffect(() => {
        console.log('[Cockpit.js] 2nd rendering begins')
        return () => {
            console.log('clean up for 2nd rendering')
        }
    });

    const assignedClasses = [];
    let btnClass = '';

    if (props.showPerson) {
        btnClass = classes.Red;
    }

    if (props.personsLength <= 2) {
        assignedClasses.push(classes.red);
    } if (props.personsLength <= 1) {
        assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <button
                className={btnClass}
                onClick={props.clicked}>
                Click to show
            </button>
        </div>
    );
}

export default React.memo(Cockpit);
