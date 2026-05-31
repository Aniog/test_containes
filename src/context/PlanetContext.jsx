import { createContext, useContext, useState } from 'react';

const defaultPlanet = {
  name: 'New Planet',
  atmosphere: {
    type: 'nitrogen-oxygen',
    density: 65,
    oxygenLevel: 21,
    co2Level: 0.04,
    toxicity: 0,
    color: '#87CEEB',
    hasAurora: false,
    cloudCoverage: 40,
  },
  gravity: {
    strength: 9.8,
    planetMass: 1.0,
    planetRadius: 1.0,
    rotationSpeed: 24,
    axialTilt: 23.5,
    magneticField: 60,
  },
  ecosystems: {
    biomes: ['forest', 'ocean'],
    biodiversity: 70,
    plantLife: 80,
    animalLife: 65,
    marineLife: 55,
    microbialLife: 90,
    dominantFlora: 'Deciduous Trees',
    dominantFauna: 'Mammals',
  },
  weather: {
    avgTemperature: 15,
    temperatureRange: 60,
    precipitation: 55,
    windSpeed: 30,
    stormFrequency: 25,
    seasonCount: 4,
    extremeEvents: ['thunderstorms'],
  },
  continents: {
    count: 7,
    landCoverage: 30,
    mountainRanges: 40,
    desertCoverage: 15,
    forestCoverage: 35,
    oceanDepth: 3800,
    tectonicActivity: 45,
    largestContinent: 'Pangara',
  },
  civilizations: {
    exists: true,
    count: 1,
    techLevel: 'industrial',
    population: 7.9,
    dominantSpecies: 'Humanoid',
    governmentType: 'democracy',
    warlikeness: 40,
    spaceCapable: false,
    culturalDiversity: 75,
  },
};

const PlanetContext = createContext(null);

export function PlanetProvider({ children }) {
  const [planet, setPlanet] = useState(defaultPlanet);

  const updateSection = (section, updates) => {
    setPlanet(prev => ({
      ...prev,
      [section]: { ...prev[section], ...updates },
    }));
  };

  const updateName = (name) => setPlanet(prev => ({ ...prev, name }));

  const resetPlanet = () => setPlanet(defaultPlanet);

  const randomizePlanet = () => {
    const atmosphereTypes = ['nitrogen-oxygen', 'carbon-dioxide', 'methane', 'hydrogen', 'toxic', 'thin', 'none'];
    const techLevels = ['primitive', 'ancient', 'medieval', 'industrial', 'modern', 'advanced', 'spacefaring'];
    const govTypes = ['tribal', 'monarchy', 'democracy', 'oligarchy', 'theocracy', 'hive-mind', 'ai-governed'];
    const species = ['Humanoid', 'Reptilian', 'Insectoid', 'Aquatic', 'Gaseous', 'Crystalline', 'Fungal'];
    const r = (min, max) => Math.round(Math.random() * (max - min) + min);
    const rf = (min, max) => parseFloat((Math.random() * (max - min) + min).toFixed(2));
    const pick = arr => arr[Math.floor(Math.random() * arr.length)];
    const allBiomes = ['forest', 'ocean', 'desert', 'tundra', 'jungle', 'savanna', 'wetlands', 'volcanic'];
    const biomeCount = r(1, 5);
    const shuffled = [...allBiomes].sort(() => Math.random() - 0.5);
    const colors = ['#87CEEB', '#FF6B35', '#9B59B6', '#2ECC71', '#E74C3C', '#F39C12', '#1ABC9C'];

    setPlanet({
      name: `Planet ${String.fromCharCode(65 + r(0, 25))}-${r(100, 999)}`,
      atmosphere: {
        type: pick(atmosphereTypes),
        density: r(0, 100),
        oxygenLevel: r(0, 40),
        co2Level: rf(0, 95),
        toxicity: r(0, 100),
        color: pick(colors),
        hasAurora: Math.random() > 0.5,
        cloudCoverage: r(0, 100),
      },
      gravity: {
        strength: rf(0.5, 25),
        planetMass: rf(0.1, 10),
        planetRadius: rf(0.3, 5),
        rotationSpeed: r(4, 200),
        axialTilt: r(0, 90),
        magneticField: r(0, 100),
      },
      ecosystems: {
        biomes: shuffled.slice(0, biomeCount),
        biodiversity: r(0, 100),
        plantLife: r(0, 100),
        animalLife: r(0, 100),
        marineLife: r(0, 100),
        microbialLife: r(20, 100),
        dominantFlora: pick(['Ferns', 'Cacti', 'Fungi', 'Algae', 'Crystal Trees', 'Vines', 'None']),
        dominantFauna: pick(['Mammals', 'Reptiles', 'Insects', 'Birds', 'Fish', 'Arachnids', 'None']),
      },
      weather: {
        avgTemperature: r(-80, 80),
        temperatureRange: r(5, 150),
        precipitation: r(0, 100),
        windSpeed: r(0, 200),
        stormFrequency: r(0, 100),
        seasonCount: pick([0, 1, 2, 4, 6, 8]),
        extremeEvents: [],
      },
      continents: {
        count: r(0, 12),
        landCoverage: r(5, 90),
        mountainRanges: r(0, 100),
        desertCoverage: r(0, 80),
        forestCoverage: r(0, 80),
        oceanDepth: r(500, 11000),
        tectonicActivity: r(0, 100),
        largestContinent: pick(['Pangara', 'Valdris', 'Koreth', 'Umara', 'Solenne', 'Dravex']),
      },
      civilizations: {
        exists: Math.random() > 0.4,
        count: r(1, 8),
        techLevel: pick(techLevels),
        population: rf(0.001, 50),
        dominantSpecies: pick(species),
        governmentType: pick(govTypes),
        warlikeness: r(0, 100),
        spaceCapable: Math.random() > 0.7,
        culturalDiversity: r(0, 100),
      },
    });
  };

  return (
    <PlanetContext.Provider value={{ planet, updateSection, updateName, resetPlanet, randomizePlanet }}>
      {children}
    </PlanetContext.Provider>
  );
}

export function usePlanet() {
  const ctx = useContext(PlanetContext);
  if (!ctx) throw new Error('usePlanet must be used within PlanetProvider');
  return ctx;
}
