# Amazon ( React JS )

## Feature : A search button along with a dropdown box that includes functionality.

- Insert input field in the middle of navbar
- Whenever user search display suggestions


---

**1. Insert input field in the middle of navbar**

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
