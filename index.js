const exploreBtn = document.getElementById("btn-explore");
const container = document.querySelector(".container");
const container2 = document.querySelector(".container2");
const container3 = document.querySelector(".container3");

const ul = document.querySelector(".nav-liste");
const lis = ul.querySelectorAll("li");

const ulDestination = document.querySelector(".planete-nav");
const liPlanete = ulDestination.querySelectorAll("li");

const spans = document.querySelectorAll(".carousel span"); // A FAIRE SUR TOUS

const imgCrew = document.querySelector(".img-crew");
const infosCrew = document.querySelector(".infosCrew");

const nameOfPlanete = document.querySelector(".name-of-planete");
const allInfos = document.querySelector(".allInfos");
const traveltime = document.querySelector(".travel-time");
const distance = document.querySelector(".distance");
const imgPlanet = document.querySelector(".img-planet");

let number = 0;

// NAVBAR PRINCIPAL
lis.forEach((li) => {
  li.addEventListener("click", () => {
    lis.forEach((li) => {
      li.classList.remove("active");
    });

    if (li.textContent.split(" ")[0] == "00") {
      container.style.display = "grid";
      container2.style.display = "none";
      container3.style.display = "none";
      li.classList.add("active");
      document.body.style.backgroundImage =
        "url(assets/home/background-home-desktop.jpg)";
    } else if (li.textContent.split(" ")[0] == "01") {
      container.style.display = "none";
      container2.style.display = "grid";
      container3.style.display = "none";
      li.classList.add("active");
      document.body.style.backgroundImage =
        "url(assets/destination/background-destination-desktop.jpg)";
    } else if (li.textContent.split(" ")[0] == "02") {
      container.style.display = "none";
      container2.style.display = "none";
      container3.style.display = "grid";
      li.classList.add("active");
      document.body.style.backgroundImage =
        "url(assets/crew/background-crew-desktop.jpg)";
    }
  });
});

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

// NAVBAR CREW

spans.forEach(function (span) {
  span.addEventListener("click", function () {
    spans.forEach((span) => {
      span.classList.remove("active3");
    });
    const value = this.dataset.value;

    switch (value) {
      case "1":
        span.classList.add("active3");
        infosCrew.innerHTML = `
        <h2 class="job">Commander</h2>
        <h3 class="name">Douglas Hurley</h3>

        <p>Douglas Gerald Hurley is an American engineer, former Marine Corps pilot
        and former NASA astronaut. He launched into space for the third time as
        commander of Crew Dragon Demo-2.</p>
        `;
        imgCrew.innerHTML = `<img src="assets/crew/image-douglas-hurley.png" alt="Image du Commandant">`;
        break;
      case "2":
        span.classList.add("active3");
        infosCrew.innerHTML = `
          <h2 class="job">Mission Specialist</h2>
          <h3 class="name">Mark Shuttleworth</h3>
  
          <p>Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind 
          the Linux-based Ubuntu operating system. Shuttleworth became the first South 
          African to travel to space as a space tourist.</p>
          `;
        imgCrew.innerHTML = `<img data-value="3" src="assets/crew/image-mark-shuttleworth.png">`;
        break;
      case "3":
        span.classList.add("active3");
        infosCrew.innerHTML = `
        <h2 class="job">Pilot</h2>
        <h3 class="name">Victor Glover</h3>

        <p>Pilot on the first operational flight of the SpaceX Crew Dragon to the 
        International Space Station. Glover is a commander in the U.S. Navy where 
        he pilots an F/A-18.He was a crew member of Expedition 64, and served as a 
        station systems flight engineer.</p>
        `;
        imgCrew.innerHTML = `<img src="assets/crew/image-victor-glover.png">`;
        break;
      case "4":
        span.classList.add("active3");
        infosCrew.innerHTML = `
        <h2 class="job">Flight Engineer</h2>
        <h3 class="name">Anousheh Ansari</h3>

        <p>Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. 
        Ansari was the fourth self-funded space tourist, the first self-funded woman to 
        fly to the ISS, and the first Iranian in space.</p>
        `;
        imgCrew.innerHTML = `<img src="assets/crew/image-anousheh-ansari.png" alt="Image du Commandant">`;
        break;
      default:
        break;
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
