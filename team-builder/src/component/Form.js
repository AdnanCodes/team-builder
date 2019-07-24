import React from 'react';

const Form = () => {
    return (

        <form>
            <label>
                Username:
      <input type="text" id="name" name="name" />
            </label>
            <label>
                Motto:
      <input type="text" id="name" name="motto" />
            </label>
            <button type="submit">Submit!</button>
        </form>
    );
}

export default Form;
