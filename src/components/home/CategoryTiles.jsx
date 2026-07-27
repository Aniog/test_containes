import { Link } from 'react-router-dom'
import { categoryTiles } from '@/data/store'
import SectionHeading from '@/components/shared/SectionHeading'

function CategoryTiles() {
  return (
    <section className="bg-stone-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl space-y-10 px-4 sm:px-6 lg:px-10">
        <SectionHeading
          eyebrow="Shop by category"
          title="Jewelry wardrobes, softly defined"
          description="Explore earrings, necklaces, and huggies designed to move easily between self-purchase and thoughtful gifting."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {categoryTiles.map((category) => (
            <Link
              key={category.id}
              to="/shop"
              className="group relative overflow-hidden rounded-[2rem] bg-stone-900"
            >
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={category.title}
                className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                data-strk-img-id={`category-${category.id}`}
                data-strk-img={`[category-${category.id}-desc] [category-${category.id}-title]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="900"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/75 via-stone-950/20 to-transparent transition duration-300 group-hover:from-stone-950/85" />
              <div className="absolute inset-x-0 bottom-0 translate-y-2 p-6 text-stone-50 transition duration-300 group-hover:translate-y-0">
                <p
                  id={`category-${category.id}-title`}
                  className="font-serif text-4xl leading-none"
                >
                  {category.title}
                </p>
                <p
                  id={`category-${category.id}-desc`}
                  className="mt-3 max-w-xs text-sm leading-6 text-stone-200 opacity-0 transition duration-300 group-hover:opacity-100"
                >
                  {category.description}
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
