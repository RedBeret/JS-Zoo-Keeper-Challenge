# JavaScript Zoo Keeper Challenge Application

## Introduction

Welcome to the Zoo Keeper challenge! This project is a web application that allows zookeepers to manage the animals in their care. It's a practical exercise in handling user events and making fetch requests to a mock API for CRUD operations.

![Zoo Keeper App](img/zoo-keeper-final.jpg)

## Learning Goals

- Set up event listeners to respond to user events.
- Use fetch() to make "GET", "POST", "PATCH", and "DELETE" requests.
- Dynamically render changes to the animal data without reloading the page.

## Getting Started

### Prerequisites

- Node.js - [Download & Install Node.js](https://nodejs.org/en/download/).

### Fork and Clone

To try this challenge on your own:

1. Fork this repository by clicking the "Fork" button at the top right of this page.
2. Clone your forked repository to your local machine:
   ```bash
   git clone https://github.com/YOUR-USERNAME/JS-Zoo-Keeper-Challenge.git
   ```
   Replace `YOUR-USERNAME` with your GitHub username.
   
3. Navigate to the project directory and install the dependencies:
   ```bash
   cd JS-Zoo-Keeper-Challenge
   npm install
   ```

### Running the Application

- Start the JSON server with:
  ```bash
  npm start
  ```
- Open `index.html` in a web browser to see the application in action.

## Challenges

### Challenge 1: Display Animals

Upon loading the application, retrieve and display all animals from `http://localhost:3000/animals` as individual cards within the animal list.

### Challenge 2: Like Feature

Implement a like button on each animal card. When clicked, the number of likes should increase for that animal both in the database and on the DOM.

### Challenge 3: Delete Feature

Add a delete button to each animal card that allows users to remove the animal from the collection. This should delete the animal from the database and remove the card from the DOM.

### Challenge 4: Add New Animal

Provide a form that allows users to add a new animal. When a new animal is added through the form, it should be posted to the database and displayed on the page without needing to refresh.

### Extra Credit: Update Animal Details

As an extra credit challenge, implement a feature that allows users to update the details of an existing animal in the database.

## Conclusion

By completing this project and the additional challenges, you'll have a robust web app that lets zookeepers manage their animals, demonstrating your abilities in web development.
