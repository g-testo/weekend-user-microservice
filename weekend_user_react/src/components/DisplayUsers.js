import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

const Users = () => {
    const [users, setUsers] = useState([]);

    const fetchUsers = async()=>{
        let res = await fetch("http://localhost:8000/users");
        let users = await res.json();
        setUsers(users);
    }

    const deleteUser=async(id)=>{
        await fetch("http://localhost:8000/users/" + id, {
            method: "DELETE"
        });
        fetchUsers();
    }

    useEffect(()=>{
        fetchUsers();
    }, []);
    
    let userElArr = users.map((user, index)=>{
        return( 
            <ul key={index}>
                
                    <li>Id: {user.id}</li>
                    <li>Name: {user.name}</li>
                    <li>Email: {user.email}</li>
                    <li>Role: {user.role}</li>
                    <li><Link to={"/users/" + user.id}>See User</Link></li>
                    <li><Link to={"/users/update/" + user.id}>Update</Link></li>
                    <button onClick={()=>deleteUser(user.id)}>Delete</button>
            </ul>
        )
    })

    return (
        <div>
            { userElArr }
        </div>
    )
}

export default Users;
