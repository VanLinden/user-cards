import React from 'react';
// import Pagination from '../components/Pagination';

import UserContext from './user-context';

const GlobalState = props => {
  const users = [
        {id: 1, firstName: "Andrey", lastName: "Bluth", email: "Bluth@gmil.com",},
        {id: 2, firstName: "Robert", lastName: "Weaver", email: "Weaver@gmil.com"},
        {id: 3, firstName: "Maria", lastName: "Vonnegut", email: "Vonnegut@gmil.com"},
        {id: 4, firstName: "Emma", lastName: "Psachy", email: "Psachy@gmil.com"},
        {id: 5, firstName: "James", lastName: "Shmidt", email: "Shmidt@gmil.com"},
        {id: 6, firstName: "Henry", lastName: "Jhonson", email: "Jhonson@gmil.com"},
        {id: 7, firstName: "Olivia", lastName: "Gert", email: "Gert@gmil.com"},
        {id: 8, firstName: "Alexander", lastName: "Birman", email: "Birman@gmil.com"},
        {id: 9, firstName: "Charlotte", lastName: "Lids", email: "Lids@gmil.com"},
        {id: 10, firstName: "Victor", lastName: "Wolf", email: "Wolf@gmil.com"},
        {id: 11, firstName: "Anna", lastName: "Gorrea", email: "Gorrea@gmil.com"},
        {id: 12, firstName: "Liza", lastName: "Duttar", email: "Duttar@gmil.com"},
        {id: 13, firstName: "Catrin", lastName: "Goneth", email: "Goneth@gmil.com"},
        {id: 14, firstName: "Irina", lastName: "Ludiv", email: "Ludiv@gmil.com"},
        {id: 15, firstName: "Karl", lastName: "Satteron", email: "Satteron@gmil.com"},
        {id: 16, firstName: "Vera", lastName: "Anderson", email: "Anderson@gmil.com"},
        {id: 17, firstName: "Daria", lastName: "Moreff", email: "Moreff@gmil.com"},
        {id: 18, firstName: "Peter", lastName: "Tubasson", email: "Tubasson@gmil.com"},
        {id: 19, firstName: "Julia", lastName: "Titmus", email: "Titmus@gmil.com"}
      ];

return (
        <UserContext.Provider
            value={{
                users: users
            }}
        >
            {props.children}
        </UserContext.Provider>
    );
}

export default GlobalState;