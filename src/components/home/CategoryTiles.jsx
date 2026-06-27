import { Link } from 'react-router-dom'
import { useStrkImages } from '@/components/StrkImage'

const PLACEHOLDER =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E'

const TILES = [
  {
    id: 'earrings',
    name: 'Earrings',
    to: '/shop?category=earrings',
    titleId: 'cat-earrings-title',
    descId: 'cat-earrings-desc',
    imgId: 'cat-earrings-img-4f2a',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    to: '/shop?category=necklaces',
    titleId: 'cat-necklaces-title',
    descId: 'cat-necklaces-desc',
    imgId: 'cat-necklaces-img-8b3c',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    to: '/shop?category=huggies',
    titleId: 'cat-huggies-title',
    descId: 'cat-huggies-desc',
    imgId: 'cat-huggies-img-1d5e',
  },
]

export default function CategoryTiles() {
  const ref = useStrkImages([])

  return (
    <section ref={ref} className="py-20 md:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-12">
          <p className="text-[11px] uppercase tracking-[0.25em] text-gold mb-3">
            Explore
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {TILES.map((tile) => (
            <Link
              key={tile.id}
              to={tile.to}
              className="group relative overflow-hidden aspect-[4/5] bg-cream"
            >
              <img
                data-strk-img-id={tile.imgId}
                data-strk-img={`[${tile.descId}] [${tile.titleId}] gold jewelry editorial`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="700"
                src={PLACEHOLDER}
                alt={tile.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 text-center">
                <h3
                  id={tile.titleId}
                  className="font-serif text-ivory text-2xl md:text-3xl uppercase tracking-[0.16em] translate-y-2 group-hover:translate-y-0 transition-transform duration-500"
                >
                  {tile.name}
                </h3>
                <p id={tile.descId} className="sr-only">
                  {tile.name} collection
                </p>
                <span className="block mt-3 text-[10px] uppercase tracking-[0.25em] text-champagne opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  Discover →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
