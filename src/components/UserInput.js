import React, { Component } from 'react';

class UserInput extends Component {
  state = {
    username: '',
    hometown: ''
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = ()=>{
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: this.state
    })

    this.setState({
      username: '',
      hometown: ''
    })
  }

  render() {
    return(
      <form onSubmit={this.onSubmit}>
        <input type='text' name='username' value={this.state.username} onChange={this.onChange}/>
        <input type='text' name='hometown' value={this.state.hometown} onChange={this.onChange}/>
      </form>
    );
  }
};

export default UserInput;
