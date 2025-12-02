# Amazon ( React JS )

## Feature : CreateAccountfn + LoginPagefn

- Axios center
- Auto fetch login data
- JWT token setup with localStorage
- Validate token
- Secure login and logout functionlaity

---

**1. Axios Center**

`npm i axios`

axiosInstance :

- To aviod multiple times writing common domain url or base url uses axiosInstance.
- We can capture every api and we can handle (req + res) it.
- Here we can add tokens in request api call headers and we can get the data in response api call

<br>

_Here every api call move from axiosInstance_

    a. const axiosInstance = axios.create({})
    b. baseUrl : "comman url or domain url"
       timeout : " 15000 " It is in millisec 15sec

Folder structure after setup axios center

![alt text](./src/assets/githubimgs/image.png)

- axios folder setup axios center > axiosInstance.js
- constants folder
  - api.js ( here axiosInstance variables created in obj )
  - endPoints ( here endPoints variables created in obj )
- service folder
  - authService.js ( Authentication service means login and signup api's call done from here )

---

**2. Auto fetch login data and 3. JWT token setup with LocalStorage**

CreateAccount.jsx uses useEffect to auto fetch the login data details

```
let userdata = {
    username: "emilys",
    password: "emilyspass",
  };

  useEffect(() => {
    async function fetchdata() {
      try {
        //here loginfn created using axios instance
        let response = await login(userdata);
        if (response != undefined) {
          localStorage.setItem("userData", JSON.stringify(response.data));
          localStorage.setItem(
            "accessToken",
            JSON.stringify(response.data.accessToken) // token setup
          );
        }
      }
       catch (error) {
        console.error(error);
      }
    }
    fetchdata();

  }, []);

```

---

**4. Validate token**

- We have implemented token generation during account creation.
- The token is stored in either cookies or localStorage.
- Upon login requests, the token is validated to authenticate the user.

```
let token = localStorage.getItem(API_CONFIG.TOKEN);
    if(token){
        req.headers[API_CONFIG.AUTHORIZATION]  = `${API_CONFIG.BEARER} ${token}`;
    }
    return req
```
```
    if (hasErrors == false) {
      let token = localStorage.getItem("accessToken");
      if (
        token != undefined &&
        userLoginData.username === "emilys" &&
        userLoginData.password === "emilyspass"
      ) {
        async function fetchUserData() {
          try {
            let response = await login();
            localStorage.setItem("status", response.status)
            if (response.status == 200) {
              window.location = "/";
            }
          } catch (error) {
            console.log(error);
          }
        }
        fetchUserData();
      } else {
        // console.error("Your account was not found"); 
        setLoginErrorMsg("Your account was not found!! Click on create account or enter correct login details")
      }
    }

```
---
**5. Secure login and logout functionlaity**

- After validate login credentials with token we can get a status code
- If status code present display userprofile and logout option
- To perform logout here we clear the localStorage data
