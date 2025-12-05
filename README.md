# Amazon ( React JS )

## Feature : Search input field with a dropdown for suggested options

1. Add an input field to the center of the navbar
2. Display suggestions when users search for a specific item

---

**1. Add an input field to the center of the navbar**

`Created a search component named "NavbarSearchInput.jsx".`

- Developed a Bootstrap input field with a Bootstrap search icon. 
- Utilized flex concepts to center the input field.
![Navbar with search input field](./src/assets/githubimgs/searchinput.png)

---

**2. Display suggestions when users search for a specific item**

To provide display suggestions, we use the DummyJSON API:

`https://dummyjson.com/products/search?q=phone`

- The term "phone" is a search keyword.
- When a user inputs a product keyword, the API suggests relevant products. 
- The user entered keyword replace in the place of "phone" keyword.
- We retrieve some products from that API.
- Using the map function, we extract all the product titles and display them.
- Whenever the user logs in, the product titles was displayed.
- **Usernot Logged In:**
![Navbar with search input field](./src/assets/githubimgs/usernotloggedin.png)

- **User Logged In:**
![Navbar with search input field](./src/assets/githubimgs/afterLoggedIn.png)