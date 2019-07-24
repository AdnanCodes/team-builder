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
const [user, setUser] = useState(
  {
      name:"",
      email:"",
      role:'',
  }
)
function handleSubmit(event){
  event.preventDefault();
  setTeamUser(teamUser.push(user))
  console.log('Users in the house',teamUser)

}

function handleChange(event){
  const newUser = {...user,[event.target.name]: event.target.value};
  //Adding new user
  setUser(newUser);
  console.log(user)
}

  const [teamUser, setTeamUser]=useState(teamMembers)
  const {memberToEdit, setMemberToEdit}=useState({})
  return (
    <div className="App">
      <Form handleChange={handleChange} handleSubmit={handleSubmit}/>
      <TeamCard userInfo={teamUser}/>
    </div>
  );
}

export default App;
