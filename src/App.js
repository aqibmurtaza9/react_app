import './App.css';
import React, { Component } from 'react';
import Login from './Component/UserAuth/Login';
import  loginStore  from './Stores/LoginStore';
import UserDetail from './Component/Content/UserListing/UserDetail';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


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
          console.log("App js : ",response.data);
          
          if (response.status === 200) {
           this.setState({isAuthenticated : true});
           if(this.state.isAuthenticated){
              window.location.href ="/userdetail";
           }
          } else {
            alert(response.message);
          }
        });
    }

    render()
    {
      return <div className="max-width: 100%">
        <Router>
            <Routes>
                <Route path='/' element={<Login submit={this.handlerLogin}/>} />
                <Route path='/userdetail' element={<UserDetail />} />
            </Routes>
        </Router>
      </div> ;
    }
}
 
export default App;
