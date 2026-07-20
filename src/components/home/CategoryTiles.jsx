import { Link } from 'react-router-dom'
import SectionIntro from '@/components/home/SectionIntro'
import { categories } from '@/data/products'
import { getStrkImageUrl } from '@/lib/strk-image'

export default function CategoryTiles() {
  return (
    <section className="bg-velmora-ivory px-5 py-16 text-velmora-ink sm:px-8 md:py-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Shop by category"
          title="Find your daily signature."
          copy="From soft statement earrings to close-fit huggies and giftable necklaces, every piece is designed for repeat wear."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {categories.map((category) => (
            <Link key={category.name} to={category.href} className="group relative block overflow-hidden bg-velmora-bone">
              <img
                alt={category.name}
                className="aspect-[4/5] h-full w-full object-cover transition duration-700 group-hover:scale-105"
                data-strk-img-id={category.imgId}
                data-strk-img={`[${category.descId}] [${category.titleId}] gold jewelry category editorial`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src={getStrkImageUrl(category.imgId)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink/75 via-velmora-ink/10 to-transparent opacity-85 transition group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-velmora-pearl sm:p-8">
                <p id={category.descId} className="mb-3 max-w-xs text-sm leading-6 text-velmora-bone opacity-0 transition duration-300 group-hover:opacity-100">
                  {category.description}
                </p>
                <h3 id={category.titleId} className="font-serif text-4xl font-semibold">
                  {category.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
