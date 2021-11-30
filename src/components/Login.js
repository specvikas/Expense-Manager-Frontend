import React from 'react';
import '../styles/Login.css';
import { useAuth0 } from '@auth0/auth0-react';

const Login = () => {

    const { loginWithRedirect, isAuthenticated } = useAuth0();

    return (
        !isAuthenticated && (
            <div className="box">
                <h1>Expense Manager</h1>
                <button onClick={() => loginWithRedirect()} className="login-btn"> 
                    Log In
                </button>
            </div>
        )
    );
};

export default Login;