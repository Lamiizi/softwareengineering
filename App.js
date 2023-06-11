import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RegistrationForm from './RegistrationForm';
import LoginPage from './LoginPage';
import DashboardPage from './DashboardPage';
import StudentInfoEntryPage from './StudentInfoEntryPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={RegistrationForm} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/dashboard" component={DashboardPage} />
        <Route exact path="/student-info-entry" component={StudentInfoEntryPage} />
      </Switch>
    </Router>
  );
};

export default App;