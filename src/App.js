import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import CreateTeam from "./components/team/CreateTeam";
import CreateMessage from "./components/message/CreateMessage";
import CreateChannel from "./components/channel/CreateChannel";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/create-team" component={CreateTeam} />
          <Route path="/create-message" component={CreateMessage} />
          <Route path="/create-channel" component={CreateChannel} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
