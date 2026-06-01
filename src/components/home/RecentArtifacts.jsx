import { Link } from 'react-router-dom'
import { Clock, ArrowRight } from 'lucide-react'
import GlassPanel from '@/components/shared/GlassPanel'
import TimelineRisk from '@/components/shared/TimelineRisk'
import { artifacts } from '@/data/artifacts'

const RecentArtifacts = () => {
  const recent = artifacts.slice(0, 6)

  return (
    <section className="py-24 px-4 sm:px-6 bg-background relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,240,255,0.03)_0%,transparent_50%)]" />

      <div className="max-w-7xl mx-auto relative">
        <div className="flex items-center justify-between mb-12">
          <div>
            <p className="section-label mb-2 flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Recently Recovered
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Latest Acquisitions</h2>
          </div>
          <Link
            to="/archive"
            className="hidden sm:flex items-center gap-2 text-sm text-cyan/70 hover:text-cyan transition-colors"
          >
            Full archive <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recent.map((artifact, i) => (
            <Link
              key={artifact.id}
              to={`/archive/${artifact.id}`}
              className="block opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${i * 100}ms`, animationFillMode: 'forwards' }}
            >
              <GlassPanel hover className="p-5 h-full flex flex-col">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-cyan/60">{artifact.id}</span>
                  <TimelineRisk level={artifact.riskLevel} compact />
                </div>

                <h3 className="text-base font-bold text-white mb-2 leading-tight">{artifact.name}</h3>
                <p className="text-xs text-white/40 mb-3 line-clamp-2">{artifact.description}</p>

                <div className="mt-auto pt-3 border-t border-white/5 grid grid-cols-2 gap-2">
                  <div>
                    <p className="text-[10px] text-white/30 uppercase">Era</p>
                    <p className="text-xs text-white/60 truncate">{artifact.era}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-white/30 uppercase">Dimension</p>
                    <p className="text-xs text-white/60 truncate">{artifact.dimension}</p>
                  </div>
                </div>
              </GlassPanel>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default RecentArtifacts
