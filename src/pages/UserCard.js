import React from 'react';
import './UserCard.css';
import { NavLink } from 'react-router-dom';

const UserCard = props => {
console.log('aboutProps:', props.location.aboutProps)
  return (
      <div className="user-card">
          <div style={{ textAlign: 'center' }}>User Card</div>
          <NavLink to="/" style={{float: "right", marginTop: "-25px"}}>X</NavLink>

          <div className="cardItems">
            First name: <span>{props.location.aboutProps.firstName}</span>
          </div>
          <div className="cardItems">
            Last name: <span>{props.location.aboutProps.lastName}</span>
          </div>
          <div className="cardItems">
            Email: <span>{props.location.aboutProps.email}</span>
          </div>
          <img className="cardimage" src={'/Avatars/' + props.location.aboutProps.id + '.png'} alt='userImage'></img>
      </div>
  )
}

export default UserCard
