import React, { useState } from 'react';
import './App.css';

import Form from './component/Form'
import TeamCard from './component/TeamCard';

function App() {
  const teamMembers =[
    {
        name:"Adnan",
        email:"adnan@lambda.com",
        role:"Full-Stack Developer"
    },
    {
        name:"Elijah",
        email:"elijah@lambda.com",
        role:"Front-End Engineer"
    },
    {
        name:"Darien",
        email:"dar@lambda.com"
    }
]

  const [teamUser, setTeamUser]=useState(teamMembers)

  return (
    <div className="App">
      <Form userInfo={teamUser} modifyUser={setTeamUser}/>
      <TeamCard userInfo={teamUser}/>
    </div>
  );
}

export default App;
