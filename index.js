const exploreBtn = document.getElementById("btn-explore");
const container = document.querySelector(".container");
const container2 = document.querySelector(".container2");
const ul = document.querySelector(".nav-liste");
const lis = ul.querySelectorAll("li");

const ulDestination = document.querySelector(".planete-nav");
const liPlanete = ulDestination.querySelectorAll("li");

const nameOfPlanete = document.querySelector(".name-of-planete");
const allInfos = document.querySelector(".allInfos");
const traveltime = document.querySelector(".travel-time");
const distance = document.querySelector(".distance");
const imgPlanet = document.querySelector(".img-planet");

let number = 0;

// NAVBAR PLANETE

liPlanete.forEach((li) => {
  li.addEventListener("click", () => {
    liPlanete.forEach((li) => {
      li.classList.remove("active2");
    });

    if (li.textContent == "Moon") {
      li.classList.add("active2");
      imgPlanet.innerHTML = `<img src="assets/destination/image-moon.png" alt="">`;
      nameOfPlanete.textContent = "MOON";
      allInfos.textContent = `See our planet as you've never seen it before. A perfect relaxing trip away to help
      regain perspective and come back refreshed. While you're there, take in some history
      by visiting the Luna 2 and Apollo 11 landing sites`;
      traveltime.textContent = "384,400 KM";
      distance.textContent = "3 DAYS";
    } else if (li.textContent == "Mars") {
      li.classList.add("active2");
      imgPlanet.innerHTML = `<img src="assets/destination/image-mars.png" alt="">`;
      nameOfPlanete.textContent = "MARS";
      allInfos.textContent = `Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons,
      the tallest planetary mountain in our solar system. It's two and a half times
      the size of Everest !`;
      traveltime.textContent = "225 mil. km";
      distance.textContent = "9 months";
    } else if (li.textContent == "Europa") {
      li.classList.add("active2");
      imgPlanet.innerHTML = `<img src="assets/destination/image-europa.png" alt="">`;
      nameOfPlanete.textContent = "EUROPA";
      allInfos.textContent = `The smallest of the four Galilean moons orbiting Jupiter, Europa is a
      winter lover's dream. With an icy surface, it's perfect for a bit of
      ice skating, curling, hockey, or simple relaxation in your snug
      wintery cabin.`;
      traveltime.textContent = "628 mil. km";
      distance.textContent = "3 years";
    } else {
      li.classList.add("active2");
      imgPlanet.innerHTML = `<img src="assets/destination/image-titan.png" alt="">`;
      nameOfPlanete.textContent = "TITAN";
      allInfos.textContent = `The only moon known to have a dense atmosphere other than Earth, Titan
      is a home away from home (just a few hundred degrees colder!). As a
      bonus, you get striking views of the Rings of Saturn.`;

      traveltime.textContent = "1.6 bil. km";
      distance.textContent = "7 years";
    }

    console.log(li.textContent);
  });
});

// NAVBAR PRINCIPAL
lis.forEach((li) => {
  li.addEventListener("click", () => {
    lis.forEach((li) => {
      li.classList.remove("active");
    });

    if (li.textContent.split(" ")[0] == "00") {
      container.style.display = "grid";
      container2.style.display = "none";
      li.classList.add("active");
      document.body.style.backgroundImage =
      "url(assets/home/background-home-desktop.jpg)";
    }
  });
});

function activeFunction(x) {
  lis.forEach((li) => {
    li.classList.remove("active");
  });

  if (x === 1) {
    lis[x].classList.add("active");
    document.body.style.backgroundImage =
      "url(assets/destination/background-destination-desktop.jpg)";
  }
}

exploreBtn.addEventListener("click", () => {
  container.style.display = "none";
  container2.style.display = "block";
  number = 1;
  activeFunction(number);
});
