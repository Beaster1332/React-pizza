import React from "react";
import Header from '../Header/Header.jsx';
import ItemsFieldContainer from "../ItemsField/ItemsFieldContainer.jsx";
import classes from './App.module.css';

const App = () => {
    return <div className={classes.container}>
        <Header />
        <ItemsFieldContainer />
    </div>
}

export default App;
