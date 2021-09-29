import React from 'react';
import {Route, Switch} from "react-router-dom";
import About from "./About";
import styles from '../styles/app.module.scss'
import Nav from "./Nav";
import MainWindow from "./MainWindow";

const App: React.FC =()=> {
    return (
        <div className={styles.app_wrapper}>

                <Nav/>
                <Switch>
                    <Route exact path='/' component={MainWindow}/>
                    <Route path='/about' component={About}/>
                </Switch>

        </div>


    );
}

export default App;
