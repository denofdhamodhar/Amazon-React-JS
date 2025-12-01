# Amazon ( React JS )

## Feature : CreateAccountfn + LoginPagefn

- Axios center 
- Auto fetch login data
- JWT token setup with localStorage
- Validate token
- Secure login and logout functionlaity

<hr>

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
    - authService.js ( Authentication service means login  and signup api's call done from here )

<hr>

**2. Auto fetch login data and JWT token setup with LocalStorage**

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


