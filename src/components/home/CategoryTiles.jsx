import { Link } from 'react-router-dom'
import SectionHeading from '@/components/ui/SectionHeading'
import { categories } from '@/data/products'
import { placeholderSrc } from '@/data/storefront'

const CategoryTiles = () => (
  <section className="section-space bg-stone-50">
    <div className="page-shell">
      <SectionHeading
        eyebrow="Shop by Category"
        title="Find your signature finish."
        description="Explore the silhouettes our customers style on repeat — sculptural earrings, delicate necklaces, and polished huggies."
      />
      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {categories.map((category) => (
          <Link
            key={category.name}
            to={`/shop?category=${encodeURIComponent(category.name)}`}
            className="group relative block overflow-hidden rounded-[2rem] border border-stone-200 bg-neutral-950"
          >
            <img
              src={placeholderSrc}
              alt={category.name}
              data-strk-img-id={category.imageId}
              data-strk-img={`[${category.descId}] [${category.titleId}]`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="900"
              className="aspect-[3/4] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
              <div>
                <h3 id={category.titleId} className="font-serif text-3xl text-stone-50">
                  {category.name}
                </h3>
                <p id={category.descId} className="mt-2 max-w-xs text-sm leading-6 text-stone-200 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {category.description}
                </p>
              </div>
              <span className="text-xs uppercase tracking-[0.28em] text-stone-100">Shop</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
)

export default CategoryTiles
