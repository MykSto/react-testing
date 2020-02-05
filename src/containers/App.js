import React, { useState } from "react";
import classes from "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import withClass from "../hoc/withClass";
import Auxiliary from "../hoc/Auxiliary"

const App = () => {
  const [state, setState] = useState({
    persons: [
      { id: 1, name: "aaaa", age: 111, lengthNumber: 0 },
      { id: 2, name: "bbbb", age: 222, lengthNumber: 0 },
      { id: 3, name: "cccc", age: 333, lengthNumber: 0 }
    ],
    showPerson: false,
    showButton: true,
    changeCounter: 0
  });

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

    setState((prevState, props) => {
      return {
        ...prevState,
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      }
    });
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


  let persons = null;
  if (state.showPerson) {
    persons = <Persons
      persons={state.persons}
      clicked={deletePersonHandler}
      changed={changeNameHanderler}
    />
  }

  return (
    <Auxiliary>
      <button onClick={() => { setState({ showButton: false }) }}>Clean Button</button>
      {state.showButton ? <Cockpit
        showPerson={state.showPerson}
        personsLength={state.persons.length}
        clicked={showSomeContentHandler}
      /> : null}
      {persons}
    </Auxiliary>
  );
};

export default withClass(App, classes.App);
