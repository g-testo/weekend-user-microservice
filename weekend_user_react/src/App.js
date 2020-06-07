import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./components/Home";
import DisplayUsers from "./components/DisplayUsers";
import DisplayUser from "./components/DisplayUser";
import UserForm from "./components/UserForm";


const App=()=> {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/form">Create User</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/users/update/:id" render={ props =><UserForm type="update" {...props} />} />
          <Route path="/users/:id" component={DisplayUser} />
          <Route path="/users" component={DisplayUsers} />
          <Route path="/form" render={()=><UserForm type="create" />} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;