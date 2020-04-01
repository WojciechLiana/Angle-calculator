import React, {Component, useState, useEffect} from "react";
import { createStore } from 'redux';
import "../scss/style.scss";

function Portal() {

    const [angle, setAngle] = useState(0);
    const [radian, setRadian] = useState('');

    const calcToRadian = (angle) => setRadian(angle/180*Math.PI);
    const calcToAngle = (radian) => setAngle(radian*180/Math.PI);

    const handleChangeAngle = (angle) => {
        setAngle(angle);
        calcToRadian(angle);
    };

    const handleChangeRadian = (radian) => {
        setRadian(radian);
        calcToAngle(radian);
    };

    const checkIf90 = (angle) => angle < 90 ? 'TAK': 'NIE';
    const roundNumber = (number)=>Math.round(number*Math.pow(10, 2))/Math.pow(10, 2);
    const normalize = (angle) => angle >= 360 ? angle-Math.floor(angle/360)*360 : angle;


    return (
        <div>
            <Stopien angle={roundNumber(angle)} handleChange={(angle)=>handleChangeAngle(angle)}/>
            <Radian radian={roundNumber(radian)} handleChange={(radian)=>handleChangeRadian(radian)}/>
            <div>Kat mniejszy niz 90? : {checkIf90(angle)}</div>
            <button onClick={()=>setAngle(normalize(angle))}>Normalize</button>
        </div>

    );
}

function Stopien({angle, handleChange}) {
    return(<div>Stopnie: <Display angle={angle} handleChange={(angle)=>handleChange(angle)}/></div>);
}

function Radian({radian, handleChange}) {
    return(<div>Radiany: <Display angle={radian} handleChange={(radian)=>handleChange(radian)}/></div>);
}

function Display({angle, handleChange}){
    return(
        <input value={angle} onChange={(e)=>handleChange(e.target.value)}/>
    );
}


export default Portal;