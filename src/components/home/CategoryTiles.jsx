import { Link } from 'react-router-dom'
import { categories, placeholderSvg } from '@/data/products'
import SectionHeading from './SectionHeading'

export default function CategoryTiles() {
  return (
    <section id="shop-by-category" className="bg-velmora-pearl py-18 text-velmora-ink lg:py-28">
      <div className="velmora-container">
        <SectionHeading eyebrow="Shop by category" title="Choose Your Signature" text="Earrings, necklaces, and huggies designed to layer beautifully without overpowering." />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {categories.map((category) => (
            <Link key={category.id} to={`/shop?category=${category.label}`} className="group relative aspect-portrait overflow-hidden bg-velmora-linen shadow-soft">
              <img
                alt={category.label}
                className="image-fill transition-transform duration-700 group-hover:scale-105"
                data-strk-img-id={category.imgId}
                data-strk-img={`[${category.descId}] [${category.titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="700"
                src={placeholderSvg}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink/65 via-velmora-ink/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-velmora-ivory transition-transform duration-300 group-hover:-translate-y-2">
                <h3 id={category.titleId} className="font-serif text-4xl">{category.label}</h3>
                <p id={category.descId} className="mt-2 text-sm leading-6 text-velmora-linen">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
