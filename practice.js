// console.log("Hello world")

const dogs = [ { name: "Cheddar", breed: "Corgi", owner: "Holt" }, { name: "Toto", breed: "Terrier", owner: "Dorothy" }, { name: "Susan", breed: "Corgi", owner: "Lizzie" } ]

// Declare variable "firstDog"
// Access first element in array
const firstDog = dogs[0]


{/* <div id=“corgis”> 
</div>
<button id="corgiButton">Click me</button> */}

// Click on button, add a <p> tag for every dog object with the breed of "Corgi"

// Function to display only the corgi breed
function showCorgis() {

    // Check that the function is working
    console.log('Hello world')

    // Filter the array to get only objects with 'corgi' breed
    const justCorgis = dogs.filter((dog) => dog.breed === "Corgi");
    console.log(justCorgis)

    // Get the container to append the <p> elements
    const appendCorgis = document.getElementById("corgiButton");

    // Loop through the filtered results using the forEach method and create a <p> element for each
    justCorgis.forEach(corgi => {
        const corgiParagraph = document.createElement("p");
        corgiParagraph.textContent = `Name: ${corgi.name}, Breed: ${corgi.breed}` 
        // Append each <p> element to the HTML container 'corgiButton'
        appendCorgis.appendChild(corgiParagraph);
    });
}

//Select the button and add a 'click' event listener
document.querySelector('#corgiButton').addEventListener('click', showCorgis)



 

