document.addEventListener("DOMContentLoaded", () => {
    fetchTours()
    console.log("We are connected!")}) 

function fetchTours() {
    fetch("/artist.json")
    .then(response => response.json())
    .then(data => {
        // console.log("Fetched tours data", data); // Logged fetched data.
        populateDropdown(data);
        // console.log(data)
    })
    .catch(error => console.error('Error fetching tours:', error));
};

// Initialize dropDown with dropdownElement.
function DropDown(dropdownElement) {
    const [toggler, menu] = dropdownElement.children;

    // Check if dropdown element does not contain the event target and calls toggle with 'false'.
    const handleClickOut = e => {
        if (!this.element.contains(e.target)) {
            this.toggle(false);
        }
    };

    // When 'toggler' button is selected, the dropdown menu closes
    const setValue = item => {
        const value = item.textContent;
        toggler.textContent = value;
        this.value = value;
        this.toggle(false);
        this.element.dispatchEvent(new Event('change'));
        toggler.focus();
    };

    // Click event listener for toggle.
    toggler.addEventListener("click", () => this.toggle());

    // When user clicks on the menu items.
    [...menu.children].forEach(item => {
        item.addEventListener("click", () => setValue(item));
    });

    // Hide the menu on click out.
    document.addEventListener('click', handleClickOut);

    this.element = dropdownElement;

    this.value = toggler.textContent;

    // Toggle method takes option to expand or not.
    this.toggle = (expand = null) => {
        expand = expand === null
            ? menu.getAttribute('aria-expanded') !== 'true'
            :expand;

        menu.setAttribute('aria-expanded', expand);

        if(expand) {
            toggler.classList.add('active');
        } else {
            toggler.classList.remove('active');
        }
    }
    };

// Pass new dropdown element.
const dropdown = new DropDown(document.querySelector('.dropdown'));

// Listen to change event on dropdown.
dropdown.element.addEventListener('change', () => {
    console.log('change',dropdown.value) // Print dropdown value.
});

// Test - label of button.
// console.log(dropdown.value)

// Populate setlists

function populateDropdown(data) {
    const dropdownMenu = document.getElementById("dropdown-menu"); // Dropdown menu element in HTML.
    dropdownMenu.innerHTML = ""; // Clear existing dropdown items.

    data.forEach(tour => {
        const menuItem = document.createElement("li");
        menuItem.textContent = `${tour.tourName} (${tour.year})`;
        menuItem.dataset.id = tour.id; // Store the tour ID for fetching the setlist.
        menuItem.addEventListener("click", () => displaySetlist(tour));
        dropdownMenu.appendChild(menuItem);
    });
};

// Function to display setlist for given tour.
// Checks if the setlist-container element exists. Clears page before rendering new content.
function displaySetlist(tour) {
    const setlistContainer = document.getElementById("setlist-container");
    if (!setlistContainer) {
        console.error("setlist-container not found");
        return;
    };

    setlistContainer.innerHTML = "";

    const title = document.createElement("h2");
    title.textContent = `${tour.tourName} Setlist (${tour.year})`;

    setlistContainer.appendChild(title);

    const setlist = document.createElement("ul");

    const setlists = [
        { title: "Average Night One Setlist", list: tour.averageNightOneSetlist || [] },
        { title: "Average Night Two Setlist", list: tour.averageNightTwoSetlist || [] },
        { title: "Setlist", list: tour.setlist || [] },
        { title: "Average Setlist", list: tour.averageSetlist || [] },
    ];

    setlists.forEach(({ title, list }) => {
        if (Array.isArray(list)) {
            const listTitle = document.createElement("h3");
            listTitle.textContent = title;

            const ul = document.createElement("ul");
            list.forEach(song => {
                const li = document.createElement("li");
                li.textContent = song;
                ul.appendChild(li);
            });

            setlist.appendChild(listTitle);
            setlist.appendChild(ul);
        } else {
            console.warn(`Expected an array for ${title}, but got:`, list);
        }
    });

    // Array containing different encores. If data is missing, it defaults to an empty array.
    const encores = [
        { title: "Encore", list: tour.encore || [] },
        { title: "Encore One", list: tour.encoreOne || [] },
        { title: "Encore Two", list: tour.encoreTwo || [] },
        { title: "Encore Three", list: tour.encoreThree || [] },
    ];

    // Iterates over 'encores' array and dynamically (while program runs) generates HTML content for encore.
    // If the 'list' is not an array, a warning is logged into the console indicating the issue.
    encores.forEach(({ title, list }) => {
        if (Array.isArray(list)) {
            const encoreTitle = document.createElement("h3");
            encoreTitle.textContent = title;

            const ul = document.createElement("ul");
            list.forEach(song => {
                const li = document.createElement("li");
                li.textContent = song;
                ul.appendChild(li);
            });

            setlist.appendChild(encoreTitle);
            setlist.appendChild(ul);
        } else {
            console.warn(`Expected an array for ${title}, but got:`, list);
        }
    });

    // These elements are created in JavaScript and appended to the page at runtime.
    setlistContainer.appendChild(title);
    setlistContainer.appendChild(setlist);
};
