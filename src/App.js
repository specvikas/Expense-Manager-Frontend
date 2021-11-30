import './App.css';
import React from 'react';
import Login from './components/Login';
import ExpenseManager from './components/expenseManager';
import { useAuth0 } from '@auth0/auth0-react';

function App() {

  const { isLoading } = useAuth0();

  if(isLoading) {
    return (
      <div>
        Loading....
      </div>
    )
  }

  return (
    <div>
      <div className="login-box">
        <Login />
      </div>
      <ExpenseManager />
    </div>
  );
}

export default App;
