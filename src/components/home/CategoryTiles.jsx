import { Link } from 'react-router-dom'
import { categories } from '@/data/products'
import StrkImage from '@/components/StrkImage'
import { useImageLoader } from '@/hooks/useImageLoader'

export default function CategoryTiles() {
  const containerRef = useImageLoader([])
  return (
    <section id="collections" ref={containerRef} className="py-20 md:py-28 bg-ivory">
      <div className="max-w-8xl mx-auto px-6 md:px-10">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs uppercase tracking-widest2 text-gold mb-3">Explore</p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative overflow-hidden aspect-[4x5] bg-cream"
            >
              <StrkImage
                imgId={`cat-${cat.id.toLowerCase()}-tile`}
                query={`[cat-${cat.id}-desc] [cat-${cat.id}-name]`}
                ratio="4x5"
                width={700}
                alt={cat.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-center translate-y-2 group-hover:translate-y-0 transition-transform duration-400">
                <h3
                  id={`cat-${cat.id}-name`}
                  className="font-serif text-3xl text-ivory uppercase tracking-widest3"
                >
                  {cat.name}
                </h3>
                <p
                  id={`cat-${cat.id}-desc`}
                  className="text-xs uppercase tracking-widest2 text-muted-dark mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                >
                  {cat.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
