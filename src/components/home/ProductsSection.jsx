import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import Container from "@/components/ui/Container"
import SectionHeader from "@/components/ui/SectionHeader"
import { PRODUCT_CATEGORIES } from "@/data/site"
import useStrkImages from "@/hooks/useStrkImages"
import { cn } from "@/lib/utils"

const ProductsSection = () => {
  const [active, setActive] = useState(PRODUCT_CATEGORIES[0].id)
  const ref = useStrkImages([active])

  useEffect(() => {
    if (!PRODUCT_CATEGORIES.some((p) => p.id === active)) {
      setActive(PRODUCT_CATEGORIES[0].id)
    }
  }, [active])

  const activeProduct = PRODUCT_CATEGORIES.find((p) => p.id === active)

  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <SectionHeader
          eyebrow="Products we source"
          title="Categories we cover across China's main manufacturing clusters"
          subtitle="We focus on categories where we have an existing supplier network, working relationships and on-the-ground QC staff."
          align="center"
          className="mb-10 md:mb-14"
        />

        <div ref={ref} className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          <div className="lg:col-span-4">
            <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0 -mx-1 px-1">
              {PRODUCT_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActive(cat.id)}
                  className={cn(
                    "flex-shrink-0 lg:w-full text-left px-4 py-3 rounded-md text-sm font-semibold transition-all duration-150 border",
                    active === cat.id
                      ? "bg-[#0B2545] text-white border-[#0B2545]"
                      : "bg-white text-ink-subtle border-line hover:border-[#0B2545]/30 hover:text-[#0B2545]"
                  )}
                >
                  {cat.title}
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8">
            <div
              key={active}
              className="rounded-xl border border-line bg-white overflow-hidden"
            >
              <div
                className="aspect-[16/9] w-full bg-[#EDF1F7] bg-cover bg-center"
                data-strk-bg-id={`product-tab-${activeProduct.id}-bg-2c4a9d`}
                data-strk-bg={`[product-tab-${activeProduct.id}-desc] [product-tab-${activeProduct.id}-title]`}
                data-strk-bg-ratio="16x9"
                data-strk-bg-width="1200"
              />
              <div className="p-6 md:p-8">
                <h3
                  id={`product-tab-${activeProduct.id}-title`}
                  className="text-2xl font-bold text-ink mb-3"
                >
                  {activeProduct.title}
                </h3>
                <p
                  id={`product-tab-${activeProduct.id}-desc`}
                  className="text-ink-subtle leading-relaxed mb-5"
                >
                  {activeProduct.desc}
                </p>
                <div className="border-t border-line pt-5">
                  <div className="text-xs font-semibold uppercase tracking-wider text-ink-muted mb-3">
                    Common items in this category
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {activeProduct.examples.map((ex) => (
                      <span
                        key={ex}
                        className="inline-flex items-center text-xs font-medium text-[#0B2545] bg-[#EDF1F7] rounded-full px-3 py-1.5"
                      >
                        {ex}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/products"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0B2545] hover:text-[#133B6F]"
          >
            See all categories and the regions they come from
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Container>
    </section>
  )
}

export default ProductsSection
