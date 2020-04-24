import React from 'react';
import { Alert, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <Alert color="warning">
        <h1>My First FullStack Contact Management Application!</h1>
      </Alert>
      <Alert color="light">
      <Link to="/contactlist"><Button outline color="primary"><h4>Show Contact List</h4></Button></Link>{'   '}
      <Link to="/addcontact"><Button color="primary"><h4>Add New Contact</h4></Button></Link>
      </Alert>
    </div>
  );
}

export default App;
