const button=document.getElementById("carsbutton") 
button.addEventListener("click", function()
{
   const element = document.getElementById("CARS")
        element.scrollIntoView({
            behavior:"smooth"
        });
        
})
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const target = +counter.dataset.target;

    let count = 0;

    const updateCounter = () => {

        const increment = target / 100;

        if (count < target) {

            count += increment;

            counter.innerText = Math.ceil(count);

            setTimeout(updateCounter, 20);

        } else {

            counter.innerText = target + "+";

        }

    };

    updateCounter();

});

const search = document.getElementById("search");

const cards = document.querySelectorAll(".card");

search.addEventListener("keyup", function () {

    const value = search.value.toLowerCase();

    cards.forEach(card => {

        const carName = card.dataset.name.toLowerCase() ;
        console.log(carName);

        if(carName.includes(value)){       

            card.style.display = "block";

        }else{

            card.style.display = "none";

        }

    });

});

const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        const filter = button.dataset.filter;

        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        cards.forEach(card => {

            const carName = card.dataset.name;

            if(filter === "all" || carName === filter){
                card.style.display = "block";
            }else{
                card.style.display = "none";
            }

        });

    });

});
const cars={
    bmw:{
        title:"BMW M4",
        image:"bmw.png",
        price:"3,500,000 Pound",
        engine:"3.0L Twin Turbo",
        power:"510 HP",
        speed:"290 km/h",
    }
    ,mercedes:{
        title:"Mercedes C200",
        image:"mercedes.png",
        price:"2,900,000 Pound",
        engine:"2.0L Turbo",
        power:"204 HP",
        speed:"280 km/h",
    }
    ,audi:{
        title:" Audi RS5",
        image:"audi.png",
        price:"4,100,000 Pound",
        engine:"2.9L Twin Turbo",
        power:"450 HP",
        speed:"280 km/h",
    }

}
const modal = document.getElementById("carModal");
document.querySelectorAll(".details-btn").forEach(button =>{
    button.addEventListener("click",function(){
        const car=cars[this.dataset.car];
         document.getElementById("carTitle").textContent = car.title;
    document.getElementById("carImage").src = car.image;
    document.getElementById("carPrice").textContent = "Price: " + car.price;
    document.getElementById("carEngine").textContent = "Engine: " + car.engine;
    document.getElementById("carPower").textContent = "Power: " + car.power;
    document.getElementById("carSpeed").textContent = "Top Speed: " + car.speed;

    modal.style.display = "flex";
    })
})

document.querySelector(".close").addEventListener("click",function(){
    modal.style.display="none"
})
window.addEventListener("click",function(e){
    if(e.target===modal){
        modal.style.display="none"
    }
}) 

