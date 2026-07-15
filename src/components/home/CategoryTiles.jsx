import { Link } from 'react-router-dom'
import SectionHeading from '@/components/ui/SectionHeading'
import { categories } from '@/data/storeData'

export default function CategoryTiles() {
  return (
    <section className="page-shell py-16 md:py-24">
      <SectionHeading
        eyebrow="Shop by category"
        title="A curated way to start your stack."
        description="Designed for the way real women shop: by mood, silhouette, and what feels instantly wearable."
        align="center"
      />
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {categories.map((category) => (
          <Link key={category.slug} to={`/shop?category=${category.name}`} className="group relative overflow-hidden rounded-[2rem] border border-velmora-sand bg-velmora-mist shadow-velmora-soft">
            <img
              alt={category.name}
              className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-105"
              data-strk-img-id={category.imgId}
              data-strk-img={`[${category.descId}] [${category.titleId}]`}
              data-strk-img-ratio="4x3"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
            <span id={category.titleId} className="sr-only">{category.name}</span>
            <span id={category.descId} className="sr-only">{category.description}</span>
            <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink via-velmora-ink/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 text-velmora-cream">
              <div>
                <p className="font-display text-4xl leading-none">{category.name}</p>
                <p className="mt-3 max-w-xs text-sm leading-6 text-velmora-cream/80 opacity-0 transition duration-300 group-hover:opacity-100">
                  {category.description}
                </p>
              </div>
              <span className="text-xs uppercase tracking-[0.28em] text-velmora-goldSoft">Shop</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
