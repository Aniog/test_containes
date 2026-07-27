import { CheckCircle2 } from "lucide-react"
import PageHero from "@/components/ui/PageHero"
import { Section, SectionHeader } from "@/components/ui/Section"
import Card from "@/components/ui/Card"
import CtaBanner from "@/components/sections/CtaBanner"
import { useStrkImages } from "@/lib/useStrkImages"
import { productCategories } from "@/data/content"

function CategoryGrid() {
  const ref = useStrkImages([])
  return (
    <Section ref={ref}>
      <SectionHeader
        eyebrow="Products We Source"
        title="Categories backed by established supplier networks"
        description="We focus on product categories where we have verified factories, known quality benchmarks, and real production experience."
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {productCategories.map((p) => (
          <Card key={p.id} className="overflow-hidden p-0">
            <img
              alt={p.title}
              data-strk-img-id={p.imgId}
              data-strk-img={`[products-${p.id}-desc] [products-${p.id}-title] [products-section-title]`}
              data-strk-img-ratio="4x3"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="aspect-[4/3] w-full object-cover"
            />
            <div className="p-6">
              <h3 className="heading-3" id={`products-${p.id}-title`}>
                {p.title}
              </h3>
              <p className="mt-2 text-body" id={`products-${p.id}-desc`}>
                {p.desc}
              </p>
            </div>
          </Card>
        ))}
      </div>
      <span id="products-section-title" className="hidden">
        Product categories sourced from China
      </span>
    </Section>
  )
}

function Capabilities() {
  const items = [
    {
      title: "Custom & OEM manufacturing",
      desc: "Custom tooling, private label, and OEM production with spec lock-in and sample approval before mass production.",
    },
    {
      title: "Compliance & labeling support",
      desc: "Guidance on common destination-market requirements such as CE, FCC, and labeling, coordinated with the factory.",
    },
    {
      title: "Packaging & branding",
      desc: "Custom retail packaging, inserts, and barcoding, with packaging samples reviewed before bulk run.",
    },
    {
      title: "Consolidation across categories",
      desc: "Mix categories from different suppliers into a single consolidated shipment to reduce landed freight cost.",
    },
  ]
  return (
    <Section className="bg-white">
      <SectionHeader
        eyebrow="Capabilities"
        title="Beyond basic sourcing"
        description="We handle the details that turn a factory order into a ready-to-sell product."
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {items.map((it) => (
          <div
            key={it.title}
            className="flex gap-4 rounded-xl border border-line bg-surface p-6"
          >
            <CheckCircle2 className="h-6 w-6 shrink-0 text-green-600" />
            <div>
              <h3 className="heading-3">{it.title}</h3>
              <p className="mt-2 text-body">{it.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

function NotListed() {
  return (
    <Section>
      <div className="rounded-2xl border border-line bg-white p-8 text-center shadow-sm lg:p-12">
        <h2 className="heading-2">Don't see your product category?</h2>
        <p className="lead mx-auto mt-4 max-w-2xl">
          We evaluate new categories regularly. Send us your product details and
          target specs, and we'll confirm whether we can source it to our
          quality standard.
        </p>
        <div className="mt-8">
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-accent-hover"
          >
            Ask about your product
          </a>
        </div>
      </div>
    </Section>
  )
}

export default function Products() {
  return (
    <>
      <PageHero
        eyebrow="Products We Source"
        title="Products we source from China"
        description="A practical overview of the categories we work with most, and the manufacturing regions behind them."
      />
      <CategoryGrid />
      <Capabilities />
      <NotListed />
      <CtaBanner />
    </>
  )
}
