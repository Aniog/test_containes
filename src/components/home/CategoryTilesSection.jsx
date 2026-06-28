import { Link } from 'react-router-dom'
import { useRef } from 'react'
import SectionHeading from '@/components/home/SectionHeading'
import { imagePlaceholder } from '@/lib/media'
import { useStrkImages } from '@/lib/useStrkImages'

export default function CategoryTilesSection({ categories }) {
  const containerRef = useRef(null)

  useStrkImages(containerRef, [categories])

  return (
    <section className="bg-stone-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Shop by Category"
          title="Designed around how you actually wear jewelry"
          description="Choose from softly sculpted earrings, delicate necklaces, and everyday huggies that layer beautifully."
        />

        <div ref={containerRef} className="mt-12 grid gap-5 md:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={category.href}
              className="group relative block overflow-hidden rounded-[2rem] border border-stone-200 bg-stone-950"
            >
              <img
                alt={category.name}
                className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                data-strk-img-id={category.imgId}
                data-strk-img={`[${category.descId}] [${category.titleId}] [velmora-category-imagery]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="900"
                src={imagePlaceholder}
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(28,25,23,0.08)_15%,rgba(28,25,23,0.75)_100%)] transition group-hover:bg-[linear-gradient(180deg,rgba(28,25,23,0.02)_15%,rgba(28,25,23,0.82)_100%)]" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-stone-50">
                <p id={category.titleId} className="font-[Cormorant_Garamond] text-4xl leading-none">
                  {category.name}
                </p>
                <p id={category.descId} className="mt-3 max-w-xs text-sm leading-7 text-stone-200 opacity-0 transition duration-300 group-hover:opacity-100">
                  {category.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
        <p id="velmora-category-imagery" className="sr-only">
          Warm luxury product photography of gold jewelry on neutral backgrounds.
        </p>
      </div>
    </section>
  )
}
