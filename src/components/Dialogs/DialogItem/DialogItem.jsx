import React from 'react';
import s from './../Dialogs.module.css'
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let path = "/dialog/" + props.id;
    return <div className={s.dialog + ' ' + s.active}>
        <img src='https://i.pinimg.com/736x/23/86/e3/2386e3023848e6754b8f0ad9597676a7.jpg' /> 
        <NavLink to={path}> {props.name} </NavLink>
        
    </div>
}

export default DialogItem;