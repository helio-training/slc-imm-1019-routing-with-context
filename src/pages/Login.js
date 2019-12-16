import React from 'react'
import {
    useHistory,
    useLocation
} from "react-router-dom";
import { AuthContext } from '../context/auth-context'

export const Login = () => {
    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };
    let login = (event, contextFunc) => {
        event.preventDefault()
        contextFunc(() => {
            history.replace(from);
        });
    };
    
    return (
        <AuthContext.Consumer>
            {({ authenticate }) =>(
                    <form onSubmit={(event) => login(event, authenticate)}>
                        <input type="text" placeholder="Username" />
                        <input type="password" placeholder="Password" />
                        <input type="submit" />
                    </form>
                )
            }
        </AuthContext.Consumer>
    )
}