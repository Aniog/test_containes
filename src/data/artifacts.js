const eras = ['Ancient', 'Medieval', 'Renaissance', 'Industrial', 'Modern', 'Post-Modern', 'Near-Future', 'Far-Future', 'Temporal Void']
const dimensions = ['Prime-α', 'Echo-β', 'Fracture-γ', 'Void-δ', 'Mirror-ε', 'Nexus-ζ', 'Shadow-η', 'Drift-θ']
const stability = ['Stable', 'Fluctuating', 'Unstable', 'Critical', 'Paradox-Locked']
const significance = ['Minor', 'Notable', 'Significant', 'Major', 'World-Altering', 'Reality-Defining']
const categories = ['Document', 'Device', 'Biological', 'Energy Signature', 'Architectural Fragment', 'Recording', 'Weapon', 'Navigation Tool', 'Communication Device', 'Temporal Anomaly']
const statuses = ['Secured', 'Under Investigation', 'Quarantined', 'Missing', 'Recovered', 'Classified']

const curatorNotes = [
  "This artifact exhibits temporal resonance patterns consistent with a Class-IV displacement event. Handle with extreme caution.",
  "Carbon dating places this object approximately 3,000 years before its apparent technological sophistication should allow. Further analysis required.",
  "The inscriptions on this artifact shift when observed under different temporal frequencies. Translation efforts ongoing.",
  "Recovered from Timeline Branch 7-Alpha during the Cascade Event of 2847. Shows signs of reality degradation.",
  "This item appears to exist simultaneously in three separate timelines. Containment protocols have been updated accordingly.",
  "Curator's personal note: I've seen this artifact in my dreams before we recovered it. Requesting psychological evaluation.",
  "The energy signature matches nothing in our database. Preliminary analysis suggests extra-dimensional origin.",
  "WARNING: Prolonged exposure causes temporal displacement symptoms. Limit handling to 4 minutes per session.",
  "This artifact was voluntarily surrendered by a temporal refugee. Their testimony has been filed under Case #TTA-7291.",
  "Molecular analysis reveals materials that do not exist on the periodic table. Quantum composition team has been notified.",
  "The artifact's internal mechanism appears to be counting down. We have not yet determined what happens at zero.",
  "Recovered from the ruins of a civilization that, according to our records, never existed. Classification: Orphan Timeline.",
]

function generateArtifacts(count) {
  const artifacts = []
  const names = [
    "The Obsidian Chronometer", "Veil of Forgotten Tomorrows", "The Paradox Engine",
    "Echoes of the Seventh Sun", "The Quantum Codex", "Shattered Hourglass of Kael",
    "The Infinity Compass", "Temporal Anchor MK-VII", "The Whispering Prism",
    "Rift Scanner Alpha", "The Möbius Manuscript", "Crystallized Time Fragment",
    "The Navigator's Burden", "Void Echo Resonator", "The Last Photograph",
    "Dimensional Key Set", "The Bleeding Clock", "Fossilized Lightning",
    "The Cartographer's Nightmare", "Probability Engine Core", "The Silent Bell",
    "Temporal Scar Tissue", "The Architect's Blueprint", "Frozen Moment Capsule",
    "The Recursion Mirror", "Entropy Reversal Coil", "The Wanderer's Journal",
    "Phase-Shifted Medallion", "The Convergence Stone", "Null-Time Crystal",
    "The Oracle Machine", "Displaced Memory Core", "The Fracture Map",
    "Chrono-Biological Sample 7", "The Sentinel's Eye", "Waveform Collapse Device",
    "The Historian's Lament", "Temporal Debris Field", "The Anchor Point",
    "Reality Patch Kit", "The Forgotten Treaty", "Dimensional Bleed Artifact",
    "The Timekeeper's Mask", "Causal Loop Detector", "The Phantom Signal",
    "Retrograde Memory Stone", "The Bifurcation Point", "Stasis Field Generator",
    "The Archivist's Quill", "Temporal Vaccine Prototype"
  ]

  for (let i = 0; i < count; i++) {
    const name = i < names.length ? names[i] : `Artifact ${String(i + 1).padStart(4, '0')}`
    const era = eras[Math.floor(Math.random() * eras.length)]
    const year = era === 'Ancient' ? Math.floor(Math.random() * 3000) + 'BCE' :
                 era === 'Medieval' ? Math.floor(Math.random() * 500 + 500) :
                 era === 'Renaissance' ? Math.floor(Math.random() * 200 + 1400) :
                 era === 'Industrial' ? Math.floor(Math.random() * 100 + 1800) :
                 era === 'Modern' ? Math.floor(Math.random() * 50 + 1950) :
                 era === 'Post-Modern' ? Math.floor(Math.random() * 50 + 2000) :
                 era === 'Near-Future' ? Math.floor(Math.random() * 200 + 2050) :
                 era === 'Far-Future' ? Math.floor(Math.random() * 5000 + 2500) :
                 '∞'

    const riskLevel = Math.floor(Math.random() * 10) + 1

    artifacts.push({
      id: `TTA-${String(i + 1).padStart(4, '0')}`,
      name,
      era,
      year: String(year),
      dimension: dimensions[Math.floor(Math.random() * dimensions.length)],
      stability: stability[Math.floor(Math.random() * stability.length)],
      significance: significance[Math.floor(Math.random() * significance.length)],
      category: categories[Math.floor(Math.random() * categories.length)],
      status: statuses[Math.floor(Math.random() * statuses.length)],
      riskLevel,
      curatorNote: curatorNotes[Math.floor(Math.random() * curatorNotes.length)],
      discoveredBy: `Agent ${String.fromCharCode(65 + Math.floor(Math.random() * 26))}-${Math.floor(Math.random() * 999)}`,
      dateRecovered: `${2020 + Math.floor(Math.random() * 7)}-${String(Math.floor(Math.random() * 12) + 1).padStart(2, '0')}-${String(Math.floor(Math.random() * 28) + 1).padStart(2, '0')}`,
      clearanceRequired: riskLevel > 7 ? 'Chronologist' : riskLevel > 4 ? 'Researcher' : 'Observer',
    })
  }
  return artifacts
}

export const artifacts = generateArtifacts(200)

export const featuredDiscoveries = [
  {
    id: 'fd-001',
    title: 'The Convergence Event',
    description: 'Three separate timelines appear to be merging at a single point in 2847. Our agents have detected massive temporal energy signatures.',
    date: '2026-05-28',
    priority: 'Critical',
    assignedTeam: 'Omega Division',
  },
  {
    id: 'fd-002',
    title: 'The Silent Century',
    description: 'An entire century (2100-2200) appears to have been erased from Timeline Echo-β. No records, no artifacts, no temporal echoes.',
    date: '2026-05-15',
    priority: 'High',
    assignedTeam: 'Void Research Unit',
  },
  {
    id: 'fd-003',
    title: 'The Architect Hypothesis',
    description: 'Evidence suggests a single entity has been manipulating timeline branches for over 10,000 years. Codename: The Architect.',
    date: '2026-04-30',
    priority: 'Maximum',
    assignedTeam: 'Director\'s Office',
  },
]

export const investigations = [
  {
    id: 'inv-001',
    title: 'Operation Midnight Cascade',
    status: 'Active',
    agents: 12,
    timelinesBranches: 4,
    description: 'Investigating a series of coordinated temporal incursions across multiple dimensions.',
  },
  {
    id: 'inv-002',
    title: 'The Phantom Frequency',
    status: 'Active',
    agents: 7,
    timelinesBranches: 2,
    description: 'Tracking an unknown signal that appears to originate from outside known temporal space.',
  },
  {
    id: 'inv-003',
    title: 'Project Ouroboros',
    status: 'Classified',
    agents: 3,
    timelinesBranches: 1,
    description: '[REDACTED] - Clearance Level: Chronologist required.',
  },
  {
    id: 'inv-004',
    title: 'The Memory Plague',
    status: 'Active',
    agents: 9,
    timelinesBranches: 6,
    description: 'Agents in Timeline Fracture-γ are reporting shared false memories. Containment priority.',
  },
]

export const paradoxReports = [
  {
    id: 'pr-001',
    title: 'Grandfather Paradox - Sector 7',
    severity: 'Critical',
    timeline: 'Prime-α',
    description: 'A causal loop has been detected that threatens the stability of the primary timeline.',
    resolution: 'Pending',
  },
  {
    id: 'pr-002',
    title: 'Bootstrap Anomaly - The Codex',
    severity: 'High',
    timeline: 'Echo-β',
    description: 'An artifact appears to have created itself. Origin point cannot be determined.',
    resolution: 'Under Review',
  },
  {
    id: 'pr-003',
    title: 'Temporal Echo Feedback',
    severity: 'Medium',
    timeline: 'Fracture-γ',
    description: 'Events in 1847 are being duplicated in 2047. Pattern suggests intentional manipulation.',
    resolution: 'Monitoring',
  },
  {
    id: 'pr-004',
    title: 'The Vanishing Observer',
    severity: 'Critical',
    timeline: 'Void-δ',
    description: 'Agent K-442 has been erased from all records except this report. Paradox confirmed.',
    resolution: 'Unresolvable',
  },
]

export const timelineNodes = [
  { id: 'tn-1', year: -3000, era: 'Ancient', label: 'First Temporal Signature Detected', branch: 'main' },
  { id: 'tn-2', year: -1500, era: 'Ancient', label: 'The Obsidian Chronometer Created', branch: 'main' },
  { id: 'tn-3', year: 0, era: 'Ancient', label: 'Timeline Zero Point', branch: 'main' },
  { id: 'tn-4', year: 500, era: 'Medieval', label: 'First Dimensional Rift Recorded', branch: 'main' },
  { id: 'tn-5', year: 800, era: 'Medieval', label: 'The Shattered Hourglass Event', branch: 'main' },
  { id: 'tn-6', year: 800, era: 'Medieval', label: 'Echo Timeline Branches', branch: 'echo' },
  { id: 'tn-7', year: 1200, era: 'Medieval', label: 'The Silent Order Founded', branch: 'main' },
  { id: 'tn-8', year: 1450, era: 'Renaissance', label: 'Quantum Codex Discovered', branch: 'main' },
  { id: 'tn-9', year: 1600, era: 'Renaissance', label: 'First Paradox Documented', branch: 'main' },
  { id: 'tn-10', year: 1600, era: 'Renaissance', label: 'Fracture Timeline Emerges', branch: 'fracture' },
  { id: 'tn-11', year: 1850, era: 'Industrial', label: 'Temporal Mechanics Theorized', branch: 'main' },
  { id: 'tn-12', year: 1920, era: 'Modern', label: 'The Archive Founded', branch: 'main' },
  { id: 'tn-13', year: 1969, era: 'Modern', label: 'First Controlled Time Observation', branch: 'main' },
  { id: 'tn-14', year: 2001, era: 'Post-Modern', label: 'The Cascade Protocol Enacted', branch: 'main' },
  { id: 'tn-15', year: 2026, era: 'Post-Modern', label: 'Present Day - Active Operations', branch: 'main' },
  { id: 'tn-16', year: 2100, era: 'Near-Future', label: 'The Silent Century Begins', branch: 'echo' },
  { id: 'tn-17', year: 2200, era: 'Near-Future', label: 'The Silent Century Ends', branch: 'echo' },
  { id: 'tn-18', year: 2500, era: 'Far-Future', label: 'Dimensional Travel Achieved', branch: 'main' },
  { id: 'tn-19', year: 2847, era: 'Far-Future', label: 'The Convergence Event', branch: 'main' },
  { id: 'tn-20', year: 5000, era: 'Far-Future', label: 'End of Recorded Timeline', branch: 'main' },
]

export { eras, dimensions, stability, significance, categories, statuses }
