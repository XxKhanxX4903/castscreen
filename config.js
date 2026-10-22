// Edit this file on GitHub (from your phone too) to change what the TV shows.
// The TV checks for changes every few minutes and reloads by itself.
// Keep the quotes and commas as they are: a missing one stops the page loading.
window.CASTSCREEN = {
  // Shown as "Good evening, Name". Leave empty for just "Good evening".
  name: "",

  // A note under the date, e.g. "Dinner at 7". Leave empty to hide it.
  message: "",

  // How often the TV looks for changes, in minutes.
  checkMinutes: 2,

  // Time zone for the clock and greeting.
  timezone: "Europe/London",
  // true shows 18:05, false shows 6:05.
  clock24: true,

  // Weather from Open-Meteo (free, no account). Set showWeather to false to hide it.
  showWeather: true,
  place: "Stratford-upon-Avon",
  latitude: 52.1917,
  longitude: -1.7073,

  // Slideshow: files in the photos/ folder, in this order. Add your own photos to the folder
  // (dark, landscape, about 1920x1080 and under 300 KB is best) and list them here.
  // Everything in photos/ is public on the internet once uploaded.
  photos: [
    "01-dusk-peaks.jpg",
    "02-golden-coast.jpg",
    "03-moon-lake.jpg",
    "04-aurora.jpg",
    "05-dunes.jpg",
    "06-above-the-clouds.jpg",
    "07-mirror-lake.jpg",
    "08-tea-hills.jpg",
    "09-alpenglow.jpg",
    "10-city-lights.jpg",
    "11-balloon-sunrise.jpg",
    "12-monsoon.jpg",
    "13-lighthouse-coast.jpg",
    "14-autumn-valley.jpg"
  ],
  shuffle: true,
  photoSeconds: 60,

  // Dock: name and two banner colours for each tile, left to right. 4 to 7 tiles fit.
  // These are reminders only: a Chromecast can't open apps from a web page.
  dockSeconds: 7,
  dock: [
    { name: "Netflix",     colors: ["#e50914", "#5a0004"] },
    { name: "YouTube",     colors: ["#ff3030", "#7a0a0a"] },
    { name: "BBC iPlayer", colors: ["#f54997", "#5b1b8f"] },
    { name: "Prime Video", colors: ["#1fa8ff", "#0a3d73"] },
    { name: "Disney+",     colors: ["#2f6bff", "#0b1f5c"] },
    { name: "Spotify",     colors: ["#1ed760", "#0b5a2a"] }
  ]
};
