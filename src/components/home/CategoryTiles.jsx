import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { categories } from '@/data/products'

const categoryImages = {
  earrings: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'%3E%3Crect fill='%233D3228' width='3' height='4'/%3E%3Ccircle cx='1.5' cy='1.8' r='0.6' fill='%23B8935F' opacity='0.7'/%3E%3Ccircle cx='1.5' cy='2.6' r='0.3' fill='%23C9A876' opacity='0.5'/%3E%3C/svg%3E`,
  necklaces: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'%3E%3Crect fill='%232A211B' width='3' height='4'/%3E%3Ccircle cx='1.5' cy='2' r='0.5' fill='%23B8935F' opacity='0.6'/%3E%3Ccircle cx='1.2' cy='1.6' r='0.25' fill='%23C9A876' opacity='0.5'/%3E%3Ccircle cx='1.8' cy='1.6' r='0.25' fill='%23C9A876' opacity='0.5'/%3E%3C/svg%3E`,
  huggies: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'%3E%3Crect fill='%233D3228' width='3' height='4'/%3E%3Ccircle cx='1.5' cy='2' r='0.7' fill='none' stroke='%23B8935F' stroke-width='0.15' opacity='0.7'/%3E%3Ccircle cx='1.5' cy='2' r='0.35' fill='%23C9A876' opacity='0.5'/%3E%3C/svg%3E`,
}

export default function CategoryTiles() {
  return (
    <section className="bg-velmora-ivory py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-12 text-center md:mb-16">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-velmora-gold">
            Explore
          </p>
          <h2 className="font-serif text-3xl font-light tracking-wide text-velmora-espresso md:text-4xl">
            Shop by Category
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.slug}`}
              className="group relative aspect-[3/4] overflow-hidden md:aspect-[4/5]"
            >
              <img
                src={categoryImages[cat.id]}
                alt={cat.label}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-velmora-charcoal/30 transition-colors duration-300 group-hover:bg-velmora-charcoal/40" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <h3 className="font-serif text-2xl font-light uppercase tracking-[0.2em] md:text-3xl">
                  {cat.label}
                </h3>
                <span className="mt-4 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.15em] opacity-0 transition-all duration-300 group-hover:opacity-100">
                  Discover <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
