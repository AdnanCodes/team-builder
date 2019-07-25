import React from 'react';

const TeamCard = (props) => {

    return (
        props.userInfo.map((person,index) =>(<RenderTeam key={index} person={person} editButton={props.setEdit}/>) )
    );
}

function RenderTeam(props){
const {name, email, role} = props.person;

return(

    <div className="team-member">
        <div>Name: {name}</div>
        <div>Email: {email}</div>
        <div>Role: {role}</div>
        <button onClick={()=> props.editButton(props.person)}>Edit</button>
    </div>   
    )

};

export default TeamCard;