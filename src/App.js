import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import AppointmentForm from './components/Appointments/AppointmentForm';
import AppointmentList from './components/Appointments/AppointmentList';
import Conference from './components/VideoConference/Conference';
import Notes from './components/Notes/Notes';
import Messages from './components/Messages/Messages';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/appointments">Appointments</Link>
            </li>
            <li>
              <Link to="/conference">Conference</Link>
            </li>
            <li>
              <Link to="/notes">Notes</Link>
            </li>
            <li>
              <Link to="/messages">Messages</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/appointments" component={AppointmentList} />
          <Route path="/create-appointment" component={AppointmentForm} />
          <Route path="/conference" component={Conference} />
          <Route path="/notes" component={Notes} />
          <Route path="/messages" component={Messages} />
          <Route path="/" render={() => <div>Home</div>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
