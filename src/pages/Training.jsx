import { useState } from 'react';
import { ChevronRight, Clock, Users, Star, Lock, CheckCircle, Circle, ArrowRight, Zap, Shield, Brain, Wind, Flame, Activity } from 'lucide-react';

const programs = [
  {
    id: 'SOLARIS',
    name: 'SOLARIS Protocol',
    category: 'Energy Manipulation',
    categoryColor: 'text-amber-400',
    categoryBg: 'bg-amber-500/10',
    categoryBorder: 'border-amber-500/30',
    icon: Flame,
    iconColor: 'text-amber-400',
    level: 'Advanced',
    levelColor: 'text-red-400',
    duration: '18 months',
    enrolled: 12,
    maxCapacity: 15,
    clearance: 4,
    description: 'Designed for students with energy-based abilities. Focuses on precision control, output regulation, and combat application of solar and photonic powers.',
    objectives: [
      'Master sustained energy output without physical degradation',
      'Develop precision targeting at ranges exceeding 500m',
      'Integrate energy abilities with close-quarters combat',
      'Achieve stable flight using energy propulsion',
      'Complete 10 live-fire simulation exercises',
    ],
    modules: [
      { name: 'Energy Fundamentals', weeks: 4, status: 'complete' },
      { name: 'Output Calibration', weeks: 6, status: 'complete' },
      { name: 'Combat Integration', weeks: 8, status: 'active' },
      { name: 'Advanced Projection', weeks: 6, status: 'locked' },
      { name: 'Field Operations', weeks: 8, status: 'locked' },
    ],
    instructors: ['Director HELIOS', 'Dr. Vasquez'],
    graduates: 47,
    successRate: 89,
  },
  {
    id: 'MINDFORGE',
    name: 'MINDFORGE Initiative',
    category: 'Psychic Abilities',
    categoryColor: 'text-violet-400',
    categoryBg: 'bg-violet-500/10',
    categoryBorder: 'border-violet-500/30',
    icon: Brain,
    iconColor: 'text-violet-400',
    level: 'Expert',
    levelColor: 'text-red-400',
    duration: '24 months',
    enrolled: 8,
    maxCapacity: 10,
    clearance: 5,
    description: 'The most demanding psychic training program in existence. Covers telepathy, telekinesis, precognition, and psychic combat. Requires Level 5 clearance.',
    objectives: [
      'Establish reliable telepathic range of 5km minimum',
      'Develop resistance to psychic intrusion and manipulation',
      'Master telekinetic precision at molecular level',
      'Complete ethical framework certification',
      'Pass classified psychic combat evaluation',
    ],
    modules: [
      { name: 'Psychic Foundations', weeks: 6, status: 'complete' },
      { name: 'Telepathy Expansion', weeks: 8, status: 'active' },
      { name: 'Telekinetic Mastery', weeks: 8, status: 'locked' },
      { name: 'Psychic Defense', weeks: 6, status: 'locked' },
      { name: 'Combat Certification', weeks: 8, status: 'locked' },
    ],
    instructors: ['Director ORACLE', 'Prof. Chen'],
    graduates: 23,
    successRate: 76,
  },
  {
    id: 'FORTRESS',
    name: 'FORTRESS Program',
    category: 'Physical Enhancement',
    categoryColor: 'text-[#00d4ff]',
    categoryBg: 'bg-[#00d4ff]/10',
    categoryBorder: 'border-[#00d4ff]/30',
    icon: Shield,
    iconColor: 'text-[#00d4ff]',
    level: 'Intermediate',
    levelColor: 'text-amber-400',
    duration: '12 months',
    enrolled: 18,
    maxCapacity: 20,
    clearance: 3,
    description: 'Comprehensive training for students with physical enhancement abilities. Covers strength, durability, density manipulation, and tactical defense.',
    objectives: [
      'Achieve consistent density control under combat stress',
      'Develop kinetic absorption efficiency above 85%',
      'Complete structural reinforcement certification',
      'Master tactical positioning and defensive formations',
      'Pass live-fire durability assessment',
    ],
    modules: [
      { name: 'Physical Baseline', weeks: 3, status: 'complete' },
      { name: 'Density Control', weeks: 5, status: 'complete' },
      { name: 'Kinetic Absorption', weeks: 6, status: 'complete' },
      { name: 'Tactical Defense', weeks: 6, status: 'active' },
      { name: 'Field Certification', weeks: 4, status: 'locked' },
    ],
    instructors: ['Commander TITAN', 'Sgt. Reyes'],
    graduates: 89,
    successRate: 94,
  },
  {
    id: 'GHOST',
    name: 'GHOST Protocol',
    category: 'Stealth & Infiltration',
    categoryColor: 'text-slate-300',
    categoryBg: 'bg-slate-500/10',
    categoryBorder: 'border-slate-500/30',
    icon: Zap,
    iconColor: 'text-slate-300',
    level: 'Advanced',
    levelColor: 'text-red-400',
    duration: '15 months',
    enrolled: 9,
    maxCapacity: 12,
    clearance: 4,
    description: 'Specialized program for phase-shifting, invisibility, and stealth-based abilities. Focuses on infiltration, intelligence gathering, and covert operations.',
    objectives: [
      'Sustain phase shift for minimum 8 minutes continuously',
      'Complete undetected infiltration of Class-A secured facility',
      'Master dimensional sight for threat detection',
      'Develop silent movement and counter-surveillance skills',
      'Pass classified infiltration field exercise',
    ],
    modules: [
      { name: 'Phase Fundamentals', weeks: 4, status: 'complete' },
      { name: 'Stealth Techniques', weeks: 5, status: 'complete' },
      { name: 'Infiltration Tactics', weeks: 6, status: 'active' },
      { name: 'Intelligence Ops', weeks: 5, status: 'locked' },
      { name: 'Field Certification', weeks: 6, status: 'locked' },
    ],
    instructors: ['Agent SHADOW', 'Dr. Nakamura'],
    graduates: 31,
    successRate: 82,
  },
  {
    id: 'STORMWATCH',
    name: 'STORMWATCH Division',
    category: 'Elemental Control',
    categoryColor: 'text-sky-400',
    categoryBg: 'bg-sky-500/10',
    categoryBorder: 'border-sky-500/30',
    icon: Wind,
    iconColor: 'text-sky-400',
    level: 'Advanced',
    levelColor: 'text-red-400',
    duration: '20 months',
    enrolled: 7,
    maxCapacity: 10,
    clearance: 4,
    description: 'Elite training for atmospheric and elemental manipulation. Covers weather control, lightning channeling, and large-scale environmental operations.',
    objectives: [
      'Generate controlled storm systems within 60 seconds',
      'Achieve precision lightning strike accuracy at 1km',
      'Develop atmospheric pressure manipulation for tactical use',
      'Complete environmental impact mitigation certification',
      'Pass large-scale weather operation simulation',
    ],
    modules: [
      { name: 'Atmospheric Basics', weeks: 5, status: 'complete' },
      { name: 'Storm Generation', weeks: 7, status: 'complete' },
      { name: 'Lightning Mastery', weeks: 6, status: 'active' },
      { name: 'Large-Scale Ops', weeks: 8, status: 'locked' },
      { name: 'Field Certification', weeks: 6, status: 'locked' },
    ],
    instructors: ['Director TEMPEST', 'Dr. Okafor'],
    graduates: 19,
    successRate: 84,
  },
  {
    id: 'CATALYST',
    name: 'CATALYST Track',
    category: 'Emerging Abilities',
    categoryColor: 'text-emerald-400',
    categoryBg: 'bg-emerald-500/10',
    categoryBorder: 'border-emerald-500/30',
    icon: Activity,
    iconColor: 'text-emerald-400',
    level: 'Foundation',
    levelColor: 'text-emerald-400',
    duration: '6 months',
    enrolled: 24,
    maxCapacity: 30,
    clearance: 1,
    description: 'Entry-level program for newly identified individuals with emerging abilities. Focuses on ability identification, control fundamentals, and safety protocols.',
    objectives: [
      'Complete comprehensive ability assessment and classification',
      'Achieve basic control and suppression of abilities',
      'Pass safety certification for public interaction',
      'Demonstrate understanding of Academy protocols',
      'Select advanced program pathway',
    ],
    modules: [
      { name: 'Ability Assessment', weeks: 2, status: 'complete' },
      { name: 'Control Basics', weeks: 4, status: 'active' },
      { name: 'Safety Protocols', weeks: 3, status: 'locked' },
      { name: 'Academy Integration', weeks: 3, status: 'locked' },
      { name: 'Pathway Selection', weeks: 2, status: 'locked' },
    ],
    instructors: ['Counselor DAWN', 'Dr. Patel'],
    graduates: 312,
    successRate: 97,
  },
];

const levels = ['All', 'Foundation', 'Intermediate', 'Advanced', 'Expert'];

function ModuleStatus({ status }) {
  if (status === 'complete') return <CheckCircle className="w-4 h-4 text-emerald-400" />;
  if (status === 'active') return <div className="w-4 h-4 rounded-full border-2 border-[#00d4ff] bg-[#00d4ff]/20 flex items-center justify-center"><div className="w-1.5 h-1.5 rounded-full bg-[#00d4ff]" /></div>;
  return <Circle className="w-4 h-4 text-slate-700" />;
}

function ProgramCard({ program, onClick, selected }) {
  const Icon = program.icon;
  const fillPct = (program.enrolled / program.maxCapacity) * 100;
  return (
    <div
      onClick={() => onClick(program)}
      className={`bg-[#0d1f3c] border rounded-xl p-5 cursor-pointer transition-all duration-300 hover:bg-[#112244] ${
        selected ? 'border-[#00d4ff]/60 shadow-[0_0_20px_rgba(0,212,255,0.08)]' : 'border-[#00d4ff]/15 hover:border-[#00d4ff]/40'
      }`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`w-10 h-10 ${program.categoryBg} rounded-lg flex items-center justify-center`}>
          <Icon className={`w-5 h-5 ${program.iconColor}`} />
        </div>
        <div className="flex flex-col items-end gap-1">
          <span className={`text-xs font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full ${program.categoryBg} ${program.categoryColor} border ${program.categoryBorder}`}>
            {program.category}
          </span>
          <span className={`text-xs font-medium ${program.levelColor}`}>{program.level}</span>
        </div>
      </div>

      <h3 className="text-slate-100 font-bold text-base mb-1">{program.name}</h3>
      <p className="text-slate-500 text-xs mb-4 line-clamp-2">{program.description}</p>

      <div className="grid grid-cols-3 gap-2 mb-4 text-center">
        <div className="bg-[#050a14] rounded-lg p-2">
          <div className="text-slate-100 font-bold text-sm">{program.duration}</div>
          <div className="text-slate-600 text-xs">Duration</div>
        </div>
        <div className="bg-[#050a14] rounded-lg p-2">
          <div className="text-slate-100 font-bold text-sm">{program.graduates}</div>
          <div className="text-slate-600 text-xs">Graduates</div>
        </div>
        <div className="bg-[#050a14] rounded-lg p-2">
          <div className="text-emerald-400 font-bold text-sm">{program.successRate}%</div>
          <div className="text-slate-600 text-xs">Success</div>
        </div>
      </div>

      <div className="mb-1 flex justify-between text-xs text-slate-500">
        <span>Enrollment</span>
        <span className="text-slate-300">{program.enrolled}/{program.maxCapacity}</span>
      </div>
      <div className="w-full bg-[#050a14] rounded-full h-1.5">
        <div
          className={`h-1.5 rounded-full transition-all ${fillPct > 90 ? 'bg-red-400' : fillPct > 70 ? 'bg-amber-400' : 'bg-emerald-400'}`}
          style={{ width: `${fillPct}%` }}
        />
      </div>

      <div className="flex items-center gap-1 mt-3">
        <Lock className="w-3 h-3 text-slate-600" />
        <span className="text-slate-600 text-xs">Clearance Level {program.clearance} Required</span>
      </div>
    </div>
  );
}

function ProgramDetail({ program, onClose }) {
  const Icon = program.icon;
  return (
    <div className="bg-[#0d1f3c] border border-[#00d4ff]/30 rounded-xl p-6 sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto">
      <div className="flex items-start justify-between mb-5">
        <div className="flex items-center gap-3">
          <div className={`w-11 h-11 ${program.categoryBg} rounded-xl flex items-center justify-center`}>
            <Icon className={`w-6 h-6 ${program.iconColor}`} />
          </div>
          <div>
            <div className="text-slate-100 font-black text-lg leading-tight">{program.name}</div>
            <div className={`text-xs font-medium ${program.categoryColor}`}>{program.category}</div>
          </div>
        </div>
        <button onClick={onClose} className="text-slate-500 hover:text-slate-300 text-xs border border-slate-700 px-2 py-1 rounded">
          Close
        </button>
      </div>

      <p className="text-slate-400 text-sm leading-relaxed mb-5">{program.description}</p>

      <div className="mb-5">
        <div className="text-slate-500 text-xs uppercase tracking-wider mb-3">Program Modules</div>
        <div className="space-y-2">
          {program.modules.map((mod, i) => (
            <div key={i} className="flex items-center gap-3 p-2.5 bg-[#050a14] rounded-lg">
              <ModuleStatus status={mod.status} />
              <span className={`text-sm flex-1 ${mod.status === 'locked' ? 'text-slate-600' : 'text-slate-300'}`}>
                {mod.name}
              </span>
              <span className="text-slate-600 text-xs">{mod.weeks}w</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-5">
        <div className="text-slate-500 text-xs uppercase tracking-wider mb-3">Training Objectives</div>
        <ul className="space-y-2">
          {program.objectives.map((obj, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
              <ArrowRight className="w-3 h-3 text-[#00d4ff] mt-0.5 flex-shrink-0" />
              {obj}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <div className="text-slate-500 text-xs uppercase tracking-wider mb-2">Lead Instructors</div>
        <div className="flex flex-wrap gap-2">
          {program.instructors.map(inst => (
            <span key={inst} className="text-xs px-2.5 py-1 rounded-full bg-[#00d4ff]/10 text-[#00d4ff] border border-[#00d4ff]/20">
              {inst}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Training() {
  const [levelFilter, setLevelFilter] = useState('All');
  const [selected, setSelected] = useState(null);

  const filtered = programs.filter(p => levelFilter === 'All' || p.level === levelFilter);

  return (
    <div className="min-h-screen bg-[#050a14] pt-20">
      <div className="bg-[#0a1628] border-b border-[#00d4ff]/10 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-slate-500 text-xs uppercase tracking-widest mb-3">
            <span>Apex Academy</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#00d4ff]">Training Programs</span>
          </div>
          <h1 className="text-4xl font-black text-slate-100 mb-2">Training Programs</h1>
          <p className="text-slate-400">{programs.length} active programs across all ability categories.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-2 mb-8 flex-wrap">
          {levels.map(l => (
            <button
              key={l}
              onClick={() => setLevelFilter(l)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all ${
                levelFilter === l
                  ? 'bg-[#00d4ff] text-[#050a14]'
                  : 'bg-[#0d1f3c] text-slate-400 border border-[#00d4ff]/15 hover:border-[#00d4ff]/40'
              }`}
            >
              {l}
            </button>
          ))}
        </div>

        <div className={`grid gap-6 ${selected ? 'lg:grid-cols-3' : 'md:grid-cols-2 lg:grid-cols-3'}`}>
          <div className={`${selected ? 'lg:col-span-2' : ''} grid gap-4 ${selected ? 'md:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-3'} auto-rows-max`}>
            {filtered.map(p => (
              <ProgramCard
                key={p.id}
                program={p}
                onClick={setSelected}
                selected={selected?.id === p.id}
              />
            ))}
          </div>
          {selected && (
            <div className="lg:col-span-1">
              <ProgramDetail program={selected} onClose={() => setSelected(null)} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
