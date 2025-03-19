# User Management System

## Objective

Develop a simple RESTful API for managing users using basic CRUD (Create, Read, Update, Delete) operations. The API accepts user details such as name, email, and age, and interacts with a MongoDB database through Mongoose.

## Features

- **Create a User**: Accepts `name`, `email`, and `age` to add a new user.
- **Retrieve All Users**: Returns a list of all users.
- **Retrieve a Single User**: Fetches user details by their unique ID.
- **Update a User**: Updates the details of an existing user using their ID.
- **Delete a User**: Removes a user from the database using their ID.

## Technology Stack

- **Backend Framework**: Node.js with Express.js
- **Database**: MongoDB (using Mongoose ODM)
- **Programming Language**: JavaScript

## Setup and Installation

1. **Clone the Repository**

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Setup MongoDB**

   - Ensure you have MongoDB installed and running locally, or use a MongoDB cloud service.
   - Update your MongoDB connection string in your configuration (if applicable) to connect to your database.

4. **Start the Server**

   ```bash
   node index.js
   ```

   or if you have a start script defined in `package.json`:

   ```bash
   npm start
   ```

   The server will run on port `3000` by default, or on the port specified in your environment variables.

## Project Structure

```
.
├── index.js               // Entry point of the application
├── controllers/
│   └── userController.js  // Controller functions for user operations
├── models/
│   └── User.js            // Mongoose model for User
├── routes/
│   └── userRoutes.js      // Express routes for the User API endpoints
├── README.md              // Project documentation
└── Backend Developer Intern Assignment.pdf // Assignment details
```

## API Endpoints

### Create a User

- **URL:** `/user/create`
- **Method:** `POST`
- **Request Body:**

  ```json
  {
    "name": "",
    "email": "john@example.com",
    "age": 30
  }
  ```

- **Success Response:**

  ```json
  {
    "message": "User created successfully",
    "data": {
      "_id": "unique_user_id",
      "name": "John Doe",
      "email": "john@example.com",
      "age": 30
    }
  }
  ```

### Retrieve All Users

- **URL:** `/user/get-all`
- **Method:** `GET`
- **Success Response:**

  ```json
  {
    "message": "Users fetched successfully",
    "data": [
      {
        "_id": "unique_user_id_1",
        "name": "John Doe",
        "email": "john@example.com",
        "age": 30
      },
      {
        "_id": "unique_user_id_2",
        "name": "Jane Smith",
        "email": "jane@example.com",
        "age": 25
      }
    ]
  }
  ```

### Retrieve a Single User

- **URL:** `/user/get/:id`
- **Method:** `GET`
- **URL Parameter:** `id` – Unique identifier of the user.
- **Success Response:**

  ```json
  {
    "message": "User fetched successfully",
    "data": {
      "_id": "unique_user_id",
      "name": "John Doe",
      "email": "john@example.com",
      "age": 30
    }
  }
  ```

### Update a User

- **URL:** `/user/update/:id`
- **Method:** `PUT`
- **URL Parameter:** `id` – Unique identifier of the user.
- **Request Body:** (Include only the fields you want to update)

  ```json
  {
    "name": "John Doe Updated",
    "email": "johnupdated@example.com",
    "age": 31
  }
  ```

- **Success Response:**

  ```json
  {
    "message": "User updated successfully",
    "data": {
      "_id": "unique_user_id",
      "name": "John Doe Updated",
      "email": "johnupdated@example.com",
      "age": 31
    }
  }
  ```

### Delete a User

- **URL:** `/user/delete/:id`
- **Method:** `DELETE`
- **URL Parameter:** `id` – Unique identifier of the user.
- **Success Response:**

  ```json
  {
    "message": "User deleted successfully",
    "data": {
      "_id": "unique_user_id",
      "name": "John Doe",
      "email": "john@example.com",
      "age": 30
    }
  }
  ```

## Error Handling

- **Missing Fields:** If required fields (`name`, `email`, or `age`) are missing when creating a user, the API returns a 400 status code with an error message.
- **User Not Found:** If a user with the provided ID does not exist, a 404 status code is returned with a corresponding message.
- **Server Errors:** Any other errors will result in a 500 status code with the error message.

## Additional Notes

- Ensure that MongoDB is up and running or properly connected via your connection string.
- The API follows RESTful conventions and includes appropriate error handling for robustness.
- For further improvements, consider adding input validation and authentication middleware.

## Contact

For any queries or issues regarding this project, please reach out at [novneet300@gmail.com].
