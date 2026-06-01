import { useState, useEffect } from 'react'
import { fetchStats, EMOTION_COLORS, ERA_ORDER } from '../../api/memories'

const CONTINENT_ICONS = {
  'Africa': '🌍',
  'Asia': '🌏',
  'Europe': '🌍',
  'North America': '🌎',
  'South America': '🌎',
  'Oceania': '🌏',
  'Antarctica': '🌐',
}

export default function StatsSection() {
  const [stats, setStats] = useState(null)

  useEffect(() => {
    fetchStats().then(setStats).catch(() => {})
  }, [])

  if (!stats) return null

  const emotionEntries = Object.entries(stats.byEmotion).sort((a, b) => b[1] - a[1])
  const maxEmotion = Math.max(...emotionEntries.map(([, v]) => v), 1)

  const eraEntries = ERA_ORDER.filter(e => stats.byEra[e]).map(e => [e, stats.byEra[e]])
  const maxEra = Math.max(...eraEntries.map(([, v]) => v), 1)

  const continentEntries = Object.entries(stats.byContinent).sort((a, b) => b[1] - a[1])

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-cosmos via-void to-cosmos">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full border border-comet/30 bg-comet/10">
            <span className="w-2 h-2 rounded-full bg-comet animate-pulse" />
            <span className="text-xs font-mono text-comet tracking-widest uppercase">Archive Statistics</span>
          </div>
          <h2 className="font-cinzel text-3xl md:text-4xl text-starlight mb-4">
            The Shape of Human Memory
          </h2>
          <p className="text-moonlight max-w-xl mx-auto">
            Across eras, continents, and emotions — this is what humanity remembers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Emotions */}
          <div className="rounded-xl border border-stardust bg-void p-6">
            <h3 className="font-cinzel text-lg text-starlight mb-6">By Emotion</h3>
            <div className="space-y-3">
              {emotionEntries.map(([emotion, count]) => {
                const ec = EMOTION_COLORS[emotion]
                const pct = (count / maxEmotion) * 100
                return (
                  <div key={emotion}>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-moonlight font-mono">{emotion}</span>
                      <span className="text-twilight font-mono">{count}</span>
                    </div>
                    <div className="h-1.5 bg-stardust rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-700"
                        style={{ width: `${pct}%`, backgroundColor: ec?.color || '#a78bfa' }}
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Eras */}
          <div className="rounded-xl border border-stardust bg-void p-6">
            <h3 className="font-cinzel text-lg text-starlight mb-6">By Era</h3>
            <div className="space-y-3">
              {eraEntries.map(([era, count]) => {
                const pct = (count / maxEra) * 100
                return (
                  <div key={era}>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-moonlight font-mono">{era}</span>
                      <span className="text-twilight font-mono">{count}</span>
                    </div>
                    <div className="h-1.5 bg-stardust rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-aurora to-nova transition-all duration-700"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Continents */}
          <div className="rounded-xl border border-stardust bg-void p-6">
            <h3 className="font-cinzel text-lg text-starlight mb-6">By Continent</h3>
            <div className="space-y-3">
              {continentEntries.map(([continent, count]) => (
                <div key={continent} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-base">{CONTINENT_ICONS[continent] || '🌐'}</span>
                    <span className="text-moonlight text-sm font-mono">{continent}</span>
                  </div>
                  <span className="text-xs text-twilight font-mono bg-stardust px-2 py-0.5 rounded-full">
                    {count}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
