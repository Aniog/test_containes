import { getBestsellers } from '@/data/products'
import ProductCard from '@/components/product/ProductCard'

const bestsellers = getBestsellers()

export default function Bestsellers() {
  return (
    <section className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20 md:py-28">
      <div className="text-center mb-14">
        <h2 className="font-serif text-[28px] md:text-[36px] tracking-[0.04em] text-rich-brown">
          Bestsellers
        </h2>
        <div className="w-[40px] h-[1px] bg-gold mx-auto mt-4" />
        <p className="mt-4 text-deep-taupe text-sm tracking-[0.04em] max-w-[360px] mx-auto">
          The pieces our community loves most — designed to be worn and treasured daily.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
        {bestsellers.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
