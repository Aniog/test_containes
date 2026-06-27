import { Link } from "react-router-dom"
import { products } from "@/data/products"
import ProductCard from "@/components/product/ProductCard"
import SectionHeading from "@/components/home/SectionHeading"

export default function Bestsellers() {
  const bestsellers = products.filter((p) => p.bestseller).slice(0, 5)

  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
      <SectionHeading
        eyebrow="Most Loved"
        title="Bestsellers"
        link={{ to: "/shop", label: "View All" }}
      />
      <div className="grid grid-cols-2 gap-x-5 gap-y-10 sm:gap-x-6 md:grid-cols-3 lg:grid-cols-5">
        {bestsellers.map((product, i) => (
          <ProductCard key={product.id} product={product} index={i} />
        ))}
      </div>
    </section>
  )
}
