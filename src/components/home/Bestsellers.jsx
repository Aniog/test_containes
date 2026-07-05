import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import ProductCard from "@/components/product/ProductCard"
import { getBestsellers } from "@/data/products"
import { useScrollReveal } from "@/hooks/useScrollReveal"

export default function Bestsellers() {
  const products = getBestsellers(5)
  useScrollReveal()

  return (
    <section className="bg-cream py-20 md:py-32">
      <div className="container-velmora">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-16 reveal">
          <div>
            <p className="eyebrow mb-3 md:mb-4">The Edit</p>
            <h2 className="display-headline text-3xl md:text-5xl text-ink">
              Our Bestsellers
            </h2>
          </div>
          <Link to="/shop" className="text-link self-start md:self-auto">
            View All
            <ArrowRight className="inline-block ml-2 h-3 w-3" strokeWidth={1.5} />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 md:gap-x-6 gap-y-10 md:gap-y-14">
          {products.map((product, idx) => (
            <div key={product.id} className="reveal" style={{ transitionDelay: `${idx * 80}ms` }}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
