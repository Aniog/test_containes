import HeroSection from '../components/home/HeroSection.jsx'
import FeaturedSection from '../components/home/FeaturedSection.jsx'
import InvestigationsSection from '../components/home/InvestigationsSection.jsx'
import ParadoxSection from '../components/home/ParadoxSection.jsx'
import { Link } from 'react-router-dom'
import { Map, Shield, ChevronRight, Clock } from 'lucide-react'

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <FeaturedSection />

      {/* Timeline Map CTA */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden glass border border-violet-500/20 p-8 md:p-12">
            <div className="absolute inset-0 opacity-20" style={{
              background: 'radial-gradient(ellipse at 30% 50%, rgba(124,58,237,0.4), transparent 60%), radial-gradient(ellipse at 70% 50%, rgba(0,212,255,0.2), transparent 60%)'
            }} />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Map className="w-4 h-4 text-violet-400" />
                  <span className="font-mono-archive text-xs text-violet-400 tracking-widest">Interactive Feature</span>
                </div>
                <h2 className="font-cinzel text-3xl font-bold text-slate-100 mb-3">
                  The Branching Timeline Map
                </h2>
                <p className="text-slate-400 max-w-lg leading-relaxed">
                  Navigate the full spectrum of known timelines and alternate realities. Explore divergence points, collapsed branches, and the fragile threads connecting our present to countless possible futures.
                </p>
              </div>
              <Link
                to="/timeline"
                className="shrink-0 flex items-center gap-2 px-8 py-4 rounded-xl font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{ background: 'linear-gradient(135deg, #7c3aed, #4f46e5)' }}
              >
                <Map className="w-5 h-5" />
                Open Timeline Map
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <InvestigationsSection />
      <ParadoxSection />

      {/* Membership CTA */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <Shield className="w-12 h-12 text-cyan-400 mx-auto mb-6 opacity-60" />
          <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-slate-100 mb-4">
            Apply for Membership
          </h2>
          <p className="text-slate-400 leading-relaxed mb-8">
            Join the Archive as an Observer, advance to Researcher, and earn the rank of Chronologist. Each clearance level unlocks deeper access to classified artifacts, restricted investigations, and the full scope of our temporal database.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/membership"
              className="flex items-center gap-2 px-8 py-3.5 rounded-lg font-medium text-slate-900 transition-all hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #00d4ff, #0ea5e9)' }}
            >
              <Shield className="w-4 h-4" />
              View Clearance Levels
            </Link>
            <Link
              to="/signup"
              className="flex items-center gap-2 px-8 py-3.5 rounded-lg font-medium text-cyan-300 glass border border-cyan-400/30 hover:border-cyan-400/60 transition-all"
            >
              <Clock className="w-4 h-4" />
              Register Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
