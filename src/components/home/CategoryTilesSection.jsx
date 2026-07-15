import { Link } from 'react-router-dom'
import SectionHeader from '@/components/shared/SectionHeader'
import StoreImage from '@/components/shared/StoreImage'

const CategoryTilesSection = ({ categories }) => {
  return (
    <section className="bg-stone-50 py-16 text-stone-950 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Shop by Category"
          title="Find your signature silhouette"
          description="A concise wardrobe of earrings, necklaces, and huggies designed for modern gifting and everyday styling."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${encodeURIComponent(category.name)}`}
              className="group relative overflow-hidden rounded-[2rem] border border-stone-200 bg-stone-100 shadow-[0_18px_40px_rgba(28,24,19,0.08)]"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <StoreImage
                  alt={category.name}
                  imgId={category.imgId}
                  query={`[${category.descId}] [${category.titleId}]`}
                  ratio="4x3"
                  width="900"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-950/15 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                <h3 id={category.titleId} className="font-serif text-3xl text-stone-50 md:text-4xl">
                  {category.name}
                </h3>
                <p id={category.descId} className="mt-2 max-w-xs text-sm leading-6 text-stone-200">
                  {category.description}
                </p>
                <span className="mt-5 inline-flex text-xs uppercase tracking-[0.3em] text-amber-200">
                  Explore
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategoryTilesSection
