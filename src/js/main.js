import React from 'react';
import ReactDOM from 'react-dom';
import {MemberProfile} from './memberProfile'

//Component One Page MemberProfile
class Main extends React.Component {
    render() {
        return (
            <>
            <MemberProfile/>
            </>
        )
    }
}
document.addEventListener('DOMContentLoaded', function (event) {
//-----------------------------------------------------------------------//
    ReactDOM.render(
    <Main />, document.getElementById('memberProfile')
)
//-----------------------------------------------------------------------//
});