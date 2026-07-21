import { Link } from "react-router-dom"
import ProductCard from "@/components/shared/ProductCard"
import SectionHeading from "@/components/shared/SectionHeading"

const BestsellersSection = ({ products, onAddToCart }) => {
  return (
    <section className="bg-ivory py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Bestsellers"
            title="The Velmora signatures women reach for first"
            description="A refined edit of gifting favorites, sculptural huggies, and softly luminous pieces designed to feel premium from the very first wear."
          />
          <Link
            to="/shop"
            className="text-sm font-medium uppercase tracking-[0.24em] text-velvet transition hover:text-rosewood"
          >
            View all jewelry
          </Link>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} compact />
          ))}
        </div>
      </div>
    </section>
  )
}

export default BestsellersSection
