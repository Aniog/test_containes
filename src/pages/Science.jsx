import { useEffect, useRef } from 'react';
import {
  RadarChart, Radar, PolarGrid, PolarAngleAxis, ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid,
  PieChart, Pie, Cell, Legend,
} from 'recharts';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const sizeData = [
  { name: 'Prion', size: 0.001, label: '~1 nm' },
  { name: 'Virus', size: 0.1, label: '~100 nm' },
  { name: 'Bacteria', size: 2, label: '~2 µm' },
  { name: 'Yeast', size: 10, label: '~10 µm' },
  { name: 'Paramecium', size: 200, label: '~200 µm' },
  { name: 'Tardigrade', size: 500, label: '~0.5 mm' },
];

const biomassData = [
  { name: 'Bacteria', value: 70, color: '#22d3ee' },
  { name: 'Archaea', value: 7, color: '#34d399' },
  { name: 'Fungi', value: 12, color: '#a78bfa' },
  { name: 'Protists', value: 4, color: '#fbbf24' },
  { name: 'Viruses', value: 7, color: '#f87171' },
];

const tardigradeRadar = [
  { trait: 'Heat Resist.', value: 90 },
  { trait: 'Cold Resist.', value: 95 },
  { trait: 'Radiation', value: 88 },
  { trait: 'Vacuum', value: 85 },
  { trait: 'Pressure', value: 92 },
  { trait: 'Desiccation', value: 98 },
];

const timeline = [
  { year: '3.8 Bya', event: 'First life', detail: 'Earliest microbial life appears in ancient oceans — simple prokaryotes.', color: 'bg-cyan-400' },
  { year: '2.7 Bya', event: 'Cyanobacteria', detail: 'Photosynthetic bacteria begin producing oxygen, transforming the atmosphere.', color: 'bg-emerald-400' },
  { year: '2.4 Bya', event: 'Great Oxidation', detail: 'Oxygen levels rise dramatically, enabling aerobic life and killing anaerobes.', color: 'bg-violet-400' },
  { year: '1.8 Bya', event: 'Eukaryotes', detail: 'Complex cells with nuclei emerge — the ancestors of all plants, animals, and fungi.', color: 'bg-amber-400' },
  { year: '600 Mya', event: 'Multicellular Life', detail: 'Microbes begin forming colonies and coordinating as multicellular organisms.', color: 'bg-cyan-400' },
  { year: 'Today', event: 'Microbiome Era', detail: 'We discover that microbes outnumber human cells 1.3:1 and drive our health.', color: 'bg-emerald-400' },
];

const scienceFacts = [
  { number: '10³⁰', label: 'Total microbes on Earth', desc: 'More than all the stars in the observable universe.' },
  { number: '99%', label: 'Microbial DNA unknown', desc: 'The vast majority of microbial species have never been cultured or studied.' },
  { number: '1.3:1', label: 'Microbes to human cells', desc: 'Your body hosts more microbial cells than human cells.' },
  { number: '50%', label: 'Oxygen from microbes', desc: 'Half of Earth\'s oxygen is produced by marine microorganisms.' },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#0f1f38] border border-[#1a3a5c] rounded-xl px-4 py-3 text-sm">
        <p className="text-slate-300 font-semibold">{label}</p>
        <p className="text-cyan-400 font-mono">{payload[0]?.payload?.label || payload[0]?.value}</p>
      </div>
    );
  }
  return null;
};

const Science = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="bg-[#050d1a] min-h-screen text-white">
      {/* Header */}
      <section className="relative overflow-hidden border-b border-[#1a3a5c]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/3 w-72 h-72 bg-violet-400/5 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-16">
          <span className="text-xs font-mono text-violet-400 uppercase tracking-widest">Data & Research</span>
          <h1 id="science-page-title" className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            The Science of the Small
          </h1>
          <p id="science-page-subtitle" className="text-slate-400 max-w-xl">
            Visualizing the data behind microbiology — sizes, biomass, evolutionary timelines,
            and the extraordinary survival abilities of microscopic life.
          </p>
        </div>
      </section>

      {/* Key Facts */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {scienceFacts.map((fact) => (
            <div
              key={fact.label}
              className="bg-[#0a1628] border border-[#1a3a5c] rounded-2xl p-6 hover:border-violet-400/30 transition-all"
            >
              <div className="text-3xl font-bold font-mono bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                {fact.number}
              </div>
              <div className="text-white font-semibold text-sm mb-2">{fact.label}</div>
              <div className="text-slate-500 text-xs leading-relaxed">{fact.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Charts Row 1 */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Size Comparison Bar Chart */}
          <div className="bg-[#0a1628] border border-[#1a3a5c] rounded-2xl p-6">
            <h2 className="text-white font-semibold text-lg mb-1">Size Comparison</h2>
            <p className="text-slate-500 text-xs font-mono mb-6">Relative sizes of microorganisms (µm scale)</p>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={sizeData} margin={{ top: 5, right: 10, left: -10, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1a3a5c" />
                <XAxis dataKey="name" tick={{ fill: '#94a3b8', fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: '#94a3b8', fontSize: 11 }} axisLine={false} tickLine={false} />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="size" fill="#22d3ee" radius={[4, 4, 0, 0]} opacity={0.85} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Biomass Pie Chart */}
          <div className="bg-[#0a1628] border border-[#1a3a5c] rounded-2xl p-6">
            <h2 className="text-white font-semibold text-lg mb-1">Microbial Biomass Distribution</h2>
            <p className="text-slate-500 text-xs font-mono mb-6">Estimated share of total microbial biomass on Earth</p>
            <ResponsiveContainer width="100%" height={280}>
              <PieChart>
                <Pie
                  data={biomassData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={3}
                  dataKey="value"
                >
                  {biomassData.map((entry) => (
                    <Cell key={entry.name} fill={entry.color} opacity={0.85} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value) => [`${value}%`, 'Share']}
                  contentStyle={{ background: '#0f1f38', border: '1px solid #1a3a5c', borderRadius: 12, color: '#e2e8f0' }}
                />
                <Legend
                  formatter={(value) => <span style={{ color: '#94a3b8', fontSize: 12 }}>{value}</span>}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* Tardigrade Radar */}
      <section className="bg-[#0a1628] border-y border-[#1a3a5c]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Spotlight</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
                Tardigrade Survival Profile
              </h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                Tardigrades are the undisputed champions of survival. This radar chart shows
                their resistance across six extreme environmental conditions — each scored
                relative to all known life forms.
              </p>
              <div className="space-y-3">
                {tardigradeRadar.map((item) => (
                  <div key={item.trait} className="flex items-center gap-3">
                    <span className="text-slate-400 text-xs font-mono w-24 shrink-0">{item.trait}</span>
                    <div className="flex-1 bg-[#0f1f38] rounded-full h-1.5">
                      <div
                        className="bg-gradient-to-r from-cyan-400 to-emerald-400 h-1.5 rounded-full"
                        style={{ width: `${item.value}%` }}
                      />
                    </div>
                    <span className="text-cyan-400 text-xs font-mono w-8 text-right">{item.value}%</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center">
              <ResponsiveContainer width="100%" height={320}>
                <RadarChart data={tardigradeRadar}>
                  <PolarGrid stroke="#1a3a5c" />
                  <PolarAngleAxis dataKey="trait" tick={{ fill: '#94a3b8', fontSize: 11 }} />
                  <Radar
                    name="Tardigrade"
                    dataKey="value"
                    stroke="#22d3ee"
                    fill="#22d3ee"
                    fillOpacity={0.15}
                    strokeWidth={2}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>

      {/* Evolutionary Timeline */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="text-center mb-12">
          <span className="text-xs font-mono text-amber-400 uppercase tracking-widest">Deep Time</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
            Microbial Evolution Timeline
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            From the first sparks of life to the modern microbiome — 3.8 billion years of microbial history.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/50 via-violet-400/30 to-emerald-400/50 -translate-x-1/2" />

          <div className="space-y-8">
            {timeline.map((item, i) => (
              <div
                key={item.year}
                className={`relative flex items-start gap-6 md:gap-0 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`pl-12 md:pl-0 md:w-5/12 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className="bg-[#0a1628] border border-[#1a3a5c] rounded-2xl p-5 hover:border-cyan-400/30 transition-all">
                    <span className="text-xs font-mono text-slate-500">{item.year}</span>
                    <h3 className="text-white font-semibold text-base mt-1 mb-2">{item.event}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.detail}</p>
                  </div>
                </div>

                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-5 w-3 h-3 rounded-full border-2 border-[#050d1a] bg-cyan-400 shrink-0" />

                {/* Spacer */}
                <div className="hidden md:block md:w-5/12" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Microscopy Image Section */}
      <section className="bg-[#0a1628] border-t border-[#1a3a5c]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
          <div className="text-center mb-10">
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">Imaging</span>
            <h2 className="text-3xl font-bold text-white mt-3 mb-4">Microscopy Techniques</h2>
            <p id="microscopy-subtitle" className="text-slate-400 max-w-xl mx-auto">
              Modern microscopy reveals the hidden architecture of microbial life in stunning detail.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { id: 'sem', title: 'Scanning Electron', sub: 'SEM imaging', titleId: 'micro-sem-title', descId: 'micro-sem-desc', desc: 'High-resolution 3D surface imaging of microorganisms at nanometer scale.', imgId: 'science-sem-img-b1c2d3' },
              { id: 'tem', title: 'Transmission Electron', sub: 'TEM imaging', titleId: 'micro-tem-title', descId: 'micro-tem-desc', desc: 'Internal ultrastructure of cells and viruses revealed at atomic resolution.', imgId: 'science-tem-img-e4f5g6' },
              { id: 'confocal', title: 'Confocal Laser', sub: 'Fluorescence imaging', titleId: 'micro-confocal-title', descId: 'micro-confocal-desc', desc: 'Fluorescent labeling reveals protein locations and cellular dynamics in living cells.', imgId: 'science-confocal-img-h7i8j9' },
            ].map((tech) => (
              <div key={tech.id} className="bg-[#0f1f38] border border-[#1a3a5c] rounded-2xl overflow-hidden hover:border-cyan-400/30 transition-all group">
                <div className="relative h-40 overflow-hidden">
                  <img
                    data-strk-img-id={tech.imgId}
                    data-strk-img={`[${tech.descId}] [${tech.titleId}] [microscopy-subtitle]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={tech.title}
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f1f38] to-transparent" />
                </div>
                <div className="p-5">
                  <p className="text-slate-500 text-xs font-mono mb-1">{tech.sub}</p>
                  <h3 id={tech.titleId} className="text-white font-semibold mb-2">{tech.title}</h3>
                  <p id={tech.descId} className="text-slate-400 text-sm">{tech.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Science;
