import React from "react";
import Login from "../Login/Login.container";

import { loadLocalState, setLocalState } from "../Acess/local";

class MainApp extends React.Component {
  componentDidMount() {
    console.log("componentDidMount");
    if (!loadLocalState()) {
      // this.props.history.push({ path: "/login" });
    }
  }
  componentDidUpdate() {
    console.log("componentDidMount");
    if (!loadLocalState()) {
      // this.props.history.push({ path: "/login" });
    }
  }
  render() {
    console.log("props", this.props, loadLocalState);
    if (!this.props.login && !loadLocalState()) {
      return <Login />;
    }

    return (
      <div>
        <div style={{ float: "left" }}>
          <button
            onClick={() => {
              setLocalState("");
              this.props.loginAction(false);
            }}
          >
            Logout
          </button>
        </div>
      </div>
    );
  }
}
export default MainApp;
