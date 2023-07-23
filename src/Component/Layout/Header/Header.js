import React, { Component } from 'react';

class Header extends React.Component {
    render() { 
        return <div style={{backgroundColor:'whitesmoke'}}>
                    <ul className="nav nav-tabs justify-content-end">
                        <li className="nav-item dropdown">
                           <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">User</a>
                            <ul className="dropdown-menu">
                              <li><a className="dropdown-item" href="#">Options</a></li>
                              <li><a className="dropdown-item" href="#">Setting</a></li>
                            </ul>
                       </li>
                    </ul>
                </div>;
    }
}
 
export default Header;