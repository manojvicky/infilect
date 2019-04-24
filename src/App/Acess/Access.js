import data from "../data/data";
export function validateUserName(value) {
  const regex4UserName = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!regex4UserName.test(value)) {
    return {
      status: false,
      message: "email has wrong format"
    };
  }
  if (data.some(item => item.email === value)) {
    return {
      status: true,
      message: ""
    };
  } else {
    return {
      status: false,
      message: "email id is not correct"
    };
  }
}
export function ValidatePassWord(value) {
  if (value.length < 6) {
    return {
      status: false,
      message: "password is less than 5"
    };
  }
  if (data.some(item => item.password === value)) {
    return {
      status: true,
      message: ""
    };
  } else {
    return {
      status: false,
      message: "password is not correct"
    };
  }
}
