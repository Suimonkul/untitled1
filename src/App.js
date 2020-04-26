import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router} from "react-router-dom";
import {NavigationBar} from './navBar';
import {MyVerticallyCenteredModal,Appp} from "./modal";
import Texts from "./main_menu";
import Logo from "./logo.svg"
import './App.css';

function App() {
    return (
        <div className="App">
            <div className="backGround">
                <React.Fragment>
                    <Router>
                        <NavigationBar/>
                        <img style={{width: 75, height: 75}} src={Logo} alt="Logo"/>
                        <Texts/>
                        <MyVerticallyCenteredModal/>
                        <Appp/>
                    </Router>
                </React.Fragment>
            </div>
        </div>
    );
}
export default App
