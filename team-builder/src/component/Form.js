import React, { useState } from 'react';

//Props passed from app are: userInfo(state) and modifyUser(setState)

const Form = (props) => {

    return (

        <form onSubmit={event => props.handleSubmit(event)}>
            <label>
                Name:
      <input type="text" id="name" name="name" onChange={event => props.handleChange(event)}/>
            </label>
            <label>
                E-Mail:
      <input type="email" id="name" name="email" onChange={event => props.handleChange(event)}/>
            </label>
            <label>
                Role:
      <input type="text" id="name" name="role" onChange={event => props.handleChange(event)}/>
            </label>
            <button type="submit">Dont Submit, THIS IS BUGGY STILL!</button>
        </form>
    );
}

export default Form;
