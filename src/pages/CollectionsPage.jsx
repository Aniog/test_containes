import { Link } from 'react-router-dom'
import Container from '@/components/Container'
import SectionHeading from '@/components/SectionHeading'
import { categories } from '@/data/products'
import { useStrkImages } from '@/hooks/useStrkImages'

const placeholder =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

const CollectionsPage = () => {
  const pageRef = useStrkImages([])

  return (
    <div ref={pageRef} className="pb-20 pt-32 md:pt-36">
      <Container>
        <SectionHeading
          eyebrow="Collections"
          title="Jewelry stories shaped around how you wear it"
          description="Explore our core edits — sculptural earrings, soft necklaces, and daily huggies — each styled with a warm, editorial lens."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {categories.map((category) => {
            const titleId = `collections-${category.id}-title`
            const descId = `collections-${category.id}-desc`

            return (
              <Link
                key={category.id}
                to={`/shop?category=${category.name}`}
                className="group overflow-hidden rounded-[2rem] border border-brand-line bg-brand-surface shadow-soft"
              >
                <img
                  alt={category.name}
                  className="h-[420px] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  data-strk-img-id={`collections-${category.imageId}`}
                  data-strk-img={`[${descId}] [${titleId}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="900"
                  src={placeholder}
                />
                <div className="p-6">
                  <h2 id={titleId} className="font-serif text-4xl text-brand-espresso">
                    {category.name}
                  </h2>
                  <p id={descId} className="mt-3 text-sm leading-7 text-brand-mink">
                    {category.description}
                  </p>
                </div>
              </Link>
            )
          })}
        </div>
      </Container>
    </div>
  )
}

export default CollectionsPage
