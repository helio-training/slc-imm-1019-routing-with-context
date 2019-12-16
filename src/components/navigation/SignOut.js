import React from 'react'
import { useHistory } from "react-router-dom";

import { fakeAuth } from '../../pages/index'
 
function SignOut() {
    let history = useHistory();

    return fakeAuth.isAuthenticated ? (
        <p>
            Welcome!{" "}
            <button
                onClick={() => {
                    fakeAuth.signout(() => history.push("/"));
                }}
            >
                Sign out
      </button>
        </p>
    ) : (
            <p>You are not logged in.</p>
        );
}

export default SignOut;