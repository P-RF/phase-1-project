# Metallica Tours Setlist Manager

This dynamic web application fetches and displays tour data for artists. It specifically allows users to select a Metallica tour from a dropdown menu and view detailed setlists, encores, and dates for that tour.

## :book: Table of Contents 

- [Features](#features)
- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Tour Data Format](#tour-data-format)
    - [Running the Project](#running-the-project)
- [Project Structure](#project-structure)
- [Key Components](#key-components)
- [Customization](#customization)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
    - [Link](#link)
    - [How to Contribute](#how-to-contribute)
    - [Development Setup](#development-setup)
- [License](#license)

### Features

- Fetches tour data from a backend server.
- Populates a dropdown menu with available tours dynamically.
- Displays setlist(s) for selected tour, including encore(s), and dates.

![Screen recording of output of web application](/screenshots/screen-recording.gif)

## Getting Started 

### Prerequisites

To run this project, verify you have the following:

- A modern, updates web browser (ex: Google Chrome, Edge, or Firefox)
- A local remote server running on `http://localhost:3000` with an endpoint `/artist` that is in JSON format and provides tour data.

### Tour Data Format

The `/artist` endpoint should return the data in the following format:

``` JSON
[
  {
    "id": 1,
    "tourName": "Example Tour",
    "year": 2024,
    "averageNightOneSetlist": ["Song A", "Song B"],
    "averageNightTwoSetlist": ["Song C", "Song D"],
    "setlist": ["Song E", "Song F"],
    "averageSetlist": ["Song G", "Song H"],
    "encore": ["Encore Song 1"],
    "encoreOne": ["Encore Song 2"],
    "encoreTwo": ["Encore Song 3"],
    "encoreThree": ["Encore Song 4"]
  }
]
```

### Running the Project

1. Clone or download this repository.
2. Open `index.html` in a web browser.
3. Ensure your backend server is running and is accessible at `http://localhost:3000`.
4. Interact with the dropdown menu to select the tour and view the setlists, encores, and dates.

## Project Structure

- **index.html**: Main HTML file.
- **index.js**: Contains the JavaScript logic for fetching the data, managing dropdowns, and displaying the setlists and encores.
- **db.json**: JSON file that contains the database of the tour data.
- **style.css**: Styling for the dropdown and setlist display

## Key Components  

**fetchTours**

Fetches tour data from `db.json` and generates the dropdown menu.

**DropDown**

A reusable dropdown component that handles user interactions and triggers a **change** event when a selection is made.

**populateDropdown**

Populates the dropdown menu items based on the fetched tour data.

**DisplaySetlist**

Displays setlist information for the selected tour, including encores, other types of setlists, and dates.

## Customization

- Update the data in `db.json` to include your desired tours and setlists.
- Modify the dropdown and serlist display logic in the `index.js` file to suit the needs of your application.

## Troubleshooting

- **If the dropdown is empty:** Verify that the JSON Server is running and displaying the correct data from `db.json`.
- **If the setlist is not displayed:** Verify that the selected tour data includes the correct arrays for your setlits and encores.
- **If there are console errors:** Check the format of the tour data in the `db.json` file.

## Contributing

Thank you for your interest in contributing to this project! Contributions of all kinds are welcome; from new features to code improvements. Below is a guide to help you get started.

### Link  

:link: You can find the link to this project here: 

<https://github.com/P-RF/phase-1-project.git>

### How to Contribute

1. **Fork the repository on GitHub**
2. **Clone the repository to your local computer**
``` JSON
git clone https://github.com/your-username/phase-1-project.git
cd phase-1-project
```
3. **Create a branch and make changes**
- Create a new branch:
```
git checkout -b feature-branch-name
```
- Make your desired changes in the relevant files.
4. **Test your changes**
5. **Commit and push your changes**
- Commit your changes:
```
git commit -m "description of your changes"
```
- Push your changes to the forked repository:
```
git push
```
6. **Open a pull request (PR)**
- Go to your forked repository on **GitHub**.
- Open a pull request with a fitting title and a clear description explaining the changes you made.
- Follow the PR review process and respond to feedback.

### Development Setup

- To run the project locally, verify your backend server is runnnig and is accessible `(http://localhost:3000/artist)`.
1. Start the JSON server:
`json-server --watch db.json`
2. Open `index.html` in your browser to view the project.

## License

[MIT](https://choosealicense.com/licenses/mit/)

Enjoy coding!