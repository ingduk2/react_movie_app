import React from 'react';
import PropTypes from "prop-types";

class App  extends React.Component{
  constructor(props){
    super(props);
    console.log("hello");
  }
  state ={
    count : 0
  };
  add = () => {
    console.log("add");
    //this.state.count++;
    this.setState(current => ({count: current.count +1}));
  };
  remove = () => {
    console.log("minus");
    //this.state.count--;
    this.setState(current => ({count : current.count - 1}));
  }; 
  componentDidUpdate(){
    console.log("I just updated");
  }
  componentDidMount(){
    console.log("component rendered");
  }
  componentWillUnmount(){
    console.log("unmounted");
  }
  render(){
    console.log("render");
    return <div>
      <h1>The number is {this.state.count}</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.remove}>Minus</button>
      </div>
  }
}

export default App;
