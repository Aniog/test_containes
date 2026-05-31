import { useState } from 'react';
import { Search, Filter, ChevronRight, Star, Zap, Shield, Eye, Wind, Flame, Brain, Activity } from 'lucide-react';

const students = [
  {
    id: 'APX-0047',
    codename: 'NOVA',
    realName: 'Classified',
    age: 24,
    tier: 'Omega',
    tierColor: 'text-amber-400',
    tierBg: 'bg-amber-500/10',
    tierBorder: 'border-amber-500/30',
    primaryAbility: 'Solar Energy Manipulation',
    secondaryAbility: 'Photon Projection',
    abilityIcon: Flame,
    abilityColor: 'text-amber-400',
    status: 'Active',
    statusColor: 'text-emerald-400',
    statusBg: 'bg-emerald-500/10',
    statusBorder: 'border-emerald-500/30',
    enrolled: '2021',
    missions: 34,
    successRate: 97,
    threatLevel: 'Extreme',
    threatColor: 'text-red-400',
    program: 'SOLARIS Protocol',
    bio: 'Exceptional solar energy conduit. Capable of sustained photon blasts exceeding 4.2 gigajoules. Currently enrolled in advanced combat integration.',
    skills: ['Energy Projection', 'Flight', 'Heat Resistance', 'Light Manipulation'],
    imgId: 'student-nova-img-a1b2c3',
    titleId: 'student-nova-title',
    descId: 'student-nova-desc',
  },
  {
    id: 'APX-0089',
    codename: 'SPECTRE',
    realName: 'Classified',
    age: 19,
    tier: 'IV',
    tierColor: 'text-violet-400',
    tierBg: 'bg-violet-500/10',
    tierBorder: 'border-violet-500/30',
    primaryAbility: 'Psychic Projection',
    secondaryAbility: 'Telepathy',
    abilityIcon: Brain,
    abilityColor: 'text-violet-400',
    status: 'Active',
    statusColor: 'text-emerald-400',
    statusBg: 'bg-emerald-500/10',
    statusBorder: 'border-emerald-500/30',
    enrolled: '2024',
    missions: 8,
    successRate: 100,
    threatLevel: 'High',
    threatColor: 'text-orange-400',
    program: 'MINDFORGE Initiative',
    bio: 'Newly enrolled psychic with unprecedented range. Telepathic reach confirmed at 2.3km. Emotional manipulation capabilities under evaluation.',
    skills: ['Telepathy', 'Illusion Casting', 'Mind Reading', 'Psychic Shields'],
    imgId: 'student-spectre-img-d4e5f6',
    titleId: 'student-spectre-title',
    descId: 'student-spectre-desc',
  },
  {
    id: 'APX-0031',
    codename: 'IRONVEIL',
    realName: 'Classified',
    age: 28,
    tier: 'III',
    tierColor: 'text-[#00d4ff]',
    tierBg: 'bg-[#00d4ff]/10',
    tierBorder: 'border-[#00d4ff]/30',
    primaryAbility: 'Molecular Density Control',
    secondaryAbility: 'Kinetic Absorption',
    abilityIcon: Shield,
    abilityColor: 'text-[#00d4ff]',
    status: 'On Mission',
    statusColor: 'text-amber-400',
    statusBg: 'bg-amber-500/10',
    statusBorder: 'border-amber-500/30',
    enrolled: '2019',
    missions: 67,
    successRate: 91,
    threatLevel: 'Moderate',
    threatColor: 'text-yellow-400',
    program: 'FORTRESS Program',
    bio: 'Veteran operative with exceptional defensive capabilities. Can increase personal density to withstand direct artillery impact. Currently deployed on Mission BLACKTHORN.',
    skills: ['Density Shift', 'Impact Absorption', 'Structural Reinforcement', 'Seismic Stomp'],
    imgId: 'student-ironveil-img-g7h8i9',
    titleId: 'student-ironveil-title',
    descId: 'student-ironveil-desc',
  },
  {
    id: 'APX-0112',
    codename: 'PHANTOM',
    realName: 'Classified',
    age: 22,
    tier: 'IV',
    tierColor: 'text-violet-400',
    tierBg: 'bg-violet-500/10',
    tierBorder: 'border-violet-500/30',
    primaryAbility: 'Phase Shifting',
    secondaryAbility: 'Dimensional Sight',
    abilityIcon: Eye,
    abilityColor: 'text-violet-400',
    status: 'Training',
    statusColor: 'text-[#00d4ff]',
    statusBg: 'bg-[#00d4ff]/10',
    statusBorder: 'border-[#00d4ff]/30',
    enrolled: '2023',
    missions: 15,
    successRate: 93,
    threatLevel: 'High',
    threatColor: 'text-orange-400',
    program: 'GHOST Protocol',
    bio: 'Exceptional infiltration specialist. Phase shifting allows complete intangibility for up to 4 minutes. Dimensional sight enables detection of hidden threats.',
    skills: ['Intangibility', 'Wall Phasing', 'Dimensional Awareness', 'Stealth'],
    imgId: 'student-phantom-img-j1k2l3',
    titleId: 'student-phantom-title',
    descId: 'student-phantom-desc',
  },
  {
    id: 'APX-0058',
    codename: 'TEMPEST',
    realName: 'Classified',
    age: 26,
    tier: 'IV',
    tierColor: 'text-violet-400',
    tierBg: 'bg-violet-500/10',
    tierBorder: 'border-violet-500/30',
    primaryAbility: 'Atmospheric Manipulation',
    secondaryAbility: 'Lightning Channeling',
    abilityIcon: Wind,
    abilityColor: 'text-violet-400',
    status: 'Active',
    statusColor: 'text-emerald-400',
    statusBg: 'bg-emerald-500/10',
    statusBorder: 'border-emerald-500/30',
    enrolled: '2020',
    missions: 52,
    successRate: 88,
    threatLevel: 'High',
    threatColor: 'text-orange-400',
    program: 'STORMWATCH Division',
    bio: 'Weather manipulation specialist with documented ability to generate Category 5 storm conditions within 90 seconds. Lightning channeling provides offensive capability.',
    skills: ['Storm Generation', 'Wind Control', 'Lightning Strike', 'Pressure Manipulation'],
    imgId: 'student-tempest-img-m4n5o6',
    titleId: 'student-tempest-title',
    descId: 'student-tempest-desc',
  },
  {
    id: 'APX-0074',
    codename: 'PULSE',
    realName: 'Classified',
    age: 21,
    tier: 'II',
    tierColor: 'text-slate-400',
    tierBg: 'bg-slate-500/10',
    tierBorder: 'border-slate-500/30',
    primaryAbility: 'Bioelectric Emission',
    secondaryAbility: 'Neural Disruption',
    abilityIcon: Activity,
    abilityColor: 'text-emerald-400',
    status: 'Evaluation',
    statusColor: 'text-rose-400',
    statusBg: 'bg-rose-500/10',
    statusBorder: 'border-rose-500/30',
    enrolled: '2024',
    missions: 3,
    successRate: 67,
    threatLevel: 'Moderate',
    threatColor: 'text-yellow-400',
    program: 'CATALYST Track',
    bio: 'Promising bioelectric ability with potential for significant growth. Currently undergoing comprehensive evaluation following an uncontrolled discharge incident in Lab 7.',
    skills: ['Electric Pulse', 'EMP Generation', 'Neural Shock', 'Biofield Detection'],
    imgId: 'student-pulse-img-p7q8r9',
    titleId: 'student-pulse-title',
    descId: 'student-pulse-desc',
  },
];

const tiers = ['All', 'Omega', 'IV', 'III', 'II', 'I'];
const statuses = ['All', 'Active', 'Training', 'On Mission', 'Evaluation'];

function StatBar({ value, max = 100, color = 'bg-[#00d4ff]' }) {
  return (
    <div className="w-full bg-[#050a14] rounded-full h-1.5">
      <div
        className={`h-1.5 rounded-full ${color} transition-all duration-500`}
        style={{ width: `${(value / max) * 100}%` }}
      />
    </div>
  );
}

function StudentCard({ student, onClick, selected }) {
  const Icon = student.abilityIcon;
  return (
    <div
      onClick={() => onClick(student)}
      className={`bg-[#0d1f3c] border rounded-xl p-5 cursor-pointer transition-all duration-300 hover:bg-[#112244] ${
        selected ? 'border-[#00d4ff]/60 shadow-[0_0_20px_rgba(0,212,255,0.1)]' : 'border-[#00d4ff]/15 hover:border-[#00d4ff]/40'
      }`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-[#050a14] border border-[#00d4ff]/20 flex items-center justify-center">
            <Icon className={`w-5 h-5 ${student.abilityColor}`} />
          </div>
          <div>
            <div className="text-slate-100 font-bold text-base">{student.codename}</div>
            <div className="text-slate-500 text-xs font-mono">{student.id}</div>
          </div>
        </div>
        <span className={`text-xs font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full ${student.tierBg} ${student.tierColor} border ${student.tierBorder}`}>
          Tier {student.tier}
        </span>
      </div>

      <div className="mb-3">
        <div className="text-slate-300 text-sm font-medium">{student.primaryAbility}</div>
        <div className="text-slate-500 text-xs">{student.secondaryAbility}</div>
      </div>

      <div className="flex items-center justify-between mb-3">
        <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${student.statusBg} ${student.statusColor} border ${student.statusBorder}`}>
          {student.status}
        </span>
        <span className="text-slate-500 text-xs">{student.missions} missions</span>
      </div>

      <div className="space-y-1.5">
        <div className="flex justify-between text-xs text-slate-500">
          <span>Success Rate</span>
          <span className="text-slate-300">{student.successRate}%</span>
        </div>
        <StatBar value={student.successRate} color="bg-emerald-400" />
      </div>
    </div>
  );
}

function StudentDetail({ student, onClose }) {
  const Icon = student.abilityIcon;
  return (
    <div className="bg-[#0d1f3c] border border-[#00d4ff]/30 rounded-xl p-6 sticky top-24">
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-[#050a14] border border-[#00d4ff]/30 flex items-center justify-center">
            <Icon className={`w-6 h-6 ${student.abilityColor}`} />
          </div>
          <div>
            <div className="text-slate-100 font-black text-xl">{student.codename}</div>
            <div className="text-slate-500 text-xs font-mono">{student.id} · Age {student.age}</div>
          </div>
        </div>
        <button onClick={onClose} className="text-slate-500 hover:text-slate-300 text-xs border border-slate-700 px-2 py-1 rounded">
          Close
        </button>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-6">
        <div className="bg-[#050a14] rounded-lg p-3">
          <div className="text-slate-500 text-xs uppercase tracking-wider mb-1">Tier</div>
          <div className={`font-bold text-sm ${student.tierColor}`}>Tier {student.tier}</div>
        </div>
        <div className="bg-[#050a14] rounded-lg p-3">
          <div className="text-slate-500 text-xs uppercase tracking-wider mb-1">Status</div>
          <div className={`font-bold text-sm ${student.statusColor}`}>{student.status}</div>
        </div>
        <div className="bg-[#050a14] rounded-lg p-3">
          <div className="text-slate-500 text-xs uppercase tracking-wider mb-1">Missions</div>
          <div className="text-slate-100 font-bold text-sm">{student.missions}</div>
        </div>
        <div className="bg-[#050a14] rounded-lg p-3">
          <div className="text-slate-500 text-xs uppercase tracking-wider mb-1">Threat Level</div>
          <div className={`font-bold text-sm ${student.threatColor}`}>{student.threatLevel}</div>
        </div>
      </div>

      <div className="mb-5">
        <div className="text-slate-500 text-xs uppercase tracking-wider mb-2">Enrolled Program</div>
        <div className="text-[#00d4ff] text-sm font-semibold">{student.program}</div>
      </div>

      <div className="mb-5">
        <div className="text-slate-500 text-xs uppercase tracking-wider mb-2">Operative Profile</div>
        <p className="text-slate-400 text-sm leading-relaxed">{student.bio}</p>
      </div>

      <div className="mb-5">
        <div className="text-slate-500 text-xs uppercase tracking-wider mb-3">Confirmed Abilities</div>
        <div className="flex flex-wrap gap-2">
          {student.skills.map(skill => (
            <span key={skill} className="text-xs px-2.5 py-1 rounded-full bg-[#00d4ff]/10 text-[#00d4ff] border border-[#00d4ff]/20">
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div>
        <div className="flex justify-between text-xs text-slate-500 mb-1.5">
          <span>Mission Success Rate</span>
          <span className="text-slate-300">{student.successRate}%</span>
        </div>
        <StatBar value={student.successRate} color="bg-emerald-400" />
      </div>
    </div>
  );
}

export default function Students() {
  const [search, setSearch] = useState('');
  const [tierFilter, setTierFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');
  const [selected, setSelected] = useState(null);

  const filtered = students.filter(s => {
    const matchSearch = s.codename.toLowerCase().includes(search.toLowerCase()) ||
      s.primaryAbility.toLowerCase().includes(search.toLowerCase()) ||
      s.id.toLowerCase().includes(search.toLowerCase());
    const matchTier = tierFilter === 'All' || s.tier === tierFilter;
    const matchStatus = statusFilter === 'All' || s.status === statusFilter;
    return matchSearch && matchTier && matchStatus;
  });

  return (
    <div className="min-h-screen bg-[#050a14] pt-20">
      {/* Header */}
      <div className="bg-[#0a1628] border-b border-[#00d4ff]/10 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-slate-500 text-xs uppercase tracking-widest mb-3">
            <span>Apex Academy</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#00d4ff]">Student Profiles</span>
          </div>
          <h1 className="text-4xl font-black text-slate-100 mb-2">Student Profiles</h1>
          <p className="text-slate-400">Classified dossiers on all enrolled operatives. {students.length} records on file.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              placeholder="Search by codename, ability, or ID..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full bg-[#0d1f3c] border border-[#00d4ff]/20 rounded-lg pl-10 pr-4 py-2.5 text-slate-300 text-sm placeholder-slate-600 focus:outline-none focus:border-[#00d4ff]/50 transition-colors"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {tiers.map(t => (
              <button
                key={t}
                onClick={() => setTierFilter(t)}
                className={`px-3 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all ${
                  tierFilter === t
                    ? 'bg-[#00d4ff] text-[#050a14]'
                    : 'bg-[#0d1f3c] text-slate-400 border border-[#00d4ff]/15 hover:border-[#00d4ff]/40'
                }`}
              >
                {t === 'All' ? 'All Tiers' : `Tier ${t}`}
              </button>
            ))}
          </div>
        </div>

        <div className="flex gap-2 mb-8 flex-wrap">
          {statuses.map(s => (
            <button
              key={s}
              onClick={() => setStatusFilter(s)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                statusFilter === s
                  ? 'bg-violet-500/20 text-violet-300 border border-violet-500/40'
                  : 'bg-[#0d1f3c] text-slate-500 border border-[#00d4ff]/10 hover:text-slate-300'
              }`}
            >
              {s}
            </button>
          ))}
        </div>

        <div className={`grid gap-6 ${selected ? 'lg:grid-cols-3' : 'md:grid-cols-2 lg:grid-cols-3'}`}>
          <div className={`${selected ? 'lg:col-span-2' : ''} grid gap-4 ${selected ? 'md:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-3'} auto-rows-max`}>
            {filtered.length === 0 ? (
              <div className="col-span-full text-center py-16 text-slate-500">
                <Shield className="w-10 h-10 mx-auto mb-3 opacity-30" />
                <p>No records match your search criteria.</p>
              </div>
            ) : (
              filtered.map(s => (
                <StudentCard
                  key={s.id}
                  student={s}
                  onClick={setSelected}
                  selected={selected?.id === s.id}
                />
              ))
            )}
          </div>

          {selected && (
            <div className="lg:col-span-1">
              <StudentDetail student={selected} onClose={() => setSelected(null)} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
