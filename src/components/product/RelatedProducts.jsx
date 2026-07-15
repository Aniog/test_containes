import SectionHeading from '@/components/ui/SectionHeading.jsx'
import ProductCard from '@/components/shop/ProductCard.jsx'

export default function RelatedProducts({ products }) {
  return (
    <section className="bg-velmora-ivory px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl space-y-12">
        <SectionHeading
          eyebrow="You may also like"
          title="Pieces to continue the story"
          description="Layerable companions and gift-worthy additions from the current Velmora edit."
        />
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
