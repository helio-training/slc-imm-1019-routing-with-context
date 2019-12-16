import React, { useState } from 'react'
import {
    useHistory,
    useLocation
} from "react-router-dom";

import { fakeAuth } from './index'

export const Login = () => {
    // const [state, setState] = useState({InitialState})
    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };
    let login = (event) => {
        event.preventDefault()
        fakeAuth.authenticate(() => {
            history.replace(from);
        });
    };
    
    return (
        <div>
            <form onSubmit={login}>
                <input type="text" placeholder="Username"/>
                <input type="password" placeholder="Password"/>
                <input type="submit"/>
            </form>
        </div>
    )
}