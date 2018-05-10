// Formulas
// For males:
// 10 x weight (kg) + 6.25 x height (cm) – 5 x age (y) + 5 = REE
// For females:
// 10 x weight (kg) + 6.25 x height (cm) – 5 x age (y) – 161 = REE

// Sedentary REE X 1.2
// Light activity REE x 1.375
// Moderate activity REE x 1.55
// Very Active REE x 1.725

//  Lose - 20%
// 3,250 – (3250 x .20) = Weight Loss TDEE
// Gain + 20%
// 3,250 + (3250 x .20) = Weight Gain TDEE

// Example
// Let’s say you’re a 29-year-old, 183 cm, 88 kg, very active male.
// (10 x weight (kg) + 6.25 x height (cm) – 5 x age (y) + 5 = REE) x 1.725 = TDEE
// 10 x 88 + 6.25 x 183 – 5 x 29 + 5 = REE
// 880 + 1144 – 145 + 5 = 1884 (REE)
// 1884 x 1.725 = 3250 (Very Active TDEE)

// 1g Protein = 4 Calories
// 1g Carbohydrate = 4 Calories
// 1g Fat = 9 Calories

import React, { Component } from 'react';
import * as func from '../helper-functions';
import Calculator from './Calculator';

import '../styles/global.scss';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      intState: false,
      age: 29,
      height: 183,
      weight: 88,
      gender: 'Male',
      genderSelections: ['Male', 'Female'],
      goal: 'Maintain',
      goalSelections: ['Maintain', 'Lose', 'Gain'],
      calories: '',
      activityLevel: 'sedentary',
      activityLevelOptions: [
        {
          value:'sedentary',
          option: 'Sedentary'
        },
        {
          value: 'lightActivity',
          option: 'Light activity'},
        {
          value: 'moderateActivity', 
          option: 'Moderate activity'
        },
        {
          value: 'veryActive', 
          option: 'Very Active'
        }
      ],
      activityLevelSelection: 'Sedentary'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderResult = this.renderResult.bind(this);
    this.getResult = this.getResult.bind(this);
  }

  getResult(){
    // Get Activily level
    const activityLevel = func.getActivityLevel(this.state.activityLevel);
    
    // Get REE ( Resting energy expenditure )
    const REE = func.getREE(this.state.weight, this.state.height, this.state.age, this.state.gender);

    // Get TDEE ( Total Daily Energy Expenditure )
    const TDEE = func.getTDEE(REE, activityLevel);

    // Get calories based on users goal (maintain, lose, gain weight)
    const calories = func.getGoal(this.state.goal, TDEE);
  
    // Update state with new result
    this.setState({
      intState: true,
      calories,
    })
  }

  handleSubmit(e){
    e.preventDefault();
    this.getResult();
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  renderResult(){
    if(this.state.intState){
      return (
        <div className="jumbotron">
          <h1>{this.state.calories}</h1>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="App">
        <Calculator 
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          {...this.state}
        />

        {this.renderResult()}
        
      </div>
    );
  }
}

export default App;
