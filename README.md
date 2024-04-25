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

The Home screen is the first page the user sees. It is displayed at `/`.

![image](https://github.com/clarisse-fong/movies-frontend/assets/52180173/e09f61cb-7361-4f02-ab98-f340ee0ead51)

The Home screen has the following features:
* A list of each of the movies currently showing.
* Each movie is represented with its title and movie poster. 

### All Movies

The All Movies screen is displayed at `/movies`.

<img width="1118" alt="image" src="https://github.com/clarisse-fong/movies-frontend/assets/52180173/f232bb1a-000f-496c-9902-f0cce954fd3d">

The All Movies screen has the following features:
* Each movie is listed with its title, movie poster, synopsis, rating, and average review rating.
* Each movie has a **See More** button which directs a user to a page specifically for that movie. 

### Movie 
The Movie screen is displayed at `/movies/:movieId/`.

<img width="1323" alt="image" src="https://github.com/clarisse-fong/movies-frontend/assets/52180173/af939274-3bf0-47dc-80f6-82d7fefcd233">

The Movie screen has the following features:
* A display of the movie's information similar to in All Movies (the movie's title, movie poster, runtime, rating, and average review rating).
* A list of theaters where the movie is showing.
* A list of reviews for the movie as well as an option to **Rate** the rating and an option to **Destroy Review**. 

### All Theaters

The All Theaters screen is displayed at `/theaters`.

<img width="1118" alt="image" src="https://github.com/clarisse-fong/movies-frontend/assets/52180173/77840c89-cc93-4d79-ae82-5e9655664339">

The All Theaters screen has the following features:
* A list of each theater with its address.
* Each theater has a picture of the movies its currently showing.
* Clicking on a picture of a movie brings you to the Movie screen for that movie. 




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
Although my job was primarily backend, I noticed a couple frontend errors where the movie image wasn't properly being displayed. I found that the URLs were the issue and changed the URLs to correctly show the images. 

<img width="723" alt="image" src="https://github.com/clarisse-fong/movies-frontend/assets/52180173/4dd6b309-f021-4168-9630-c8cd249df118">
