import React, {Component, useState, useEffect} from "react";
import { createStore } from 'redux';
import "../scss/style.scss";

function Portal() {

    const [angle, setAngle] = useState('');
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
    const normalizeAngle = (angle) => angle >= 360 ? angle-Math.floor(angle/360)*360 : angle;
    const normalizeRadian = (radian) => radian >= 6.28 ? radian-Math.floor(radian/6.28)*6.28 : radian;
    const isNormalizeDisabled = (angle) => angle <= 360;

    const normalize = ()=>{
      setAngle(normalizeAngle(angle));
      setRadian(normalizeRadian(radian));
    };

    return (
        <div>
            <Stopien angle={roundNumber(angle)} handleChange={(angle)=>handleChangeAngle(angle)}/>
            <Radian radian={roundNumber(radian)} handleChange={(radian)=>handleChangeRadian(radian)}/>
            <div>Kat mniejszy niz 90? : {checkIf90(angle)}</div>
            <button onClick={()=>normalize()} disabled={isNormalizeDisabled(angle)}>Normalize</button>
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
        <input type='number' value={angle} onChange={(e)=>handleChange(e.target.value)} onClick={(e)=>selectText(e)}/>
    );
}

function selectText(e) {
    e.target.select();
}

export default Portal;