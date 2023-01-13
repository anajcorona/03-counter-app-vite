import React from 'react';
import ReactDOM from 'react-dom/client';
//import { FirstApp } from './FirstApp';
//import { HelloWorldApp } from './HelloWorldApp';
import './styles.css';
import {CounterApp} from './CouterApp';

ReactDOM.createRoot( document.getElementById("root")).render(    
    <React.StrictMode>
        <CounterApp  value={ 26 }/>
        {/* <FirstApp title='Hola soy Ana'/> */}
        {/* <HelloWorldApp /> */}
    </React.StrictMode>
);
