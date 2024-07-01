document.addEventListener('DOMContentLoaded', function() {
    // Function to calculate windchill factor
    function calculateWindChill(temperature, windSpeed) {
        // Check if conditions for calculating windchill are met
        if (temperature <= 10 && windSpeed > 4.8) {
            // Calculate windchill factor (example formula, adjust as needed)
            return 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
        } else {
            return "N/A";
        }
    }

    // Static values for temperature and wind speed (adjust as needed)
    let temperature = 8; // Example temperature in °C
    let windSpeed = 6; // Example wind speed in km/h

    // Display windchill factor in mobile view
    let windchillElement = document.getElementById('windchill');
    windchillElement.textContent = calculateWindChill(temperature, windSpeed);

    // Display windchill factor in wider view
    let windchillWideElement = document.getElementById('windchillWide');
    windchillWideElement.textContent = calculateWindChill(temperature, windSpeed);

    // Current year and last modified date in footer
    let currentYearElement = document.getElementById('currentYear');
    currentYearElement.textContent = new Date().getFullYear();

    let lastModifiedElement = document.getElementById('lastModified');
    lastModifiedElement.textContent = document.lastModified;
});
