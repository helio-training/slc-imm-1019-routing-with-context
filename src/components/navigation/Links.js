import React from 'react'
import { Link } from "react-router-dom";

export const Links = () => {
    
    return (
        <div>
            <ul>
                <li>
                    <Link to="/public">Public Page</Link>
                </li>
                <li>
                    <Link to="/protected">Protected Page</Link>
                </li>
                <li>
                    <Link to="/protected2">Protected Page</Link>
                </li>
                <li>
                    <Link to="/protected3">Protected Page</Link>
                </li>
            </ul>
        </div>
        )
}

