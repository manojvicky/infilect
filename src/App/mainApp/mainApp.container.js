import { connect } from "react-redux";
import MainApp from "./mainApp";

export default connect(
  state => {
    return {
      login: state.login
    };
  },
  dispatch => {
    return {
      loginAction: login => {
        dispatch({ type: "login", login });
      }
    };
  }
)(MainApp);
