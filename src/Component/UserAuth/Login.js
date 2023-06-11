import React, { Component } from 'react';

class Login extends React.Component {
    render() { 
        return <div>
            <div className="container card p-4 mt-2 login-container">
                <form onSubmit={this.props.submit}>
                    <div className="form-group">
                        <label className="form-label">Email</label>
                        <input className="form-control" name="email" type="text"/>
                    </div>
                    <div className="form-group">
                        <label className="form-label">Password</label>
                        <input className="form-control" name="password" type="text"/>
                    </div>
                    <button className="btn btn-sm btn-primary mt-2">Login</button>
                </form>
            </div>
        </div>;
    }
}
 
export default Login;