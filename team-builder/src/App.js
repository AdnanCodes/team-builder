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
        email:"dar@lambda.com",
        role:"Cool guy"
    }
]

  const [teamUser, setTeamUser]=useState(teamMembers)
  const [memberToEdit, setMemberToEdit]=useState(null)

  return (
    <div className="App">
      <Form userInfo={teamUser} modifyUser={setTeamUser} editMember={memberToEdit}/>
      <div className='team-members'><TeamCard userInfo={teamUser} setEdit={setMemberToEdit}/></div>
    </div>
  );
}

export default App;
