import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';

function ToggleButton(){

    const [color,setColor]=useState('blue');

    const colorMode={
        background:color,
        textAlign:'center'
    }

    return (
        <>
        <div style={colorMode}>
            <header>
            <img src={logo}  alt="logo" />
            <p>
                Basic Toggle Color App
            </p>
            
            </header>

            {
                color === 'blue' ?
                <button onClick={()=>setColor('black')}>Toggle Black</button> :
                <button onClick={()=>setColor('blue')}>Toggle Blue</button> 
            }
        </div>
           
        </>
    );
}

export default ToggleButton;