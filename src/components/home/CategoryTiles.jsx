import { Link } from 'react-router-dom'
import SectionHeading from '@/components/ui/SectionHeading'

const imagePlaceholder =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

const categoryTiles = [
  {
    id: 'tile-earrings',
    label: 'Earrings',
    subtitle: 'Sculptural drops and modern statements.',
    href: '/shop?category=Earrings',
  },
  {
    id: 'tile-necklaces',
    label: 'Necklaces',
    subtitle: 'Layering pieces with soft radiance.',
    href: '/shop?category=Necklaces',
  },
  {
    id: 'tile-huggies',
    label: 'Huggies',
    subtitle: 'Everyday icons with polished volume.',
    href: '/shop?category=Huggies',
  },
]

const CategoryTiles = () => {
  return (
    <section className="bg-[var(--color-surface)] px-5 py-20 md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl space-y-10">
        <SectionHeading
          eyebrow="Shop by category"
          title="Curated for the way she wears jewelry now"
          description="Explore signature silhouettes designed for stacking, gifting, and quiet confidence."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {categoryTiles.map((tile) => {
            const titleId = `${tile.id}-title`
            const subtitleId = `${tile.id}-subtitle`

            return (
              <Link
                key={tile.id}
                to={tile.href}
                className="group relative overflow-hidden bg-[var(--color-ink)] text-[var(--color-text-on-dark)]"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={imagePlaceholder}
                    alt={tile.label}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                    data-strk-img-id={`${tile.id}-img`}
                    data-strk-img={`[${subtitleId}] [${titleId}]`}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="900"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,8,7,0.12)_18%,rgba(12,8,7,0.76)_100%)]" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <p
                      id={titleId}
                      className="font-serif-display text-4xl text-[var(--color-text-on-dark)] transition duration-500 group-hover:translate-x-1"
                    >
                      {tile.label}
                    </p>
                    <p
                      id={subtitleId}
                      className="mt-3 max-w-xs text-sm leading-6 text-[var(--color-text-on-dark-muted)] opacity-0 transition duration-500 group-hover:opacity-100"
                    >
                      {tile.subtitle}
                    </p>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default CategoryTiles
