document.addEventListener('DOMContentLoaded', function() {
    // Restaurant data (replace with actual data or fetch from a backend)
    const restaurants = [
        { name: "Restaurant Name 1", description: "Description of Restaurant 1", imageUrl: "restaurant1.jpg", link: "#" },
        { name: "Restaurant Name 2", description: "Description of Restaurant 2", imageUrl: "restaurant2.jpg", link: "#" },
        { name: "Restaurant Name 3", description: "Description of Restaurant 3", imageUrl: "restaurant3.jpg", link: "#" },
        { name: "Restaurant Name 4", description: "Description of Restaurant 4", imageUrl: "restaurant4.jpg", link: "#" },
        { name: "Restaurant Name 5", description: "Description of Restaurant 5", imageUrl: "restaurant5.jpg", link: "#" },
        { name: "Restaurant Name 6", description: "Description of Restaurant 6", imageUrl: "restaurant6.jpg", link: "#" },
        { name: "Restaurant Name 7", description: "Description of Restaurant 7", imageUrl: "restaurant7.jpg", link: "#" },
        { name: "Restaurant Name 8", description: "Description of Restaurant 8", imageUrl: "restaurant8.jpg", link: "#" },
        { name: "Restaurant Name 9", description: "Description of Restaurant 9", imageUrl: "restaurant9.jpg", link: "#" },
        { name: "Restaurant Name 10", description: "Description of Restaurant 10", imageUrl: "restaurant10.jpg", link: "#" },
        { name: "Restaurant Name 11", description: "Description of Restaurant 11", imageUrl: "restaurant11.jpg", link: "#" },
        { name: "Restaurant Name 12", description: "Description of Restaurant 12", imageUrl: "restaurant12.jpg", link: "#" },
        { name: "Restaurant Name 13", description: "Description of Restaurant 13", imageUrl: "restaurant13.jpg", link: "#" },
        { name: "Restaurant Name 14", description: "Description of Restaurant 14", imageUrl: "restaurant14.jpg", link: "#" },
        { name: "Restaurant Name 15", description: "Description of Restaurant 15", imageUrl: "restaurant15.jpg", link: "#" },
        { name: "Restaurant Name 16", description: "Description of Restaurant 16", imageUrl: "restaurant16.jpg", link: "#" },
        { name: "Restaurant Name 17", description: "Description of Restaurant 17", imageUrl: "restaurant17.jpg", link: "#" },
        { name: "Restaurant Name 18", description: "Description of Restaurant 18", imageUrl: "restaurant18.jpg", link: "#" },
        { name: "Restaurant Name 19", description: "Description of Restaurant 19", imageUrl: "restaurant19.jpg", link: "#" },
        { name: "Restaurant Name 20", description: "Description of Restaurant 20", imageUrl: "restaurant20.jpg", link: "#" },
        { name: "Restaurant Name 21", description: "Description of Restaurant 21", imageUrl: "restaurant21.jpg", link: "#" },
        { name: "Restaurant Name 22", description: "Description of Restaurant 22", imageUrl: "restaurant22.jpg", link: "#" },
        { name: "Restaurant Name 23", description: "Description of Restaurant 23", imageUrl: "restaurant23.jpg", link: "#" },
        { name: "Restaurant Name 24", description: "Description of Restaurant 24", imageUrl: "restaurant24.jpg", link: "#" },
        { name: "Restaurant Name 25", description: "Description of Restaurant 25", imageUrl: "restaurant25.jpg", link: "#" },
        { name: "Restaurant Name 26", description: "Description of Restaurant 26", imageUrl: "restaurant26.jpg", link: "#" },
        { name: "Restaurant Name 27", description: "Description of Restaurant 27", imageUrl: "restaurant27.jpg", link: "#" },
        { name: "Restaurant Name 28", description: "Description of Restaurant 28", imageUrl: "restaurant28.jpg", link: "#" },
        { name: "Restaurant Name 29", description: "Description of Restaurant 29", imageUrl: "restaurant29.jpg", link: "#" },
        { name: "Restaurant Name 30", description: "Description of Restaurant 30", imageUrl: "restaurant30.jpg", link: "#" },
        { name: "Restaurant Name 31", description: "Description of Restaurant 31", imageUrl: "restaurant31.jpg", link: "#" },
        { name: "Restaurant Name 32", description: "Description of Restaurant 32", imageUrl: "restaurant32.jpg", link: "#" },
        { name: "Restaurant Name 33", description: "Description of Restaurant 33", imageUrl: "restaurant33.jpg", link: "#" },
        { name: "Restaurant Name 34", description: "Description of Restaurant 34", imageUrl: "restaurant34.jpg", link: "#" },
        { name: "Restaurant Name 35", description: "Description of Restaurant 35", imageUrl: "restaurant35.jpg", link: "#" },
        { name: "Restaurant Name 36", description: "Description of Restaurant 36", imageUrl: "restaurant36.jpg", link: "#" }
    ];

    const restaurantsPerPage = 12;
    let currentPage = 1;
    const totalRestaurants = restaurants.length;
    const totalPages = Math.ceil(totalRestaurants / restaurantsPerPage);

    const restaurantList = document.getElementById('restaurant-list');
    const prevPageButton = document.getElementById('prev-page');
    const nextPageButton = document.getElementById('next-page');

    function displayRestaurants(page) {
        restaurantList.innerHTML = '';

        const startIndex = (page - 1) * restaurantsPerPage;
        const endIndex = startIndex + restaurantsPerPage;
        const displayedRestaurants = restaurants.slice(startIndex, endIndex);

        displayedRestaurants.forEach(restaurant => {
            const card = `
                <div class="col-md-4 mb-4">
                    <div class="card">
                        <img src="${restaurant.imageUrl}" class="card-img-top" alt="${restaurant.name}">
                        <div class="card-body">
                            <h5 class="card-title">${restaurant.name}</h5>
                            <p class="card-text">${restaurant.description}</p>
                            <a href="${restaurant.link}" class="btn btn-primary">Visit Website</a>
                        </div>
                    </div>
                </div>
            `;
            restaurantList.innerHTML += card;
        });
    }

    function updatePaginationButtons() {
        prevPageButton.disabled = currentPage === 1;
        nextPageButton.disabled = currentPage === totalPages;
    }

    // Initial display
    displayRestaurants(currentPage);
    updatePaginationButtons();

    // Event listeners for pagination buttons
    prevPageButton.addEventListener('click', () => {
        currentPage--;
        displayRestaurants(currentPage);
        updatePaginationButtons();
    });

    nextPageButton.addEventListener('click', () => {
        currentPage++;
        displayRestaurants(currentPage);
        updatePaginationButtons();
    });
});
