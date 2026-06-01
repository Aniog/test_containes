import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronRight, Database, Cpu, Radio } from 'lucide-react';

const BORDER = 'border border-white/[0.08]';

const cosmicObjects = [
  {
    id: 'NGC-1300',
    type: 'Barred Spiral Galaxy',
    constellation: 'Eridanus',
    distance: '61.3 Mly',
    redshift: '0.005244',
    magnitude: '11.4',
    size: '110,000 ly',
    mass: '2.4 × 10¹¹ M☉',
    ra: '03h 19m 41.1s',
    dec: '−19° 24′ 41″',
    discovered: '1835',
    discoverer: 'John Herschel',
    telescope: 'HST ACS/WFC',
    filter: 'B, V, I, Hα',
    exposure: '12,282 s',
  },
  {
    id: 'M42',
    type: 'Emission Nebula',
    constellation: 'Orion',
    distance: '1,344 ly',
    redshift: '−0.000079',
    magnitude: '4.0',
    size: '40 ly',
    mass: '2,000 M☉',
    ra: '05h 35m 17.3s',
    dec: '−05° 23′ 28″',
    discovered: '1610',
    discoverer: 'Nicolas-Claude Fabri de Peiresc',
    telescope: 'HST WFPC2',
    filter: 'Hα, [O III], [N II]',
    exposure: '45,600 s',
  },
  {
    id: 'Crab Nebula',
    type: 'Supernova Remnant',
    constellation: 'Taurus',
    distance: '6,523 ly',
    redshift: '0.000587',
    magnitude: '8.4',
    size: '11 ly',
    mass: '4.6 M☉',
    ra: '05h 34m 31.9s',
    dec: '+22° 00′ 52″',
    discovered: '1054 CE',
    discoverer: 'Chinese astronomers',
    telescope: 'HST WFPC2 / Chandra',
    filter: 'X-ray, Optical, Radio',
    exposure: '85,000 s',
  },
  {
    id: 'Andromeda',
    type: 'Spiral Galaxy',
    constellation: 'Andromeda',
    distance: '2.537 Mly',
    redshift: '−0.001001',
    magnitude: '3.44',
    size: '220,000 ly',
    mass: '1.5 × 10¹² M☉',
    ra: '00h 42m 44.3s',
    dec: '+41° 16′ 09″',
    discovered: '964 CE',
    discoverer: 'Abd al-Rahman al-Sufi',
    telescope: 'GALEX / Spitzer',
    filter: 'UV, IR, Optical',
    exposure: '120,000 s',
  },
  {
    id: 'Sagittarius A*',
    type: 'Supermassive Black Hole',
    constellation: 'Sagittarius',
    distance: '26,673 ly',
    redshift: '—',
    magnitude: '—',
    size: '0.08 AU (event horizon)',
    mass: '4.154 × 10⁶ M☉',
    ra: '17h 45m 40.0s',
    dec: '−29° 00′ 28″',
    discovered: '1974',
    discoverer: 'Balick & Brown',
    telescope: 'EHT / Chandra',
    filter: 'Radio 1.3mm, X-ray',
    exposure: '—',
  },
];

const observatories = [
  { name: 'Hubble Space Telescope', abbr: 'HST', orbit: '547 km LEO', wavelength: 'UV–NIR', launched: '1990', status: 'OPERATIONAL', agency: 'NASA / ESA' },
  { name: 'James Webb Space Telescope', abbr: 'JWST', orbit: 'L2 Lagrange Point', wavelength: 'NIR–MIR', launched: '2021', status: 'OPERATIONAL', agency: 'NASA / ESA / CSA' },
  { name: 'Chandra X-ray Observatory', abbr: 'CXO', orbit: '139,000 km HEO', wavelength: 'X-ray 0.1–10 keV', launched: '1999', status: 'OPERATIONAL', agency: 'NASA' },
  { name: 'Event Horizon Telescope', abbr: 'EHT', orbit: 'Ground Array', wavelength: 'Radio 1.3mm', launched: '2006', status: 'OPERATIONAL', agency: 'International' },
  { name: 'Very Large Telescope', abbr: 'VLT', orbit: 'Cerro Paranal, Chile', wavelength: 'UV–MIR', launched: '1998', status: 'OPERATIONAL', agency: 'ESO' },
];

const physicalConstants = [
  { symbol: 'c', name: 'Speed of Light', value: '2.997 924 58 × 10⁸', unit: 'm s⁻¹', category: 'Fundamental' },
  { symbol: 'G', name: 'Gravitational Constant', value: '6.674 30 × 10⁻¹¹', unit: 'm³ kg⁻¹ s⁻²', category: 'Fundamental' },
  { symbol: 'H₀', name: 'Hubble Constant', value: '67.4 ± 0.5', unit: 'km s⁻¹ Mpc⁻¹', category: 'Cosmological' },
  { symbol: 'Ω_Λ', name: 'Dark Energy Density', value: '0.6847 ± 0.0073', unit: 'dimensionless', category: 'Cosmological' },
  { symbol: 'Ω_m', name: 'Matter Density', value: '0.3153 ± 0.0073', unit: 'dimensionless', category: 'Cosmological' },
  { symbol: 't₀', name: 'Age of Universe', value: '13.787 ± 0.020', unit: 'Gyr', category: 'Cosmological' },
  { symbol: 'M☉', name: 'Solar Mass', value: '1.989 × 10³⁰', unit: 'kg', category: 'Stellar' },
  { symbol: 'R☉', name: 'Solar Radius', value: '6.957 × 10⁸', unit: 'm', category: 'Stellar' },
  { symbol: 'L☉', name: 'Solar Luminosity', value: '3.828 × 10²⁶', unit: 'W', category: 'Stellar' },
  { symbol: 'pc', name: 'Parsec', value: '3.085 677 58 × 10¹⁶', unit: 'm', category: 'Distance' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] },
  }),
};

function SectionHeader({ icon: Icon, label, subtitle }) {
  return (
    <div className={`flex items-center gap-4 py-4 px-6 ${BORDER} bg-white/[0.02] mb-0`}>
      <Icon size={14} className="text-violet-400 shrink-0" />
      <div>
        <p className="text-[10px] tracking-[0.35em] text-violet-400 uppercase">{label}</p>
        {subtitle && <p className="text-[9px] tracking-[0.2em] text-slate-600 uppercase mt-0.5">{subtitle}</p>}
      </div>
    </div>
  );
}

function ExpandableRow({ obj, index }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <motion.tr
        variants={fadeUp}
        custom={index}
        className="cursor-pointer hover:bg-white/[0.03] transition-colors"
        onClick={() => setOpen((v) => !v)}
      >
        <td className={`py-3 px-4 ${BORDER} font-mono text-[11px] text-star-gold`}>{obj.id}</td>
        <td className={`py-3 px-4 ${BORDER} font-mono text-[11px] text-slate-300`}>{obj.type}</td>
        <td className={`py-3 px-4 ${BORDER} font-mono text-[11px] text-slate-400 hidden md:table-cell`}>{obj.constellation}</td>
        <td className={`py-3 px-4 ${BORDER} font-mono text-[11px] text-nebula-blue hidden lg:table-cell`}>{obj.distance}</td>
        <td className={`py-3 px-4 ${BORDER} font-mono text-[11px] text-slate-400 hidden xl:table-cell`}>{obj.magnitude}</td>
        <td className={`py-3 px-4 ${BORDER} text-center`}>
          {open
            ? <ChevronDown size={12} className="text-violet-400 mx-auto" />
            : <ChevronRight size={12} className="text-slate-600 mx-auto" />}
        </td>
      </motion.tr>
      {open && (
        <tr>
          <td colSpan={6} className={`${BORDER} bg-white/[0.015]`}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
              {[
                ['Right Ascension', obj.ra],
                ['Declination', obj.dec],
                ['Redshift', obj.redshift],
                ['Physical Size', obj.size],
                ['Mass', obj.mass],
                ['Telescope', obj.telescope],
                ['Filter', obj.filter],
                ['Exposure', obj.exposure],
                ['Discovered', obj.discovered],
                ['Discoverer', obj.discoverer],
              ].map(([k, v]) => (
                <div key={k} className={`py-3 px-4 ${BORDER}`}>
                  <p className="text-[9px] tracking-[0.2em] text-slate-600 uppercase mb-1">{k}</p>
                  <p className="font-mono text-[11px] text-slate-300">{v}</p>
                </div>
              ))}
            </div>
          </td>
        </tr>
      )}
    </>
  );
}

export default function DataSheets() {
  return (
    <div className="bg-true-black min-h-screen pt-16 font-mono-data">
      {/* Page header */}
      <div className={`border-b border-white/[0.08] py-12 px-6 md:px-12`}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[9px] tracking-[0.5em] text-violet-400 uppercase mb-2 font-mono">
              データシート — Technical Reference
            </p>
            <h1 className="font-display text-5xl md:text-6xl font-light text-white mb-3">
              Data Sheets
            </h1>
            <p className="text-[11px] tracking-wide text-slate-500 font-mono max-w-xl">
              Astronomical catalog data, physical constants, and observatory specifications.
              All values sourced from peer-reviewed publications and space agency databases.
            </p>
          </motion.div>

          {/* Status bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className={`mt-8 flex flex-wrap gap-6 py-3 px-4 ${BORDER} bg-white/[0.02]`}
          >
            {[
              ['Objects', cosmicObjects.length],
              ['Observatories', observatories.length],
              ['Constants', physicalConstants.length],
              ['Last Updated', '2026-06-01'],
              ['Source', 'NASA/ESA/SIMBAD'],
            ].map(([k, v]) => (
              <div key={k} className="flex items-center gap-2">
                <span className="text-[9px] tracking-[0.2em] text-slate-600 uppercase">{k}:</span>
                <span className="text-[10px] text-star-gold">{v}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 space-y-16">

        {/* ── Cosmic Objects Table ── */}
        <section>
          <SectionHeader icon={Database} label="Cosmic Object Catalog" subtitle="Select row to expand full parameters" />
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className={`bg-white/[0.03]`}>
                  {['Designation', 'Object Type', 'Constellation', 'Distance', 'Magnitude', ''].map((h) => (
                    <th
                      key={h}
                      className={`py-3 px-4 ${BORDER} text-left text-[9px] tracking-[0.25em] text-slate-500 uppercase font-normal ${
                        h === 'Constellation' ? 'hidden md:table-cell' :
                        h === 'Distance' ? 'hidden lg:table-cell' :
                        h === 'Magnitude' ? 'hidden xl:table-cell' : ''
                      }`}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <motion.tbody
                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.05 } } }}
                initial="hidden"
                animate="visible"
              >
                {cosmicObjects.map((obj, i) => (
                  <ExpandableRow key={obj.id} obj={obj} index={i} />
                ))}
              </motion.tbody>
            </table>
          </div>
        </section>

        {/* ── Physical Constants ── */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.04 } } }}
        >
          <SectionHeader icon={Cpu} label="Physical Constants" subtitle="CODATA 2018 / Planck 2018 values" />
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-white/[0.03]">
                  {['Symbol', 'Constant', 'Value', 'Unit', 'Category'].map((h) => (
                    <th
                      key={h}
                      className={`py-3 px-4 ${BORDER} text-left text-[9px] tracking-[0.25em] text-slate-500 uppercase font-normal ${
                        h === 'Category' ? 'hidden md:table-cell' : ''
                      }`}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {physicalConstants.map((c, i) => (
                  <motion.tr
                    key={c.symbol}
                    variants={fadeUp}
                    custom={i}
                    className="hover:bg-white/[0.02] transition-colors"
                  >
                    <td className={`py-3 px-4 ${BORDER} font-mono text-[12px] text-star-gold`}>{c.symbol}</td>
                    <td className={`py-3 px-4 ${BORDER} font-mono text-[11px] text-slate-300`}>{c.name}</td>
                    <td className={`py-3 px-4 ${BORDER} font-mono text-[11px] text-nebula-blue tabular-nums`}>{c.value}</td>
                    <td className={`py-3 px-4 ${BORDER} font-mono text-[11px] text-slate-500`}>{c.unit}</td>
                    <td className={`py-3 px-4 ${BORDER} font-mono text-[10px] text-violet-400 hidden md:table-cell`}>{c.category}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        {/* ── Observatories ── */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07 } } }}
        >
          <SectionHeader icon={Radio} label="Active Observatories" subtitle="Space and ground-based facilities" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06]">
            {observatories.map((obs, i) => (
              <motion.div
                key={obs.abbr}
                variants={fadeUp}
                custom={i}
                className={`bg-true-black p-6 ${BORDER}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-[10px] tracking-[0.3em] text-star-gold uppercase mb-1">{obs.abbr}</p>
                    <h3 className="font-mono text-[11px] text-slate-200 leading-snug">{obs.name}</h3>
                  </div>
                  <span className={`text-[8px] tracking-[0.2em] px-2 py-1 uppercase ${
                    obs.status === 'OPERATIONAL'
                      ? 'text-emerald-400 bg-emerald-400/10'
                      : 'text-slate-500 bg-white/5'
                  }`}>
                    {obs.status}
                  </span>
                </div>
                <div className="space-y-2">
                  {[
                    ['Agency', obs.agency],
                    ['Orbit / Location', obs.orbit],
                    ['Wavelength', obs.wavelength],
                    ['Launched', obs.launched],
                  ].map(([k, v]) => (
                    <div key={k} className="flex justify-between items-baseline gap-4">
                      <span className="text-[9px] tracking-[0.15em] text-slate-600 uppercase shrink-0">{k}</span>
                      <span className="text-[10px] text-slate-400 text-right">{v}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className={`py-4 px-6 ${BORDER} bg-white/[0.01]`}
        >
          <p className="text-[9px] tracking-[0.2em] text-slate-700 uppercase">
            Data sourced from NASA/IPAC Extragalactic Database (NED), SIMBAD Astronomical Database,
            and ESA Science Archive. Values subject to measurement uncertainty. Last revision: 2026-06-01 UTC.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
