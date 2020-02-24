export const userService = {
  login
};

function login(username, password) {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    //body: JSON.stringify({ loginName: username, password: password })
    body: JSON.stringify({
      loginName: username,
      password: "e10adc3949ba59abbe56e057f20f883e"
    })
  };

  return fetch(
    `http://qa.beetlesoft.lk:8055/online-shop/admin_service/login`,
    requestOptions
  )
    .then(handleResponse)
    .then(user => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem("user", JSON.stringify(user));
      console.log(localStorage);
      return user;
    });
}

function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        //logout();
        //location.reload(true);
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}
