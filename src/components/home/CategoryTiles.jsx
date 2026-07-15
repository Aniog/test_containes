import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const categoryTiles = [
  { id: 'cat-earrings', name: 'Earrings', query: 'gold earrings jewelry editorial', link: '/shop?category=earrings' },
  { id: 'cat-necklaces', name: 'Necklaces', query: 'gold necklace jewelry editorial woman', link: '/shop?category=necklaces' },
  { id: 'cat-huggies', name: 'Huggies', query: 'gold huggie earrings closeup', link: '/shop?category=huggies' },
]

export default function CategoryTiles() {
  const containerRef = useRef(null)
  const [titleRef, titleVisible] = useScrollAnimation(0.2)
  const [gridRef, gridVisible] = useScrollAnimation(0.1)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      // Image loading would happen here
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className={`animate-fade-up ${titleVisible ? 'visible' : ''}`}>
          <h2 className="section-title">Shop by Category</h2>
          <p className="section-subtitle">
            Find your signature style across our curated collections.
          </p>
        </div>

        <div ref={gridRef} className={`grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 ${gridVisible ? 'visible' : ''}`}>
          {categoryTiles.map((cat, index) => (
            <div key={cat.id} className={`animate-scale-in delay-${(index + 1) * 150} ${gridVisible ? 'visible' : ''}`}>
              <Link
                to={cat.link}
                className="group relative aspect-[4/5] overflow-hidden rounded-sm block"
              >
                <div
                  className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                  data-strk-bg-id={`cat-bg-${cat.id}`}
                  data-strk-bg={cat.query}
                  data-strk-bg-ratio="4x5"
                  data-strk-bg-width="800"
                  style={{ backgroundColor: '#D5CFC5' }}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="product-name text-white text-xl md:text-2xl tracking-widest mb-3">
                      {cat.name}
                    </h3>
                    <span className="text-white/80 text-xs uppercase tracking-widest border-b border-white/40 pb-0.5 group-hover:border-white transition-colors">
                      Explore
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
