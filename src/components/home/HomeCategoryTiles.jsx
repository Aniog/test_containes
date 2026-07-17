import { Link } from 'react-router-dom'
import SectionHeading from '@/components/common/SectionHeading'

const HomeCategoryTiles = ({ categories }) => {
  return (
    <section id="collections" className="scroll-mt-28 bg-velmora-pearl py-16 md:scroll-mt-32 md:py-24">
      <div className="page-shell space-y-10">
        <SectionHeading
          eyebrow="Shop by category"
          title="A considered wardrobe of gold essentials"
          description="Discover signature silhouettes designed to bring soft polish to everyday dressing and meaningful gifting alike."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {categories.map((category) => {
            const titleId = `category-${category.id}-title`
            const descId = `category-${category.id}-desc`
            return (
              <Link
                key={category.id}
                to={category.href}
                className="group relative block overflow-hidden rounded-[2rem] bg-velmora-ink shadow-soft"
              >
                <img
                  src={imagePlaceholder}
                  alt={category.title}
                  className="h-[26rem] w-full object-cover transition-transform duration-700 ease-luxe group-hover:scale-105"
                  data-strk-img-id={`category-${category.id}-image`}
                  data-strk-img={`[${descId}] [${titleId}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="800"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink via-velmora-ink/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 text-velmora-pearl">
                  <div>
                    <p className="mb-2 text-xs uppercase tracking-[0.35em] text-velmora-gold">
                      {category.eyebrow}
                    </p>
                    <h3 id={titleId} className="font-heading text-4xl">
                      {category.title}
                    </h3>
                    <p id={descId} className="mt-3 max-w-xs text-sm leading-6 text-velmora-pearl/80">
                      {category.description}
                    </p>
                  </div>
                  <span className="rounded-full border border-velmora-pearl/20 bg-velmora-pearl/10 px-4 py-2 text-[11px] uppercase tracking-[0.28em] transition-all duration-500 ease-luxe group-hover:bg-velmora-pearl group-hover:text-velmora-ink">
                    Shop
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

export default HomeCategoryTiles
