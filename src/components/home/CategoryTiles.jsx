import { Link } from 'react-router-dom'
import SectionHeading from './SectionHeading'

export default function CategoryTiles({ categories }) {
  return (
    <section id="collections" className="bg-velmora-ivory px-4 py-20 text-velmora-ink sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Shop by category" title="Find your everyday signature" text="Refined pieces for layered necklines, polished ear stacks, and sculptural close-fit shine." />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {categories.map((category) => (
            <Link key={category.id} to={`/shop?category=${category.name}`} className="group relative min-h-[430px] overflow-hidden bg-velmora-ink text-velmora-ivory">
              <img
                alt={category.name}
                data-strk-img-id={category.imgId}
                data-strk-img={`[${category.descId}] [${category.titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                className="absolute inset-0 h-full w-full object-cover opacity-78 transition duration-700 group-hover:scale-105 group-hover:opacity-95"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink/80 via-velmora-ink/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 translate-y-5 p-7 transition duration-500 group-hover:translate-y-0">
                <p id={category.descId} className="mb-4 max-w-xs text-sm leading-6 text-velmora-ivory/78 opacity-0 transition duration-500 group-hover:opacity-100">{category.description}</p>
                <h3 id={category.titleId} className="font-serif text-4xl text-velmora-ivory">{category.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
