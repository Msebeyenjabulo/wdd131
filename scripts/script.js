document.addEventListener("DOMContentLoaded", () => {
    // year and last modified date
    const currentYearElement = document.getElementById('currentYear');
    const lastModifiedElement = document.getElementById('lastModified');

    if (currentYearElement && lastModifiedElement) {
        currentYearElement.textContent = new Date().getFullYear();
        lastModifiedElement.textContent = document.lastModified;
        console.log("Current year and last modified date set successfully.");
    } else {
        console.error("Element not found.");
    }

    // wind chill calculation
    const temperature = 22; //  °C
    const windSpeed = 15; // km/h

    const calculateWindChill = (temp, speed) => {
        if (temp <= 10 && speed > 4.8) {
            return (13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)).toFixed(1);
        } else {
            return "N/A";
        }
    };

    const windChill = calculateWindChill(temperature, windSpeed);
    document.getElementById('windChill').textContent = windChill;
});
