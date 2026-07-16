import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { categoryTiles, IMAGE_PLACEHOLDER } from '@/data/site'
import SectionHeading from '@/components/shared/SectionHeading'

export default function CategoryTilesSection() {
  return (
    <section id="collections" className="section-shell py-20 sm:py-24">
      <div className="space-y-12">
        <SectionHeading
          eyebrow="Shop by category"
          title="A focused edit, built around how you wear jewelry"
          description="From everyday huggies to gifting-ready sets, each collection keeps the palette polished and easy to style."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {categoryTiles.map((tile) => (
            <Link
              key={tile.id}
              to={tile.href}
              className="group relative overflow-hidden rounded-3xl border border-champagne bg-surface shadow-card"
            >
              <div className="aspect-tile overflow-hidden">
                <img
                  src={IMAGE_PLACEHOLDER}
                  alt={tile.label}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  data-strk-img-id={`category-${tile.id}-img`}
                  data-strk-img={`[category-${tile.id}-desc] [category-${tile.id}-label] [category-section-title]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="900"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-truffle/80 via-truffle/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 text-pearl">
                <div className="space-y-2">
                  <p id={`category-${tile.id}-label`} className="font-serif text-3xl leading-none">
                    {tile.label}
                  </p>
                  <p
                    id={`category-${tile.id}-desc`}
                    className="max-w-xs text-sm leading-6 text-pearl/80 opacity-0 transition duration-300 group-hover:opacity-100"
                  >
                    {tile.description}
                  </p>
                </div>
                <span className="rounded-full border border-pearl/40 p-3 transition duration-300 group-hover:bg-pearl group-hover:text-truffle">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
        <span id="category-section-title" className="sr-only">
          Velmora jewelry collection categories in a warm editorial style
        </span>
      </div>
    </section>
  )
}
