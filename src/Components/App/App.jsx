import React from "react";
import HeaderContainer from "../Header/HeaderContainer.jsx";
import ItemsFieldContainer from "../ItemsField/ItemsFieldContainer.jsx";
import classes from './App.module.css';

const App = () => {
    return <div className={classes.container}>
        <HeaderContainer />
        <ItemsFieldContainer />
    </div>
}

export default App;
