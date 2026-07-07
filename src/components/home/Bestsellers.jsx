import React from "react"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import SectionHeader from "@/components/ui/SectionHeader"
import ProductCard from "@/components/ui/ProductCard"
import { products } from "@/data/products"

const Bestsellers = () => {
  const bestsellers = products
  return (
    <section className="section-pad bg-ivory">
      <div className="container-wrap">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 lg:mb-16">
          <SectionHeader
            eyebrow="Bestsellers"
            title="Loved, worn, and given again"
            description="Five pieces our community keeps coming back to — from everyday huggies to the gift that means the most."
            align="left"
          />
          <Link to="/shop" className="link-arrow shrink-0">
            Shop all
            <ArrowRight size={12} strokeWidth={1.5} />
          </Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-4 gap-y-12 sm:gap-x-6">
          {bestsellers.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Bestsellers
