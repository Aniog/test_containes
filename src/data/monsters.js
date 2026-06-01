export const MONSTER_TYPES = [
  'Dragon', 'Cloud Whale', 'Miniature Giant', 'Forest Spirit', 'Lava Kitten',
  'Moon Fox', 'Thunder Bunny', 'Crystal Deer', 'Shadow Pup', 'Bubble Serpent',
  'Frost Owl', 'Ember Toad', 'Starfish Sprite', 'Moss Golem', 'Wind Dancer',
  'Tide Nymph', 'Gloom Bat', 'Sunbeam Ferret', 'Pebble Troll', 'Dream Moth'
];

export const HABITATS = ['Mountain', 'Forest', 'Ocean', 'Sky', 'Cave', 'Meadow', 'Volcano', 'Tundra', 'Desert', 'Swamp'];
export const DIETS = ['Moonbeams', 'Stardust', 'Rainbows', 'Laughter', 'Sunlight', 'Crystals', 'Flowers', 'Music', 'Dreams', 'Clouds'];

const monsterEmojis = {
  'Dragon': '🐉', 'Cloud Whale': '🐋', 'Miniature Giant': '🧌', 'Forest Spirit': '🌿',
  'Lava Kitten': '🐱', 'Moon Fox': '🦊', 'Thunder Bunny': '🐰', 'Crystal Deer': '🦌',
  'Shadow Pup': '🐕', 'Bubble Serpent': '🐍', 'Frost Owl': '🦉', 'Ember Toad': '🐸',
  'Starfish Sprite': '⭐', 'Moss Golem': '🪨', 'Wind Dancer': '💨', 'Tide Nymph': '🧜',
  'Gloom Bat': '🦇', 'Sunbeam Ferret': '🦡', 'Pebble Troll': '🧟', 'Dream Moth': '🦋'
};

const colorThemes = [
  { bg: 'from-purple-400 to-indigo-500', card: 'bg-purple-50', accent: '#7c3aed', light: '#ede9fe' },
  { bg: 'from-pink-400 to-rose-500', card: 'bg-pink-50', accent: '#ec4899', light: '#fce7f3' },
  { bg: 'from-orange-400 to-amber-500', card: 'bg-orange-50', accent: '#f97316', light: '#fff7ed' },
  { bg: 'from-teal-400 to-cyan-500', card: 'bg-teal-50', accent: '#0d9488', light: '#f0fdfa' },
  { bg: 'from-blue-400 to-violet-500', card: 'bg-blue-50', accent: '#3b82f6', light: '#eff6ff' },
  { bg: 'from-green-400 to-emerald-500', card: 'bg-green-50', accent: '#10b981', light: '#ecfdf5' },
  { bg: 'from-red-400 to-orange-500', card: 'bg-red-50', accent: '#ef4444', light: '#fef2f2' },
  { bg: 'from-yellow-400 to-lime-500', card: 'bg-yellow-50', accent: '#eab308', light: '#fefce8' },
];

const backstories = [
  "Found wandering the Enchanted Highlands after a magical storm scattered their family. Loves cuddles and has a habit of accidentally turning things sparkly.",
  "Rescued from a traveling circus where they were forced to perform tricks. Now thrives in a loving home with plenty of space to roam.",
  "Hatched from a mysterious egg that washed ashore during the Great Tide of Wonders. Incredibly curious and loves exploring new places.",
  "Former guardian of the Ancient Crystal Caves who retired after 300 years of service. Surprisingly good at board games.",
  "Grew up in the Whispering Forest but got lost following a particularly interesting butterfly. Has been looking for a new family ever since.",
  "Descended from a long line of royal companions. Prefers fancy treats but will settle for regular ones if given enough belly rubs.",
  "Was accidentally summoned by a young wizard's first spell. The wizard's parents said no, so now they need a new home.",
  "Migrated from the Northern Frost Peaks seeking warmer climates. Loves cozy blankets and hot cocoa (the magical kind).",
  "Former star of the Moonlight Theater who decided they preferred quiet home life over the spotlight. Still occasionally performs for treats.",
  "Discovered living in a library, having taught themselves to read. Extremely intelligent and will judge your book collection.",
];

const careInstructions = [
  "Requires daily magical energy recharging via moonlight exposure. Keep away from iron objects. Loves being read to before bedtime.",
  "Needs at least 2 hours of outdoor playtime daily. Magical abilities increase with happiness levels. Provide plenty of sparkly toys.",
  "Feed twice daily with enchanted provisions. Regular grooming prevents magical overflow. Enjoys music and will harmonize if you sing.",
  "Requires a habitat with both warm and cool zones. Magical temperature regulation needs practice. Patient owners recommended.",
  "Social creature that thrives with companionship. Magical abilities are stronger in groups. Consider adopting a pair.",
  "Needs mental stimulation through puzzles and games. Boredom leads to minor magical mischief. Highly trainable with positive reinforcement.",
  "Requires access to natural elements (earth, water, or sky). Regular elemental baths maintain health. Very low maintenance otherwise.",
  "Sensitive to loud noises and sudden movements. Creates a calm environment for best results. Rewards patience with extraordinary loyalty.",
];

const traits = [
  ['Playful', 'Curious', 'Affectionate', 'Gentle'],
  ['Energetic', 'Loyal', 'Protective', 'Brave'],
  ['Calm', 'Wise', 'Patient', 'Nurturing'],
  ['Mischievous', 'Clever', 'Independent', 'Adventurous'],
  ['Shy', 'Sweet', 'Sensitive', 'Artistic'],
  ['Boisterous', 'Friendly', 'Enthusiastic', 'Generous'],
  ['Mysterious', 'Elegant', 'Graceful', 'Intuitive'],
  ['Silly', 'Warm', 'Cheerful', 'Sociable'],
];

const magicalAbilities = [
  ['Sparkle Emission', 'Minor Levitation', 'Dream Weaving'],
  ['Fire Breathing (small)', 'Heat Aura', 'Lava Sculpting'],
  ['Cloud Riding', 'Weather Sensing', 'Rain Dancing'],
  ['Forest Communication', 'Plant Growth', 'Animal Whispering'],
  ['Moonlight Absorption', 'Night Vision', 'Lunar Prediction'],
  ['Thunder Clapping', 'Static Discharge', 'Storm Calling'],
  ['Crystal Formation', 'Gem Sensing', 'Light Refraction'],
  ['Shadow Blending', 'Stealth Mode', 'Darkness Navigation'],
  ['Bubble Creation', 'Water Breathing', 'Tide Sensing'],
  ['Frost Breath', 'Ice Sculpting', 'Cold Immunity'],
];

export const monsters = Array.from({ length: 48 }, (_, i) => {
  const typeIndex = i % MONSTER_TYPES.length;
  const type = MONSTER_TYPES[typeIndex];
  const theme = colorThemes[i % colorThemes.length];
  const emoji = monsterEmojis[type] || '✨';
  const backstory = backstories[i % backstories.length];
  const care = careInstructions[i % careInstructions.length];
  const traitSet = traits[i % traits.length];
  const abilities = magicalAbilities[i % magicalAbilities.length];
  const habitat = HABITATS[i % HABITATS.length];
  const diet = DIETS[i % DIETS.length];

  const names = [
    'Sparkle', 'Glimmer', 'Puff', 'Zephyr', 'Ember', 'Frost', 'Luna', 'Sol',
    'Mochi', 'Biscuit', 'Nimbus', 'Cinder', 'Dewdrop', 'Starlight', 'Cobalt',
    'Maple', 'Thistle', 'Juniper', 'Clover', 'Sage', 'Pepper', 'Ginger',
    'Hazel', 'Willow', 'Ash', 'Birch', 'Cedar', 'Elm', 'Fern', 'Ivy',
    'Jasper', 'Onyx', 'Pearl', 'Ruby', 'Sapphire', 'Topaz', 'Amber', 'Jade',
    'Cosmo', 'Nova', 'Orion', 'Lyra', 'Vega', 'Sirius', 'Atlas', 'Zara',
    'Pixel', 'Quill',
  ];

  const ages = ['6 months', '1 year', '2 years', '3 years', '5 years', '8 years', '12 years', '20 years'];
  const sizes = ['Tiny (fits in a teacup)', 'Small (cat-sized)', 'Medium (dog-sized)', 'Large (pony-sized)', 'Huge (horse-sized)'];

  return {
    id: i + 1,
    name: names[i % names.length],
    type,
    emoji,
    age: ages[i % ages.length],
    size: sizes[i % sizes.length],
    theme,
    backstory,
    care,
    traits: traitSet,
    abilities,
    habitat,
    diet,
    friendliness: Math.floor(Math.random() * 3) + 7 + (i % 3),
    energy: Math.floor(Math.random() * 5) + 5,
    magic: Math.floor(Math.random() * 4) + 6,
    childFriendly: i % 3 !== 2,
    petFriendly: i % 4 !== 3,
    featured: i < 6,
    available: i % 7 !== 0,
    adoptionFee: [0, 50, 100, 150, 200, 250][i % 6],
    imgId: `monster-img-${i + 1}-${Math.random().toString(36).substr(2, 6)}`,
    titleId: `monster-title-${i + 1}`,
    descId: `monster-desc-${i + 1}`,
  };
});

export const getFeaturedMonsters = () => monsters.filter(m => m.featured);
export const getAvailableMonsters = () => monsters.filter(m => m.available);
export const getMonsterById = (id) => monsters.find(m => m.id === parseInt(id));
export const searchMonsters = (query, filters = {}) => {
  let results = monsters;
  if (query) {
    const q = query.toLowerCase();
    results = results.filter(m =>
      m.name.toLowerCase().includes(q) ||
      m.type.toLowerCase().includes(q) ||
      m.traits.some(t => t.toLowerCase().includes(q)) ||
      m.habitat.toLowerCase().includes(q)
    );
  }
  if (filters.type) results = results.filter(m => m.type === filters.type);
  if (filters.childFriendly) results = results.filter(m => m.childFriendly);
  if (filters.petFriendly) results = results.filter(m => m.petFriendly);
  if (filters.available) results = results.filter(m => m.available);
  return results;
};
