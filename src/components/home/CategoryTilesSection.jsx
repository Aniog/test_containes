import { Link } from 'react-router-dom'
import ImageLoaderSection from '@/components/shared/ImageLoaderSection'
import SectionHeader from '@/components/shared/SectionHeader'

const CategoryTilesSection = ({ categories }) => {
  return (
    <ImageLoaderSection className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8" deps={[categories.length]}>
      <SectionHeader
        description="Explore refined silhouettes designed for layering, gifting, and polished everyday styling."
        eyebrow="Browse"
        title="Shop by Category"
      />
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {categories.map((category) => {
          const titleId = `${category.id}-tile-title`
          const descId = `${category.id}-tile-desc`

          return (
            <Link
              className="group relative overflow-hidden rounded-[2rem] border border-stone-200 bg-stone-950"
              key={category.id}
              to={category.link}
            >
              <img
                alt={category.title}
                className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-[1.04] group-hover:opacity-85"
                data-strk-img={`[${descId}] [${titleId}]`}
                data-strk-img-id={`${category.id}-tile-image`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/85 via-neutral-950/10 to-neutral-950/10" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-stone-50">
                <p className="text-xs uppercase tracking-[0.3em] text-stone-200">Category</p>
                <h3 className="mt-3 font-display text-4xl" id={titleId}>
                  {category.title}
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-6 text-stone-200 opacity-0 transition duration-300 group-hover:opacity-100" id={descId}>
                  {category.description}
                </p>
              </div>
            </Link>
          )
        })}
      </div>
    </ImageLoaderSection>
  )
}

export default CategoryTilesSection
