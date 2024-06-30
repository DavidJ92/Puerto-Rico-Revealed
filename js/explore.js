document.addEventListener("DOMContentLoaded", function() {
    var customSelect = document.querySelector(".custom-select");
    var selectMenu = customSelect.querySelector("select");
    var optionsList = customSelect.querySelector("ul");
    var options = Array.from(optionsList.querySelectorAll("li"));
    var selectedOption = customSelect.querySelector("span");

    selectedOption.addEventListener("click", function() {
        optionsList.classList.toggle("open");
    });

    options.forEach(function(option) {
        option.addEventListener("click", function() {
            var value = this.dataset.value;
            selectMenu.value = value;
            selectedOption.textContent = this.textContent;
            optionsList.classList.remove("open");
            filterCategory(value);
        });
    });

    function filterCategory(category) {
        var categories = document.querySelectorAll(".category");
        categories.forEach(function(cat) {
            if (cat.id === category || category === "all") {
                cat.style.display = "block";
            } else {
                cat.style.display = "none";
            }
        });
    }
});

function toggleMenu() {
    var navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("active");
}
