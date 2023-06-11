import React, {Component} from "react";
import App from "./App.css";

class Form extends Component{
constructor(){
    super();

    this.state= {
     userInput :  null,
     role : null,
    };
}

submitHandler =(event)=>{
    event.preventDefault();
    var input = event.target.userInput.value;
    var Selectedrole = event.target.role.value;

    this.setState({userInput : input, role : Selectedrole}, () => {
         console.log(this.state)
    });

}

    render(){
        return <div>
                <form onSubmit={this.submitHandler}>
                    <div className="App">
                        <label>Name :</label>
                        <input type="text" name="userInput"/>
                        <br/>
                        <label>Role :</label>
                        <select name="role">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                        <br/>
                        <button >Submit</button>
                    </div>
                </form>
            </div>;

    }
}

export default Form ;