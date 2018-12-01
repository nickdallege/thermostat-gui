import React, { Component } from 'react';
import './App.css';

// var Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO
// var HeatLED = new Gpio(21, 'out'); //use GPIO pin 21, and specify that it is output

class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      heatStatus: 0
    };
    // this.setHeat = this.setHeat.bind(this);
  }

  // setHeat() { 
  //   this.setState({heatStatus: 1});
  //   HeatLED.writeSync(this.state.heatStatus); //turn LED on or off depending on the button state (0 or 1)
  // }

  render() {
    return (
      <div id="main-homepage">
        <div id="hvac-control">
          <button class="button hvac-button">Auto</button>
          <button class="button hvac-button" >Heat</button>
          <button class="button hvac-button">AC</button>
        </div>
        <div id="temp-container">
          <p id="curr-temp">30&#730;</p>
          <div id="status-container">
            <p id="hvac-status-id">Status: </p>
            <p id="hvac-status">Heating On</p>
          </div>
        </div>
        <div id="adjust-container">
          <div id="adjust-box">
            <div id="arrow-up"/>
            <p id="desired-temp-label">SET TEMP</p>
            <p id="desired-temp">50&#730;</p>
            <div id="arrow-down"/>
            <button class="button hold-btn">HOLD</button>
          </div>
        </div>
      </div>
    );    
  }
}

export default Home;
