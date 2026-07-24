import { PRODUCTS } from '@/data/products'
import ProductCard from '@/components/ProductCard'
import SectionHeading from '@/components/SectionHeading'

export default function RelatedProducts({ currentId }) {
  const current = PRODUCTS.find((p) => p.id === currentId)
  const others = PRODUCTS.filter((p) => p.id !== currentId)
  const sameCategory = others.filter((p) => p.category === current?.category)
  const related = [...sameCategory, ...others.filter((p) => p.category !== current?.category)].slice(0, 4)

  return (
    <section className="mx-auto max-w-7xl px-5 pb-20 pt-4 md:px-8 md:pb-28">
      <SectionHeading eyebrow="Complete the look" title="You May Also Like" />
      <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-10 md:mt-14 lg:grid-cols-4 lg:gap-x-8">
        {related.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
