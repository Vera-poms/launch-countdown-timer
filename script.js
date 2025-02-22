// let dayCount = document.querySelector('.js-day-count')
// let hourCount = document.querySelector('.js-hour-count')
// let minutesCount = document.querySelector('.js-minutes-count')
// let secondCount = document.querySelector('.js-seconds-count')

const timer = [
  {
    className: 'days',
    label: 'Days'
  },
  {
    className: 'hours',
    label: 'Hours'
  },
  {
    className: 'minutes',
    label: 'Minutes'
  },
  {
    className: 'seconds',
    label: 'Seconds'
  }
]

const countdownContainer = document.querySelector('.time-section')
const countToDate = new Date().setHours(new Date().getHours() + 240)
let previous

function showTimer(){
  timer.forEach((element) => {
    const div = document.createElement('div')
    div.classList.add(element.className)
    div.innerHTML = `
    <div class="flip-card">
        <div class="top">00</div>
        <div class="bottom">00</div>
    </div>
    <p class="title">${element.label}</p>
    `;

  countdownContainer.append(div)

  })
}

showTimer()

setInterval(() => {
  const currentDate = new Date();
  const timeBetweenDates = Math.floor((countToDate - currentDate) / 1000);
  if (timeBetweenDates !== previous) {
     flipAllCards(timeBetweenDates);
  }
   previous = timeBetweenDates;
}, 240);

function flipAllCards(time) {
  const days = Math.floor(time / (24 * 3600));
  const hours = Math.floor((time / 3600) % 24);
  const minutes = Math.floor((time / 60) % 60);
  const seconds = Math.floor(time % 60);

  const daysCard = document.querySelector(".days > .flip-card");
  const hoursCard = document.querySelector(".hours > .flip-card");
  const minutesCard = document.querySelector(".minutes > .flip-card");
  const secondsCard = document.querySelector(".seconds > .flip-card");

  flipCard(daysCard, days);
  flipCard(hoursCard, hours);
  flipCard(minutesCard, minutes);
  flipCard(secondsCard, seconds);
}

function flipCard(flipCard, time) {
  time = String(time).padStart(2, "0");
  const currentValue = flipCard.querySelector(".top").innerText;

  if (time === currentValue) return;

  const topFlip = document.createElement("div");
  topFlip.classList.add("top-flip");
  topFlip.innerText = currentValue;

  const bottomFlip = document.createElement("div");
  bottomFlip.classList.add("bottom-flip");
  bottomFlip.innerText = time;

  const topHalf = flipCard.querySelector(".top");
  const bottomHalf = flipCard.querySelector(".bottom");

  topFlip.addEventListener("animationstart", () => {
    topHalf.innerText = time;
  });

  topFlip.addEventListener("animationend", () => {
    topFlip.remove();
  });

  bottomFlip.addEventListener("animationend", () => {
    bottomHalf.innerText = time;
    bottomFlip.remove();
  });

  flipCard.append(topFlip, bottomFlip);
  // flipCard.appendChild(bottomFlip);
}

// const lauchCountDown = () => {
  
//  const launchDate =  new Date('18 February, 2025 23:55:41').getTime()
//  const todaysDate = new Date().getTime()

//  const difference = launchDate - todaysDate

//  const seconds = 1000
//  const minutes = 60 * seconds
//  const hours = 60 * minutes
//  const day =  24 * hours

//  const dayCountText = Math.floor(difference / day)
//  const hourCountText = Math.floor((difference % day) / hours)
//  const minutesCountText = Math.floor((difference % hours) / minutes)
//  const secondCountText = Math.floor((difference % minutes) / seconds)

// dayCount.textContent = padZero(dayCountText)
// hourCount.textContent = padZero(hourCountText)
// minutesCount.textContent = padZero(minutesCountText)
// secondCount.textContent = padZero(secondCountText)

// }
// setInterval(lauchCountDown, 1000)

// function padZero(number){
//   return ((number < 10) ? '0': '') + number
// }

