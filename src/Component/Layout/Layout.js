import React, { Component } from 'react';
import Header from './Header/Header.js';
import Footer from './Footer/Footer.js';
import LeftPanel from './LeftPanel/LeftPanel.js';
import Content from './../Content/content.js'

class Layout extends React.Component {
    render() { 
        return <div>
            <div className="row">
                <div className="col-2">
                    <LeftPanel/>
                </div>
                <div className="col">
                    <div className="row" >
                        <Header/>
                    </div>
                    <div className="row" >
                        <Content/>
                    </div>
                    <div className="row">
                        <Footer/>
                    </div>
                </div>
            </div>

        </div>;
    }
}
 
export default Layout;