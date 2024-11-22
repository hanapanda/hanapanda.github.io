let currentSoup = 0;
const soups = [
    {
        name: "Tomato (Basil)",
        rating: 5,
        description: "usually, I hate tomato but tomato soup? I would kill for it (hypothetically).",
        img: "images/tomato.png",
        atSchool: true,
        reviews: [
            { user: "kylie zhenner", comment: "Toma", rating: "7/5" },
            { user: "mano g8!", comment: "Mushroom better", rating: "3/5" },
            { user: "crime rat", comment: "they're too red", rating: "5/5"},
            { user: "souperMAN", comment: "this particular tomahto soup has the vim?? of summer, encapsulated in the sweety tanginess of fresh herbs and spices, blended together expertly by the hand of whatever chef was responsible for it.", rating: "4.5/5"},
            { user: "angelina ballerina", comment: "10/10 tastes like tomatoes", rating: "5/5"}
        ]
    },
    {
        name: "Corn & Pork",
        rating: 4,
        description: "This is such a comfort soup. but i dont like eating the corn",
        img: "images/cornpork.png",
        atSchool: false,
        reviews: [
            { user: "kylie zhenner", comment: "It's just good", rating: "5/5" },
            { user: "mano g8!", comment: "Best soup to be ever invented omg. nom nom.", rating: "5/5" },
            { user: "crime rat", comment: "miso miso mi so hungry", rating: "5/5" }
        ]
    },
    {
        name: "Potato & Onion (leek)",
        rating: 4,
        description: "this soup was decent! school renamed it to be fancier but it tastes the same. pretty good.",
        img: "images/potato-leek.png",
        atSchool: true,
        reviews: [
            { user: "laura", comment: "i really like this I like how thick it is I like the flavour I like the consistency ", rating: "5/5" },
            { user: "saachi", comment: "tsktsktsk", rating: "3/5" },
        ]
    },

];
function showReview() {
    const reviewContainer = document.querySelector(".review-content");
    const overlay = document.getElementById('overlay');
    const reviews = soups[currentSoup].reviews;

    reviewContainer.innerHTML = '';

    reviews.forEach(review => {
        const reviewElement = document.createElement("p");
        reviewElement.innerHTML = `${review.user}<br>"${review.comment}" - Rating: ${review.rating}`;
        reviewContainer.appendChild(reviewElement);
        
        const dottedLine = document.createElement("div");
        dottedLine.classList.add("dotted-line");
        reviewContainer.appendChild(dottedLine);
    });

    overlay.style.display = 'block';  // Display the overlay
    const receipt = document.querySelector('.review-receipt');
    receipt.style.display = 'block';
    setTimeout(() => {
        receipt.classList.add('active');
        overlay.classList.add('active');
    }, 10);
}

function hideReview() {
    const overlay = document.getElementById('overlay');
    const receipt = document.querySelector('.review-receipt');

    receipt.classList.remove('active');
    overlay.classList.remove('active');
    setTimeout(() => {
        receipt.style.display = 'none';
        overlay.style.display = 'none';
    }, 400);
}

function updateSoup() {
    const soup = soups[currentSoup];
    const soupContainer = document.getElementById("soup-container");

    soupContainer.style.opacity = 0;
    setTimeout(() => {
        document.getElementById("soup-name").textContent = soup.name;
        document.getElementById("soup-description").textContent = soup.description;
        document.getElementById("soup-img").src = soup.img;
        // document.querySelector(".stars").dataset.rating = soup.rating;
        const ratingStars = document.querySelector(".stars");
        ratingStars.dataset.rating = soup.rating;

        const atSchoolCheckbox = document.getElementById("at-school-checkbox");
        atSchoolCheckbox.checked = !!soup.atSchool;

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

// open modal
function openModal() {
    const modal = document.getElementById("review-modal");
    const overlay = document.getElementById("overlay");

    overlay.style.display = 'block';  
    modal.style.display = 'block';    

    setTimeout(() => {
        modal.classList.add("active");
        overlay.classList.add("active");
    }, 10);  
}

// close modal
function closeModal() {
    const modal = document.getElementById("review-modal");
    const overlay = document.getElementById("overlay");

    modal.classList.remove("active");
    overlay.classList.remove("active");

    setTimeout(() => {
        modal.style.display = "none";
        overlay.style.display = "none";
    }, 400);
}

// submitttt review
function submitReview() {
    const userName = document.getElementById("review-name").value.trim();
    const userComment = document.getElementById("review-text").value.trim();
    const userRating = document.querySelectorAll(".modal-stars span.active").length;

    if (!userName || !userComment || userRating === 0) {
        alert("hey you you gotta fill out all fields and select a rating! try again :(");
        return;
    }

    soups[currentSoup].reviews.push({
        user: userName,
        comment: userComment,
        rating: `${userRating}/5`
    });

    closeModal();
    alert("your review has been added! go to friend reviews to check it out :D");
}

// modal stars?
document.querySelectorAll(".modal-stars span").forEach((star, index, stars) => {
    star.addEventListener("mouseenter", () => {
       
        stars.forEach((s, i) => {
            s.style.color = i <= index ? "#ffd700" : "#d3d3d3";
        });
    });

    star.addEventListener("mouseleave", () => {
        stars.forEach((s) => {
            s.style.color = s.classList.contains("active") ? "#ffd700" : "#d3d3d3";
        });
    });

    star.addEventListener("click", () => {
        stars.forEach((s, i) => {
            s.classList.toggle("active", i <= index);
        });
    });
});
