import React, {useState, useEffect} from 'react'

const Users = () => {
    const [users, setUsers] = useState([]);

    const fetchUsers = async()=>{
        let res = await fetch("http://localhost:8000/users");
        let users = await res.json();
        setUsers(users);
    }

    useEffect( async ()=>{
        fetchUsers();
    }, []);
    
    let userElArr = users.map((user, index)=>{
        return( 
            <ul key={index}>
                <li>Name: {user.name}</li>
                <li>Email: {user.email}</li>
                <li>Role: {user.role}</li>
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
