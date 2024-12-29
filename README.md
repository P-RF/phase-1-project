# Metallica Tours Setlist Manager

This dynamic web application fetches and displays tour data for artists. It specifically allows users to select a Metallica tour from a dropdown menu and view detailed setlists, encores, and dates for that tour.

## Table of Contents :book:

- [Features](#features)
- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Tour Data Format](#tour-data-format)
    - [Running the Project](#running-the-project)
- [Project Structure](#project-structure)
- [Key Components](#key-components)
- [Customization](#customization)
- [Troubleshooting](#troubleshooting)
- [License](#license)

### Features

- Fetches tour data from a backend server.
- Populates a dropdown menu with available tours dynamically.
- Displays setlist(s) for selected tour, including encore(s), and dates.

![Screen recording of output of web application]()

## Getting Started :computer:

### Prerequisites

To run this project, verify you have the following:

- A modern, updates web browser (ex: Google Chrome or Edge)
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
1. Open `index.html` in a web browser.
1. Ensure your backend server is running and is accessible at `http://localhost:3000`.
1. Interact with the dropdown menu to select the tour and view the setlists, encores, and dates.

## Project Structure

- **index.html**: Main HTML file.
- **index.js**: Contains the JavaScript logic for fetching the data, managing dropdowns, and displaying the setlists and encores.
- **db.json**: JSON file that contains the database of the tour data.
- **style.css**: Styling for the dropdown and setlist display

## Key Components :key:

**Fetch Tours**

Fetches tour data from `db.json` and generates the dropdown menu.

**DropDown**

A reusable dropdown component that handles user interactions and triggers a **change** event when a selection is made.

**populateDropdown**

Populates the dropdown menu items based on the fetched tour data.

**DisplaySetlist**

Displays setlist information for the selected tour, including encores, other types of setlists, and dates.

## Customization

- Update the data in `db.json` to include your desired trours and setlists.
- Modify thr dropdown and serlist display logic in the `index.js` file to suit the needs of your application.

## Troubleshooting

- **If the dropdown is empty:** Verify that the json-server is running and displaying the correct data from `db.json`.
- **If the detlist is not displayed:** Verify that the selected tour data includes the correct arrays for your setlits and encores.
- **If there are console errors:** Check the format of the tour data in the `db.json` file.

## Link :link:

You can find the link to this project here: 

<https://github.com/P-RF/phase-1-project.git>


## License

[MIT](https://choosealicense.com/licenses/mit/)