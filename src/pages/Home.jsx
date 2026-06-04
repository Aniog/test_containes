import { useState, useEffect, useRef, useCallback } from 'react'
import { ChevronLeft, ChevronRight, ArrowDown } from 'lucide-react'

const panoramas = [
  {
    id: 'dawn-savanna',
    title: 'Dawn on the Savanna',
    subtitle: 'The golden hour stretches across an endless sea of grass, waking the world in amber light.',
    titleId: 'pano-dawn-savanna-title',
    descId: 'pano-dawn-savanna-desc',
  },
  {
    id: 'migration-herd',
    title: 'The Great Herd',
    subtitle: 'Millions of hooves drum the earth as wildebeest trace ancient paths across the plains.',
    titleId: 'pano-migration-herd-title',
    descId: 'pano-migration-herd-desc',
  },
  {
    id: 'acacia-sunset',
    title: 'Acacia Silhouettes',
    subtitle: 'Iconic acacia trees stand sentinel against a sky ablaze with ochre and crimson.',
    titleId: 'pano-acacia-sunset-title',
    descId: 'pano-acacia-sunset-desc',
  },
  {
    id: 'river-crossing',
    title: 'The River Crossing',
    subtitle: 'A moment of tension and triumph as the migration surges across the Mara River.',
    titleId: 'pano-river-crossing-title',
    descId: 'pano-river-crossing-desc',
  },
  {
    id: 'dust-twilight',
    title: 'Dust at Twilight',
    subtitle: 'As the sun sinks beneath the horizon, the dust of the day hangs like a golden veil.',
    titleId: 'pano-dust-twilight-title',
    descId: 'pano-dust-twilight-desc',
  },
]

export default function Home() {
  const [current, setCurrent] = useState(0)
  const [transitioning, setTransitioning] = useState(false)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const scrollRef = useRef(null)
  const slideRefs = useRef([])

  const goTo = useCallback(
    (index) => {
      if (transitioning || index === current) return
      setTransitioning(true)
      setCurrent(index)
      setTimeout(() => setTransitioning(false), 1200)
    },
    [current, transitioning]
  )

  const next = useCallback(() => {
    goTo((current + 1) % panoramas.length)
  }, [current, goTo])

  const prev = useCallback(() => {
    goTo((current - 1 + panoramas.length) % panoramas.length)
  }, [current, goTo])

  useEffect(() => {
    if (!isAutoPlaying) return
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [isAutoPlaying, next])

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowRight') { e.preventDefault(); setIsAutoPlaying(false); next() }
      if (e.key === 'ArrowLeft') { e.preventDefault(); setIsAutoPlaying(false); prev() }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [next, prev])

  return (
    <div className="relative w-full h-[calc(100vh-5rem)] overflow-hidden bg-savanna-shadow">
      {/* Panoramic slides */}
      {panoramas.map((pano, i) => (
        <div
          key={pano.id}
          className={`absolute inset-0 transition-all duration-[1500ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
            i === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Parallax background image */}
          <div className="absolute inset-0 animate-parallax-slow">
            <div
              className="w-full h-full"
              data-strk-bg-id={`hero-bg-${pano.id}`}
              data-strk-bg={`[${pano.descId}] [${pano.titleId}] Serengeti savanna panorama`}
              data-strk-bg-ratio="16x9"
              data-strk-bg-width="1920"
              style={{
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%',
                height: '100%',
              }}
            />
          </div>

          {/* Heat haze overlay */}
          <div className="absolute inset-0 animate-haze gradient-haze pointer-events-none" />

          {/* Gradient overlay for text legibility */}
          <div className="absolute inset-0 gradient-earth" />

          {/* Content */}
          <div
            className={`absolute bottom-0 left-0 right-0 p-12 md:p-20 transition-all duration-[1500ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
              i === current && !transitioning
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="max-w-3xl">
              <p className="font-serif text-earth-400 text-xs tracking-[0.3em] uppercase mb-4">
                {String(i + 1).padStart(2, '0')} / {String(panoramas.length).padStart(2, '0')}
              </p>
              <h1
                id={pano.titleId}
                className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-savanna-cream mb-4 text-shadow-earth leading-tight"
              >
                {pano.title}
              </h1>
              <p
                id={pano.descId}
                className="font-serif text-base md:text-lg text-savanna-sand/90 max-w-xl leading-relaxed italic"
              >
                {pano.subtitle}
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation arrows */}
      <button
        onClick={() => { setIsAutoPlaying(false); prev() }}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-savanna-cream/10 backdrop-blur-sm border border-savanna-cream/20 flex items-center justify-center text-savanna-cream hover:bg-savanna-cream/20 transition-all"
        aria-label="Previous panorama"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={() => { setIsAutoPlaying(false); next() }}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-savanna-cream/10 backdrop-blur-sm border border-savanna-cream/20 flex items-center justify-center text-savanna-cream hover:bg-savanna-cream/20 transition-all"
        aria-label="Next panorama"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {panoramas.map((_, i) => (
          <button
            key={i}
            onClick={() => { setIsAutoPlaying(false); goTo(i) }}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ${
              i === current
                ? 'bg-earth-500 scale-125'
                : 'bg-savanna-cream/40 hover:bg-savanna-cream/60'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 right-12 z-30 hidden md:flex items-center gap-2 text-savanna-cream/70">
        <ArrowDown className="w-5 h-5 animate-bounce" />
        <span className="font-serif text-xs tracking-widest uppercase">Scroll</span>
      </div>
    </div>
  )
}