// Source of truth for product line, features, industries, and process data.

export const products = [
  {
    id: "double-folding-machine",
    index: "01",
    name: "Double Folding Machine",
    tagline: "Two-axis precision in a single pass",
    description:
      "Our flagship double folding machine folds both edges of a sheet in one continuous operation, eliminating manual handling and delivering mirror-symmetrical results on every panel.",
    capacity: "Up to 4 000 mm",
    material: "0.4 – 3.0 mm steel, stainless, aluminium",
    industries: ["HVAC", "Cabinetry", "Architectural cladding"],
    highlights: [
      "Twin hydraulic folders with ±0.1° repeatability",
      "Programmable fold sequences for batches of any size",
      "Servo-driven backgauge with self-learning calibration",
    ],
  },
  {
    id: "double-folder",
    index: "02",
    name: "Double Folder",
    tagline: "Compact footprint, industrial throughput",
    description:
      "The Double Folder brings the symmetry and speed of two-sided folding to workshops with limited floor space. Ideal for sign makers, enclosure builders, and short-run fabricators.",
    capacity: "Up to 2 500 mm",
    material: "0.4 – 2.0 mm mild & stainless steel",
    industries: ["Sign making", "Enclosures", "Light fabrication"],
    highlights: [
      "Single-operator workflow with intuitive HMI",
      "Pneumatic clamping with brass tool rails",
      "Tool-free changeover in under 90 seconds",
    ],
  },
  {
    id: "sheet-metal-folder",
    index: "03",
    name: "Sheet Metal Folder",
    tagline: "Industrial workhorse, refined control",
    description:
      "Engineered for the daily demands of metal service centres, the Sheet Metal Folder pairs a heavy-duty frame with the elegant control interface our machines are known for.",
    capacity: "Up to 6 000 mm",
    material: "0.5 – 4.0 mm steel, up to 6.0 mm aluminium",
    industries: ["Metal service centres", "Industrial fabrication"],
    highlights: [
      "Welded steel beam with stress-relieved chassis",
      "Closed-loop pressure control for repeatable folds",
      "Energy-recovery hydraulics reduce idle draw by 38%",
    ],
  },
  {
    id: "sheet-metal-folding-machine",
    index: "04",
    name: "Sheet Metal Folding Machine",
    tagline: "The fabricator's standard",
    description:
      "The classic folding machine reimagined. Multi-axis tooling, predictive maintenance, and cloud-connected job libraries make it the most loved model in our line.",
    capacity: "Up to 3 200 mm",
    material: "0.4 – 3.0 mm steel & non-ferrous",
    industries: ["OEM fabrication", "Job shops", "Education"],
    highlights: [
      "Cloud-synced job library across your workshop fleet",
      "Predictive tool-wear notifications",
      "Bend-by-bend simulation before any metal moves",
    ],
  },
  {
    id: "metal-folder",
    index: "05",
    name: "Metal Folder",
    tagline: "Precision folding, beautifully simple",
    description:
      "The Metal Folder distils our craft to its essentials: a rigid frame, a clean operator panel, and a fold quality that punches well above its price point.",
    capacity: "Up to 2 000 mm",
    material: "0.4 – 1.5 mm steel & non-ferrous",
    industries: ["Workshops", "Training centres", "Prototyping"],
    highlights: [
      "Beginner-friendly touchscreen with guided setup",
      "Solid tooling bar with quick-release segments",
      "Whisper-quiet operation under 65 dB",
    ],
  },
  {
    id: "metal-folder-machine",
    index: "06",
    name: "Metal Folder Machine",
    tagline: "When every tenth of a degree matters",
    description:
      "Built for fabricators who measure accuracy in arcseconds, the Metal Folder Machine is the precision flagship of the line — used in aerospace trim, medical enclosures, and high-end architectural work.",
    capacity: "Up to 3 200 mm",
    material: "0.3 – 3.0 mm stainless, titanium, aluminium",
    industries: ["Aerospace", "Medical", "Architectural"],
    highlights: [
      "±0.05° angular repeatability",
      "Heated tooling bed for flawless stainless finishes",
      "Integrated metrology with on-machine verification",
    ],
  },
  {
    id: "metal-folding-machine",
    index: "07",
    name: "Metal Folding Machine",
    tagline: "Versatility without compromise",
    description:
      "A true generalist: the Metal Folding Machine adapts from short prototype runs to multi-shift production without skipping a beat. The first choice of contract fabricators worldwide.",
    capacity: "Up to 4 000 mm",
    material: "0.4 – 4.0 mm ferrous & non-ferrous",
    industries: ["Contract fabrication", "Automotive", "Energy"],
    highlights: [
      "Adaptive crowning system eliminates panel twist",
      "Automatic tool library with RFID identification",
      "Multi-language operator profiles out of the box",
    ],
  },
]

export const features = [
  {
    id: "precision",
    title: "Precision as standard",
    body: "Every machine leaves our floor calibrated to ±0.1°. We test, measure, and document the result so the first part you fold is the first part you ship.",
  },
  {
    id: "frame",
    title: "Frames built for decades",
    body: "Stress-relieved welded steel, annealed tool rails, and oversized bearings. The ARTITECT chassis is engineered to outlast the trends that surround it.",
  },
  {
    id: "control",
    title: "Controls a craftsman trusts",
    body: "A clean touchscreen, physical emergency controls, and a logical job library. The interface respects the operator — no menu diving, no surprises.",
  },
  {
    id: "service",
    title: "Service that answers the phone",
    body: "Direct lines to our application engineers, remote diagnostics on every connected machine, and a global network of certified partners.",
  },
]

export const industries = [
  { id: "hvac", name: "HVAC & ventilation" },
  { id: "architectural", name: "Architectural cladding" },
  { id: "cabinetry", name: "Cabinetry & joinery" },
  { id: "enclosures", name: "Enclosures & switchgear" },
  { id: "automotive", name: "Automotive & transport" },
  { id: "aerospace", name: "Aerospace & defence" },
  { id: "medical", name: "Medical & cleanroom" },
  { id: "energy", name: "Energy & renewables" },
]

export const processSteps = [
  {
    id: "consult",
    step: "01",
    title: "Consult",
    body: "We listen. Material, batch size, tolerances, and ambitions — we map them before recommending a single line of spec.",
  },
  {
    id: "configure",
    step: "02",
    title: "Configure",
    body: "Your machine is configured in our workshop with tooling, software profiles, and options tailored to the work you'll actually do.",
  },
  {
    id: "install",
    step: "03",
    title: "Install",
    body: "Our crew arrives on site, sets the chassis, levels the bed, and trains your operators until the first part is signed off.",
  },
  {
    id: "support",
    step: "04",
    title: "Support",
    body: "We stay with you for the life of the machine. Remote diagnostics, scheduled service, and an open line to the engineers who built it.",
  },
]

export const testimonials = [
  {
    id: "t1",
    quote:
      "Switching to the ARTITECT Double Folder cut our edge-finishing hours in half. The fold symmetry is the kind you used to need a press brake and a very patient operator to achieve.",
    name: "Lina Marsh",
    role: "Workshop Director, Halsa Sheet Metal",
  },
  {
    id: "t2",
    quote:
      "We run three shifts on a single Metal Folding Machine. Two years in, the calibration drift is smaller than what our previous supplier managed in a week.",
    name: "Rafael Ortega",
    role: "Operations Lead, Brask Architectural",
  },
  {
    id: "t3",
    quote:
      "It's the first machine we've bought that the operators actively thank us for. The interface is calm, the tooling is honest, and the service team picks up the phone.",
    name: "Saoirse O'Halloran",
    role: "Founder, Forgewell Enclosures",
  },
]

export const stats = [
  { id: "s1", value: "1 200+", label: "Machines installed worldwide" },
  { id: "s2", value: "38", label: "Countries with certified service" },
  { id: "s3", value: "0.05°", label: "Best documented angular accuracy" },
  { id: "s4", value: "12 yr", label: "Standard frame warranty" },
]
