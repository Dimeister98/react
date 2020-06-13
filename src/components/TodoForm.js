import React from "react";
import shortid from "shortid";

export default class TodoForm extends React.Component {

    state = {
        text: ''
    };
    
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.onSubmit({
          id: shortid.generate(),
          text: this.state.text,
          complete: false
        });
        this.setState({
          text: ""
        });
      };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>To Do List</h1>
                <input 
                    name="text"
                    value={this.state.text}
                    onChange={this.handleChange}
                    placeholder="To Do"
                />
                <button onClick={this.handleSubmit}>Adauga</button>
            </form>
        );
    }
}