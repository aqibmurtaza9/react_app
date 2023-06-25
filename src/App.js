import './App.css';
import React, { Component } from 'react';
import Login from './Component/UserAuth/Login';
import  loginStore  from './Stores/LoginStore';
import UserDetail from './Component/UserListing/UserDetail';

class App extends Component { 
    constructor(props){
      super(props);
      
      this.state = {
        email : null,
        password : null,
        isAuthenticated : false
      }
    }
    
    handlerLogin = (event) => {
      event.preventDefault();
      const email = event.target.email.value;
      const password = event.target.password.value;
    
      loginStore.authenticateUser(email, password)
        .then((response) => {
          console.log(response);
    
          if (response.message === "601") {
             window.location.href ="/userdetail";
          } else {
            alert(response.message);
          }
        });
    }

    render()
    {
      return <div>
        {this.isAuthenticated ? (
          <Login submit={this.handlerLogin}/>
        ) : (
          <UserDetail />
        )}
      </div> ;
    }
}
 
export default App;
