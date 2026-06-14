import * as React from "react"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { Button } from "@/components/ui/Button"
import { ProductCard } from "@/components/products/ProductCard"
import { products } from "@/data/products"

export function ProductsShowcase() {
  return (
    <section className="bg-ink py-24 md:py-32 border-t border-line">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeading
            eyebrow="The Lineup"
            title={
              <span>
                Five machines,{" "}
                <span className="text-copper-400">seven categories.</span>
              </span>
            }
            subtitle="Each ARTITECT model is engineered to lead its category, with a small set of overlapping options that let us tailor the build to your shop, your materials and your mix."
          />
          <Button variant="secondary" size="md" className="self-start md:self-auto">
            <Link to="/products" className="flex items-center gap-2">
              View all machines
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.slice(0, 3).map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
