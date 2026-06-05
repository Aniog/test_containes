import { useRef, useEffect, useState, useCallback } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const scenes = [
  {
    id: 'serengeti-dawn',
    title: 'Serengeti Dawn',
    subtitle: 'Where the sun ignites the plains',
    desc: 'The first golden rays stretch across an endless sea of grass, painting the savanna in hues of amber and ochre.',
    imgId: 'home-scene-dawn-a1b2c3',
    titleId: 'scene-serengeti-dawn-title',
    descId: 'scene-serengeti-dawn-desc',
    ratio: '16x9',
    width: 1600,
  },
  {
    id: 'wildebeest-crossing',
    title: 'The Wildebeest Crossing',
    subtitle: 'A river of life across the Mara',
    desc: 'Thousands of hooves churn the dust into clouds that rise like smoke across the sun-bleached horizon.',
    imgId: 'home-scene-crossing-d4e5f6',
    titleId: 'scene-wildebeest-crossing-title',
    descId: 'scene-wildebeest-crossing-desc',
    ratio: '16x9',
    width: 1600,
  },
  {
    id: 'acacia-silhouette',
    title: 'Acacia Silhouette',
    subtitle: 'Sentinel trees against the twilight',
    desc: 'Lone acacias stand guard as the sky deepens from orange to violet, their branches etched against the dying light.',
    imgId: 'home-scene-acacia-g7h8i9',
    titleId: 'scene-acacia-silhouette-title',
    descId: 'scene-acacia-silhouette-desc',
    ratio: '16x9',
    width: 1600,
  },
  {
    id: 'migration-dust',
    title: 'Dust & Hooves',
    subtitle: 'The heartbeat of the migration',
    desc: 'A rolling tide of zebra and wildebeest moves as one, a living current flowing across the ancient plains.',
    imgId: 'home-scene-dust-j0k1l2',
    titleId: 'scene-migration-dust-title',
    descId: 'scene-migration-dust-desc',
    ratio: '16x9',
    width: 1600,
  },
]

export default function Home() {
  const containerRef = useRef(null)
  const scrollRef = useRef(null)
  const [activeScene, setActiveScene] = useState(0)
  const [isAutoScrolling, setIsAutoScrolling] = useState(true)
  const autoTimerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const scrollToScene = useCallback((index) => {
    const el = scrollRef.current
    if (!el) return
    const child = el.children[index]
    if (!child) return
    el.scrollTo({ left: child.offsetLeft - el.offsetLeft, behavior: 'smooth' })
    setActiveScene(index)
  }, [])

  useEffect(() => {
    if (!isAutoScrolling) return
    autoTimerRef.current = setInterval(() => {
      setActiveScene((prev) => {
        const next = (prev + 1) % scenes.length
        scrollToScene(next)
        return next
      })
    }, 6000)
    return () => clearInterval(autoTimerRef.current)
  }, [isAutoScrolling, scrollToScene])

  const handleScroll = () => {
    const el = scrollRef.current
    if (!el) return
    const scrollLeft = el.scrollLeft
    const children = el.children
    let closest = 0
    let minDist = Infinity
    for (let i = 0; i < children.length; i++) {
      const dist = Math.abs(children[i].offsetLeft - el.offsetLeft - scrollLeft)
      if (dist < minDist) {
        minDist = dist
        closest = i
      }
    }
    setActiveScene(closest)
  }

  const handleManualNav = (index) => {
    setIsAutoScrolling(false)
    scrollToScene(index)
    clearInterval(autoTimerRef.current)
    autoTimerRef.current = setTimeout(() => setIsAutoScrolling(true), 10000)
  }

  const heroScene = scenes[activeScene]

  return (
    <div ref={containerRef}>
      {/* Hero Parallax Section */}
      <section className="relative h-screen overflow-hidden">
        <img
          data-strk-img-id={heroScene.imgId}
          data-strk-img={`[${heroScene.descId}] [${heroScene.titleId}]`}
          data-strk-img-ratio={heroScene.ratio}
          data-strk-img-width={heroScene.width}
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={heroScene.title}
          className="absolute inset-0 w-full h-full object-cover animate-slow-drift"
        />

        {/* Heat haze overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-sunset-glow/10 via-transparent to-dark-earth/40 animate-heat-haze pointer-events-none" />

        {/* Text overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
          <div className="transition-all duration-1000 ease-in-out">
            <p className="font-serif text-sm md:text-base tracking-[0.3em] uppercase text-warm-sand/80 mb-4 animate-pulse">
              {heroScene.subtitle}
            </p>
            <h1
              id={heroScene.titleId}
              className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-warm-sand mb-6 leading-tight max-w-4xl drop-shadow-lg"
            >
              {heroScene.title}
            </h1>
            <p
              id={heroScene.descId}
              className="text-warm-sand/70 text-sm md:text-base max-w-xl mx-auto leading-relaxed"
            >
              {heroScene.desc}
            </p>
          </div>
        </div>

        {/* Scene dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {scenes.map((scene, i) => (
            <button
              key={scene.id}
              onClick={() => handleManualNav(i)}
              className={`w-3 h-3 rounded-full transition-all duration-500 ${
                i === activeScene
                  ? 'bg-burnt-orange scale-125 shadow-lg shadow-burnt-orange/40'
                  : 'bg-warm-sand/50 hover:bg-warm-sand/80'
              }`}
              aria-label={`View ${scene.title}`}
            />
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-10">
          <span className="block w-6 h-10 border-2 border-warm-sand/40 rounded-full mx-auto relative">
            <span className="block w-1.5 h-3 bg-warm-sand/60 rounded-full absolute top-2 left-1/2 -translate-x-1/2 animate-bounce" />
          </span>
        </div>
      </section>

      {/* Horizontal Scroll Section */}
      <section className="py-24 md:py-32 bg-dark-earth overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-warm-sand text-center mb-4">
            The Great Migration
          </h2>
          <p className="text-dust text-center max-w-2xl mx-auto leading-relaxed">
            Scroll through the panoramic vistas of the savanna. Each frame captures a moment in the eternal cycle of life across the Serengeti.
          </p>
        </div>

        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-0 pb-4"
          style={{ scrollbarWidth: 'none' }}
        >
          {scenes.map((scene, i) => (
            <div
              key={scene.id}
              className="flex-none w-[85vw] md:w-[60vw] lg:w-[45vw] snap-center px-2 first:pl-[7.5vw] last:pr-[7.5vw]"
            >
              <div className="relative aspect-[16/9] overflow-hidden group cursor-pointer">
                <img
                  data-strk-img-id={`home-pano-${scene.id}-${i}`}
                  data-strk-img={`[home-pano-${scene.id}-desc] [home-pano-${scene.id}-title]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width={1200}
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={scene.title}
                  className="w-full h-full object-cover transition-all duration-[2000ms] ease-in-out group-hover:scale-105"
                />
                {/* Dissolve transition overlay */}
                <div className="absolute inset-0 bg-dark-earth transition-opacity duration-[1500ms] ease-in-out opacity-0 group-hover:opacity-20" />
              </div>
              <div className="mt-4 text-center">
                <h3
                  id={`home-pano-${scene.id}-title`}
                  className="font-serif text-xl md:text-2xl font-semibold text-warm-sand"
                >
                  {scene.title}
                </h3>
                <p
                  id={`home-pano-${scene.id}-desc`}
                  className="text-dust/70 text-sm mt-1"
                >
                  {scene.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Intro text section */}
      <section className="py-24 md:py-32 bg-parchment">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-dark-earth mb-8 leading-snug">
            The pulse of the Serengeti beats in every hoof-fall, every blade of grass bent by the wind, and every sunset that sets the plains ablaze.
          </h2>
          <p className="text-clay leading-relaxed md:text-lg">
            Across 30,000 square kilometers of Tanzania's northern circuit, over two million animals move in an ancient rhythm — the largest terrestrial migration on Earth. This is their story, told through the light and dust of the savanna.
          </p>
        </div>
      </section>
    </div>
  )
}