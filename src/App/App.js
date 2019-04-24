import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainApp from "./mainApp/mainApp.container";
import Login from "./Login/Login";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route excat path="/" component={MainApp} />
          {/* <Route path="/login" component={Login} /> */}
        </Switch>
      </Router>
    </div>
  );
}
export default App;
