import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { categoryTiles } from '../../data/store.js'
import SectionHeading from '../shared/SectionHeading.jsx'

const CategoryTiles = () => {
  return (
    <section className="bg-pearl px-6 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Shop by Category"
          title="Jewelry for every kind of occasion"
          description="Explore sculptural earrings, refined necklaces, and polished huggies in Velmora’s signature warm finish."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {categoryTiles.map((tile) => (
            <Link
              key={tile.id}
              to={tile.href}
              className="group relative min-h-[420px] overflow-hidden rounded-[2rem] border border-sand/50"
            >
              <div
                className="absolute inset-0 transition duration-700 group-hover:scale-105"
                data-strk-bg-id={tile.bgId}
                data-strk-bg={`[${tile.descId}] [${tile.titleId}]`}
                data-strk-bg-ratio="3x4"
                data-strk-bg-width="900"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/75 via-obsidian/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 text-pearl">
                <div>
                  <h3 id={tile.titleId} className="font-display text-4xl leading-none">
                    {tile.label}
                  </h3>
                  <p id={tile.descId} className="mt-3 max-w-[14rem] text-sm leading-6 text-sand">
                    {tile.description}
                  </p>
                </div>
                <span className="rounded-full border border-pearl/30 p-3 transition duration-300 group-hover:border-champagne group-hover:text-champagne">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategoryTiles
