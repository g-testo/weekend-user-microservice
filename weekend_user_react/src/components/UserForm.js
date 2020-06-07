import React from 'react';
import { useHistory } from 'react-router-dom'

function UserForm(props) {
    const [name, setName] = React.useState();
    const [email, setEmail] = React.useState();
    const [role, setRole] = React.useState();
    let history = useHistory();

    const fetchData=async ()=>{
        const response = await fetch("http://localhost:8000/users/" + props.match.params.id);
        const user = await response.json();
        setName(user.name);
        setEmail(user.email);
        setRole(user.role);
    }
    const clearData=()=>{
        setName("");
        setEmail("");
        setRole("");
    }
    React.useEffect(()=>{
        if(props.type === "update") fetchData();
    }, [])

    React.useEffect(()=>{
        if(props.type === "create") clearData();
    }, [props.type])

    const handleSubmit =async()=>{
        const dataObj = {
            name,
            email,
            role
        }
        let method = props.type === "create" ? "POST" : "PUT";

        let url = "http://localhost:8000/users/";

        if(props.type === "update") url += props.match.params.id;

        await fetch(url, {
            method: method,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dataObj)
        })
        clearData();
        history.push("/users");
    }

    return (
        <div>
            <h1>{props.type==="create" ? "Create New User" : "Update User"}</h1>

            <input type="text" value={name} placeholder="name" onChange={(e)=>setName(e.target.value)} />
            <input type="email" value={email} placeholder="email" onChange={(e)=>setEmail(e.target.value)} />
            <input type="text" value={role} placeholder="role" onChange={(e)=>setRole(e.target.value)} />

            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}
UserForm.defaultProps = {
    type:"create"
}

export default UserForm;