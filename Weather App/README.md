<html>
<h1>Weather App</h1>
<p>This is a simple weather app that allows users to view the current weather and 5-day forecast for a given city.</p>
<h2>Features</h2>
<ul>
  <li>Search for a city to get its current weather and 5-day forecast</li>
  <li>Uses user's current location to show weather for their city</li>
  <li>Displays weather icons, temperature, wind speed and humidity</li>
  <li>Clean and responsive UI</li>
  <li>It's responsive on all devices</li>
</ul>
<h2>Usage</h2>
<p>The app has a search input field where users can type in a city name, like "London" or "Tokyo". Hitting search or
  pressing Enter will fetch the weather data for that city from the <a
    href="https://openweathermap.org/api">OpenWeatherMap API</a>.</p>
<p>Alternatively, clicking the "Use Current Location" button will get the user's coordinates via the browser's
  geolocation API and show weather for their current city.</p>
<p>The current weather is shown prominently, with a heading for the city name and today's date. Below this is a 5-day
  forecast section showing weather cards for the next 5 days. Each card displays the day name, weather icon, temp, wind
  and humidity.</p>
<p>The app is fully responsive and works nicely on mobile and desktop layouts.</p>
<h2>Running Locally</h2>
<p>To run this app locally, you need to:</p>
<ol>
  <li>Get an API key for OpenWeatherMap and add it to the <code>script.js</code> file</li>
  <li>Install dependencies: <code>npm install</code></li>
  <li>Start local dev server: <code>npm start</code></li>
  <li>Open the app at <code>http://localhost:3000</code></li>
</ol>
<h2>Built With</h2>
<ul>
  <li>HTML, CSS, JavaScript</li>
  <li><a href="https://openweathermap.org/api">OpenWeatherMap API</a> for weather data</li>
  <li>Local dev server and build process with Parcel</li>
</ul>
<h2>Author</h2>
<p>Akash Kumar</p>

</html>
