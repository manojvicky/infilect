import Data from "../data/data";
export function loadLocalState() {
  try {
    const user = localStorage.getItem("user");
    if (user) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log("error in loading", error);
  }
}

export function setLocalState(user) {
  try {
    const setState = JSON.stringify(user);
    Data.push(user);
    localStorage.setItem("state", setState);
  } catch (error) {
    console.log("error in saving", error);
  }
}
