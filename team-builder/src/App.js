import React, { useState } from 'react';
import './App.css';

import Form from './component/Form'
import TeamCard from './component/TeamCard';

function App() {
  const [teamUser, setTeamUser]=useState({name:"",email:"",role:""})

  return (
    <div className="App">
      <Form userInfo={teamUser} modifyUser={setTeamUser}/>
      <TeamCard/>
    </div>
  );
}

export default App;
