import React, { useState } from 'react';

//Props passed from app are: userInfo(state) and modifyUser(setState)

const Form = (props) => {
    const [user, setUser] = useState(
        {
            name:"",
            email:"",
            role:'',
        }
    )
    function handleSubmit(event){
        event.preventDefault();
        props.modifyUser(props.userInfo.push(user))
        console.log('Users in the house', props.userInfo)

    }
    
    function handleChange(event){
        const newUser = {...user,[event.target.name]: event.target.value};
        //Adding new user
        setUser(newUser);
        console.log(user)
    }



    return (

        <form onSubmit={handleSubmit}>
            <label>
                Name:
      <input type="text" id="name" name="name" onChange={handleChange}/>
            </label>
            <label>
                E-Mail:
      <input type="email" id="name" name="email" onChange={handleChange}/>
            </label>
            <label>
                Role:
      <input type="text" id="name" name="role" onChange={handleChange}/>
            </label>
            <button type="submit">Submit!</button>
        </form>
    );
}

export default Form;
