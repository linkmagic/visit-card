import React, { Component } from 'react';

import './App.css';

class App extends Component {

  toggleClass(x, className) {
    x.classList.toggle("change");
  }

  mobileMenuOnClick = () => {
    var x = document.getElementById('idTopNavMenu');
    var menuBtn = document.getElementById('idTopNavMenuBtn');

    if (x.className === 'top-nav-menu') {
      x.className += ' responsive';
    } else {
      x.className = 'top-nav-menu';
    }
    
    this.toggleClass(menuBtn, 'change');
    // toggleClass(x, 'top-nav-menu');
  }

  render() {
    return (
      <div className="AppRoot">

        <div className="top-nav-menu" id="idTopNavMenu">

          <div className="m-header-title">
            <span className="name">Yevhen&nbsp;Sapsai</span>
            <span className="descr">Portfolio</span>
          </div>

          <a className="TopNavMenu__Item TopNavMenu__Item-active" href="">Home</a>
          <a className="TopNavMenu__Item" href="">Experience</a>
          <a className="TopNavMenu__Item" href="">Self projects</a>
          <a className="TopNavMenu__Item" href="">Blog</a>
          <a className="TopNavMenu__Item" href="">Contancs</a>

          <a href="javascript:void(0);" className="TopNavMenu__Icon" onClick={this.mobileMenuOnClick}>
            <div id="idTopNavMenuBtn" className="container">
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </div>
          </a>
        </div>

      </div>
    );
  }
}

export default App;
