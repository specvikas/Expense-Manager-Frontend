import Logout from './Logout';
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const ExpenseManager = () => {

    const { user, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            <div>
                <Logout />
                <pre>{JSON.stringify(user, null, 2)}</pre>
            </div>
        )
    );
};

export default ExpenseManager;