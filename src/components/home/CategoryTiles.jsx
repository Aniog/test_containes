import { Link } from 'react-router-dom'
import SectionIntro from './SectionIntro.jsx'

export default function CategoryTiles({ categories }) {
  return (
    <section className="bg-velmora-ivory px-5 py-16 text-velmora-espresso md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Shop by category"
          title="Find your signature glow"
          text="Choose from refined earrings, delicate necklaces, and sculptural huggies designed for repeat wear."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {categories.map((category) => (
            <Link key={category.id} to={`/shop?category=${category.name}`} className="group relative block aspect-[4/5] overflow-hidden bg-velmora-espresso text-velmora-cream">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-85 transition duration-700 group-hover:scale-105 group-hover:opacity-70"
                data-strk-bg-id={category.imgId}
                data-strk-bg={`[${category.descId}] [${category.titleId}]`}
                data-strk-bg-ratio="4x3"
                data-strk-bg-width="900"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso/75 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 text-center transition duration-300 md:translate-y-8 md:group-hover:translate-y-0">
                <h3 id={category.titleId} className="font-serif text-4xl text-velmora-cream">{category.name}</h3>
                <p id={category.descId} className="mx-auto mt-3 max-w-xs text-sm leading-6 text-velmora-cream/82 opacity-100 md:opacity-0 md:transition md:duration-300 md:group-hover:opacity-100">{category.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
