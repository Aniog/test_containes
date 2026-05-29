import { Link } from 'react-router-dom'
import { Shield, Eye, Search, Clock, ChevronRight, Check, Lock } from 'lucide-react'

const TIERS = [
  {
    id: 'observer',
    name: 'Observer',
    subtitle: 'Public Access',
    icon: Eye,
    color: 'text-slate-300',
    borderColor: 'border-slate-500/30',
    bgColor: 'bg-slate-500/5',
    glowColor: 'rgba(148,163,184,0.1)',
    price: 'Free',
    features: [
      'Browse public artifact catalog',
      'View basic artifact metadata',
      'Access featured discoveries',
      'Read investigation summaries',
      'View timeline map (limited)',
      'Submit sighting reports',
    ],
    locked: [
      'Curator notes & classified data',
      'Full investigation files',
      'Paradox resolution reports',
      'Restricted artifact access',
    ],
    cta: 'Register as Observer',
    ctaTo: '/signup',
  },
  {
    id: 'researcher',
    name: 'Researcher',
    subtitle: 'Registered Member',
    icon: Search,
    color: 'text-cyan-300',
    borderColor: 'border-cyan-400/40',
    bgColor: 'bg-cyan-400/5',
    glowColor: 'rgba(0,212,255,0.1)',
    price: 'Verified',
    featured: true,
    features: [
      'All Observer privileges',
      'Full artifact descriptions',
      'Curator notes access',
      'Complete investigation files',
      'Paradox report summaries',
      'Full timeline map access',
      'Save discoveries to profile',
      'Participate in investigations',
      'Access Researcher-level artifacts',
    ],
    locked: [
      'Chronologist-classified artifacts',
      'Director-level paradox files',
    ],
    cta: 'Apply for Researcher',
    ctaTo: '/signup',
  },
  {
    id: 'chronologist',
    name: 'Chronologist',
    subtitle: 'Verified Expert',
    icon: Clock,
    color: 'text-violet-300',
    borderColor: 'border-violet-500/40',
    bgColor: 'bg-violet-500/5',
    glowColor: 'rgba(124,58,237,0.1)',
    price: 'By Invitation',
    features: [
      'All Researcher privileges',
      'Full classified artifact access',
      'Director-level paradox files',
      'Lead collaborative investigations',
      'Access Omega-Null dimension data',
      'Temporal risk assessment tools',
      'Priority field agent contact',
      'Archive vault access (virtual)',
      'Contribute to artifact catalog',
    ],
    locked: [],
    cta: 'Request Invitation',
    ctaTo: '/signup',
  },
]

export default function MembershipPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <div className="relative py-16 px-6 overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(0,212,255,0.06), transparent 60%)' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Shield className="w-4 h-4 text-cyan-400" />
            <span className="font-mono-archive text-xs text-cyan-400 tracking-widest">CLEARANCE SYSTEM</span>
          </div>
          <h1 className="font-cinzel text-4xl md:text-5xl font-bold text-slate-100 mb-4">Membership & Clearance</h1>
          <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
            The Archive operates on a tiered clearance system. Each level grants deeper access to our temporal database, classified investigations, and restricted artifact collections.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-20">
        {/* Tier cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {TIERS.map((tier) => {
            const Icon = tier.icon
            return (
              <div
                key={tier.id}
                className={`relative glass border rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 ${tier.borderColor} ${tier.featured ? 'ring-1 ring-cyan-400/30' : ''}`}
                style={{ background: `radial-gradient(ellipse at 50% 0%, ${tier.glowColor}, transparent 60%)` }}
              >
                {tier.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-cyan-400 text-slate-900 text-xs font-bold font-mono-archive tracking-wide">
                    MOST POPULAR
                  </div>
                )}

                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${tier.bgColor} border ${tier.borderColor}`}>
                    <Icon className={`w-5 h-5 ${tier.color}`} />
                  </div>
                  <div>
                    <div className={`font-cinzel text-lg font-bold ${tier.color}`}>{tier.name}</div>
                    <div className="text-xs text-slate-500">{tier.subtitle}</div>
                  </div>
                </div>

                <div className="mb-6">
                  <span className={`font-cinzel text-2xl font-bold ${tier.color}`}>{tier.price}</span>
                </div>

                <div className="space-y-2 mb-6">
                  {tier.features.map(f => (
                    <div key={f} className="flex items-start gap-2">
                      <Check className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${tier.color}`} />
                      <span className="text-sm text-slate-400">{f}</span>
                    </div>
                  ))}
                  {tier.locked.map(f => (
                    <div key={f} className="flex items-start gap-2 opacity-40">
                      <Lock className="w-3.5 h-3.5 mt-0.5 shrink-0 text-slate-600" />
                      <span className="text-sm text-slate-600">{f}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to={tier.ctaTo}
                  className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl font-medium text-sm transition-all duration-300 hover:scale-105 ${
                    tier.featured
                      ? 'bg-cyan-500 text-slate-900 hover:bg-cyan-400'
                      : `border ${tier.borderColor} ${tier.color} hover:bg-white/5`
                  }`}
                >
                  {tier.cta}
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            )
          })}
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto">
          <h2 className="font-cinzel text-2xl font-bold text-slate-100 text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                q: 'How do I advance from Observer to Researcher?',
                a: 'After registering as an Observer, you can apply for Researcher status by submitting at least three verified sighting reports and completing the Archive\'s temporal orientation module. Applications are reviewed within 7-14 days.',
              },
              {
                q: 'What is required for Chronologist status?',
                a: 'Chronologist status is by invitation only. Candidates are identified by the Archive\'s senior staff based on demonstrated expertise, significant contributions to investigations, and a clean temporal record.',
              },
              {
                q: 'Is my personal information kept confidential?',
                a: 'All member data is stored in encrypted temporal vaults. The Archive does not share member information with any external organization, government, or timeline.',
              },
              {
                q: 'What happens if I encounter a temporal anomaly?',
                a: 'Use the Submit Sighting form immediately. Do not attempt to interact with the anomaly. Do not photograph it with digital devices. Contact your nearest Archive field office if the anomaly persists.',
              },
            ].map(({ q, a }) => (
              <div key={q} className="glass border border-cyan-400/10 rounded-xl p-6">
                <h3 className="font-cinzel text-sm font-semibold text-slate-200 mb-2">{q}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
