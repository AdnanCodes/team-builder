import React, { useState } from 'react';
import './App.css';

import Form from './component/Form'

function App() {
  const [teamUser, setTeamUser]=useState({name:"",email:"",role:""})

  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
