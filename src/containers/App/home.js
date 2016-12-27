import React, { Component } from 'react';

export default class Home extends Component {
  static propTypes = {
    children: React.PropTypes.any,
  }
  render() {
    return (
      <section>
        <h2>Email Validation</h2>
        <p><a onClick={(evt) => { evt.preventDefault(); window.location.hash = '#/asyncform'; }} href>Email Form</a></p>
      </section>
    );
  }
}
