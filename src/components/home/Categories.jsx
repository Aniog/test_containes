import { Link } from 'react-router-dom'
import { useRef, useEffect } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const categories = [
  { id: 'earrings', title: 'Earrings', query: 'gold earrings on dark background editorial luxury' },
  { id: 'necklaces', title: 'Necklaces', query: 'gold necklaces layered on neutral background editorial' },
  { id: 'huggies', title: 'Huggies', query: 'gold huggie hoop earrings close up warm light' },
]

export default function Categories() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="bg-velmora-cream py-16 md:py-24">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8">
        <div className="mb-10 text-center md:mb-14">
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.22em] text-velmora-gold">
            Shop by Category
          </p>
          <h2 className="font-serif text-3xl font-medium text-velmora-espresso md:text-4xl">
            Find Your Shine
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/5] overflow-hidden rounded-md bg-velmora-espresso"
            >
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.title}
                data-strk-img-id={`category-${cat.id}`}
                data-strk-img={`[category-title-${cat.id}]`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="700"
                className="h-full w-full object-cover opacity-80 transition-all duration-700 group-hover:scale-105 group-hover:opacity-60"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3
                  id={`category-title-${cat.id}`}
                  className="font-serif text-2xl font-medium tracking-[0.12em] text-white uppercase md:text-3xl"
                >
                  {cat.title}
                </h3>
              </div>
              <div className="absolute inset-x-0 bottom-0 flex translate-y-full items-center justify-center pb-8 transition-transform duration-300 group-hover:translate-y-0">
                <span className="text-xs font-medium uppercase tracking-[0.18em] text-white underline-offset-4 hover:underline">
                  Explore
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
