import React, { Component } from "react";
import PropTypes from 'prop-types';
import Aux from "../../../hoc/Auxiliary";
import withClass from "../../../hoc/withClass";
import AuthContext from '../../../context/auth-context';

import classes from './Person.css'

class Person extends Component {

  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  static contextType = AuthContext;

  componentDidMount() {
    this.inputElementRef.current.focus();
  }

  // static getDerivedStateFromProps(state, props){
  //   console.log('[Person.js] getDerivedStateFromProps')
  // }

  render() {
    return (
      /* for Adjacent elements React offers Fragment to wrap jsx code */

      < Aux >
        {/* <AuthContext.Consumer> */}
        {this.context.loggedIn ? <p>Authenticated!</p> : <p>Loged In</p>}
        {/* </AuthContext.Consumer> */}
        <p onClick={this.props.click}>
          NAME: {this.props.name} AGE: {this.props.age} LENGTH: {this.props.lengthNumbers}
        </p>
        <input
          type="text"
          // ref={(inputEl) => { inputEl.focus() }}
          ref={this.inputElementRef}
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
    );
  }
};

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  lengthNumbers: PropTypes.number,
  changed: PropTypes.func
}

export default withClass(Person, classes.Person);
