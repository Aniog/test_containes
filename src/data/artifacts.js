const eras = [
  'Ancient (Pre-500 CE)',
  'Medieval (500-1500)',
  'Renaissance (1500-1700)',
  'Industrial (1700-1900)',
  'Modern (1900-2000)',
  'Near Future (2000-2100)',
  'Far Future (2100-3000)',
  'Deep Future (3000+)',
]

const dimensions = [
  'Prime Timeline',
  'Dimension Alpha-7',
  'Dimension Beta-12',
  'Dimension Gamma-3',
  'Dimension Delta-9',
  'Dimension Omega-1',
  'Collapsed Timeline',
  'Quantum Nexus',
]

const stability = ['Stable', 'Fluctuating', 'Unstable', 'Critical', 'Paradoxical']
const significance = ['Minor', 'Notable', 'Significant', 'Major', 'World-Altering']
const riskLevels = ['Minimal', 'Low', 'Moderate', 'High', 'Extreme']
const statuses = ['Catalogued', 'Under Investigation', 'Quarantined', 'Declassified', 'Missing']

const artifactNames = [
  'The Obsidian Chronometer',
  'Tesla\'s Lost Frequency Modulator',
  'The Pharaoh\'s Temporal Scarab',
  'Victorian Probability Engine',
  'The Quantum Quill of Dimension Beta',
  'Samurai Blade of Frozen Time',
  'The Alchemist\'s Perpetual Hourglass',
  'Da Vinci\'s Fourth Codex',
  'The Roswell Temporal Fragment',
  'Byzantine Paradox Mirror',
  'The Clockwork Oracle of Prague',
  'Nikola\'s Dimensional Resonator',
  'The Silk Road Infinity Compass',
  'Mayan Calendar Stone (Variant-7)',
  'The Philosopher\'s Temporal Stone',
  'Edison\'s Erased Recording',
  'The Viking Rune of Bifrost',
  'Atlantean Navigation Crystal',
  'The Babbage Prediction Engine',
  'Cleopatra\'s Chrono-Asp',
  'The Manhattan Project Anomaly',
  'Gutenberg\'s Hidden Press',
  'The Tunguska Shard',
  'Newton\'s Unwritten Law',
  'The Voynich Decoder Ring',
  'Galileo\'s Forbidden Lens',
  'The Bermuda Temporal Anchor',
  'Archimedes\' Mirror of Tomorrow',
  'The Rosetta Frequency Stone',
  'Marco Polo\'s Dimensional Map',
  'The Wright Brothers\' Antigravity Notes',
  'Genghis Khan\'s Conquest Predictor',
  'The Library of Alexandria Index',
  'Copernicus\' Hidden Star Chart',
  'The Antikythera Upgrade Module',
  'Shakespeare\'s Prophetic Folio',
  'The Pompeii Time Capsule',
  'Nostradamus\' Calibration Device',
  'The Templar Chrono-Key',
  'Fibonacci\'s Spiral Gateway',
  'The Easter Island Transmitter',
  'Pythagoras\' Harmonic Resonator',
  'The Dead Sea Temporal Scrolls',
  'Magellan\'s Impossible Logbook',
  'The Nazca Line Activator',
  'Ramses\' Eternity Scepter',
  'The Stonehenge Alignment Core',
  'Leonardo\'s Mechanical Owl',
  'The Terracotta Army Controller',
  'Hypatia\'s Astral Calculator',
]

const curatorNotes = [
  'Recovered during a routine temporal sweep of the 15th century. Shows signs of dimensional bleed-through.',
  'This artifact exhibits properties inconsistent with its era of origin. Further analysis required.',
  'WARNING: Do not expose to direct temporal radiation. Last incident caused a 3-day loop in Sector 7.',
  'Acquired from a parallel timeline where the Industrial Revolution occurred 200 years earlier.',
  'The inscriptions match no known language from any catalogued timeline. Translation ongoing.',
  'This item appears to exist simultaneously in multiple timelines. Handle with extreme caution.',
  'Carbon dating places this artifact 400 years before its apparent technology level should exist.',
  'Recovered from a collapsed timeline. The original context has been permanently lost.',
  'Shows evidence of modification by an unknown future civilization. Origin dimension unclear.',
  'This artifact was found at a temporal convergence point. It may serve as a timeline anchor.',
  'Multiple copies exist across different dimensions, each with subtle variations.',
  'The energy signature matches artifacts from the Omega-1 dimension exclusively.',
  'Curator recommendation: Upgrade to Level 4 containment after recent fluctuation event.',
  'Historical records from three timelines reference this artifact under different names.',
  'The artifact appears to respond to the presence of other temporal objects nearby.',
]

const descriptions = [
  'A device of unknown origin that appears to manipulate local temporal fields within a 3-meter radius.',
  'An ancient mechanism that predicts probability outcomes with 94.7% accuracy across all tested timelines.',
  'A crystalline structure that emits frequencies matching those recorded at known dimensional breach points.',
  'A manuscript containing detailed schematics for technology that won\'t be invented for another 300 years.',
  'A navigational instrument that points toward temporal anomalies rather than magnetic north.',
  'A recording device that captures sounds from adjacent timelines when activated under specific conditions.',
  'A mirror that reflects not the present, but possible futures based on the observer\'s timeline position.',
  'A blade forged with metallurgical techniques unknown to any era in the Prime Timeline.',
  'A computational device that operates on principles of quantum mechanics centuries before their discovery.',
  'A stone tablet containing a map of dimensional pathways between known and unknown realities.',
]

function generateArtifacts(count) {
  const artifacts = []
  
  for (let i = 0; i < count; i++) {
    const nameIndex = i % artifactNames.length
    const suffix = i >= artifactNames.length ? ` (Variant ${Math.floor(i / artifactNames.length) + 1})` : ''
    
    artifacts.push({
      id: `TTA-${String(i + 1).padStart(4, '0')}`,
      name: artifactNames[nameIndex] + suffix,
      era: eras[Math.floor(Math.random() * eras.length)],
      dimension: dimensions[Math.floor(Math.random() * dimensions.length)],
      stability: stability[Math.floor(Math.random() * stability.length)],
      significance: significance[Math.floor(Math.random() * significance.length)],
      riskLevel: riskLevels[Math.floor(Math.random() * riskLevels.length)],
      status: statuses[Math.floor(Math.random() * statuses.length)],
      description: descriptions[Math.floor(Math.random() * descriptions.length)],
      curatorNote: curatorNotes[Math.floor(Math.random() * curatorNotes.length)],
      dateRecovered: `${2000 + Math.floor(Math.random() * 26)}-${String(Math.floor(Math.random() * 12) + 1).padStart(2, '0')}-${String(Math.floor(Math.random() * 28) + 1).padStart(2, '0')}`,
      clearanceRequired: ['Observer', 'Researcher', 'Chronologist'][Math.floor(Math.random() * 3)],
      containmentLevel: Math.floor(Math.random() * 5) + 1,
      temporalSignature: `${(Math.random() * 100).toFixed(2)} THz`,
      dimensionalBleed: `${(Math.random() * 10).toFixed(1)}%`,
    })
  }
  
  return artifacts
}

export const artifacts = generateArtifacts(200)

export const featuredDiscoveries = [
  {
    id: 'FD-001',
    title: 'The Obsidian Chronometer Decoded',
    summary: 'After 7 years of analysis, researchers have finally decoded the temporal inscriptions on the Obsidian Chronometer, revealing a map to 12 previously unknown timeline branches.',
    date: '2026-05-28',
    category: 'Breakthrough',
    clearance: 'Researcher',
  },
  {
    id: 'FD-002',
    title: 'Dimension Gamma-3 Contact Established',
    summary: 'First successful two-way communication with entities from Dimension Gamma-3. Their temporal technology appears to be 2000 years ahead of our own.',
    date: '2026-05-15',
    category: 'First Contact',
    clearance: 'Chronologist',
  },
  {
    id: 'FD-003',
    title: 'Victorian Probability Engine Activated',
    summary: 'The Victorian Probability Engine has been successfully powered for the first time in 150 years, producing predictions with startling accuracy.',
    date: '2026-05-02',
    category: 'Activation',
    clearance: 'Observer',
  },
]

export const activeInvestigations = [
  {
    id: 'INV-2026-041',
    title: 'The Bermuda Temporal Anchor Disappearance',
    status: 'Active',
    priority: 'Critical',
    lead: 'Dr. Helena Voss',
    team: 8,
    daysActive: 47,
    description: 'The Bermuda Temporal Anchor vanished from containment on April 15th. Temporal residue suggests it may have activated autonomously.',
  },
  {
    id: 'INV-2026-038',
    title: 'Omega-1 Dimensional Breach Pattern',
    status: 'Active',
    priority: 'High',
    lead: 'Prof. Marcus Chen',
    team: 12,
    daysActive: 89,
    description: 'A recurring pattern of micro-breaches from Dimension Omega-1 has been detected across 7 global sites. Pattern analysis suggests intentional probing.',
  },
  {
    id: 'INV-2026-035',
    title: 'The Tunguska Shard Resonance Event',
    status: 'Monitoring',
    priority: 'Moderate',
    lead: 'Dr. Yuki Tanaka',
    team: 5,
    daysActive: 112,
    description: 'The Tunguska Shard has begun emitting a low-frequency resonance that matches signals from three other artifacts in separate containment facilities.',
  },
  {
    id: 'INV-2026-029',
    title: 'Collapsed Timeline Recovery Mission',
    status: 'Planning',
    priority: 'High',
    lead: 'Commander Sarah Blake',
    team: 20,
    daysActive: 156,
    description: 'Preparation for the first manned expedition into a collapsed timeline to recover artifacts before complete dimensional dissolution.',
  },
]

export const paradoxReports = [
  {
    id: 'PR-2026-117',
    severity: 'Critical',
    location: 'London, 1888',
    description: 'Causal loop detected: An artifact from 2045 was found in a Victorian-era collection, but records show it was created using knowledge from that same collection.',
    status: 'Unresolved',
    dateReported: '2026-05-30',
  },
  {
    id: 'PR-2026-114',
    severity: 'High',
    location: 'Alexandria, 48 BCE',
    description: 'Timeline divergence: The Library of Alexandria Index references texts that were never written in any known timeline.',
    status: 'Under Review',
    dateReported: '2026-05-22',
  },
  {
    id: 'PR-2026-109',
    severity: 'Moderate',
    location: 'Tokyo, 2089',
    description: 'Temporal echo: Multiple agents report memories of events that haven\'t occurred yet in the Prime Timeline.',
    status: 'Monitoring',
    dateReported: '2026-05-10',
  },
  {
    id: 'PR-2026-103',
    severity: 'Low',
    location: 'Dimension Beta-12',
    description: 'Minor timeline bleed: Cultural artifacts from Prime Timeline appearing in Beta-12 without any recorded transfer.',
    status: 'Resolved',
    dateReported: '2026-04-28',
  },
]

export const timelineData = [
  { year: -3000, era: 'Ancient', events: ['First temporal artifacts appear', 'Atlantean civilization peak'], dimension: 'Prime Timeline' },
  { year: -500, era: 'Ancient', events: ['Pythagoras discovers harmonic resonance', 'First dimensional awareness'], dimension: 'Prime Timeline' },
  { year: 0, era: 'Ancient', events: ['Temporal convergence point', 'Multiple timeline branches form'], dimension: 'Multiple' },
  { year: 500, era: 'Medieval', events: ['Dark Age of temporal knowledge', 'Artifacts hidden by secret orders'], dimension: 'Prime Timeline' },
  { year: 1000, era: 'Medieval', events: ['Templar discovery of Chrono-Key', 'First recorded paradox'], dimension: 'Prime Timeline' },
  { year: 1200, era: 'Medieval', events: ['Genghis Khan acquires Conquest Predictor', 'Timeline Alpha-7 diverges'], dimension: 'Dimension Alpha-7' },
  { year: 1500, era: 'Renaissance', events: ['Da Vinci writes Fourth Codex', 'Renaissance of temporal studies'], dimension: 'Prime Timeline' },
  { year: 1600, era: 'Renaissance', events: ['Galileo\'s forbidden observations', 'Shakespeare\'s prophetic works'], dimension: 'Prime Timeline' },
  { year: 1700, era: 'Industrial', events: ['Newton\'s unwritten temporal laws', 'Industrial temporal revolution begins'], dimension: 'Prime Timeline' },
  { year: 1800, era: 'Industrial', events: ['Babbage Prediction Engine created', 'Victorian probability research'], dimension: 'Prime Timeline' },
  { year: 1850, era: 'Industrial', events: ['Tesla begins frequency experiments', 'Dimension Beta-12 first detected'], dimension: 'Dimension Beta-12' },
  { year: 1900, era: 'Modern', events: ['The Archive officially founded', 'First systematic artifact collection'], dimension: 'Prime Timeline' },
  { year: 1908, era: 'Modern', events: ['Tunguska Event / Shard recovery', 'Dimensional breach confirmed'], dimension: 'Multiple' },
  { year: 1947, era: 'Modern', events: ['Roswell Temporal Fragment recovered', 'Government involvement begins'], dimension: 'Prime Timeline' },
  { year: 1969, era: 'Modern', events: ['Moon landing reveals lunar artifacts', 'Space-temporal research initiated'], dimension: 'Prime Timeline' },
  { year: 2000, era: 'Near Future', events: ['Digital temporal detection systems', 'Archive goes underground'], dimension: 'Prime Timeline' },
  { year: 2026, era: 'Near Future', events: ['Current operations', 'Omega-1 breach pattern detected'], dimension: 'Multiple' },
  { year: 2050, era: 'Near Future', events: ['[CLASSIFIED]', 'First manned timeline expedition'], dimension: 'Prime Timeline' },
  { year: 2100, era: 'Far Future', events: ['[REDACTED]', 'Dimensional travel commonplace'], dimension: 'Multiple' },
  { year: 2500, era: 'Far Future', events: ['[DATA CORRUPTED]', 'Timeline convergence event'], dimension: 'Quantum Nexus' },
  { year: 3000, era: 'Deep Future', events: ['[SIGNAL LOST]', 'End of linear time?'], dimension: 'Unknown' },
]

export { eras, dimensions, stability, significance, riskLevels, statuses }
