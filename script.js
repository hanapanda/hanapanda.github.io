let currentSoup = 0;
const soups = [
    {
        name: "Tomato",
        rating: 5,
        description: "I love this soup so much I could marry this soup. Usually, I hate tomato but tomato soup? I would kill for it (hypothetical).",
        img: "images/tomato.png",
        reviews: [
            { user: "Kylie Jenner", comment: "Toma", rating: "7/5" },
            { user: "Mano Gay", comment: "Mushroom better", rating: "3/5" },
            { user: "crime rat", comment: "they're too red", rating: "5/5"}
        ]
    },
    {
        name: "Corn & Pork",
        rating: 4,
        description: "This is my second favourite soup. The corn and pork combination is perfection.",
        img: "images/cornpork.png",
        reviews: [
            { user: "AHHHHHH", comment: "It's just good", rating: "5/5" },
            { user: "Mano Gay", comment: "Best soup to be ever invented omg. nom nom.", rating: "5/5" },
            { user: "crime rat", comment: "miso miso mi so hungry", rating: "5/5" }
        ]
    },
    // Add more soups as needed
];

function showReview() {
    const reviewContainer = document.querySelector(".review-content");
    const overlay = document.getElementById('overlay');
    const reviews = soups[currentSoup].reviews;

    // Clear existing reviews
    reviewContainer.innerHTML = '';

    // Add reviews for the current soup
    reviews.forEach(review => {
        const reviewElement = document.createElement("p");
        reviewElement.innerHTML = `${review.user}<br>"${review.comment}" - Rating: ${review.rating}`;
        reviewContainer.appendChild(reviewElement);
        
        // Add dotted line
        const dottedLine = document.createElement("div");
        dottedLine.classList.add("dotted-line");
        reviewContainer.appendChild(dottedLine);
    });

    // Show the overlay and the review receipt
    overlay.classList.add('active');
    const receipt = document.querySelector('.review-receipt');
    receipt.style.display = 'block';
    setTimeout(() => receipt.classList.add('active'), 10);
}

function hideReview() {
    const overlay = document.getElementById('overlay');
    const receipt = document.querySelector('.review-receipt');
    overlay.classList.remove('active');
    receipt.classList.remove('active');
    setTimeout(() => receipt.style.display = 'none', 400);
}

function updateSoup() {
    const soup = soups[currentSoup];
    const soupContainer = document.getElementById("soup-container");

    // Fade-out effect
    soupContainer.style.opacity = 0;
    setTimeout(() => {
        document.getElementById("soup-name").textContent = soup.name;
        document.getElementById("soup-description").textContent = soup.description;
        document.getElementById("soup-img").src = soup.img;
        document.querySelector(".stars").dataset.rating = soup.rating;
        soupContainer.style.opacity = 1;
    }, 300);
}

function nextSoup() {
    currentSoup = (currentSoup + 1) % soups.length;
    updateSoup();
}

function prevSoup() {
    currentSoup = (currentSoup - 1 + soups.length) % soups.length;
    updateSoup();
}

document.addEventListener("DOMContentLoaded", updateSoup);
