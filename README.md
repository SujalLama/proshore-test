# Github Repo Search App

This is a simple react app that uses github api to show the necessary details about the repo.

## Features

- Search repos in the github based on search query
- Sort the repos based on Filter and Order
- Detail view of the repo
- Pagination to go through the repos

## Instructions to run the project

- Clone the project in your local machine
  - Run the code in the terminal `git clone repo-url` & `cd project-name`
- Once you are inside the project directory, follow these steps
  - Run `npm install`
  - create .env file and copy the code from .env.example (Note: You don't have to change the url as it's the same one.)
  - Type `npm run start` Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Screenshots of the application

### Search Page

![Alt text](/public/images/front-page-proshore.JPG?raw=true "Front page")

### Single Page

![Alt text](/public/images/single-page.JPG?raw=true "Single page")

## Technologies / Library used

- react
- react-router-dom
- axios
- tailwindcss
- react-icons
- eslint

## Folder Structure of the application

- api : contains code for fetching data
- components : includes React components
- data : consists static data used throughout the application
- hooks : contains custom hooks
- lib : includes library related file (react router and axios)
- pages : consists of page used in the application

## Code Style Guide

This application adheres the coding standard set by airbnb [Named Link](https://github.com/airbnb/javascript "airbnb js") styling guide, with the few exceptions:

- No need to import React in jsx file
- Prop types Validation is turned off
- Mandatory button with type attribute is turned off
