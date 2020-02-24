import { userConstants } from "../constants";
import { userService } from "../services";
import { history } from "../helpers";

export const userActions = {
  login
};

function login(username, password) {
  console.log(username);
  return dispatch => {
    dispatch(request({ username }));
    userService.login(username, password).then(
      user => {
        dispatch(success(user));
        history.push("/");
      },
      error => {
        dispatch(failure(error.toString()));
        //dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request(user) {
    return { type: userConstants.LOGIN_REQUEST, user };
  }
  function success(user) {
    return { type: userConstants.LOGIN_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.LOGIN_FAILURE, error };
  }
}
