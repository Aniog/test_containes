// Simulated memory archive data

export const ERAS = [
  { id: 'ancient', label: 'Ancient World', range: '3000 BCE – 500 CE', color: '#f59e0b' },
  { id: 'medieval', label: 'Medieval Age', range: '500 – 1500 CE', color: '#a78bfa' },
  { id: 'renaissance', label: 'Renaissance', range: '1400 – 1700 CE', color: '#06b6d4' },
  { id: 'industrial', label: 'Industrial Era', range: '1760 – 1900 CE', color: '#34d399' },
  { id: 'modern', label: 'Modern Age', range: '1900 – 2000 CE', color: '#f87171' },
  { id: 'digital', label: 'Digital Age', range: '2000 – 2050 CE', color: '#60a5fa' },
  { id: 'migration', label: 'Migration Era', range: '2050 – 2100 CE', color: '#e879f9' },
];

export const EMOTIONS = [
  { id: 'joy', label: 'Joy', icon: '✦', color: '#fcd34d' },
  { id: 'grief', label: 'Grief', icon: '◈', color: '#818cf8' },
  { id: 'wonder', label: 'Wonder', icon: '◉', color: '#67e8f9' },
  { id: 'love', label: 'Love', icon: '♡', color: '#fb7185' },
  { id: 'fear', label: 'Fear', icon: '◆', color: '#a78bfa' },
  { id: 'hope', label: 'Hope', icon: '◎', color: '#6ee7b7' },
  { id: 'nostalgia', label: 'Nostalgia', icon: '◐', color: '#fdba74' },
  { id: 'awe', label: 'Awe', icon: '✧', color: '#c4b5fd' },
];

export const LIFE_EVENTS = [
  { id: 'birth', label: 'Birth', icon: '◌' },
  { id: 'childhood', label: 'Childhood', icon: '◍' },
  { id: 'first-love', label: 'First Love', icon: '◎' },
  { id: 'marriage', label: 'Marriage', icon: '◈' },
  { id: 'parenthood', label: 'Parenthood', icon: '◉' },
  { id: 'loss', label: 'Loss', icon: '◐' },
  { id: 'discovery', label: 'Discovery', icon: '◑' },
  { id: 'migration', label: 'Migration', icon: '◒' },
  { id: 'death', label: 'Death', icon: '◓' },
];

export const REGIONS = [
  { id: 'africa', label: 'Africa', coords: [20, 10] },
  { id: 'asia', label: 'Asia', coords: [80, 30] },
  { id: 'europe', label: 'Europe', coords: [10, 50] },
  { id: 'americas', label: 'Americas', coords: [-80, 20] },
  { id: 'oceania', label: 'Oceania', coords: [140, -25] },
  { id: 'middle-east', label: 'Middle East', coords: [45, 25] },
  { id: 'arctic', label: 'Arctic', coords: [0, 80] },
];

const MEMORY_FRAGMENTS = [
  "The smell of bread baking in a clay oven at dawn",
  "My grandmother's hands weaving silk by candlelight",
  "The first time I saw the ocean — I thought it was the sky fallen",
  "We buried him under the olive tree he planted as a boy",
  "She laughed so hard the whole market turned to look",
  "The night the city went dark and we saw the stars for the first time",
  "I held my daughter and forgot every war I had ever fought",
  "The river flooded and we lost everything, but we were alive",
  "He taught me to read by tracing letters in the sand",
  "The last harvest before the drought took everything",
  "We danced until the fire burned to embers",
  "I watched the ship disappear and knew I would never return",
  "The library burned for three days. I saved seventeen books.",
  "My son asked me what snow felt like. I had forgotten.",
  "We built the wall stone by stone, singing the whole time",
  "The market smelled of spices I cannot name in any living language",
  "She pressed a flower into my palm and said nothing",
  "The earthquake lasted forty seconds. It felt like a lifetime.",
  "I learned to play the instrument my father left behind",
  "The first transmission from the colony ship made everyone weep",
  "We watched Earth shrink to a blue dot through the porthole",
  "My children have never felt rain on their skin",
  "The archive holds my voice but not my silence",
  "I recorded this memory so someone, somewhere, will know I existed",
  "The last sunrise I watched from the surface of this world",
  "We named the new star after the village we left behind",
  "She kept a jar of Earth soil in her quarters for forty years",
  "The children born in transit have never known gravity",
  "I dream of the smell of petrichor — rain on dry earth",
  "We carried our dead in memory because we could not carry them in body",
];

const NAMES = [
  "Amara Osei", "Yuki Tanaka", "Elena Vasquez", "Ibrahim Al-Rashid",
  "Priya Sharma", "Lena Müller", "Kofi Mensah", "Mei-Ling Chen",
  "Fatima Ndiaye", "Aleksei Volkov", "Zara Ahmed", "Marco Rossi",
  "Aiko Nakamura", "Samuel Okafor", "Ingrid Larsson", "Ravi Patel",
  "Nadia Petrov", "Carlos Mendoza", "Yewande Adeyemi", "Hana Kim",
  "Tariq Hassan", "Sofia Andersen", "Kwame Asante", "Leila Moradi",
  "Dmitri Sokolov", "Amelia Torres", "Jiro Watanabe", "Adaeze Obi",
  "Nikolai Ivanov", "Yasmin Al-Farsi",
];

function seededRandom(seed) {
  let s = seed;
  return () => {
    s = (s * 1664525 + 1013904223) & 0xffffffff;
    return (s >>> 0) / 0xffffffff;
  };
}

export function generateMemories(count = 200) {
  const memories = [];
  const rand = seededRandom(42);

  for (let i = 0; i < count; i++) {
    const era = ERAS[Math.floor(rand() * ERAS.length)];
    const emotion = EMOTIONS[Math.floor(rand() * EMOTIONS.length)];
    const event = LIFE_EVENTS[Math.floor(rand() * LIFE_EVENTS.length)];
    const region = REGIONS[Math.floor(rand() * REGIONS.length)];
    const name = NAMES[Math.floor(rand() * NAMES.length)];
    const fragment = MEMORY_FRAGMENTS[Math.floor(rand() * MEMORY_FRAGMENTS.length)];
    const year = Math.floor(rand() * 5000) - 3000;
    const duration = Math.floor(rand() * 300) + 10;
    const views = Math.floor(rand() * 50000) + 100;

    memories.push({
      id: `mem-${i.toString().padStart(4, '0')}`,
      title: fragment.length > 50 ? fragment.slice(0, 47) + '…' : fragment,
      excerpt: fragment,
      narrator: name,
      era: era.id,
      eraLabel: era.label,
      eraColor: era.color,
      emotion: emotion.id,
      emotionLabel: emotion.label,
      emotionIcon: emotion.icon,
      emotionColor: emotion.color,
      lifeEvent: event.id,
      lifeEventLabel: event.label,
      region: region.id,
      regionLabel: region.label,
      year,
      yearDisplay: year < 0 ? `${Math.abs(year)} BCE` : `${year} CE`,
      duration,
      views,
      archived: new Date(2060 + Math.floor(rand() * 40), Math.floor(rand() * 12), Math.floor(rand() * 28) + 1).toISOString(),
      featured: rand() > 0.85,
      coordinates: {
        lat: region.coords[1] + (rand() - 0.5) * 20,
        lng: region.coords[0] + (rand() - 0.5) * 30,
      },
    });
  }

  return memories;
}

export const ALL_MEMORIES = generateMemories(200);

export const STATS = {
  totalMemories: '4.7 million',
  totalNarrators: '2.1 million',
  totalEras: '47 centuries',
  totalRegions: '194 nations',
  archiveDate: '2087',
  migrationDate: '2094',
};
