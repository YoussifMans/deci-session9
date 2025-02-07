const analyzeAsteroidData = (diameters) => {
    if (diameters.length === 0) {
        console.log("No data available to analyze.");
        return;
    }

    const totalCount = diameters.length;
    const totalDiameter = diameters.reduce((sum, diameter) => sum + diameter, 0);
    const averageDiameter = totalDiameter / totalCount;

    console.log(`Total Asteroids: ${totalCount}`);
    console.log(`Average Diameter: ${averageDiameter.toFixed(2)} km`);
};

// Example usage
fetchAsteroidData().then(analyzeAsteroidData);
