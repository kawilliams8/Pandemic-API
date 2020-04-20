# Express API template

[![Build Status](https://travis-ci.org/kawilliams8/Pandemic-API.svg?branch=master)](https://travis-ci.org/kawilliams8/Pandemic-API)
[![Coverage Status](https://coveralls.io/repos/github/kawilliams8/Pandemic-API/badge.svg?branch=master)](https://coveralls.io/github/kawilliams8/Pandemic-API?branch=master)
[![Maintainability](https://api.codeclimate.com/v1/badges/f971ec67bdc908492c2e/maintainability)](https://codeclimate.com/github/kawilliams8/Pandemic-API/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/f971ec67bdc908492c2e/test_coverage)](https://codeclimate.com/github/kawilliams8/Pandemic-API/test_coverage)
[![Build status](https://ci.appveyor.com/api/projects/status/ygh1cr34vmq95akj/branch/master?svg=true)](https://ci.appveyor.com/project/kawilliams8/pandemic-api/branch/master)

Built with the amazingly detailed tutorial, "How To Set Up An Express API Backend Project With PostgreSQL", by Chidi Orji, during a weekend of self-isolation during the COVID-19 pandemic.

## About Pandemic-API
This project was designed to practice setting up professional CI/CD tools for a (very) basic database and api, before deploying to Heroku.

## How to run the app
1. Clone the repo
1. Open a terminal in the project root and run `yarn startdev`

## How to test
Run `yarn test`

## Live API
Heroku API endpoint: <https://pandemic-api-kw.herokuapp.com/v1/messages>

`GET` to see all stored messages, or `POST` via Postman to add a new message:

Headers:
`Content-Type: application/x-www-form-urlencoded`
Body:
`{
    "name": "katie",
    "message": "testing 1,2,3"
}`
*Note that the custom middleware will update the message value before it is stored, resulting in "SAYS: testing 1,2,3"

A successful `POST` will return the following confirmation response:
`{
    "messages": [
        {
            "id": 4,
            "name": "katie",
            "message": "SAYS: testing 1,2,3"
        }
    ]
}`

## Built With
* Node.js
* Yarn Package Manager
* Express.js and the Express Generator
* Babel
* Nodemon
* ESLint
* Prettier
* DotEnv
* Mocha/Chai
* Sinon Chai
* nyc
* Supertest
* Travis CI/CD
* Coveralls.io test coverage reports
* ElephantSQL postgres db
* Appveyor CI/CD
* Code Climate linting and testing reports
* Heroku and the Heroku CLI tools
* Custom middleware
* Axios
* Postman
