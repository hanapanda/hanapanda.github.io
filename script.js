let currentSoup = 0;
const soups = [
    {
        name: "tomato (+basil)",
        rating: 5,
        description: "usually, I hate tomato. but whatever goes on in between when tomato turns into tomato soup allows me to forget my hatred. beautiful taste every time",
        img: "images/tomato.png",
        atSchool: true,
        reviews: [
            { user: "kylie zhenner", comment: "Toma", rating: "7/5" },
            { user: "mano g8!", comment: "mushroom better", rating: "3/5" },
            { user: "crime rat", comment: "they're too red", rating: "5/5"},
            { user: "odruade", comment: "it's been many years since i've first tried tomato soup . upon first contact with my taste buds, the serene tasteful liquid instantly triggered my dopamine receptors, my eyes widening in shock and pleasure. my relationship with the spoon became a devoted one, its most familiar trip quickly becoming the short route between the soup bowl and my mouth.", rating: "∞/5"},
            { user: "souperMAN", comment: "this particular tomahto soup has the vim?? of summer, encapsulated in the sweety tanginess of fresh herbs and spices, blended together expertly by the hand of whatever chef was responsible for it.", rating: "4.5/5"},
            { user: "angelina ballerina", comment: "10/10 tastes like tomatoes", rating: "5/5"},
            { user: "uwukitty", comment: "i cannot rmb the last time i had this soup.", rating: "3/5"}
        ]
    },
    {
        name: "corn & pork",
        rating: 4,
        description: "This is such a comfort soup. but i dont like eating the corn, i honestly just like the taste of the corn in the soup",
        img: "images/cornpork.png",
        atSchool: false,
        reviews: [
            { user: "kylie zhenner", comment: "", rating: "5/5" },
            { user: "angelina ballerina", comment: "approved by my grandmother", rating: "4/5" },
            { user: "uwukitty", comment: "i like the soup, but not really the ingredients tho", rating: "4/5"},
            { user: "ashslay", comment: "it's very 鲜,玉米的味道可以很好的balance out排骨的膻, so yea just very good overall", rating: "4/5"},
        ]
    },
    {
        name: "pumpkin",
        rating: 3,
        description: "hmm when this soup is chunky its not good but when its not chunky its amaaazzzingggg. school one is salty tho. weird.",
        img: "images/pumpkin.png",
        atSchool: true,
        reviews: [
            { user: "toma", comment: "It's just good", rating: "5/5" },
            { user: "mano g8!", comment: "i like it, but sometimes its too sweet.", rating: "3/5" },
            { user: "crime rat", comment: "i like it, but... they’re too pumpkin", rating: "4/5" },
            { user: "smithy", comment: "the best soup ever", rating: "5/5" },
            { user: "uwukitty", comment: "depends on how thick is it, but it is still a good souppp!", rating: "4/5"},
        ]
    },
    {
        name: "potato & onion (or leek)",
        rating: 4,
        description: "this soup was decent! school renamed it to be fancier but it tastes the same. pretty good.",
        img: "images/potato-leek.png",
        atSchool: true,
        reviews: [
            { user: "laura", comment: "i really like this I like how thick it is I like the flavour I like the consistency ", rating: "5/5" },
            { user: "saachi", comment: "tsktsktsk", rating: "3/5" },
        ]
    },
    {
        name: "miiiso",
        rating: 4,
        description: "this soup is very classic. very appetizing. -0.5 for how it makes my mouth dry afterwards tho",
        img: "images/miso.png",
        atSchool: false,
        reviews: [
            { user: "kylie zhenner", comment: "It's just good", rating: "5/5" },
            { user: "mano g8!", comment: "Best soup to be ever invented omg. nom nom.", rating: "5/5" },
            { user: "crime rat", comment: "miso miso mi so hungry", rating: "5/5" },
            { user: "uwukitty", comment: "everything about is AMAZING, esp during winter getting served a nice warm soup. 🥰", rating: "5/5"}
        ]
    },
    {
        name: "lobsta bisqua",
        rating: 4,
        description: "i actually haven't really had this soup yet. thanks eunseo for the rec",
        img: "images/lobsterbisque.png",
        atSchool: false,
        reviews: [
            { user: "roomtempbutter", comment: "this is like tomato soups' sexy aunt. luxurious, likes the finer things in life, but something you can always come home to", rating: "4.5/5" },
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
        const rating = soup.rating;
        let starsHTML = "";
        for (let i = 1; i <= 5; i++) {
            starsHTML += i <= rating ? "★" : "☆";
        }
        ratingStars.innerHTML = starsHTML;


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
