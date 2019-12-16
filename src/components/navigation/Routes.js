import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom' 
import PrivateRoute from './PrivateRoute'
import { Login } from '../../pages/Login'
import { AuthContext } from '../../context/auth-context'

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
                <PrivateRoute path="/protected2">
                    <Protected2Page />
                </PrivateRoute>
                <Route path="/protected3">
                    <Protected3Page>
                        <div>Hello From 3</div>
                    </Protected3Page>
                </Route>
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

function Protected2Page() {
    return <h3>Protected 2 Page</h3>
}

function Protected3Page({ children, ...rest }) {
    return <AuthContext.Consumer>
        {({ isAuthenticated }) => (
            <Route
                {...rest}
                render={({ location }) =>
                    isAuthenticated ? (
                        children
                    ) : (
                            <Redirect
                                to={{
                                    pathname: "/login",
                                    state: { from: location }
                                }}
                            />
                        )
                }
            />
        )
        }
    </AuthContext.Consumer>
}