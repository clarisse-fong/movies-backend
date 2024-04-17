# WeLoveMovies Frontend Application

## Live Links
You can find the github for the frontend [here](https://github.com/clarisse-fong/movies-frontend/tree/main) and the deployed frontend [here](https://movie-frontend-84do.onrender.com/). 

## About
I created the backend for a movies website called WeLoveMovies for a capstone project at my Thinkful / Chegg Skills Engineering program. 

The project required the following technologies: 
* PostgreSQL as the database
* Knex to build queries for PostgreSQL
* Express to write routes for API methods.

From the assignment
> You've been hired as a backend developer at a new startup called WeLoveMovies. As another developer works on the design and frontend experience, you have been tasked with setting up a database and building out specific routes so that users can gain access to data about movies, theaters, and reviews.

## Client Descriptions

### Home
The Home screen displays all of the movies currently showing in theaters. 
![image](https://github.com/clarisse-fong/movies-frontend/assets/52180173/e09f61cb-7361-4f02-ab98-f340ee0ead51)


# API


| Request | Path                                   | Description                                                   |
| ------- | -------------------------------------- | -------------------------------------------------------------|
| GET  | /movies | List all movies |
| GET | /movies/:movieId | Read a movie by a movieId |
| GET | /movies/:movieId/theaters | List all theaters for the given movieId |
| GET | /movies/:movieId/reviews | List all reviews for the given movieId |
| UPDATE | /reviews/:reviewId | Update a review by a reviewId |
| DELETE | /reviews/:reviewId | Delete a review by a reviewId | 
| GET | /theaters | List all movie theaters |


### Fixing Frontend Errors
Although my job was primarily backend, I noticed a couple frontend errors where the movie image wasn't properly being displayed. I plan to fix these errors. 

<img width="723" alt="image" src="https://github.com/clarisse-fong/movies-frontend/assets/52180173/4dd6b309-f021-4168-9630-c8cd249df118">
