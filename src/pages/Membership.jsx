import { useState } from 'react'
import { Users, Eye, Microscope, Clock, Shield, Star, Check, Lock } from 'lucide-react'
import GlassPanel from '@/components/shared/GlassPanel'
import ParticleField from '@/components/shared/ParticleField'

const clearanceLevels = [
  {
    id: 'observer',
    name: 'Observer',
    icon: Eye,
    color: 'cyan',
    price: 'Free',
    description: 'Public access to declassified artifacts and basic timeline data.',
    features: [
      'Browse declassified artifacts',
      'View public timeline data',
      'Read investigation summaries',
      'Community forum access',
      'Monthly newsletter',
    ],
    locked: [],
  },
  {
    id: 'researcher',
    name: 'Researcher',
    icon: Microscope,
    color: 'amber',
    price: '$49/month',
    description: 'Enhanced access for temporal researchers and field agents.',
    features: [
      'All Observer features',
      'Access restricted artifacts',
      'Submit sighting reports',
      'Join collaborative investigations',
      'Temporal analysis tools',
      'Priority support channel',
      'Quarterly briefings',
    ],
    locked: ['Chronologist-level artifacts', 'Timeline modification tools'],
  },
  {
    id: 'chronologist',
    name: 'Chronologist',
    icon: Clock,
    color: 'danger',
    price: 'By Invitation',
    description: 'Maximum clearance for senior temporal operatives.',
    features: [
      'All Researcher features',
      'Full artifact database access',
      'Timeline modification tools',
      'Paradox resolution authority',
      'Dimensional travel clearance',
      'Direct communication with other dimensions',
      'Emergency temporal protocols',
      'Archive governance voting',
    ],
    locked: [],
  },
]

const Membership = () => {
  const [selectedLevel, setSelectedLevel] = useState('researcher')
  const [showLogin, setShowLogin] = useState(false)

  return (
    <div className="min-h-screen pt-20 pb-16 px-4 sm:px-6 relative">
      <ParticleField count={20} className="opacity-20" />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="section-label mb-2 flex items-center justify-center gap-2">
            <Shield className="w-4 h-4" />
            Membership Portal
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">Clearance Levels</h1>
          <p className="text-white/40 text-sm max-w-lg mx-auto">
            Access to The Archive is granted based on clearance level. Choose your path into the temporal unknown.
          </p>
        </div>

        {/* Clearance level cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {clearanceLevels.map((level) => {
            const Icon = level.icon
            const isSelected = selectedLevel === level.id
            const colorClasses = {
              cyan: { border: 'border-cyan/40', bg: 'bg-cyan/10', text: 'text-cyan', glow: 'shadow-[0_0_40px_rgba(0,240,255,0.15)]' },
              amber: { border: 'border-amber/40', bg: 'bg-amber/10', text: 'text-amber', glow: 'shadow-[0_0_40px_rgba(240,165,0,0.15)]' },
              danger: { border: 'border-danger/40', bg: 'bg-danger/10', text: 'text-danger', glow: 'shadow-[0_0_40px_rgba(255,45,85,0.15)]' },
            }[level.color]

            return (
              <GlassPanel
                key={level.id}
                className={`p-6 flex flex-col cursor-pointer transition-all duration-300 ${
                  isSelected ? `${colorClasses.border} ${colorClasses.glow}` : 'hover:border-white/20'
                }`}
                onClick={() => setSelectedLevel(level.id)}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-10 h-10 rounded-lg ${colorClasses.bg} flex items-center justify-center`}>
                    <Icon className={`w-5 h-5 ${colorClasses.text}`} />
                  </div>
                  {level.id === 'researcher' && (
                    <span className="text-[10px] px-2 py-1 rounded bg-amber/10 border border-amber/30 text-amber font-semibold">
                      POPULAR
                    </span>
                  )}
                </div>

                <h3 className={`text-xl font-bold ${colorClasses.text} mb-1`}>{level.name}</h3>
                <p className="text-2xl font-bold text-white mb-3">{level.price}</p>
                <p className="text-sm text-white/40 mb-6">{level.description}</p>

                <ul className="space-y-2.5 flex-1">
                  {level.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className={`w-4 h-4 ${colorClasses.text} shrink-0 mt-0.5`} />
                      <span className="text-sm text-white/60">{feature}</span>
                    </li>
                  ))}
                  {level.locked.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 opacity-40">
                      <Lock className="w-4 h-4 text-white/30 shrink-0 mt-0.5" />
                      <span className="text-sm text-white/30 line-through">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={(e) => { e.stopPropagation(); setShowLogin(true) }}
                  className={`mt-6 w-full py-3 rounded-lg border font-semibold text-sm transition-all ${
                    isSelected
                      ? `${colorClasses.bg} ${colorClasses.border} ${colorClasses.text} hover:opacity-80`
                      : 'bg-white/5 border-white/10 text-white/50 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {level.price === 'Free' ? 'Join as Observer' : level.price === 'By Invitation' ? 'Request Invitation' : 'Apply for Access'}
                </button>
              </GlassPanel>
            )
          })}
        </div>

        {/* Login/Register section */}
        {showLogin && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm" onClick={() => setShowLogin(false)}>
            <GlassPanel className="w-full max-w-md p-8 animate-fade-in-up" onClick={(e) => e.stopPropagation()}>
              <h3 className="text-xl font-bold text-white mb-2">Access The Archive</h3>
              <p className="text-sm text-white/40 mb-6">Enter your credentials to access your clearance level.</p>

              <div className="space-y-4">
                <div>
                  <label className="text-xs text-white/40 uppercase tracking-wider mb-1 block">Agent Identifier</label>
                  <input
                    type="email"
                    placeholder="agent@archive.temporal"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-cyan/30 transition-all"
                  />
                </div>
                <div>
                  <label className="text-xs text-white/40 uppercase tracking-wider mb-1 block">Access Code</label>
                  <input
                    type="password"
                    placeholder="••••••••••••"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-cyan/30 transition-all"
                  />
                </div>
                <button className="w-full py-3 rounded-lg bg-cyan/10 border border-cyan/30 text-cyan font-semibold text-sm hover:bg-cyan/20 transition-all">
                  Authenticate
                </button>
                <p className="text-center text-xs text-white/30">
                  New agent? <button className="text-cyan hover:text-cyan/80">Request access</button>
                </p>
              </div>
            </GlassPanel>
          </div>
        )}

        {/* Member benefits */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-white mb-3">Member Capabilities</h2>
          <p className="text-white/40 text-sm">What you can do within The Archive</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: Star, title: 'Save Discoveries', desc: 'Bookmark artifacts and build personal collections' },
            { icon: Eye, title: 'Submit Sightings', desc: 'Report temporal anomalies for investigation' },
            { icon: Users, title: 'Collaborate', desc: 'Join teams on active investigations' },
            { icon: Shield, title: 'Earn Clearance', desc: 'Advance through contribution and discovery' },
          ].map((benefit) => {
            const Icon = benefit.icon
            return (
              <GlassPanel key={benefit.title} hover className="p-5 text-center">
                <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-5 h-5 text-cyan" />
                </div>
                <h4 className="text-sm font-semibold text-white mb-1">{benefit.title}</h4>
                <p className="text-xs text-white/40">{benefit.desc}</p>
              </GlassPanel>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Membership
