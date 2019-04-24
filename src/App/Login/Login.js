import React from "react";
import { validateUserName, ValidatePassWord } from "../Acess/Access";
import { setLocalState } from "../Acess/local";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      passWord: "",
      errorEmail: "",
      errorPassword: "",
      error: ""
    };
  }
  OnclickHandle = () => {
    const { userName, passWord } = this.state;
    if (userName && passWord) {
      let userState = validateUserName(userName);
      let passState = ValidatePassWord(passWord);
      console.log("state", userState, passState);
      if (userState.status && passState.status) {
        setLocalState({ email: userName, password: passWord });
        this.props.dispatch({ type: "login", login: true });
        this.setState({
          error: ""
        });
      } else {
        this.setState({
          errorEmail: userState.message,
          errorPassword: passState.message,
          error: ""
        });
      }
    } else {
      this.setState({ error: "enter username and password" });
    }
  };
  render() {
    console.log("props of login", this.props);
    return (
      <div className="Login">
        <div className="form">
          <div className="userName">
            <label className="label">Name</label>
            <input
              onChange={e => {
                console.log(e.target.value);
                this.setState({ userName: e.target.value });
              }}
              type="text"
            />
            <div className="error" style={{ color: "red" }}>
              {this.state.errorEmail ? (
                <span>{this.state.errorEmail}</span>
              ) : null}
            </div>
          </div>
          <div className="password">
            <label className="label">password</label>
            <input
              onChange={e => {
                console.log(e.target.value);
                this.setState({ passWord: e.target.value });
              }}
              type="password"
            />
            <div className="error" style={{ color: "red" }}>
              {this.state.errorPassword ? (
                <span>{this.state.errorPassword}</span>
              ) : null}
            </div>
          </div>
          <div className="error" style={{ color: "red" }}>
            {this.state.error ? <span>{this.state.error}</span> : null}
          </div>
          <div className="submitButton">
            <button className="submitIt" onClick={this.OnclickHandle}>
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
