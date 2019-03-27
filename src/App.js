import React, { Component } from 'react';
import './App.css';
import { Businesses, Groups } from './config.js';

console.log("config.Businesses:\n" + JSON.stringify(Businesses, null, 2));
console.log("config.Groups:\n" + JSON.stringify(Groups, null, 2));

// app component that will render everything else //
class App extends Component {
  render() {
    return (
      <div className="App">
        <NewUserForm />
        <InvestmentListing />
      </div>
    );
  }
}

// form component                                      //
// take new user data, send as value to next component //
class NewUserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      age: '',
      occupation: '',
      zipCode: '',
      email: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    console.log("form submitted");
  }

  render() {
    return(
      <div>
        <form onSubmit={() => {this.handleSubmit()}}>
          <label>
            Please tell us about yourself:
          </label><br /><br />

          <div className="inputSection">
            <input className="personalData" name="firstName" id="firstName" type="text" placeholder="First name" value={this.state.firstName} onChange={this.handleChange}></input><br />
            <input className="personalData" name="lastName" id="lastName" type="text" placeholder="Last name" value={this.state.lastName} onChange={this.handleChange}></input><br />
            <input className="personalData" name="age" id="age" type="number" placeholder="Age" value={this.state.age} onChange={this.handleChange}></input><br />
            <input className="personalData" name="occupation" id="occupation" type="text" placeholder="Current occupation" value={this.state.occupation} onChange={this.handleChange}></input><br />
            <input className="personalData" name="zipCode" id="zipCode" type="number" placeholder="Zip code" value={this.state.zipCode} onChange={this.handleChange}></input><br />
            <input className="personalData" name="email" id="email" type="email" placeholder="Email address" value={this.state.email} onChange={this.handleChange}></input><br />
          </div>
          
          <input className="submitPersonal" type="submit" value="Send" onClick={() => {showInvestmentChoices(this.state)}}/>
        </form>
      </div>
    )
  }
}

function showInvestmentChoices(userData) {
  console.log("submit clicked");
  console.log("current state values:\n" + JSON.stringify(userData, null, 2));
}

class InvestmentListing extends Component {
  render() {
    return(
      <p>You're rendering the Investment Listing</p>
    )
  }
}

export default App;
