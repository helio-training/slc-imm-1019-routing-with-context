import React from 'react'
import { Switch, Route } from 'react-router-dom' 
import PrivateRoute from './PrivateRoute'
import { Login } from '../../pages/Login'

export const Routes = () => {
    
    return (
        <div>
            <Switch>
                <Route path="/public">
                    <PublicPage />
                </Route>
                <Route path="/login">
                    <Login/>
                </Route>
                <PrivateRoute path="/protected">
                    <ProtectedPage />
                </PrivateRoute>
            </Switch>
        </div>
    )
}

function PublicPage() {
    return <h3>Public</h3>;
}

function ProtectedPage() {
    return <h3>Protected Page</h3>
}