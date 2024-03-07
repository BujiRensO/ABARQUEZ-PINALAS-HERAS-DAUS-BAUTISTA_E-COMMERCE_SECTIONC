document.addEventListener("DOMContentLoaded", function () {
    // Fetch data from JSON file
    fetch("../json/cars.json")
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById("section-3");

            // Loop through the data and create cards
            data.forEach(item => {
                const card = document.createElement("div");
                card.classList.add("project-card");

                const img = document.createElement("img");
                img.src = item.image;
                img.alt = item.title;

                const content = document.createElement("div");
                content.classList.add("card-content");

                const title = document.createElement("h2");
                title.textContent = item.title;

                const description = document.createElement("p");
                description.textContent = item.description;

                content.appendChild(title);
                content.appendChild(description);

                const button = document.createElement("button");
                button.classList.add("add-to-cart");
                button.textContent = "Add to Cart";

                card.appendChild(img);
                card.appendChild(content);
                card.appendChild(button);

                container.appendChild(card);
            });
        })
        .catch(error => console.error("Error fetching data:", error));
});
