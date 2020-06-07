import React from 'react'

const DisplayUser = (props) => {
    const [user, setUser] = React.useState({});

     const fetchData=async ()=>{
        const { id } = props.match.params;
        const response = await fetch("http://localhost:8000/users/" + id);
        const user = await response.json();
        setUser(user);
    }

    React.useEffect(() => {
        fetchData();
      }, []);
    return (
        <ul>
            <li>Id: {user.id}</li>
            <li>Name: {user.name}</li>
            <li>Email: {user.email}</li>
            <li>Role: {user.role}</li>
        </ul>
    )
}

export default DisplayUser
