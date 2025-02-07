const fetchAsteroidData = async () => {
    const apiKey = "YOUR_NASA_API_KEY"; // Replace with your NASA API key
    const today = new Date().toISOString().split('T')[0];
    const sevenDaysLater = new Date();
    sevenDaysLater.setDate(sevenDaysLater.getDate() + 7);
    const endDate = sevenDaysLater.toISOString().split('T')[0];

    const apiUrl = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${today}&end_date=${endDate}&api_key=${apiKey}`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error("Failed to fetch asteroid data");

        const data = await response.json();
        const diameters = [];

        for (const date in data.near_earth_objects) {
            const asteroids = data.near_earth_objects[date];
            asteroids.forEach(asteroid => {
                diameters.push(asteroid.estimated_diameter.kilometers.estimated_diameter_max);
            });
        }

        console.log("Asteroid Diameters (km):", diameters.slice(0, 10)); // Log first 10 asteroid diameters
        return diameters;
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
};

// Call the function
fetchAsteroidData();
