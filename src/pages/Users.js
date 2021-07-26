import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Pagination from '../components/Pagination';
import './Products.css';
import UserContext from '../context/user-context';

const Users = props => {
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage] = useState(5);

    let users = Object.values(useContext(UserContext))[0];

    // Get current users
    const indexOfLastPost = currentPage * usersPerPage;
    const indexOfFirstPost = indexOfLastPost - usersPerPage;
    const currentUsers = users.slice(indexOfFirstPost, indexOfLastPost);
    console.log('currentUsers', currentUsers)

    // Change page
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
}

    return (
        <div>
            <ul className='list-group mb-4'>
                {currentUsers.map(user => (
                    <li key={user.id} className='list-group-item' style={{ padding: "0 15px 0 15px" }}>
                        <div>
                            {user.firstName} {user.lastName}
                            <NavLink style={{ float: "right" }} to={{ pathname: "/UserCard", 
                            aboutProps: { id: user.id, firstName: user.firstName, lastName: user.lastName, email: user.email, avatar: user.avatar } }}>Card</NavLink>
                        </div>
                    </li>
                ))}
            </ul>
            <Pagination
                usersPerPage={usersPerPage}
                totalUsers={users.length}
                paginate={paginate}
            />
        </div>
    );
};

export default Users;
