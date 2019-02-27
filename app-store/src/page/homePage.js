import React, { Component } from 'react';
import TopBarPage from '../components/TopBar';
export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentWillMount() {
  }

  componentDidMount() {
  }

  render() {

    return (
      <div>
       <TopBarPage></TopBarPage>
      <h1 className="app-root">homePage</h1>
      </div>
    );
  }
}
