import { Link } from 'react-router-dom'
import SectionHeading from '@/components/ui/SectionHeading'
import EditorialVisual from '@/components/ui/EditorialVisual'

export default function CategoryTiles({ items }) {
  return (
    <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-7xl space-y-10">
        <SectionHeading
          eyebrow="Shop the edit"
          title="By Category"
          description="Choose your signature finish, from polished earrings to layered necklaces and sculptural huggies."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {items.map((item, index) => (
            <Link
              key={item.id}
              to={item.href}
              className="group relative overflow-hidden rounded-[2rem] border border-velmora-line bg-velmora-noir shadow-velmora-soft"
            >
              <EditorialVisual
                mood={index % 3 === 0 ? 'portrait' : index % 3 === 1 ? 'still' : 'hero'}
                accent={index % 2 === 0 ? 'left' : 'right'}
                className="aspect-[4/5] rounded-none transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-noir via-velmora-noir/15 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-velmora-ivory">
                <p className="font-display text-4xl leading-none transition duration-300 group-hover:-translate-y-1">
                  {item.label}
                </p>
                <p className="mt-3 max-w-xs text-sm leading-6 text-velmora-ivory/80 opacity-0 transition duration-300 group-hover:opacity-100">
                  {item.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
