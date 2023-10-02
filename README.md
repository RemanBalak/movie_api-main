## Movie API

The Movie API provides a rich source of movie-related information, including movie titles, genre details, director information, and user profiles. This API enables users to register, securely log in, manage their favorite movies, and delete their profiles.

## Key Features

- **JWT Authentication**: Ensures secure user authentication with JSON Web Tokens (JWT).
- **Password Hashing**: Safely stores user passwords using hashing techniques.
- **Movie Information**: Retrieve detailed information about movies, genres, and directors.
- **User Management**: Allows users to create, modify, and delete their profiles.
- **Favorite Movies**: Enables users to add and remove movies from their list of favorites.

## Technologies Used

This project is built using the following technologies:

- **HTML, CSS, JavaScript**: The front-end elements are designed using these technologies.
- **MongoDB**: Stores and manages data, including user profiles, movie details, and more.
- **Rest API**: Implements a RESTful API to facilitate communication between the client and server.
- **Node.js**: Powers the server-side logic and API endpoints.
  Deployments

## Getting Started

To set up this Movie API locally or integrate it with your project, follow these steps:

1. Clone the repository:

```sh
git clone https://github.com/RemanBalak/movie_api-main.git
```

2. Install dependencies:

```sh
cd movie-api-main
npm install
```

3. Set up your MongoDB database and update the connection settings in the configuration files.

4. Start the server:

```sh
npm start

```

Access the API at http://localhost:PORT, where PORT is the port you specified.

## API Endpoints

Here are some of the key API endpoints you can use:

- **/users**: Register new users, get user profiles, and delete users.
- **/movies**: Get information about movies, genres, and directors. Manage favorite movies here.

Thank you for using the Movie API! Enjoy exploring and building with movie-related data.
