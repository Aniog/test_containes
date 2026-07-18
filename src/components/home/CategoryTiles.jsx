import { Link } from 'react-router-dom'
import { CATEGORIES } from '@/data/products'
import { useStrkImages } from '@/hooks/useStrkImages'

const META = {
  earrings: { desc: 'Cuffs, drops & statement studs.', title: 'Earrings' },
  necklaces: { desc: 'Pendants & layered chains.', title: 'Necklaces' },
  huggies: { desc: 'Polished domes that hug the lobe.', title: 'Huggies' },
}

const PLACEHOLDER =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E'

export default function CategoryTiles() {
  const containerRef = useStrkImages()

  return (
    <section ref={containerRef} className="py-20 md:py-28">
      <div className="mx-auto max-w-8xl px-6 md:px-10">
        <div className="text-center mb-12">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-3">
            Explore
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {CATEGORIES.map((cat) => {
            const meta = META[cat.id]
            return (
              <Link
                key={cat.id}
                to={`/shop?category=${cat.id}`}
                className="group relative block overflow-hidden aspect-[4/5] bg-sand"
              >
                <img
                  alt={meta.title}
                  data-strk-img-id={`cat-${cat.id}-img`}
                  data-strk-img={`[${cat.descId}] [${cat.titleId}] gold jewelry editorial`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="700"
                  src={PLACEHOLDER}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-7 text-center">
                  <h3
                    id={cat.titleId}
                    className="font-serif text-cream text-3xl uppercase tracking-[0.14em] translate-y-2 group-hover:translate-y-0 transition-transform duration-500"
                  >
                    {meta.title}
                  </h3>
                  <p
                    id={cat.descId}
                    className="text-cream/0 group-hover:text-cream/80 text-sm mt-2 transition-all duration-500"
                  >
                    {meta.desc}
                  </p>
                  <span className="inline-block mt-4 text-[11px] uppercase tracking-[0.2em] text-cream border-b border-cream/60 pb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    Shop Now
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
