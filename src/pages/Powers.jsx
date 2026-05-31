import { useState } from 'react';
import { ChevronRight, Zap, Shield, Brain, Wind, Flame, Eye, Activity, Star, AlertTriangle, Info } from 'lucide-react';

const tiers = [
  {
    tier: 'Omega',
    label: 'Omega Class',
    color: 'text-amber-400',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/30',
    glow: 'shadow-[0_0_30px_rgba(245,158,11,0.15)]',
    description: 'Reality-altering or planet-scale threat potential. Fewer than 0.001% of the population. Requires constant monitoring and containment protocols.',
    count: 3,
    threat: 'Extreme',
    threatColor: 'text-red-400',
    icon: Star,
    abilities: [
      { name: 'Reality Manipulation', desc: 'Ability to alter fundamental laws of physics and reality within a defined radius.', rarity: 'Unique', rarityColor: 'text-amber-400' },
      { name: 'Solar Energy Manipulation', desc: 'Harnessing and projecting solar radiation at gigajoule-scale outputs.', rarity: 'Extremely Rare', rarityColor: 'text-amber-400' },
      { name: 'Time Dilation', desc: 'Localized manipulation of temporal flow — slowing, accelerating, or pausing time.', rarity: 'Unique', rarityColor: 'text-amber-400' },
      { name: 'Molecular Deconstruction', desc: 'Breaking down matter at the molecular level through focused will.', rarity: 'Extremely Rare', rarityColor: 'text-amber-400' },
    ],
    protocols: ['Continuous biometric monitoring', 'Dedicated containment facility', 'Level 5 clearance required for all interactions', 'Emergency suppression protocols on standby'],
  },
  {
    tier: 'IV',
    label: 'Tier IV',
    color: 'text-violet-400',
    bg: 'bg-violet-500/10',
    border: 'border-violet-500/30',
    glow: 'shadow-[0_0_20px_rgba(124,58,237,0.1)]',
    description: 'City-scale threat potential. Significant offensive or defensive capabilities. Approximately 0.01% of the population. Requires Level 4 clearance.',
    count: 47,
    threat: 'High',
    threatColor: 'text-orange-400',
    icon: Zap,
    abilities: [
      { name: 'Psychic Projection', desc: 'Telepathic and telekinetic abilities with range exceeding 1km.', rarity: 'Very Rare', rarityColor: 'text-violet-400' },
      { name: 'Atmospheric Manipulation', desc: 'Control over weather patterns and atmospheric conditions.', rarity: 'Very Rare', rarityColor: 'text-violet-400' },
      { name: 'Phase Shifting', desc: 'Complete intangibility allowing passage through solid matter.', rarity: 'Rare', rarityColor: 'text-violet-400' },
      { name: 'Bioelectric Emission', desc: 'Generation and projection of high-voltage bioelectric fields.', rarity: 'Rare', rarityColor: 'text-violet-400' },
      { name: 'Gravity Manipulation', desc: 'Localized control over gravitational forces.', rarity: 'Very Rare', rarityColor: 'text-violet-400' },
    ],
    protocols: ['Weekly check-ins with assigned handler', 'GPS tracking during off-campus activities', 'Level 4 clearance required', 'Suppression collar available if needed'],
  },
  {
    tier: 'III',
    label: 'Tier III',
    color: 'text-[#00d4ff]',
    bg: 'bg-[#00d4ff]/10',
    border: 'border-[#00d4ff]/30',
    glow: 'shadow-[0_0_20px_rgba(0,212,255,0.08)]',
    description: 'Significant combat capability. Enhanced physical or energy-based abilities. Approximately 0.1% of the population. Standard monitoring protocols apply.',
    count: 189,
    threat: 'Moderate',
    threatColor: 'text-yellow-400',
    icon: Shield,
    abilities: [
      { name: 'Molecular Density Control', desc: 'Ability to increase or decrease personal molecular density.', rarity: 'Uncommon', rarityColor: 'text-[#00d4ff]' },
      { name: 'Kinetic Absorption', desc: 'Absorbing and redirecting kinetic energy from impacts.', rarity: 'Uncommon', rarityColor: 'text-[#00d4ff]' },
      { name: 'Pyrokinesis', desc: 'Generation and control of fire and heat.', rarity: 'Uncommon', rarityColor: 'text-[#00d4ff]' },
      { name: 'Cryokinesis', desc: 'Generation and control of ice and extreme cold.', rarity: 'Uncommon', rarityColor: 'text-[#00d4ff]' },
      { name: 'Enhanced Strength', desc: 'Physical strength exceeding 10 tons of force.', rarity: 'Common', rarityColor: 'text-[#00d4ff]' },
    ],
    protocols: ['Monthly assessments', 'Standard tracking protocols', 'Level 3 clearance required', 'Ability suppression medication available'],
  },
  {
    tier: 'II',
    label: 'Tier II',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/30',
    glow: '',
    description: 'Moderate ability enhancement. Abilities that provide significant advantage but limited large-scale threat. Approximately 1% of the population.',
    count: 847,
    threat: 'Low',
    threatColor: 'text-emerald-400',
    icon: Activity,
    abilities: [
      { name: 'Enhanced Reflexes', desc: 'Reaction times 10-50x faster than baseline human.', rarity: 'Common', rarityColor: 'text-emerald-400' },
      { name: 'Accelerated Healing', desc: 'Rapid cellular regeneration — minor wounds heal in minutes.', rarity: 'Common', rarityColor: 'text-emerald-400' },
      { name: 'Mild Telepathy', desc: 'Surface-level thought reading within 10m range.', rarity: 'Uncommon', rarityColor: 'text-emerald-400' },
      { name: 'Electrokinesis', desc: 'Minor electrical generation and manipulation.', rarity: 'Common', rarityColor: 'text-emerald-400' },
      { name: 'Precognitive Flashes', desc: 'Brief, involuntary glimpses of near-future events.', rarity: 'Uncommon', rarityColor: 'text-emerald-400' },
    ],
    protocols: ['Quarterly assessments', 'Standard registration required', 'Level 1 clearance required', 'Voluntary monitoring program'],
  },
  {
    tier: 'I',
    label: 'Tier I',
    color: 'text-slate-400',
    bg: 'bg-slate-500/10',
    border: 'border-slate-500/30',
    glow: '',
    description: 'Minor ability manifestation. Abilities that provide marginal advantage over baseline humans. Approximately 5% of the population. Minimal oversight required.',
    count: 1761,
    threat: 'Minimal',
    threatColor: 'text-slate-400',
    icon: Eye,
    abilities: [
      { name: 'Heightened Senses', desc: 'One or more senses enhanced beyond normal human range.', rarity: 'Very Common', rarityColor: 'text-slate-400' },
      { name: 'Minor Empathy', desc: 'Passive emotional sensing from nearby individuals.', rarity: 'Very Common', rarityColor: 'text-slate-400' },
      { name: 'Mild Telekinesis', desc: 'Moving small objects (under 1kg) with mental focus.', rarity: 'Common', rarityColor: 'text-slate-400' },
      { name: 'Bioluminescence', desc: 'Voluntary or involuntary light emission from skin.', rarity: 'Common', rarityColor: 'text-slate-400' },
      { name: 'Thermal Sensitivity', desc: 'Ability to sense temperature variations at a distance.', rarity: 'Very Common', rarityColor: 'text-slate-400' },
    ],
    protocols: ['Annual registration renewal', 'Self-reporting requirements', 'Open access', 'No active monitoring'],
  },
];

function TierCard({ tier, onClick, selected }) {
  const Icon = tier.icon;
  return (
    <div
      onClick={() => onClick(tier)}
      className={`bg-[#0d1f3c] border rounded-xl p-5 cursor-pointer transition-all duration-300 hover:bg-[#112244] ${
        selected ? `border-opacity-80 ${tier.border} ${tier.glow}` : `border-[#00d4ff]/15 hover:${tier.border}`
      }`}
    >
      <div className="flex items-center justify-between mb-4">
        <div className={`w-12 h-12 ${tier.bg} rounded-xl flex items-center justify-center`}>
          <Icon className={`w-6 h-6 ${tier.color}`} />
        </div>
        <div className="text-right">
          <div className={`text-2xl font-black ${tier.color}`}>{tier.label}</div>
          <div className="text-slate-500 text-xs">{tier.count} registered</div>
        </div>
      </div>

      <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2">{tier.description}</p>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <AlertTriangle className="w-3 h-3 text-slate-600" />
          <span className="text-slate-500 text-xs">Threat:</span>
          <span className={`text-xs font-semibold ${tier.threatColor}`}>{tier.threat}</span>
        </div>
        <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${tier.bg} ${tier.color} border ${tier.border}`}>
          {tier.abilities.length} ability types
        </span>
      </div>
    </div>
  );
}

function TierDetail({ tier, onClose }) {
  const Icon = tier.icon;
  return (
    <div className="bg-[#0d1f3c] border border-[#00d4ff]/30 rounded-xl p-6 sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto">
      <div className="flex items-start justify-between mb-5">
        <div className="flex items-center gap-3">
          <div className={`w-12 h-12 ${tier.bg} rounded-xl flex items-center justify-center`}>
            <Icon className={`w-6 h-6 ${tier.color}`} />
          </div>
          <div>
            <div className={`text-2xl font-black ${tier.color}`}>{tier.label}</div>
            <div className="text-slate-500 text-xs">{tier.count} registered individuals</div>
          </div>
        </div>
        <button onClick={onClose} className="text-slate-500 hover:text-slate-300 text-xs border border-slate-700 px-2 py-1 rounded">
          Close
        </button>
      </div>

      <p className="text-slate-400 text-sm leading-relaxed mb-6">{tier.description}</p>

      <div className="mb-6">
        <div className="text-slate-500 text-xs uppercase tracking-wider mb-3">Documented Ability Types</div>
        <div className="space-y-3">
          {tier.abilities.map((ability, i) => (
            <div key={i} className="bg-[#050a14] rounded-lg p-3">
              <div className="flex items-center justify-between mb-1">
                <span className="text-slate-200 text-sm font-semibold">{ability.name}</span>
                <span className={`text-xs ${ability.rarityColor}`}>{ability.rarity}</span>
              </div>
              <p className="text-slate-500 text-xs leading-relaxed">{ability.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="text-slate-500 text-xs uppercase tracking-wider mb-3">Monitoring Protocols</div>
        <ul className="space-y-2">
          {tier.protocols.map((p, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
              <Shield className={`w-3 h-3 ${tier.color} mt-0.5 flex-shrink-0`} />
              {p}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Powers() {
  const [selected, setSelected] = useState(null);

  const totalRegistered = tiers.reduce((sum, t) => sum + t.count, 0);

  return (
    <div className="min-h-screen bg-[#050a14] pt-20">
      <div className="bg-[#0a1628] border-b border-[#00d4ff]/10 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-slate-500 text-xs uppercase tracking-widest mb-3">
            <span>Apex Academy</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#00d4ff]">Power Classifications</span>
          </div>
          <h1 className="text-4xl font-black text-slate-100 mb-2">Power Classifications</h1>
          <p className="text-slate-400">The definitive taxonomy of extraordinary human abilities. {totalRegistered.toLocaleString()} individuals registered globally.</p>
        </div>
      </div>

      {/* Classification overview bar */}
      <div className="bg-[#0a1628] border-b border-[#00d4ff]/10 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-2">
            <Info className="w-3.5 h-3.5 text-slate-500" />
            <span className="text-slate-500 text-xs uppercase tracking-wider">Global Distribution</span>
          </div>
          <div className="flex h-3 rounded-full overflow-hidden gap-0.5">
            {tiers.map(t => (
              <div
                key={t.tier}
                className={`${t.bg} border-r border-[#050a14] last:border-0 transition-all`}
                style={{ width: `${(t.count / totalRegistered) * 100}%` }}
                title={`${t.label}: ${t.count}`}
              />
            ))}
          </div>
          <div className="flex gap-4 mt-2 flex-wrap">
            {tiers.map(t => (
              <div key={t.tier} className="flex items-center gap-1.5">
                <div className={`w-2 h-2 rounded-full ${t.bg} border ${t.border}`} />
                <span className={`text-xs ${t.color}`}>{t.label}</span>
                <span className="text-slate-600 text-xs">({((t.count / totalRegistered) * 100).toFixed(1)}%)</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className={`grid gap-6 ${selected ? 'lg:grid-cols-3' : 'md:grid-cols-2 lg:grid-cols-3'}`}>
          <div className={`${selected ? 'lg:col-span-2' : ''} grid gap-4 ${selected ? 'md:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-3'} auto-rows-max`}>
            {tiers.map(t => (
              <TierCard
                key={t.tier}
                tier={t}
                onClick={setSelected}
                selected={selected?.tier === t.tier}
              />
            ))}
          </div>
          {selected && (
            <div className="lg:col-span-1">
              <TierDetail tier={selected} onClose={() => setSelected(null)} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
