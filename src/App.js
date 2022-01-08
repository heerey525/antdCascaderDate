import React from 'react';
import Manual from './view/manual'
import Npm from './view/npm'

export default class App extends React.Component {

  render() {
    return (
      <div className="App">
        <h1>手动引入的形式</h1>
        <Manual></Manual>
        <br /><br /><br />
        <h1>npm引入的形式</h1>
        <Npm></Npm>
      </div>
    )
  }
}
