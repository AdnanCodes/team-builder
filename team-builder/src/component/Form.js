import React from 'react';


//Props passed from app are: userInfo(state) and modifyUser(setState)

const Form = (props) => {
    function handleSubmit(event){
        event.preventDefault();
    }
    
    function handleChange(event){
        const newUser = {...props.userInfo,[event.target.name]: event.target.value};
        //Add a user
    }



    return (

        <form>
            <label>
                Name:
      <input type="text" id="name" name="name" />
            </label>
            <label>
                E-Mail:
      <input type="email" id="name" name="email" />
            </label>
            <label>
                Role:
      <input type="text" id="name" name="role" />
            </label>
            <button type="submit">Submit!</button>
        </form>
    );
}

export default Form;
