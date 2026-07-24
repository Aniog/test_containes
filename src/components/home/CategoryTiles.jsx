import { Link } from 'react-router-dom'
import SectionHeading from '@/components/common/SectionHeading'

const CategoryTiles = ({ categories }) => {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Categories"
          title="Shop by silhouette"
          description="Choose the mood of your stack, from sculptural ear details to softly luminous layers."
          align="center"
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${encodeURIComponent(category.name)}`}
              className="group relative overflow-hidden rounded-[2rem] border border-velmora-line bg-velmora-ink text-white shadow-velmora"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <p id={`category-${category.id}-title`} className="sr-only">
                  {category.name}
                </p>
                <p id={`category-${category.id}-description`} className="sr-only">
                  {category.description}
                </p>
                <img
                  src="data:image/gif;base64,R0lGODlhAQABAAAAACwAAAAAAQABAAA="
                  alt={category.name}
                  data-strk-img-id={category.imageId}
                  data-strk-img={`[category-${category.id}-description] [category-${category.id}-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="900"
                  className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
                <div className="absolute inset-0 flex items-end p-8">
                  <div className="translate-y-3 transition duration-300 group-hover:translate-y-0">
                    <h3 className="font-display text-4xl text-white">{category.name}</h3>
                    <p className="mt-3 max-w-xs text-sm leading-7 text-white/80 opacity-0 transition duration-300 group-hover:opacity-100">
                      {category.description}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategoryTiles
