import React, { Component } from 'react';
import SingleInput from './form-elements/SingleInput';
import Select from './form-elements/Select';
import CheckboxOrRadioGroup from './form-elements/CheckboxOrRadioGroup';

export default class Calculator extends Component {
    render() {
        return (
            <form onSubmit={ this.props.handleSubmit }>

                <SingleInput 
                    title="Age"
                    name="age"
                    inputType={'text'}
                    content={this.props.age} 
                    controlFunc={this.props.handleChange}
                    placeholder="Age"
                />

                <SingleInput 
                    title="Height"
                    name="height"
                    inputType={'text'}
                    content={this.props.height} 
                    controlFunc={this.props.handleChange}
                    placeholder="Height"
                />

                <SingleInput 
                    title="Weight"
                    name="weight"
                    inputType={'text'}
                    content={this.props.weight} 
                    controlFunc={this.props.handleChange}
                    placeholder="Weight"
                />

                <CheckboxOrRadioGroup
                    title={'Gender:'}
                    setName={'gender'}
                    type={'radio'}
                    controlFunc={this.props.handleChange}
                    options={this.props.genderSelections}
                    selectedOptions={this.props.gender} 
                />

                <Select
                    title="Activity Level"
                    name={'activityLevel'}
                    placeholder={'Choose your activity level'}
                    controlFunc={this.props.handleChange}
                    options={this.props.activityLevelOptions}
                />

                <CheckboxOrRadioGroup
                    title={'Goal:'}
                    setName={'goal'}
                    type={'radio'}
                    controlFunc={this.props.handleChange}
                    options={this.props.goalSelections}
                    selectedOptions={this.props.goal} 
                />

                <input className="btn btn-primary" type="submit" />
                
            </form>
        )
    }
}