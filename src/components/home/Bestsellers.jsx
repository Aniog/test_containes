import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { Container, Section, SectionHeader } from "@/components/ui/Section"
import ProductCard from "@/components/product/ProductCard"
import { PRODUCTS } from "@/data/products"

export default function Bestsellers() {
  return (
    <Section background="paper" spacing="lg">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <SectionHeader
            eyebrow="Most Loved"
            heading={
              <span>
                The pieces our
                <br />
                <span className="italic font-light">community adores</span>.
              </span>
            }
            description="Worn daily by thousands — these are the most-reached-for pieces in the Velmora collection."
            align="left"
            className="max-w-xl"
          />
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-eyebrow text-ink hover:text-gold-deep transition-colors"
          >
            View All Pieces
            <ArrowRight size={14} strokeWidth={1.5} />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-12 md:gap-x-6">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </Section>
  )
}
