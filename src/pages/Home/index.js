import React, { Component } from 'react';
import {Footer, Heading, ToDos, AddToDoModal} from './modules'
import './styles/index.css'

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Heading/>
        <AddToDoModal/>
        <ToDos/>
      </div>
    );
  }
}
