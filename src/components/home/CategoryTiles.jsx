import { Link } from 'react-router-dom'

import ImageLoaderSection from '@/components/shared/ImageLoaderSection'
import SectionHeader from '@/components/shared/SectionHeader'

const CategoryTiles = ({ categories }) => {
  return (
    <section className="section-shell pt-0">
      <SectionHeader
        eyebrow="Shop by category"
        title="Build your jewelry wardrobe"
        description="From sculptural earrings to gift-ready necklaces, discover the silhouettes our community keeps coming back to."
      />

      <ImageLoaderSection className="mt-10 grid gap-5 md:grid-cols-3" dependency={categories.length}>
        {categories.map((category) => {
          const titleId = `category-${category.name.toLowerCase()}-title`
          const descId = `category-${category.name.toLowerCase()}-desc`

          return (
            <Link
              key={category.name}
              to={`/shop?category=${encodeURIComponent(category.name)}`}
              className="group relative overflow-hidden rounded-[2rem] bg-velmora-ink shadow-velmora-soft"
            >
              <img
                data-strk-img-id={category.imageId}
                data-strk-img={`[${descId}] [${titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={category.name}
                className="aspect-editorial w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink via-velmora-ink/20 to-transparent opacity-90 transition group-hover:opacity-100" />
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-velmora-ivory">
                <p id={titleId} className="font-display text-4xl transition group-hover:text-velmora-gold">
                  {category.name}
                </p>
                <p id={descId} className="mt-2 max-w-[14rem] text-sm leading-7 text-velmora-ivory/78 opacity-0 transition duration-300 group-hover:opacity-100">
                  {category.description}
                </p>
              </div>
            </Link>
          )
        })}
      </ImageLoaderSection>
    </section>
  )
}

export default CategoryTiles
