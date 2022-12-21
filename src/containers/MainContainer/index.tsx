import React from 'react';
import style from './style.module.scss'
import '../../styles/import.scss';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomeScreen from "../../screens/Home";


function MainContainer() {
    return (
        <div className={style.mainContainer}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomeScreen />}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default MainContainer;
