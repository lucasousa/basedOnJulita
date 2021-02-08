// Function to make mobile menu //
document.addEventListener("DOMContentLoaded", function () {
    // Get all "navbar-burger" elements
    var $navbarBurgers = Array.prototype.slice.call(
        document.querySelectorAll(".navbar-burger"),
        0
    );
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
        // Add a click event on each of them
        $navbarBurgers.forEach(function ($el) {
            $el.addEventListener("click", function () {
                // Get the target from the "data-target" attribute
                var target = $el.dataset.target;
                var $target = document.getElementById(target);
                // Toggle the class on both the "navbar-burger" and the "navbar-menu"
                $el.classList.toggle("is-active");
                $target.classList.toggle("is-active");
            });
        });
    }
});
// End function

//get all caracters of the text
//remove all text of the element
//Add each caracter, after the time defined
function typeWriter(element){
    const arrayText = element.innerHTML.split('');
    element.innerHTML = '';
    arrayText.forEach((caracter, index) => {
        setTimeout(() => element.innerHTML += caracter, 100 * index);
    });
}

const elements_typerwriter = document.querySelectorAll('.typewriter-effect');

for (let index = 0; index < elements_typerwriter.length; index++) {
    typeWriter(elements_typerwriter[index]);
}   