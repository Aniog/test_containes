export const PRODUCTS = [
  {
    slug: "atf-2540",
    name: "ATF-2540 Double Folder",
    tagline: "Flagship double folding machine",
    short:
      "Our flagship double folding machine — fold up and down without flipping the sheet. Engineered for high-volume architectural sheet metal.",
    description:
      "The ATF-2540 is a CNC-controlled double folding machine built for fabricators producing facade panels, cassettes and architectural cladding at scale. Twin upper and lower folding beams remove the need to flip heavy sheets, halving cycle time and protecting finishes.",
    specs: [
      { label: "Working length", value: "2,540 mm" },
      { label: "Max thickness (mild steel)", value: "1.5 mm" },
      { label: "Max thickness (stainless)", value: "1.0 mm" },
      { label: "Folding angle", value: "−30° to +145°" },
      { label: "Repeatability", value: "± 0.05°" },
      { label: "Drive", value: "AC servo, regenerative" },
    ],
    imgId: "product-atf-2540",
  },
  {
    slug: "atf-3200",
    name: "ATF-3200 Double Folder",
    tagline: "Long-bed double folder for facade panels",
    short:
      "A 3.2-meter double folder for oversized panels. CNC back gauge with two motorized fingers and laser-monitored sheet alignment.",
    description:
      "The ATF-3200 stretches our double-folding architecture to 3.2 m. It is the workhorse for tall facade cassettes, column covers, and long roof flashings — folded up and down in a single setup.",
    specs: [
      { label: "Working length", value: "3,200 mm" },
      { label: "Max thickness (mild steel)", value: "1.5 mm" },
      { label: "Max thickness (aluminium)", value: "2.0 mm" },
      { label: "Back gauge", value: "Twin servo, 1,000 mm" },
      { label: "Tooling", value: "Quick-change segmented" },
      { label: "Footprint", value: "5.4 × 1.9 m" },
    ],
    imgId: "product-atf-3200",
  },
  {
    slug: "msf-1600",
    name: "MSF-1600 Sheet Metal Folder",
    tagline: "Compact sheet metal folder",
    short:
      "A compact sheet metal folder for HVAC, ducting and light-gauge fabrication shops that need precision in a small footprint.",
    description:
      "The MSF-1600 brings ARTITECT precision to smaller sheet metal workshops. Its compact frame, electric clamping beam, and graphical touch-screen controller make it ideal for HVAC, ducting and signage work.",
    specs: [
      { label: "Working length", value: "1,600 mm" },
      { label: "Max thickness (mild steel)", value: "1.2 mm" },
      { label: "Folding beam", value: "Electric, segmented" },
      { label: "Controller", value: "10\" touch HMI" },
      { label: "Footprint", value: "2.7 × 1.4 m" },
      { label: "Power", value: "5.5 kW" },
    ],
    imgId: "product-msf-1600",
  },
  {
    slug: "msf-2050",
    name: "MSF-2050 Sheet Metal Folder",
    tagline: "Mid-format sheet metal folder",
    short:
      "Mid-format sheet metal folder with motorized back gauge and pneumatic clamping — the daily-driver of busy fabrication shops.",
    description:
      "The MSF-2050 is built for fabricators who need reliability over years, not months. Hardened tool steel beams, oversized bearings and an industrial CNC controller deliver consistent folds shift after shift.",
    specs: [
      { label: "Working length", value: "2,050 mm" },
      { label: "Max thickness (mild steel)", value: "1.5 mm" },
      { label: "Clamping", value: "Pneumatic, 8 bar" },
      { label: "Back gauge", value: "Servo, 750 mm" },
      { label: "Tooling steel", value: "42CrMo4, hardened" },
      { label: "Power", value: "7.5 kW" },
    ],
    imgId: "product-msf-2050",
  },
  {
    slug: "mfm-2500-cnc",
    name: "MFM-2500 CNC Metal Folder",
    tagline: "CNC metal folding machine",
    short:
      "A fully CNC metal folder with offline programming, recipe libraries, and automatic angle correction for repeatable production.",
    description:
      "The MFM-2500 CNC is a fully programmable metal folding machine designed for batch production. Import DXF, fold complex profiles in a single setup, and store unlimited recipes for instant changeover.",
    specs: [
      { label: "Working length", value: "2,500 mm" },
      { label: "Max thickness (mild steel)", value: "2.0 mm" },
      { label: "Axes", value: "5 (Y, X, R, AA1, AA2)" },
      { label: "Programming", value: "Offline + DXF import" },
      { label: "Angle correction", value: "Automatic" },
      { label: "Network", value: "Ethernet / OPC-UA" },
    ],
    imgId: "product-mfm-2500-cnc",
  },
  {
    slug: "mfm-3000-heavy",
    name: "MFM-3000 Heavy-Duty Folder",
    tagline: "Heavy-duty metal folding machine",
    short:
      "A heavy-duty metal folding machine for thick-gauge structural work — folded once, folded straight.",
    description:
      "The MFM-3000 is built for heavy-gauge structural folding: stair stringers, equipment housings and thick-wall enclosures. Its reinforced frame and oversized hydraulics handle 3 mm mild steel without flex.",
    specs: [
      { label: "Working length", value: "3,000 mm" },
      { label: "Max thickness (mild steel)", value: "3.0 mm" },
      { label: "Frame", value: "Welded, stress-relieved" },
      { label: "Drive", value: "Hydraulic + servo back gauge" },
      { label: "Folding angle", value: "0° to 145°" },
      { label: "Power", value: "15 kW" },
    ],
    imgId: "product-mfm-3000-heavy",
  },
];

export const INTEREST_OPTIONS = [
  { value: "double-folding-machine", label: "Double folding machine" },
  { value: "sheet-metal-folder", label: "Sheet metal folder" },
  { value: "metal-folding-machine", label: "Metal folding machine" },
  { value: "spare-parts-service", label: "Spare parts & service" },
  { value: "general-inquiry", label: "General inquiry" },
];
