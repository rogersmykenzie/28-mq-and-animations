import React from 'react';
import './App.css';
import './App2.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      menuIsOpen: false
    }
  }
  handleClick = () => {
    this.setState({menuIsOpen: !this.state.menuIsOpen})
  }
  render() {
    return (
      <div>
        <nav>
          <h2>Start Bootstrap</h2>
          <ul className="nav-links">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
          <img 
          onClick={this.handleClick}
          width="50px" 
          src="https://i.ya-webdesign.com/images/hamburger-menu-icon-png-white-6.png" />
        </nav>
        <menu className={this.state.menuIsOpen === true ? "menu-open" : ""}>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </menu>
      </div>
    )
  }
}

export default App;
