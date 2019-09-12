import React from 'react';
import ReactDOM from 'react-dom';
import {MemberProfile} from './memberProfile'
import {TrainersList} from "./trainersList";

document.addEventListener('DOMContentLoaded', function (event) {
//-----------------------------------------------------------------------//
    ReactDOM.render(
    <MemberProfile/>, document.getElementById('memberProfile'));
    ReactDOM.render(
    <TrainersList/>, document.getElementById('trainersList'))
//-----------------------------------------------------------------------//
});

