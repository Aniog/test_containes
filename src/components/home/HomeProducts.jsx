import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'

const HomeProducts = () => {
  const containerRef = useRef(null)
  const featured = products.slice(0, 3)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="bg-bone py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="block text-xs tracking-[0.3em] uppercase text-brass mb-5">
              The Collection
            </span>
            <h2 className="font-serif font-light text-4xl md:text-5xl text-ink leading-[1.15]">
              Machines built around how you work.
            </h2>
          </div>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm tracking-[0.2em] uppercase text-ink hover:text-brass transition self-start md:self-end"
          >
            View all machines
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {featured.map((p) => (
            <Link
              key={p.id}
              to="/products"
              className="group bg-paper border border-mist hover:border-ink/40 transition"
            >
              <div className="overflow-hidden aspect-[4/3] bg-mist">
                <img
                  alt={p.name}
                  data-strk-img-id={p.imgId}
                  data-strk-img={`[${p.descId}] [${p.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-7">
                <span className="text-[10px] tracking-[0.3em] uppercase text-brass">
                  {p.category}
                </span>
                <h3
                  id={p.titleId}
                  className="font-serif text-2xl text-ink mt-3"
                >
                  {p.name}
                </h3>
                <p
                  id={p.descId}
                  className="text-steel text-sm mt-3 leading-relaxed"
                >
                  {p.tagline}
                </p>
                <div className="mt-6 flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-ink group-hover:text-brass transition">
                  Discover
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomeProducts
