# FoodBay

## Overview

This GitHub repository hosts the source code for a MERN (MongoDB, Express.js, React, Node.js) stack food ordering application with user authentication, signup/login, and seamless add-to-cart and place order functionalities.

### Features

- **User Authentication:** Users can create accounts, login, and access the platform securely.
- **Data Validation:** Implemented user data validation using Express-Validator to ensure data integrity during registration and login processes.
- **Password Security:** Enhanced security by utilizing bcrypt.js to securely store hashed versions of user passwords in the database, ensuring protection against unauthorized access.
- **JWT Authentication:** Implemented JSON Web Token (JWT) authentication, generating an authentication token upon successful user login, which is used for subsequent user validation during sessions.
- **Add to Cart:** Utilized React's `useContext` and `useReducer` methods to implement an efficient "Add to Cart" functionality, providing users with a seamless shopping experience.
- **Place Order:** Users can place orders with ease, and the application handles order processing.

## Link to FoodBay

[FoodBay](https://foodbay.netlify.app/)
