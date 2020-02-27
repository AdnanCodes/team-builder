import React, { useState } from 'react';

//Props passed from app are: userInfo(state) and modifyUser(setState)

const Form = (props) => {

  function editmember(){

  }
  const [user, setUser] = useState(
    {
      name: "",
      email: "",
      role: '',
    }
  )
  function handleSubmit(event) {
    event.preventDefault();
    props.modifyUser([...props.userInfo, user])
    //Reset the form information on screen
    setUser(    {
      name: "",
      email: "",
      role: '',
    })


  }

  function handleChange(event) {
    const newUser = { ...user, [event.target.name]: event.target.value };
    //Adding new user
    setUser(newUser);
  }
  return (

    <form onSubmit={handleSubmit}>
      <label>
        Name:
      <input type="text" id="name" name="name" onChange={handleChange} value={user.name}/>
      </label>
      <label>
        E-Mail:
      <input type="email" id="name" name="email" onChange={handleChange} value={user.email}/>
      </label>
      <label>
        Role:
      <input type="text" id="name" name="role" onChange={handleChange} value={user.role}/>
      </label>
      <button type="submit">Submit!</button>
    </form>
  );
}

export default Form;
