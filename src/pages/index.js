import React from 'react'
import { Links } from '../components/navigation/Links'
import { Routes } from '../components/navigation/Routes'
import SignOut from '../components/navigation/SignOut'

export default () => {
     
    return (
        <div>
            <SignOut/>
            <Links/>
            <Routes/>
        </div>
    )
}

export const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
        fakeAuth.isAuthenticated = true;
        setTimeout(cb, 100); // fake async
    },
    signout(cb) {
        fakeAuth.isAuthenticated = false;
        setTimeout(cb, 100);
    }
};