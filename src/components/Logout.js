import React from 'react';
import '../styles/Logout.css';
import { useAuth0 } from '@auth0/auth0-react';

const Logout = () => {

    const { logout, user, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            <div className="logout-btn">
                <h2>{user.name}</h2>
                <button onClick={() => logout()}>
                    Log Out
                </button>
            </div>
        )
    );
};

export default Logout;