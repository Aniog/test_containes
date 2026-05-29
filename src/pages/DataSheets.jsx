import { useState } from 'react'
import { motion } from 'framer-motion'

const categories = ['All', 'Stars', 'Galaxies', 'Nebulae', 'Exoplanets']

const dataObjects = [
  {
    id: 'sun',
    designation: 'Sol',
    name: 'The Sun',
    category: 'Stars',
    type: 'G-type Main Sequence',
    distance: '0 ly',
    mass: '1.989 × 10³⁰ kg',
    radius: '696,340 km',
    luminosity: '3.828 × 10²⁶ W',
    temperature: '5,778 K',
    age: '4.603 Gyr',
    constellation: 'N/A',
    magnitude: '-26.74',
  },
  {
    id: 'sirius',
    designation: 'α CMa',
    name: 'Sirius A',
    category: 'Stars',
    type: 'A-type Main Sequence',
    distance: '8.611 ly',
    mass: '2.063 M☉',
    radius: '1.711 R☉',
    luminosity: '25.4 L☉',
    temperature: '9,940 K',
    age: '0.242 Gyr',
    constellation: 'Canis Major',
    magnitude: '-1.46',
  },
  {
    id: 'betelgeuse',
    designation: 'α Ori',
    name: 'Betelgeuse',
    category: 'Stars',
    type: 'Red Supergiant (M1-M2)',
    distance: '700 ly',
    mass: '16.5–19 M☉',
    radius: '887 R☉',
    luminosity: '126,000 L☉',
    temperature: '3,500 K',
    age: '8–8.5 Myr',
    constellation: 'Orion',
    magnitude: '0.42',
  },
  {
    id: 'andromeda',
    designation: 'M31',
    name: 'Andromeda Galaxy',
    category: 'Galaxies',
    type: 'Barred Spiral (SA(s)b)',
    distance: '2.537 Mly',
    mass: '1.5 × 10¹² M☉',
    radius: '110,000 ly',
    luminosity: '2.6 × 10¹⁰ L☉',
    temperature: 'N/A',
    age: '10.01 Gyr',
    constellation: 'Andromeda',
    magnitude: '3.44',
  },
  {
    id: 'milky-way',
    designation: 'MW',
    name: 'Milky Way',
    category: 'Galaxies',
    type: 'Barred Spiral (SBbc)',
    distance: '0 ly',
    mass: '1.5 × 10¹² M☉',
    radius: '52,850 ly',
    luminosity: '2 × 10¹⁰ L☉',
    temperature: 'N/A',
    age: '13.61 Gyr',
    constellation: 'N/A',
    magnitude: 'N/A',
  },
  {
    id: 'orion-nebula',
    designation: 'M42',
    name: 'Orion Nebula',
    category: 'Nebulae',
    type: 'Diffuse Emission Nebula',
    distance: '1,344 ly',
    mass: '2,000 M☉',
    radius: '24 ly',
    luminosity: '~2,000 L☉',
    temperature: '10,000 K',
    age: '~3 Myr',
    constellation: 'Orion',
    magnitude: '4.0',
  },
  {
    id: 'crab-nebula',
    designation: 'M1',
    name: 'Crab Nebula',
    category: 'Nebulae',
    type: 'Supernova Remnant',
    distance: '6,500 ly',
    mass: '4.6 M☉',
    radius: '5.5 ly',
    luminosity: '75,000 L☉',
    temperature: '11,000 K',
    age: '~970 yr',
    constellation: 'Taurus',
    magnitude: '8.4',
  },
  {
    id: 'kepler-452b',
    designation: 'KOI-7016.01',
    name: 'Kepler-452b',
    category: 'Exoplanets',
    type: 'Super-Earth (Rocky)',
    distance: '1,402 ly',
    mass: '~5 M⊕',
    radius: '1.63 R⊕',
    luminosity: 'N/A',
    temperature: '265 K (est.)',
    age: '6 Gyr',
    constellation: 'Cygnus',
    magnitude: '13.7 (host)',
  },
  {
    id: 'proxima-b',
    designation: 'Proxima Cen b',
    name: 'Proxima Centauri b',
    category: 'Exoplanets',
    type: 'Terrestrial (est.)',
    distance: '4.243 ly',
    mass: '≥1.07 M⊕',
    radius: '~1.1 R⊕',
    luminosity: 'N/A',
    temperature: '234 K (est.)',
    age: '4.85 Gyr',
    constellation: 'Centaurus',
    magnitude: '11.13 (host)',
  },
]

const columns = [
  { key: 'designation', label: 'Designation', mono: true },
  { key: 'name', label: 'Object Name', mono: false },
  { key: 'type', label: 'Classification', mono: true },
  { key: 'distance', label: 'Distance', mono: true },
  { key: 'mass', label: 'Mass', mono: true },
  { key: 'radius', label: 'Radius', mono: true },
  { key: 'temperature', label: 'Temperature', mono: true },
  { key: 'age', label: 'Age', mono: true },
  { key: 'magnitude', label: 'App. Mag.', mono: true },
]

const rowVariants = {
  hidden:  { opacity: 0, x: -8 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, delay: i * 0.04, ease: 'easeOut' },
  }),
}

export default function DataSheets() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [sortKey, setSortKey] = useState('designation')
  const [sortDir, setSortDir] = useState('asc')

  const filtered = dataObjects
    .filter((o) => activeCategory === 'All' || o.category === activeCategory)
    .sort((a, b) => {
      const av = a[sortKey] || ''
      const bv = b[sortKey] || ''
      return sortDir === 'asc' ? av.localeCompare(bv) : bv.localeCompare(av)
    })

  const handleSort = (key) => {
    if (sortKey === key) {
      setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'))
    } else {
      setSortKey(key)
      setSortDir('asc')
    }
  }

  return (
    <div className="min-h-screen bg-cosmic-black pt-24 pb-20 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <span className="font-sans text-[10px] uppercase tracking-[0.5em] text-stellar-gold block mb-4">
            データシート · Data Sheets
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-light text-star-white tracking-wide mb-4">
            Astronomical Catalogue
          </h1>
          <p className="font-sans text-sm text-star-dim font-light max-w-xl leading-relaxed">
            Technical specifications and observational data for catalogued celestial objects. All values sourced from peer-reviewed astronomical databases.
          </p>
        </motion.div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-wrap gap-1 mb-8"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-mono text-[10px] uppercase tracking-[0.3em] px-4 py-2 border transition-all duration-200 ${
                activeCategory === cat
                  ? 'border-stellar-gold text-stellar-gold bg-stellar-gold/5'
                  : 'border-white/10 text-star-dim hover:border-white/20 hover:text-star-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Data table */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="overflow-x-auto"
        >
          <table className="w-full border-collapse" style={{ borderSpacing: 0 }}>
            <thead>
              <tr>
                {columns.map((col) => (
                  <th
                    key={col.key}
                    onClick={() => handleSort(col.key)}
                    className="text-left cursor-pointer select-none"
                    style={{ border: '0.5px solid rgba(255,255,255,0.08)', padding: '10px 14px' }}
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[9px] uppercase tracking-[0.35em] text-stellar-gold whitespace-nowrap">
                        {col.label}
                      </span>
                      {sortKey === col.key && (
                        <span className="font-mono text-[9px] text-stellar-gold opacity-60">
                          {sortDir === 'asc' ? '↑' : '↓'}
                        </span>
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((obj, i) => (
                <motion.tr
                  key={obj.id}
                  custom={i}
                  variants={rowVariants}
                  initial="hidden"
                  animate="visible"
                  className="group hover:bg-white/[0.02] transition-colors duration-150"
                >
                  {columns.map((col) => (
                    <td
                      key={col.key}
                      style={{ border: '0.5px solid rgba(255,255,255,0.06)', padding: '10px 14px' }}
                    >
                      {col.key === 'name' ? (
                        <span className="font-sans text-xs text-star-white font-light whitespace-nowrap">
                          {obj[col.key]}
                        </span>
                      ) : (
                        <span className="font-mono text-[11px] text-star-dim whitespace-nowrap">
                          {obj[col.key] || '—'}
                        </span>
                      )}
                    </td>
                  ))}
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 pt-6 border-t border-white/[0.06] flex flex-col md:flex-row md:items-center md:justify-between gap-3"
        >
          <span className="font-mono text-[10px] text-star-dim tracking-wider">
            {filtered.length} objects · Catalogue v2.4.1 · Epoch J2000.0
          </span>
          <span className="font-mono text-[10px] text-star-dim tracking-wider opacity-50">
            Data: NASA/SIMBAD/NED · Updated 2026-05-29
          </span>
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.04]"
        >
          {[
            { sym: 'M☉', def: 'Solar mass (1.989 × 10³⁰ kg)' },
            { sym: 'R☉', def: 'Solar radius (696,340 km)' },
            { sym: 'L☉', def: 'Solar luminosity (3.828 × 10²⁶ W)' },
            { sym: 'ly', def: 'Light-year (9.461 × 10¹² km)' },
          ].map(({ sym, def }) => (
            <div
              key={sym}
              className="bg-cosmic-void px-5 py-4"
              style={{ border: '0.5px solid rgba(255,255,255,0.06)' }}
            >
              <span className="font-mono text-xs text-stellar-gold block mb-1">{sym}</span>
              <span className="font-mono text-[10px] text-star-dim leading-relaxed">{def}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
