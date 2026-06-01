import { useState } from 'react'
import { Map, ChevronRight, Zap, AlertTriangle } from 'lucide-react'
import GlassPanel from '@/components/shared/GlassPanel'
import ParticleField from '@/components/shared/ParticleField'
import { timelineData } from '@/data/artifacts'

const Timeline = () => {
  const [selectedEvent, setSelectedEvent] = useState(null)
  const [selectedDimension, setSelectedDimension] = useState('All')

  const dimensions = ['All', 'Prime Timeline', 'Dimension Alpha-7', 'Dimension Beta-12', 'Multiple', 'Quantum Nexus', 'Unknown']

  const filteredData = selectedDimension === 'All'
    ? timelineData
    : timelineData.filter((d) => d.dimension === selectedDimension || d.dimension === 'Multiple')

  return (
    <div className="min-h-screen pt-20 pb-16 px-4 sm:px-6 relative">
      <ParticleField count={30} className="opacity-30" />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="mb-8">
          <p className="section-label mb-2 flex items-center gap-2">
            <Map className="w-4 h-4" />
            Interactive Visualization
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">Timeline Explorer</h1>
          <p className="text-white/40 text-sm">Navigate through centuries and alternate realities</p>
        </div>

        {/* Dimension filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {dimensions.map((dim) => (
            <button
              key={dim}
              onClick={() => setSelectedDimension(dim)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                selectedDimension === dim
                  ? 'bg-cyan/10 border border-cyan/30 text-cyan'
                  : 'bg-white/5 border border-white/10 text-white/50 hover:text-white hover:bg-white/10'
              }`}
            >
              {dim}
            </button>
          ))}
        </div>

        {/* Timeline visualization */}
        <div className="relative">
          {/* Central line */}
          <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan/50 via-cyan/20 to-transparent" />

          <div className="space-y-8">
            {filteredData.map((event, i) => {
              const isLeft = i % 2 === 0
              const isSelected = selectedEvent === i
              const isFuture = event.year > 2026
              const isClassified = event.events.some((e) => e.includes('['))

              return (
                <div
                  key={`${event.year}-${i}`}
                  className={`relative flex items-start gap-4 sm:gap-8 ${
                    isLeft ? 'sm:flex-row' : 'sm:flex-row-reverse'
                  }`}
                >
                  {/* Timeline node */}
                  <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 z-10">
                    <button
                      onClick={() => setSelectedEvent(isSelected ? null : i)}
                      className={`w-4 h-4 rounded-full border-2 transition-all ${
                        isSelected
                          ? 'bg-cyan border-cyan shadow-[0_0_20px_rgba(0,240,255,0.5)] scale-150'
                          : isFuture
                          ? 'bg-background border-amber/50 hover:border-amber hover:shadow-[0_0_15px_rgba(240,165,0,0.3)]'
                          : 'bg-background border-cyan/50 hover:border-cyan hover:shadow-[0_0_15px_rgba(0,240,255,0.3)]'
                      }`}
                    />
                  </div>

                  {/* Content card */}
                  <div className={`ml-14 sm:ml-0 sm:w-[calc(50%-2rem)] ${isLeft ? 'sm:pr-8' : 'sm:pl-8'}`}>
                    <GlassPanel
                      hover
                      className={`p-5 cursor-pointer transition-all ${
                        isSelected ? 'border-cyan/40 shadow-[0_0_30px_rgba(0,240,255,0.15)]' : ''
                      } ${isFuture ? 'opacity-70' : ''}`}
                      onClick={() => setSelectedEvent(isSelected ? null : i)}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className={`text-lg font-bold font-mono ${isFuture ? 'text-amber' : 'text-cyan'}`}>
                          {event.year < 0 ? `${Math.abs(event.year)} BCE` : `${event.year} CE`}
                        </span>
                        <span className="text-[10px] text-white/30 uppercase">{event.era}</span>
                      </div>

                      <div className="flex items-center gap-2 mb-3">
                        <span className={`text-xs px-2 py-0.5 rounded border ${
                          event.dimension === 'Multiple' ? 'text-amber border-amber/30 bg-amber/10' :
                          event.dimension === 'Prime Timeline' ? 'text-cyan border-cyan/30 bg-cyan/10' :
                          'text-white/50 border-white/10 bg-white/5'
                        }`}>
                          {event.dimension}
                        </span>
                        {isClassified && (
                          <span className="text-xs text-danger/70 flex items-center gap-1">
                            <AlertTriangle className="w-3 h-3" /> Classified
                          </span>
                        )}
                      </div>

                      <ul className="space-y-1.5">
                        {event.events.map((evt, j) => (
                          <li key={j} className="flex items-start gap-2">
                            <ChevronRight className="w-3 h-3 text-cyan/40 mt-0.5 shrink-0" />
                            <span className={`text-sm ${
                              evt.includes('[') ? 'text-danger/60 font-mono' : 'text-white/60'
                            }`}>
                              {evt}
                            </span>
                          </li>
                        ))}
                      </ul>

                      {isSelected && (
                        <div className="mt-4 pt-4 border-t border-white/5 animate-fade-in">
                          <div className="flex items-center gap-2 text-xs text-cyan/60">
                            <Zap className="w-3 h-3" />
                            <span>Temporal convergence point detected</span>
                          </div>
                          <p className="text-xs text-white/30 mt-2">
                            Click to explore connected artifacts and dimensional branches from this era.
                          </p>
                        </div>
                      )}
                    </GlassPanel>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Legend */}
        <GlassPanel className="p-6 mt-12">
          <h3 className="text-sm font-semibold text-white/80 mb-4">Timeline Legend</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full border-2 border-cyan/50" />
              <span className="text-xs text-white/50">Historical Event</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full border-2 border-amber/50" />
              <span className="text-xs text-white/50">Future Event</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-danger/60 font-mono">[CLASSIFIED]</span>
              <span className="text-xs text-white/50">Restricted</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-cyan shadow-[0_0_10px_rgba(0,240,255,0.5)]" />
              <span className="text-xs text-white/50">Selected Node</span>
            </div>
          </div>
        </GlassPanel>
      </div>
    </div>
  )
}

export default Timeline
