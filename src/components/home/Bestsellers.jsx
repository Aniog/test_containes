import { Link } from 'react-router-dom'
import { products } from '@/data/products'
import ProductCard from '@/components/product/ProductCard'
import { useStrkImages } from '@/lib/useStrkImages'
import SectionHeading from '@/components/home/SectionHeading'

export default function Bestsellers() {
  const ref = useStrkImages([])
  return (
    <section ref={ref} className="bg-ivory py-20 md:py-28">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <SectionHeading
          eyebrow="Most Loved"
          title="Bestsellers"
          description="The pieces our community reaches for, again and again."
          link={{ to: '/shop', label: 'View All' }}
        />

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-5 gap-y-10">
          {products.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
