let dayCount = document.querySelector('.js-day-count')
let hourCount = document.querySelector('.js-hour-count')
let minutesCount = document.querySelector('.js-minutes-count')
let secondCount = document.querySelector('.js-seconds-count')

const lauchCountDown = () => {
 const launchDate =  new Date('18 February, 2025 23:55:41').getTime()
 const todaysDate = new Date().getTime()

 const difference = launchDate - todaysDate

 const seconds = 1000
 const minutes = 60 * seconds
 const hours = 60 * minutes
 const day =  24 * hours

 const dayCountText = Math.floor(difference / day)
 const hourCountText = Math.floor((difference % day) / hours)
 const minutesCountText = Math.floor((difference % hours) / minutes)
 const secondCountText = Math.floor((difference % minutes) / seconds)

dayCount.textContent = padZero(dayCountText)
hourCount.textContent = padZero(hourCountText)
minutesCount.textContent = padZero(minutesCountText)
secondCount.textContent = padZero(secondCountText)

}
setInterval(lauchCountDown, 1000)

function padZero(number){
  return ((number < 10) ? '0': '') + number
}

