# City Explorer

**Author**: Heather Bisgaard
**Version**: 1.0.11
**Deployed Site**: https://city-explorer-hbisgaard.netlify.app/

## Overview
<!-- Provide a high level overview of what this application is and why you are building it, beyond the fact that it's an assignment for this class. (i.e. What's your problem domain?) -->
React application that takes the name of a city, submits a request to an API, and returns the latitude and longitude coordinates for the city. The app will also return a map, sixteen days of weather forecast data and the latest movies playing in the chosen city.

## Getting Started
<!-- What are the steps that a user must take in order to build this app on their own machine and get it running? -->
1. Create .env file. Make this file to hold you API keys. If they are for the front end REACT app, you will need to type REACT_APP_ then a variable for the key. Then the = and paste the key in. See the SAMPLE.env file for an example. Then enter .env in your .gitignore file.

2. You will need to create a server component and 'npm i' all the React App components like react, react-bootstrap, bootstrap and the middleware axios.

3. You will need to question your sanity and wonder why in the hell you signed up for something that makes you want pull your hair out one strand at a time.

4. You will need to create endpoints for your APIs.

## Architecture
<!-- Provide a detailed description of the application design. What technologies (languages, libraries, etc) you're using, and any other relevant design information. -->
React JS, React-Bootstrap, Axios, LocationIQ, Weather API, MovieDB API, GitHub, Netlify, Heroku, Trello...

## Change Log
<!-- Use this area to document the iterative changes made to your application as each feature is successfully implemented. Use time stamps. Here's an example:

01-01-2001 4:59pm - Application now has a fully-functional express server, with a GET route for the location resource. -->

07-28-2021 8:15pm - Proof of life, Wazzup!

## Credit and Collaborations
<!-- Give credit (and a link) to other people or resources that helped you build this application. -->

- Quentin Young III, UML collaboration, [CityExplorerUML](src/CityExplorerUML.png)
- Connor Boyce, Software Developer, [CityExplorerUML](src/CityExplorerApiUML.png)
- Ryan Gallaway, Instructor, 42
- JP Jones, Instructor, helped me refactor and get my weather component working after discovering that I did not have to create a new city API in the City Explorer API repo.

## Time Estimates
<!-- For each of the lab features, make an estimate of the time it will take you to complete the feature, and record your start and finish times for that feature: -->

Name of feature: .env

Estimate of time needed to complete: 5 minutes

Start time: 8pm

Finish time: 805pm

Actual time needed to complete: 5 minutes. Need to put REACT_APP_ then whatever you are naming your key in the the variable. Make sure to create the .env file before you push to github. 

---

Name of feature: Form

Estimate of time needed to complete: 1 hour

Start time: 830pm

Finish time: 10pm

Actual time needed to complete: 1.5+ hours - COuld not figure out how to get the display name to render with the lat and long. But I had already decided to call it a night after I finished readme.
