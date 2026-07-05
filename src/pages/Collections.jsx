import { Link } from 'react-router-dom'
import { categories } from '@/data/products'

export default function Collections() {
  return (
    <div className="bg-velmora-cream pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-velmora-gold mb-3">Curated Edits</p>
          <h1 className="font-serif text-4xl md:text-5xl text-velmora-ink">Collections</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[4/3] overflow-hidden bg-velmora-sand"
            >
              <div
                data-strk-bg-id={`collections-${category.id}`}
                data-strk-bg={`[collections-${category.id}-label]`}
                data-strk-bg-ratio="4x3"
                data-strk-bg-width="800"
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 strk-placeholder"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E")`,
                }}
              />
              <div className="absolute inset-0 bg-black/25 group-hover:bg-black/35 transition-colors duration-500" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-velmora-cream">
                <h2
                  id={`collections-${category.id}-label`}
                  className="font-serif text-4xl md:text-5xl tracking-wide mb-2"
                >
                  {category.label}
                </h2>
                <p className="text-sm text-velmora-cream/80">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
