// RCE (keyword to create class structure)
import React from 'react';
import { Link } from 'react-router-dom';

const UserItem = ({user: { login, html_url, avatar_url }}) => {

    return (
        <div className="card text-center">
            <img 
                src={avatar_url} 
                alt="" 
                className="round-img" 
                style={{ width: '60px' }} 
            />
            <h3>{login}</h3>

            <div>
                <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">MORE</Link>
            </div>
        </div>
    )
}

export default UserItem;
