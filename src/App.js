/* eslint-disable object-shorthand */
import {Component} from 'react'

import ConfigurationController from './components/ConfigurationController'
import ConfigurationContext from './context/ConfigurationContext'

import Layout from './components/Layout'

import './App.css'

class App extends Component {
  state = {showLeftNavbar: true, showContent: true, showRightNavbar: true}

  onToggleShowContent = showContent => {
    this.setState({showContent: showContent})
  }

  onToggleShowLeftNavbar = showLeftNavbar => {
    this.setState({showLeftNavbar: showLeftNavbar})
  }

  onToggleShowRightNavbar = showRightNavbar => {
    this.setState({showRightNavbar: showRightNavbar})
  }

  render() {
    const {showContent, showLeftNavbar, showRightNavbar} = this.state
    return (
      <ConfigurationContext.Provider
        value={{
          showContent,
          showLeftNavbar,
          showRightNavbar,
          onToggleShowContent: this.onToggleShowContent,
          onToggleShowLeftNavbar: this.onToggleShowLeftNavbar,
          onToggleShowRightNavbar: this.onToggleShowRightNavbar,
        }}
      >
        <ConfigurationController />
        <Layout />
      </ConfigurationContext.Provider>
    )
  }
}

export default App
