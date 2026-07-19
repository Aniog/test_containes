import { Link } from "react-router-dom"
import { products } from "@/data/products"
import ProductCard from "@/components/product/ProductCard"
import SectionHeading from "@/components/home/SectionHeading"

export default function Bestsellers() {
  return (
    <section className="mx-auto max-w-8xl px-5 py-20 md:px-8 md:py-28">
      <SectionHeading
        eyebrow="Most Loved"
        title="Bestsellers"
        subtitle="The pieces our community reaches for, again and again."
      />
      <div className="mt-12 grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 lg:grid-cols-5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="mt-14 text-center">
        <Link
          to="/shop"
          className="inline-block border border-ink px-10 py-4 text-xs uppercase tracking-widest2 text-ink transition-colors hover:bg-ink hover:text-ivory"
        >
          View All
        </Link>
      </div>
    </section>
  )
}
