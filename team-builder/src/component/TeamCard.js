import React from 'react';

const TeamCard = (props) => {

    return (
        props.userInfo.map(person =>(<RenderTeam key={person.email} person={person}/>) )
    );
}

function RenderTeam({person}){
const {name, email, role} = person;
return(

    <div className="team-members">
        <div>Name: {name}</div>
        <div>Email: {email}</div>
        <div>Role: {role}</div>
        <button>Edit</button>
        </div>   
    )

};

export default TeamCard;