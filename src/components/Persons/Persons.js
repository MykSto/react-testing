import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {

    //We can use PureComponent extend to check if all props are execute == shouldComponentUpdate likewise

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Person.js] shouldComponentUpdate');
        if (nextProps.persons !== this.props.persons || 
            nextProps.clicked !== this.props.clicked || 
            nextProps.changed !== this.props.changed) {
            return true;
        } else {
            return false;
        }
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Person.js] getSnapshotBeforeUpdate');
        return { message: 'snapshot!' };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Person.js] componentDidUpdate');
        console.log(snapshot);
    }

    componentWillUnmount() {
        console.log('[Person.js] componentWillUnmount');
    }

    render() {
        console.log('[Persons.js] rendering...')
        return this.props.persons.map((person, index) => {
            return (
                <Person
                    click={() => this.props.clicked(index)}
                    name={person.name}
                    age={person.age}
                    key={person.id}
                    changed={event => this.props.changed(event, person.id)}
                    lengthNumbers={person.name.length}
                />
            )
        })
    }
};

export default Persons;