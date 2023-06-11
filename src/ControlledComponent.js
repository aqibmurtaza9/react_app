import React, { Component } from "react";
import App from "./App.css";

class ControlledComponent extends Component{
constructor(){
    super();
    
    this.state ={
        input : "Aqib"
    };
}

changeHandler=(event)=>{
let input = event.target.value;
this.setState({input},()=>{
    console.log(this.state);
});

}

render(){
    return <input type="text" className="App" 
                    value={this.state.input}
                    onChange={this.changeHandler}/>
}
}

export  default ControlledComponent;