import { Link } from 'react-router-dom'
import JewelryImage from '@/components/common/JewelryImage.jsx'
import SectionIntro from '@/components/common/SectionIntro.jsx'
import { categories } from '@/data/products.js'

export default function CategoryTiles() {
  return (
    <section id="collections" className="bg-velmora-pearl px-4 py-20 text-velmora-espresso sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionIntro eyebrow="Shop by category" title="Choose your everyday signature." centered>
          <p>From polished huggies to luminous necklaces, each category is edited for effortless gifting and self-purchase.</p>
        </SectionIntro>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {categories.map((category) => (
            <Link key={category.id} to="/shop" className="group relative min-h-[26rem] overflow-hidden rounded-3xl bg-velmora-linen shadow-card">
              <JewelryImage alt={category.name} imgId={category.imgId} query={`[${category.descId}] [${category.titleId}]`} ratio="3x4" width="700" className="h-full min-h-[26rem] w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso/75 via-velmora-espresso/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 text-velmora-ivory transition duration-300 group-hover:translate-y-[-0.5rem]">
                <p id={category.descId} className="mb-3 text-sm leading-6 text-velmora-linen opacity-0 transition group-hover:opacity-100">{category.description}</p>
                <h3 id={category.titleId} className="font-display text-5xl font-medium">{category.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
