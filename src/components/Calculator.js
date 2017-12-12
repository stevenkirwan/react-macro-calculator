import React, { Component } from 'react';

export default class Calculator extends Component {
    render() {
        return (
            <form onSubmit={ this.props.handleSubmit }>

                <div className="form-group">
                    <label htmlFor="age">Age</label>
                    <input 
                        className="form-control" 
                        name="age" 
                        value={this.props.age} 
                        onChange={this.props.handleChange} 
                        placeholder="Age"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="age">Height</label>
                    <input 
                        className="form-control" 
                        name="height" 
                        value={this.props.height} 
                        onChange={this.props.handleChange} 
                        placeholder="Height"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="weight">Weight</label>
                    <input 
                        className="form-control" 
                        name="weight" 
                        value={this.props.weight} 
                        onChange={this.props.handleChange} 
                        placeholder="Weight"
                    />
                </div>

                <div className="form-group">
                    <div className="form-check form-check-inline">
                        <label className="form-check-label">
                            <input 
                                className="form-check-input" 
                                type="radio" 
                                value="male" 
                                checked={this.props.gender === 'male'} 
                                onChange={this.props.handleGenderOptionChange}
                            />
                            Male
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <label className="form-check-label">
                        <input 
                            className="form-check-input" 
                            type="radio" 
                            value="female" 
                            checked={this.props.gender === 'female'} 
                            onChange={this.props.handleGenderOptionChange}
                        />
                        Female
                    </label>
                    </div>
                </div>

                <div className="form-group">
                    <select 
                        className="form-control" 
                        name="activityLevel" 
                        onChange={this.props.handleChange}>
                            <option value="sedentary">Sedentary</option>
                            <option value="lightActivity">Light activity</option>
                            <option value="moderateActivity">Moderate activity</option>
                            <option value="veryActive">Very Active</option>
                    </select>
                </div>

                <div className="form-group">
                    <div className="form-check form-check-inline">
                        <label className="form-check-label">
                            <input 
                                className="form-check-input" 
                                type="radio" 
                                value="maintain" 
                                checked={this.props.goal === 'maintain'} 
                                onChange={this.props.handleGoalOptionChange}
                            />
                            Maintain
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <label className="form-check-label">
                            <input 
                                className="form-check-input" 
                                type="radio" 
                                value="lose" 
                                checked={this.props.goal === 'lose'} 
                                onChange={this.props.handleGoalOptionChange}
                            />
                            Lose
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <label className="form-check-label">
                            <input 
                                className="form-check-input" 
                                type="radio" 
                                value="gain" 
                                checked={this.props.goal === 'gain'} 
                                onChange={this.props.handleGoalOptionChange}
                            />
                            Gain
                        </label>
                    </div>
                </div>
                <input className="btn btn-primary" type="submit" />
                
            </form>
        )
    }
}