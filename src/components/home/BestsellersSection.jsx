import SectionHeading from '@/components/ui/SectionHeading.jsx'
import ProductCard from '@/components/shop/ProductCard.jsx'

export default function BestsellersSection({ products }) {
  return (
    <section className="bg-velmora-ivory px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl space-y-12">
        <SectionHeading
          eyebrow="Bestsellers"
          title="Signature pieces worn on repeat"
          description="A concise edit of Velmora icons for self-purchase and polished gifting — premium feel, effortless pricing."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {products.map((product, index) => (
            <ProductCard key={product.id} priority={index === 0} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
