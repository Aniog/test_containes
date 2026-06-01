import { Link } from 'react-router-dom'
import { Sparkles, ArrowRight } from 'lucide-react'
import GlassPanel from '@/components/shared/GlassPanel'
import { featuredDiscoveries } from '@/data/artifacts'

const categoryColors = {
  Breakthrough: 'text-cyan bg-cyan/10 border-cyan/30',
  'First Contact': 'text-amber bg-amber/10 border-amber/30',
  Activation: 'text-success bg-success/10 border-success/30',
}

const FeaturedDiscoveries = () => {
  return (
    <section className="py-24 px-4 sm:px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <p className="section-label mb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Featured Discoveries
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Recent Breakthroughs</h2>
          </div>
          <Link
            to="/archive"
            className="hidden sm:flex items-center gap-2 text-sm text-cyan/70 hover:text-cyan transition-colors"
          >
            View all <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredDiscoveries.map((discovery, i) => (
            <GlassPanel
              key={discovery.id}
              hover
              className="p-6 flex flex-col opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${i * 150}ms`, animationFillMode: 'forwards' }}
            >
              <div className="flex items-center justify-between mb-4">
                <span className={`text-xs font-semibold px-2 py-1 rounded border ${categoryColors[discovery.category] || 'text-white/60 bg-white/5 border-white/10'}`}>
                  {discovery.category}
                </span>
                <span className="text-xs text-white/30 font-mono">{discovery.id}</span>
              </div>

              <h3 className="text-lg font-bold text-white mb-3 leading-tight">{discovery.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed flex-1">{discovery.summary}</p>

              <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs text-white/30">{discovery.date}</span>
                <span className="text-xs text-amber/70 font-mono">
                  {discovery.clearance} Access
                </span>
              </div>
            </GlassPanel>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedDiscoveries
