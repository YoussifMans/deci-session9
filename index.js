import { fetchAsteroidData } from './asteroidFetcher.js';
import { analyzeAsteroidData } from './asteroidAnalyzer.js';

fetchAsteroidData().then(diameters => {
    analyzeAsteroidData(diameters);
});
