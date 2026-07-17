import { Link } from 'react-router-dom'
import SectionHeader from '@/components/shared/SectionHeader'
import { buildImageQuery, getEditorialPlaceholder } from '@/lib/images'

const CategorySection = ({ categories }) => (
  <section id="collections" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
    <SectionHeader
      eyebrow="Collections"
      title="Shop by category"
      description="A concise edit of signatures to layer, gift, and keep within easy reach."
    />

    <div className="mt-10 grid gap-6 lg:grid-cols-3">
      {categories.map((category) => {
        const titleId = `category-${category.name.toLowerCase()}-title`
        const descId = `category-${category.name.toLowerCase()}-desc`
        const noteId = `category-${category.name.toLowerCase()}-note`

        return (
          <Link
            key={category.name}
            to={category.href}
            className="group relative overflow-hidden rounded-[2rem] bg-velvet-950 shadow-editorial"
          >
            <img
              alt={category.name}
              className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105"
              data-strk-img-id={`category-${category.name.toLowerCase()}-image`}
              data-strk-img={buildImageQuery(noteId, descId, titleId)}
              data-strk-img-ratio="4x3"
              data-strk-img-width="900"
              src={getEditorialPlaceholder(category.name)}
            />
            <span id={noteId} className="sr-only">
              {category.note}
            </span>
            <div className="absolute inset-0 bg-gradient-to-t from-velvet-950/90 via-velvet-950/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-cream-50">
              <p id={titleId} className="font-serif text-4xl transition group-hover:text-gold-300">
                {category.name}
              </p>
              <p id={descId} className="mt-2 text-sm leading-6 text-cream-200/80 opacity-0 transition duration-500 group-hover:opacity-100">
                {category.description}
              </p>
            </div>
          </Link>
        )
      })}
    </div>
  </section>
)

export default CategorySection
