import { Link } from 'react-router-dom'
import { categoryTiles } from '@/data/products'
import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowUpRight } from 'lucide-react'

export default function Collections() {
  const containerRef = useRef(null)
  useEffect(() => {
    if (!containerRef.current) return
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef} className="bg-ivory">
      <section className="pt-32 md:pt-40 pb-12 border-b border-hairline">
        <div className="container-page">
          <span className="eyebrow">Curated edits</span>
          <h1 className="mt-4 font-serif text-5xl md:text-6xl leading-[1.05]">
            Collections
          </h1>
          <p className="mt-4 text-sm md:text-base text-taupe max-w-xl">
            Small edits of pieces designed to live together — and forever,
            apart.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-page grid grid-cols-1 md:grid-cols-2 gap-5">
          {categoryTiles.map((tile, i) => (
            <Link
              key={tile.id}
              to={`/shop?category=${tile.id}`}
              className={`group relative block overflow-hidden bg-noir ${
                i === 0 ? 'md:aspect-[16/10]' : 'md:aspect-[16/10]'
              }`}
            >
              <img
                alt={tile.label}
                data-strk-img-id={`coll-${tile.id}`}
                data-strk-img={tile.imgQuery}
                data-strk-img-ratio="16x10"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-noir/70 to-transparent" />
              <div className="absolute inset-0 flex flex-col items-start justify-end p-8 md:p-12 text-ivory">
                <h2 className="font-serif text-4xl md:text-5xl">{tile.label}</h2>
                <span className="mt-3 inline-flex items-center gap-2 text-[11px] uppercase tracking-widest2 font-medium">
                  Explore the edit
                  <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.4} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
