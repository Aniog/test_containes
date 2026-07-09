import { Link } from "react-router-dom"
import { products } from "@/data/products"
import ProductCard from "@/components/product/ProductCard"
import { useStrkImages } from "@/hooks/useStrkImages"
import Reveal from "@/components/ui/Reveal"

export default function Bestsellers() {
  const containerRef = useStrkImages([])
  const bestsellers = products.slice(0, 5)

  return (
    <section ref={containerRef} className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
      <Reveal className="mb-12 text-center">
        <p className="text-[11px] font-medium uppercase tracking-widest3 text-gold">
          Most Loved
        </p>
        <h2 className="mt-3 font-serif text-4xl font-light text-charcoal md:text-5xl">
          Bestsellers
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-stone">
          The pieces our community reaches for again and again — quietly elegant,
          made to be worn every day.
        </p>
      </Reveal>

      <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 lg:grid-cols-5 lg:gap-x-6">
        {bestsellers.map((product, i) => (
          <Reveal key={product.id} delay={i * 80}>
            <ProductCard product={product} />
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-14 text-center">
        <Link
          to="/shop"
          className="inline-block border border-charcoal px-10 py-4 text-[11px] font-medium uppercase tracking-widest2 text-charcoal transition-colors hover:bg-charcoal hover:text-cream"
        >
          View All Jewelry
        </Link>
      </Reveal>
    </section>
  )
}
