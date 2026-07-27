import { Link } from "react-router-dom"
import { ArrowRight, MapPin } from "lucide-react"
import Container from "@/components/ui/Container"
import SectionHeader from "@/components/ui/SectionHeader"
import Button from "@/components/ui/Button"
import PageHero from "@/components/shared/PageHero"
import { PRODUCT_CATEGORIES } from "@/data/site"
import useStrkImages from "@/hooks/useStrkImages"

const REGIONS = [
  "Shenzhen / Dongguan",
  "Yongkang / Jiangmen",
  "Ningbo / Yiwu",
  "Guangzhou",
  "Quanzhou / Xiamen",
  "Jiangsu / Zhejiang",
  "Shandong",
  "Qingdao",
  "Shanghai",
]

const Products = () => {
  const ref = useStrkImages([])

  return (
    <>
      <PageHero
        id="products"
        eyebrow="Products we source"
        title="Eight categories with established supplier networks in China"
        subtitle="We focus on categories where we have an existing supplier network, working relationships, and on-the-ground QC staff, so you get realistic options, not just a generic list."
      />

      <section ref={ref} className="py-16 md:py-24 bg-white">
        <Container>
          <div className="grid gap-6 md:gap-7 md:grid-cols-2 lg:grid-cols-3">
            {PRODUCT_CATEGORIES.map((cat, i) => (
              <article
                key={cat.id}
                className="rounded-xl border border-line bg-white overflow-hidden flex flex-col"
              >
                <div
                  className="aspect-[16/10] w-full bg-[#EDF1F7] bg-cover bg-center"
                  data-strk-bg-id={`prod-${cat.id}-bg-${i}a${i}b`}
                  data-strk-bg={`[prod-${cat.id}-desc] [prod-${cat.id}-title]`}
                  data-strk-bg-ratio="16x10"
                  data-strk-bg-width="800"
                />
                <div className="p-6 flex-1 flex flex-col">
                  <h3
                    id={`prod-${cat.id}-title`}
                    className="text-lg font-bold text-ink mb-2"
                  >
                    {cat.title}
                  </h3>
                  <p
                    id={`prod-${cat.id}-desc`}
                    className="text-sm text-ink-subtle leading-relaxed mb-4 flex-1"
                  >
                    {cat.desc}
                  </p>
                  <div className="border-t border-line pt-4">
                    <div className="text-[10px] font-semibold uppercase tracking-wider text-ink-muted mb-2">
                      Common items
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.examples.slice(0, 4).map((ex) => (
                        <span
                          key={ex}
                          className="inline-flex items-center text-xs text-[#0B2545] bg-[#EDF1F7] rounded-full px-2.5 py-1"
                        >
                          {ex}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Manufacturing regions */}
      <section className="py-16 md:py-24 bg-[#F4F6F9]">
        <Container>
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-5">
              <p className="uppercase tracking-wider text-xs font-semibold text-[#D62828] mb-3">
                Where we work
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-ink leading-tight tracking-tight">
                Eight manufacturing provinces, one Shanghai HQ
              </h2>
              <p className="mt-4 text-base text-ink-subtle leading-relaxed">
                Our headquarters is in Shanghai Pudong, and we have local
                field staff in the eight industrial clusters below. That
                means short notice visits, same-day language support, and
                on-the-ground presence for every project.
              </p>
              <Button as={Link} to="/contact" variant="primary" size="md" className="mt-6">
                Discuss a category
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {REGIONS.map((r) => (
                  <div
                    key={r}
                    className="rounded-lg bg-white border border-line p-4 flex items-start gap-2.5"
                  >
                    <MapPin className="w-4 h-4 text-[#D62828] flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-ink">{r}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default Products
