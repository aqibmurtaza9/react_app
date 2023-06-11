import './App.css';
import React, { Component } from 'react';
import Login from './Component/UserAuth/Login';
import  loginStore  from './Stores/LoginStore';
import UserDetail from './Component/UserListing/UserDetail';
// import { useHistory } from 'react-router-dom';
import {BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';

  class App extends Component { 
    constructor(props){
      super(props);
      
      this.state = {
        email : null,
        password : null
      }
    }
    
    
    handlerLogin=(event)=>{
      event.preventDefault();
      const email = event.target.email.value;
      const password = event.target.password.value;

      var response = loginStore.authenticateUser(email, password);
      console.log(response);
      if (response.message == "601") {
          window.location("/userdetail");
      } else{
          alert(response.message);
      }
    }

    render()
    {
      return <div>
          <Router>
            <Routes>
                <Route exact path="/login">
                  <Login submit={this.handlerLogin}/>
                </Route>
                <Route exact path="/userdetail">
                  {<UserDetail/>}
                </Route>
            </Routes>
          </Router>
      </div> ;
    }
}
 
export default App;
