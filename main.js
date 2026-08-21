// ================= HERO BUTTON =================

const carsButton = document.getElementById("carsbutton");

carsButton.addEventListener("click", () => {
    document.getElementById("CARS").scrollIntoView({
        behavior: "smooth"
    });
});


// ================= COUNTERS =================

const counters = document.querySelectorAll(".counter");

const startCounter = (counter) => {

    const target = Number(counter.dataset.target);
    let count = 0;

    const update = () => {

        const increment = target / 100;

        if (count < target) {

            count += increment;

            counter.textContent = Math.ceil(count);

            setTimeout(update, 20);

        } else {

            counter.textContent = target + "+";

        }
    };

    update();
};

counters.forEach(startCounter);


// ================= CAR DATA =================

const cars = {

    bmw: {

        title: "BMW M4",
        brand: "BMW",

        image:[
            "bmw.png",
            "bmw2.png",
            "bmw3.png",
        ] 

        ,price: "3,500,000 EGP",

        engine: "3.0L Twin Turbo",

        power: "510 HP",

        speed: "290 km/h",

        year: "2025",

        mileage: "12,000 KM",

        fuel: "Petrol"

    },


    mercedes: {

        title: "Mercedes C200",
        brand: "MERCEDES",

        image:[
            "mercedes.png",
            "mercedes2.png",
            "mercedes3.png" 
        ] 

        ,price: "2,900,000 EGP",

        engine: "2.0L Turbo",

        power: "204 HP",

        speed: "280 km/h",

        year: "2025",

        mileage: "8,500 KM",

        fuel: "Petrol"

    },


    audi: {

        title: "Audi RS5",
        brand: "AUDI",

        image: [
            "audi.png",
            "audi2.png",
            "audi3.png",
        ]
        ,price: "4,100,000 EGP",

        engine: "2.9L Twin Turbo",

        power: "450 HP",

        speed: "280 km/h",

        year: "2025",

        mileage: "6,200 KM",

        fuel: "Petrol"

    }

};


// ================= ELEMENTS =================

const searchInput = document.getElementById("search");
const filterButtons = document.querySelectorAll(".filter-btn");
const sortSelect = document.getElementById("sort");
const cardsContainer = document.querySelector(".cars-container");

let cards = Array.from(document.querySelectorAll(".card"));

let currentFilter = "all";
let currentSearch = "";


// ================= FILTER + SEARCH =================

function filterCars() {

    cards.forEach(card => {

        const carName = card.dataset.name.toLowerCase();

        const title =
            card.querySelector("h3").textContent.toLowerCase();

        const matchesFilter =
            currentFilter === "all" ||
            carName === currentFilter;

        const matchesSearch =
            title.includes(currentSearch) ||
            carName.includes(currentSearch);

        if (matchesFilter && matchesSearch) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

}


// SEARCH

searchInput.addEventListener("input", () => {

    currentSearch = searchInput.value
        .toLowerCase()
        .trim();

    filterCars();

});


// FILTER BUTTONS

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        currentFilter = button.dataset.filter;

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        filterCars();

    });

});


// ================= SORT =================

sortSelect.addEventListener("change", () => {

    const value = sortSelect.value;

    if (value === "low") {

        cards.sort((a, b) => {

            return (
                Number(a.dataset.price) -
                Number(b.dataset.price)
            );

        });

    }

    else if (value === "high") {

        cards.sort((a, b) => {

            return (
                Number(b.dataset.price) -
                Number(a.dataset.price)
            );

        });

    }

    else {

        cards.sort((a, b) => {

            return (
                Number(a.dataset.price) -
                Number(b.dataset.price)
            );

        });

    }

    cards.forEach(card => {

        cardsContainer.appendChild(card);

    });

});


// ================= FAVORITES =================

const favoriteButtons =
    document.querySelectorAll(".favorite-btn");

let favorites =
    JSON.parse(localStorage.getItem("eliteFavorites")) || [];


favoriteButtons.forEach(button => {

    const carName = button.dataset.car;

    if (favorites.includes(carName)) {

        button.classList.add("active");

        button.innerHTML =
            '<i class="fa-solid fa-heart"></i>';

    }


    button.addEventListener("click", (event) => {

        event.stopPropagation();

        if (favorites.includes(carName)) {

            favorites = favorites.filter(
                car => car !== carName
            );

            button.classList.remove("active");

            button.innerHTML =
                '<i class="fa-regular fa-heart"></i>';

        }

        else {

            favorites.push(carName);

            button.classList.add("active");

            button.innerHTML =
                '<i class="fa-solid fa-heart"></i>';

        }

        localStorage.setItem(
            "eliteFavorites",
            JSON.stringify(favorites)
        );

    });

});


// ================= CAR MODAL =================

const modal = document.getElementById("carModal");

const closeButton =
    document.querySelector(".close");

const carTitle =
    document.getElementById("carTitle");

const carBrand =
    document.getElementById("carBrand");

const carImage =
    document.getElementById("carImage");

const carPrice =
    document.getElementById("carPrice");

const carEngine =
    document.getElementById("carEngine");

const carPower =
    document.getElementById("carPower");

const carSpeed =
    document.getElementById("carSpeed");
 
const carYear =
    document.getElementById("carYear");

const carMileage =
    document.getElementById("carMileage");

const carFuel =
    document.getElementById("carFuel");

 
const galleryPrev =
    document.getElementById("galleryPrev");

const galleryNext =
    document.getElementById("galleryNext");

const galleryThumbnails =
    document.getElementById("galleryThumbnails");

let currentCarImages = [];

let currentImageIndex = 0;
function updateGallery() {

    if (currentCarImages.length === 0) return;

    carImage.src =
        currentCarImages[currentImageIndex];

    carImage.style.opacity = "0";

    setTimeout(() => {

        carImage.style.opacity = "1";

    }, 100);


    galleryThumbnails.innerHTML = "";


    currentCarImages.forEach((image, index) => {

        const thumbnail =
            document.createElement("img");

        thumbnail.src = image;

        thumbnail.alt = "Car image";

        thumbnail.classList.add("thumbnail");


        if (index === currentImageIndex) {

            thumbnail.classList.add("active");

        }


        thumbnail.addEventListener("click", () => {

            currentImageIndex = index;

            updateGallery();

        });


        galleryThumbnails.appendChild(thumbnail);

    });

}
const whatsappButton =
    document.getElementById("whatsappBtn");


// DETAILS BUTTONS

document.querySelectorAll(".details-btn").forEach(button => {

    button.addEventListener("click", () => {

        const car = cars[button.dataset.car];

        if (!car) return;

        carTitle.textContent = car.title;
        carBrand.textContent = car.brand;

        carPrice.textContent =
            "Price: " + car.price;

        carYear.textContent = car.year;
        carMileage.textContent = car.mileage;
        carFuel.textContent = car.fuel;

        carEngine.textContent =
            "Engine: " + car.engine;

        carPower.textContent =
            "Power: " + car.power;

        carSpeed.textContent =
            "Top Speed: " + car.speed;

        currentCarImages = car.image;
        currentImageIndex = 0;

        updateGallery();

        // هنا فقط يظهر الـ Modal
        modal.style.display = "flex";
        document.body.style.overflow = "hidden";

    });

});
// ================= SHARE SYSTEM =================

const shareBtn = document.getElementById("shareBtn");

const shareMenu = document.getElementById("shareMenu");

const closeShare =
    document.getElementById("closeShare");

const copyLink =
    document.getElementById("copyLink");

const whatsappShare =
    document.getElementById("whatsappShare");

const facebookShare =
    document.getElementById("facebookShare");

const instagramShare =
    document.getElementById("instagramShare");

const copyMessage =
    document.getElementById("copyMessage");


// OPEN SHARE MENU

shareBtn.addEventListener("click", () => {

    shareMenu.classList.add("active");

});


// CLOSE SHARE MENU

closeShare.addEventListener("click", () => {

    shareMenu.classList.remove("active");

    copyMessage.classList.remove("show");

});


// CLOSE WHEN CLICKING OUTSIDE

shareMenu.addEventListener("click", (event) => {

    if (event.target === shareMenu) {

        shareMenu.classList.remove("active");

    }

});


// GET CURRENT URL

function getShareUrl() {

    return window.location.href;

}


// ================= COPY LINK =================

copyLink.addEventListener("click", async () => {

    const url = getShareUrl();

    try {

        await navigator.clipboard.writeText(url);

        copyMessage.classList.add("show");

        copyLink.innerHTML =
            '<i class="fa-solid fa-check"></i> Copied!';

        setTimeout(() => {

            copyMessage.classList.remove("show");

            copyLink.innerHTML =
                '<i class="fa-solid fa-link"></i> Copy Link';

        }, 2000);

    } catch (error) {

        alert("Could not copy the link.");

    }

});


// ================= WHATSAPP =================

whatsappShare.addEventListener("click", () => {

    const url = getShareUrl();

    const title =
        carTitle.textContent;

    const message =
        `Check out this ${title} at Elite Cars! ${url}`;

    const whatsappUrl =
        `https://wa.me/?text=${encodeURIComponent(message)}`;

    window.open(
        whatsappUrl,
        "_blank"
    );

});


// ================= FACEBOOK =================

facebookShare.addEventListener("click", () => {

    const url = getShareUrl();

    const facebookUrl =
        `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;

    window.open(
        facebookUrl,
        "_blank",
        "width=600,height=500"
    );

});


// ================= INSTAGRAM =================

instagramShare.addEventListener("click", async () => {

    const url = getShareUrl();

    try {

        await navigator.clipboard.writeText(url);

        alert(
            "The car link has been copied. You can now paste it into Instagram."
        );

        window.open(
            "https://www.instagram.com/",
            "_blank"
        );

    } catch (error) {

        window.open(
            "https://www.instagram.com/",
            "_blank"
        );

    }

});
// ================= CLOSE MODAL =================

closeButton.addEventListener("click", closeModal);

function closeModal() {

    modal.style.display = "none";

    document.body.style.overflow = "";

}


closeButton.addEventListener("click", closeModal);


window.addEventListener("click", event => {

    if (event.target === modal) {
        closeModal();
    }

});


document.addEventListener("keydown", event => {

    if (event.key === "Escape") {
        closeModal();
    }

});

// ESC KEY

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        closeModal();

    }

});
galleryPrev.addEventListener("click", () => {

    if (currentCarImages.length === 0) return;

    currentImageIndex--;

    if (currentImageIndex < 0) {

        currentImageIndex =
            currentCarImages.length - 1;

    }

    updateGallery();

});


galleryNext.addEventListener("click", () => {

    if (currentCarImages.length === 0) return;

    currentImageIndex++;

    if (
        currentImageIndex >=
        currentCarImages.length
    ) {

        currentImageIndex = 0;

    }

    updateGallery();

});

// ================= CONTACT FORM =================

const contactForm =
    document.getElementById("contactForm");

contactForm.addEventListener("submit", event => {

    event.preventDefault();

    alert(
        "Thank you! Your message has been sent successfully."
    );

    contactForm.reset();

});
modal.style.display = "flex";
document.body.style.overflow = "hidden";    