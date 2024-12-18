document.addEventListener("DOMContentLoaded", () => {
    fetchTours()
    console.log("We are connected!")}) 

function fetchTours() {
    fetch("http://localhost:3000/artist")
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
    .catch(error => console.error('Error fetching tours:', error));
}

// Initialize dropDown with dropdownElement
function DropDown(dropdownElement) {
    const [toggler, menu] = dropdownElement.children;

    // Check if dropdown element does not contain the event target and calls toggle with 'false'
    const handleClickOut = e => {
        if (!this.element.contains(e.target)) {
            this.toggle(false);
        }
    }

    const setValue = item => {
        const value = item.textContent;
        toggler.textContent = value;
        this.value = value;
        this.toggle(false);
        this.element.dispatchEvent(new Event('change'));
        toggler.focus();
    }

    // Click event listener for toggle
    toggler.addEventListener("click", () => this.toggle());

    // When user clicks on the menu items
    [...menu.children].forEach(item => {
        item.addEventListener("click", () => setValue(item));
    })

    // Hide the menu on click out
    document.addEventListener('click', handleClickOut);

    this.element = dropdownElement;

    this.value = toggler.textContent;

    // Toggle method takes option to expand or not
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
    }

// Pass new dropdown element
const dropdown = new DropDown(document.querySelector('.dropdown'));

// Call toggle
// dropdown.toggle(true);

// Listen to change event on dropdown
dropdown.element.addEventListener('change', () => {
    console.log('change',dropdown.value) // Print dropdown value
})

// Test - should be label of button
console.log(dropdown.value)
