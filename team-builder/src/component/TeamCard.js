import React from 'react';

const TeamCard = (props) => {

    return (
        props.userInfo.map((person,index) =>(<RenderTeam key={index} person={person}/>) )
    );
}

function RenderTeam({person}){
const {name, email, role} = person;
return(

    <div className="team-members">
        <div>Name: {name}</div>
        <div>Email: {email}</div>
        <div>Role: {role}</div>
        <button onClick>Edit</button>
        </div>   
    )

};

export default TeamCard;