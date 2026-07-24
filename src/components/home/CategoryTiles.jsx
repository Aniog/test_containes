import { Link } from 'react-router-dom'
import { useImageLoader } from '@/hooks/useImageLoader'
import { cn } from '@/lib/utils'

const tiles = [
  { id: 'earrings', label: 'Earrings', query: 'gold drop earrings on neutral background editorial' },
  { id: 'necklaces', label: 'Necklaces', query: 'delicate gold necklace pendant editorial dark background' },
  { id: 'huggies', label: 'Huggies', query: 'gold huggie hoop earrings stacked on ear' },
]

export default function CategoryTiles() {
  const containerRef = useImageLoader()

  return (
    <section ref={containerRef} className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.25em] text-accent">
            Shop by Category
          </p>
          <h2 className="font-serif text-3xl text-foreground sm:text-4xl">
            Find Your Finish
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 sm:gap-6">
          {tiles.map((tile, index) => (
            <Link
              key={tile.id}
              to={`/shop?category=${tile.id}`}
              className={cn(
                'group relative overflow-hidden rounded-sm bg-muted',
                index === 0 ? 'aspect-[4/5] sm:aspect-[3/4]' : 'aspect-[4/5] sm:aspect-[3/4]'
              )}
            >
              <div
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                data-strk-bg-id={`category-bg-${tile.id}`}
                data-strk-bg={`[category-${tile.id}-label]`}
                data-strk-bg-ratio="3x4"
                data-strk-bg-width="600"
              />
              <div className="absolute inset-0 bg-foreground/20 transition-colors group-hover:bg-foreground/30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3
                  id={`category-${tile.id}-label`}
                  className="font-serif text-2xl uppercase tracking-[0.2em] text-white sm:text-3xl"
                >
                  {tile.label}
                </h3>
              </div>
              <span className="sr-only" aria-hidden="true">{tile.query}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
