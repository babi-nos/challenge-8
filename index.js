const exploreBtn = document.getElementById("btn-explore");
const container = document.querySelector(".container");
const container2 = document.querySelector(".container2");
const container3 = document.querySelector(".container3");
const container4 = document.querySelector(".container4");

const ul = document.querySelector(".nav-liste");
const lis = ul.querySelectorAll("li");

const ulDestination = document.querySelector(".planete-nav");
const liPlanete = ulDestination.querySelectorAll("li");

const spans = document.querySelectorAll(".carousel span"); // A FAIRE SUR TOUS
const numberTechno = document.querySelectorAll(".span-number span"); // A FAIRE SUR TOUS

const imgCrew = document.querySelector(".img-crew");
const infosCrew = document.querySelector(".infosCrew");

const nameOfPlanete = document.querySelector(".name-of-planete");
const allInfos = document.querySelector(".allInfos");
const traveltime = document.querySelector(".travel-time");
const distance = document.querySelector(".distance");
const imgPlanet = document.querySelector(".img-planet");

const infostech = document.querySelector(".infos-tech");
const imgTechno = document.querySelector(".img-techno");



let number = 0;
trueman = 0;

function updateScreenWidth() {
  screenWidth = window.innerWidth;

  if (screenWidth < 650 && trueman == "0") {
    container.style.display = "block";
    document.body.style.backgroundImage =
      "url(assets/home/background-home-mobile.jpg)";
  } else if (screenWidth < 950 && trueman == "0") {
    container.style.display = "block";
    document.body.style.backgroundImage =
      "url(assets/home/background-home-tablet.jpg)";
  } else if (screenWidth > 950 && trueman == "0") {
    container.style.display = "grid";
    document.body.style.backgroundImage =
      "url(assets/home/background-home-desktop.jpg)";
  } else if (screenWidth < 650 && trueman == "1") {
    document.body.style.backgroundImage =
      "url(assets/destination/background-destination-mobile.jpg)";
  } else if (screenWidth < 950 && trueman == "1") {
    document.body.style.backgroundImage =
      "url(assets/destination/background-destination-tablet.jpg)";
  } else if (screenWidth > 950 && trueman == "1") {
    document.body.style.backgroundImage = "url(/1153148.jpg)";
  } else if (screenWidth < 650 && trueman == "2") {
    document.body.style.backgroundImage =
      "url(assets/crew/background-crew-mobile.jpg)";
  } else if (screenWidth < 950 && trueman == "2") {
    document.body.style.backgroundImage =
      "url(assets/crew/background-crew-tablet.jpg)";
  } else if (screenWidth > 950 && trueman == "2") {
    document.body.style.backgroundImage =
      "url(assets/crew/background-crew-desktop.jpg)";
  } else if (screenWidth < 650 && trueman == "3") {
    document.body.style.backgroundImage =
      "url(assets/technology/background-technology-mobile.jpg)";
    imgTechno.innerHTML = ` <img src="assets/technology/image-launch-vehicle-landscape.jpg" alt="">`;
  } else if (screenWidth < 950 && trueman == "3") {
    document.body.style.backgroundImage =
      "url(assets/technology/background-technology-tablet.jpg)";
  } else if (screenWidth > 950 && trueman == "3") {
    document.body.style.backgroundImage = "url(/920817.jpg)";
  }

  if (screenWidth > 650 && trueman == "3" && screenWidth < 950) {
    document.body.style.backgroundImage =
      "url(assets/technology/background-technology-mobile.jpg)";
    imgTechno.innerHTML = `<img src="assets/technology/image-launch-vehicle-portrait.jpg" alt="">`;
    
  } // A MODIFIER BUG RESPONSIVE 


}

// "NAVBAR" PRINCIPAL

lis.forEach((li) => {
  li.addEventListener("click", () => {
    lis.forEach((li) => {
      li.classList.remove("active");
    });

    if (li.textContent.split(" ")[0] == "00") {
      container.style.display = "grid";
      container2.style.display = "none";
      container3.style.display = "none";
      container4.style.display = "none";
      li.classList.add("active");

      trueman = 0;
      if (screenWidth < 650) {
        container.style.display = "block";
        document.body.style.backgroundImage =
          "url(assets/home/background-home-mobile.jpg)";
      } else if (screenWidth < 950) {
        container.style.display = "block";
        document.body.style.backgroundImage =
          "url(assets/home/background-home-tablet.jpg)";
      } else {
        document.body.style.backgroundImage =
          "url(assets/home/background-home-desktop.jpg)";
      }
    } else if (li.textContent.split(" ")[0] == "01") {
      trueman = 1;
      container.style.display = "none";
      container2.style.display = "grid";
      container3.style.display = "none";
      container4.style.display = "none";
      li.classList.add("active");
      if (screenWidth < 650) {
        document.body.style.backgroundImage =
          "url(assets/destination/background-destination-mobile.jpg)";
      } else if (screenWidth < 950) {
        document.body.style.backgroundImage =
          "url(assets/destination/background-destination-tablet.jpg)";
      } else {
        document.body.style.backgroundImage = "url(./1153148.jpg)";
      }
    } else if (li.textContent.split(" ")[0] == "02") {
      trueman = 2;
      container.style.display = "none";
      container2.style.display = "none";
      container3.style.display = "grid";
      container4.style.display = "none";
      li.classList.add("active");
      if (screenWidth < 650) {
        document.body.style.backgroundImage =
          "url(assets/crew/background-crew-mobile.jpg)";
      } else if (screenWidth < 950) {
        document.body.style.backgroundImage =
          "url(assets/crew/background-crew-tablet.jpg)";
      } else {
        document.body.style.backgroundImage =
          "url(assets/crew/background-crew-desktop.jpg)";
      }
    } else {
      trueman = 3;
      container.style.display = "none";
      container2.style.display = "none";
      container3.style.display = "none";
      container4.style.display = "grid";
      li.classList.add("active");
      if (screenWidth < 650) {
        document.body.style.backgroundImage =
          "url(assets/technology/background-technology-mobile.jpg)";
      } else if (screenWidth < 950) {
        document.body.style.backgroundImage =
          "url(assets/technology/background-technology-tablet.jpg)";
      } else {
        document.body.style.backgroundImage = "url(./920817.jpg)";
      }
    }
  });
});

// "NAVBAR" PLANETE

liPlanete.forEach((li) => {
  li.addEventListener("click", () => {
    liPlanete.forEach((li) => {
      li.classList.remove("active2");
      allInfos.style.animation = "none";
      allInfos.offsetHeight;
    });

    if (li.textContent == "Moon" || li.textContent == "Lune") {
      li.classList.add("active2");
      imgPlanet.innerHTML = `<img src="./assets/destination/image-moon.png" alt="">`;
      nameOfPlanete.textContent = "MOON";
      allInfos.style.animation = "myAnimation 0.5s ease-in-out forwards";
      allInfos.textContent = `See our planet as you've never seen it before. A perfect relaxing trip away to help
      regain perspective and come back refreshed. While you're there, take in some history
      by visiting the Luna 2 and Apollo 11 landing sites`;
      traveltime.textContent = "384,400 KM";
      distance.textContent = "3 DAYS";
    } else if (li.textContent == "Mars") {
      li.classList.add("active2");
      imgPlanet.innerHTML = `<img src="/assets/destination/image-mars.png" alt="">`;
      nameOfPlanete.textContent = "MARS";
      allInfos.style.animation = "myAnimation 0.5s ease-in-out forwards";
      allInfos.textContent = `Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons,the tallest planetary mountain in our solar system. It's two and a half times
      the size of Everest !`;
      traveltime.textContent = "225 mil. km";
      distance.textContent = "9 months";
    } else if (li.textContent == "Europa" || li.textContent == "Europe") {
      li.classList.add("active2");
      imgPlanet.innerHTML = `<img src="/assets/destination/image-europa.png" alt="">`;
      nameOfPlanete.textContent = "EUROPA";
      allInfos.style.animation = "myAnimation 0.5s ease-in-out forwards";
      allInfos.textContent = `The smallest of the four Galilean moons orbiting Jupiter, Europa is a
      winter lover's dream. With an icy surface, it's perfect for a bit of
      ice skating, curling, hockey, or simple relaxation in your snug
      wintery cabin.`;
      traveltime.textContent = "628 mil. km";
      distance.textContent = "3 years";
    } else {
      li.classList.add("active2");
      imgPlanet.innerHTML = `<img src="./assets/destination/image-titan.png" alt="">`;
      nameOfPlanete.textContent = "TITAN";
      allInfos.style.animation = "myAnimation 0.5s ease-in-out forwards";
      allInfos.textContent = `The only moon known to have a dense atmosphere other than Earth, Titan
      is a home away from home (just a few hundred degrees colder!). As a
      bonus, you get striking views of the Rings of Saturn.`;
      traveltime.textContent = "1.6 bil. km";
      distance.textContent = "7 years";
    }

    console.log(li.textContent);
  });
});

// "NAVBAR" CREW

spans.forEach(function (span) {
  span.addEventListener("click", function () {
    spans.forEach((span) => {
      span.classList.remove("active3");
      imgCrew.style.animation = "none";
      imgCrew.offsetHeight;
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
        imgCrew.style.animation = "myAnimation 0.5s ease-in-out forwards";

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
        imgCrew.style.animation = "myAnimation 0.5s ease-in-out forwards";
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
        imgCrew.style.animation = "myAnimation 0.5s ease-in-out forwards";
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
        imgCrew.style.animation = "myAnimation 0.5s ease-in-out forwards";
        imgCrew.innerHTML = `<img src="assets/crew/image-anousheh-ansari.png" alt="Image du Commandant">`;
        break;
      default:
        break;
    }
  });
});

// "NAVBAR" techno

numberTechno.forEach((number) => {
  number.addEventListener("click", () => {
    numberTechno.forEach((number) => {
      number.classList.remove("active4");
      imgTechno.style.animation = "none";
      imgTechno.offsetHeight;
    });

    if (number.textContent == "1") {
      number.classList.add("active4");
      infostech.innerHTML = `
      <h3>THE TERMINOLOGY ...</h3>
      <h2>LAUNCH VEHICLE</h2>
      <p>A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from
      Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most
      powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch
      pad!</p>
      `;
      imgTechno.style.animation = "myAnimation 0.5s ease-in-out forwards";
      imgTechno.innerHTML = `<img src="assets/technology/image-launch-vehicle-portrait.jpg" alt="">`;

      if (screenWidth < 650) {
        imgTechno.innerHTML = `<img src="assets/technology/image-launch-vehicle-landscape.jpg" alt=""></img>`;
      }
    } else if (number.textContent == "2") {
      number.classList.add("active4");
      infostech.innerHTML = `
      <h3>THE TERMINOLOGY ...</h3>
      <h2> Spaceport</h2>
      <p>A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, 
      by analogy to the seaport for ships or airport for aircraft. Based in the 
      famous Cape Canaveral, our spaceport is ideally situated to take advantage 
      of the Earth's rotation for launch.</p>
      `;
      imgTechno.style.animation = "myAnimation 0.5s ease-in-out forwards";
      imgTechno.innerHTML = `<img src="assets/technology/image-spaceport-portrait.jpg" alt="">`;

      if (screenWidth < 650) {
        imgTechno.innerHTML = `<img src="assets/technology/image-spaceport-landscape.jpg" alt=""></img>`;
      }
    } else {
      number.classList.add("active4");
      infostech.innerHTML = `
      <h3>THE TERMINOLOGY ...</h3>
      <h2>Space capsule</h2>
      <p>A space capsule is an often-crewed spacecraft that uses a blunt-body reentry 
      capsule to reenter the Earth's atmosphere without wings. Our capsule is where 
      you'll spend your time during the flight. It includes a space gym, cinema, 
      and plenty of other activities to keep you entertained.!</p>
      `;
      imgTechno.style.animation = "myAnimation 0.5s ease-in-out forwards";
      imgTechno.innerHTML = `<img src="assets/technology/image-space-capsule-portrait.jpg" alt="">`;
      if (screenWidth < 650) {
        imgTechno.innerHTML = `<img src="assets/technology/image-space-capsule-landscape.jpg" alt=""></img>`;
      }
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
      "url(/1153148.jpg)";
  }
}

exploreBtn.addEventListener("click", () => {
  container.style.display = "none";
  container2.style.display = "block";
  number = 1;
  activeFunction(number);
});

window.addEventListener("resize", updateScreenWidth);

updateScreenWidth();

const btnNavbar = document.querySelector(".toggle-btn");
const sidebar = document.querySelector(".nav-liste.responsive");
const svgClose = document.querySelector(".svg-close");
const liResponsive = sidebar.querySelectorAll("li");


btnNavbar.addEventListener("click", () => {
  sidebar.style.right = "0%";

  svgClose.addEventListener("click", () => {
    sidebar.style.right = "-70%";
  });

  liResponsive.forEach((li) => {
    li.addEventListener("click", (e) => {
      sidebar.style.right = "-70%";
      updateScreenWidth();

      if (li.textContent.split(" ")[0] == "00") {
        trueman = 0;

        container.style.display = "block";
        container2.style.display = "none";
        container3.style.display = "none";
        container4.style.display = "none";
      } else if (li.textContent.split(" ")[0] == "01") {
        trueman = 1;

        container.style.display = "none";
        container2.style.display = "block";
        container3.style.display = "none";
        container4.style.display = "none";
      } else if (li.textContent.split(" ")[0] == "02") {
        trueman = 2;

        container.style.display = "none";
        container2.style.display = "none";
        container3.style.display = "block";
        container4.style.display = "none";
      } else {
        trueman = 3;

        container.style.display = "none";
        container2.style.display = "none";
        container3.style.display = "none";
        container4.style.display = "block";
      }
    });
  });
});
