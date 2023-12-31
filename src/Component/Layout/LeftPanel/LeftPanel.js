import React, { useState } from 'react';
import './LeftPanel.css';
function LeftPanel() {

    const [active, setActive] = useState(0);

    return (
        <div >
        <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark vh-100" >
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <svg className="bi me-2" width="40" height="32"><use href="#bootstrap" /></svg>
                <span className="fs-4">Sidebar</span>
            </a>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item" onClick={() => setActive(1)}>
                    <a href="/userdetail" className= { active ===  1 ? "nav-link text-white active" : "nav-link text-white"}   >
                        <svg className="bi me-2" width="16" height="16"><use  /></svg>
                        User Detail
                    </a>
                </li>
                <li className="nav-item" onClick={() => setActive(2)}>
                    <a href="#" className= { active ===  2 ? "nav-link text-white active" : "nav-link text-white"}>
                        <svg className="bi me-2" width="16" height="16"><use href="#speedometer2" /></svg>
                        Dashboard
                    </a>
                </li>
                <li className="nav-item" onClick={() => setActive(3)}>
                    <a href="#" className= { active ===  3 ? "nav-link text-white active" : "nav-link text-white"}>
                        <svg className="bi me-2" width="16" height="16"><use href="#table" /></svg>
                        Orders
                    </a>
                </li>
                <li className="nav-item" onClick={() => setActive(4)}>
                    <a href="#" className= { active ===  4 ? "nav-link text-white active" : "nav-link text-white"}>
                        <svg className="bi me-2" width="16" height="16"><use href="#grid" /></svg>
                        Products
                    </a>
                </li>
                <li className="nav-item" onClick={() => setActive(5)}>
                    <a href="#" className= { active ===  5 ? "nav-link text-white active" : "nav-link text-white"}>
                        <svg className="bi me-2" width="16" height="16"><use href="#people-circle" /></svg>
                        Customers
                    </a>
                </li>
            </ul>
            <hr />
            <div className="dropdown">
                <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
                    <strong>mdo</strong>
                </a>
                <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                    <li><a className="dropdown-item" href="#">New project...</a></li>
                    <li><a className="dropdown-item" href="#">Settings</a></li>
                    <li><a className="dropdown-item" href="#">Profile</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Sign out</a></li>
                </ul>
            </div>
        </div>
    </div>
      );
}

export default LeftPanel;