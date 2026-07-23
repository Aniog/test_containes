import { Link } from 'react-router-dom'
import SectionIntro from '@/components/shared/SectionIntro'
import { categoryTiles } from '@/data/products'

function CategoryTiles() {
  return (
    <section className="px-5 py-16 md:px-8 md:py-20 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Shop by category"
          title="A concise edit built around everyday rituals and gifting"
          description="Find your signature pair, an easy layer, or the perfect finishing touch."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {categoryTiles.map((tile) => (
            <Link
              key={tile.id}
              className="group relative overflow-hidden rounded-[2rem] border border-velmora-sand/30 bg-velmora-ink shadow-soft"
              to={`/shop?category=${tile.label}`}
            >
              <div className="absolute inset-0 bg-velmora-fade" />
              <img
                alt={tile.label}
                className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-105"
                data-strk-img-id={tile.imageId}
                data-strk-img={`[category-${tile.id}-desc] [category-${tile.id}-title]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <h3 id={`category-${tile.id}-title`} className="font-serif text-3xl">{tile.label}</h3>
                <p
                  id={`category-${tile.id}-desc`}
                  className="mt-2 max-w-xs text-sm leading-6 text-white/85 opacity-90 transition group-hover:opacity-100"
                >
                  {tile.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategoryTiles
