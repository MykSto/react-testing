import React, { useState } from "react";
import styled from 'styled-components';
import classes from "./App.css";
import Person from "./Person/Person";

const App = () => {
  const [state, setState] = useState({
    persons: [
      { id: 1, name: "aaaa", age: 111, lengthNumber: 0 },
      { id: 2, name: "bbbb", age: 222, lengthNumber: 0 },
      { id: 3, name: "cccc", age: 333, lengthNumber: 0 }
    ],
    showPerson: false
  });

  const StyledButton = styled.button`
  background-color: red;
  font: inherit;
  border: 1px solid blue;
  boxShadow: 0 2px 3px #ccc;
  padding: 8;
  &:hover {
    background-color: ${props => props.alt ? 'yellow' : 'salmon'};
  }
`

  // eslint-disable-next-line
  const changeNameHanderler = (event, id) => {
    const personIndex = state.persons.findIndex(p => {
      return p.id === id;
    });

    //a copy of older object
    const person = {
      ...state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...state.persons];
    persons[personIndex] = person;

    // const person = Object.assign({}, state.person[personIndex])

    setState(state => ({
      ...state,
      persons: persons
    }));
  };

  const showSomeContentHandler = () => {
    const someVal = state.showPerson;
    setState(state => ({
      ...state,
      showPerson: !someVal
    }));
  };

  const deletePersonHandler = index => {
    // const personas = state.person.slice();
    const personas = [...state.persons];
    personas.splice(index, 1);
    setState(state => ({
      ...state,
      persons: personas
    }));
  };

  let btnClass = [classes.Appheader];
  // btnClass.push(classes.Applogo);

  let persons = null;
  if (state.showPerson) {
    persons = (
      <div>
        {state.persons.map((person, index) => {
          return (
            <Person
              click={() => deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              changed={event => changeNameHanderler(event, person.id)}
              value={person.name}
              key={person.id}
              lengthNumbers={person.name.length}
            />
          );
        })};
      </div>
    );
  }

  const asignedClasses = [];
  state.persons.length <= 1 ? asignedClasses.push('red') : asignedClasses.push('bold');

  const style = {
    ':hover': {
      backgroundColor: 'red',
      padding: 20,
    }
  }

  return (
    <div className={classes.App}>
      <StyledButton
        style={style}
        onClick={showSomeContentHandler}>
        Click to show
      </StyledButton>
      <p
        className={asignedClasses.join(' ')}>
        text
      </p>
      <p
        className={btnClass.join(' ')}>
        dddddd
      </p>
      {persons}
    </div>
  );
};

export default App;
