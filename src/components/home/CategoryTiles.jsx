import { Link } from 'react-router-dom'
import JewelryImage from '@/components/common/JewelryImage.jsx'
import SectionHeading from '@/components/common/SectionHeading.jsx'

const CategoryTiles = ({ categories }) => (
  <section className="bg-velmora-parchment py-16 text-velmora-espresso md:py-24">
    <div className="mx-auto max-w-7xl px-5 sm:px-8">
      <SectionHeading
        eyebrow="Shop by category"
        title="A focused edit for every neckline and ear stack."
      />
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {categories.map((category) => {
          const titleId = `category-${category.id}-title`
          const descId = `category-${category.id}-desc`

          return (
            <Link
              key={category.id}
              to={`/shop?category=${category.name}`}
              className="group relative aspect-[4/5] overflow-hidden bg-velmora-mist shadow-soft"
            >
              <JewelryImage
                imgId={`category-${category.id}-f48a`}
                query={`[${descId}] [${titleId}]`}
                ratio="3x4"
                width="900"
                alt={category.name}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso/70 via-velmora-espresso/10 to-transparent transition group-hover:from-velmora-espresso/80" />
              <div className="absolute inset-x-0 bottom-0 p-7 text-velmora-ivory">
                <p id={descId} className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-velmora-gold">
                  {category.description}
                </p>
                <h3 id={titleId} className="font-serif text-5xl font-medium text-velmora-ivory">
                  {category.name}
                </h3>
                <span className="mt-5 inline-flex translate-y-2 border-b border-velmora-gold pb-1 text-xs font-bold uppercase tracking-[0.24em] text-velmora-ivory opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  Shop now
                </span>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  </section>
)

export default CategoryTiles
