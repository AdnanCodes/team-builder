import React from 'react';

const Form = () => {
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
