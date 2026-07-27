import { Link } from "react-router-dom"
import { ArrowRight, Check } from "lucide-react"
import { PageHero } from "@/components/shared/PageHero"
import { Section, SectionHeader } from "@/components/ui/Section"
import { StrkImage } from "@/components/ui/StrkImage"
import { InquiryForm } from "@/components/shared/InquiryForm"
import { productCategories } from "@/data/content"

const imgHints = {
  electronics: "consumer electronics gadgets assembly line factory",
  "home-kitchen": "kitchen utensils home goods production factory",
  apparel: "garment clothing textile factory sewing",
  beauty: "skincare cosmetics packaging bottles factory",
  industrial: "metal hardware parts factory machinery",
  packaging: "cardboard boxes packaging printing factory",
  outdoor: "outdoor sports equipment camping factory",
  kids: "kids toys wooden colorful factory production",
}

const categoryMeta = {
  electronics: {
    bullets: [
      "Phone, audio and small appliance OEMs",
      "CE / UKCA / FCC coordination on request",
      "Cable, charger and packaging sourcing bundled",
    ],
  },
  "home-kitchen": {
    bullets: [
      "Stainless steel, glass, silicone, bamboo and plastic",
      "FDA / LFGB material compliance as required",
      "Custom colour, finish and retail packaging",
    ],
  },
  apparel: {
    bullets: [
      "Woven, knit, denim, bags, hats, workwear",
      "BSCI / SEDEX audited factories on request",
      "Size sets, lab dips and print approvals",
    ],
  },
  beauty: {
    bullets: [
      "GMP / ISO 22716 factory partners",
      "OEM formulas, filling, assembly and packaging",
      "EU CPNP, US FDA facility registration coordination",
    ],
  },
  industrial: {
    bullets: [
      "Machined parts, sheet metal, plastic injection",
      "ISO 9001 partner factories",
      "PPAP / sample approval documentation",
    ],
  },
  packaging: {
    bullets: [
      "Offset, digital and flexo print suppliers",
      "FSC paper and recyclable materials available",
      "Custom inserts, sleeves, stickers and manuals",
    ],
  },
  outdoor: {
    bullets: [
      "Camping, fitness, water sports, cycling, pet",
      "Mixed-material sourcing (fabric, metal, plastic)",
      "Retail-ready and bulk packaging options",
    ],
  },
  kids: {
    bullets: [
      "Wood, plush, silicone, fabric and plastic",
      "EN71 / ASTM F963 toy safety compliance",
      "Age-appropriate packaging and labelling",
    ],
  },
}

export function Products() {
  return (
    <>
      <PageHero
        eyebrow="Products we source"
        title="Eight categories we work in every week"
        subtitle="If your product fits one of these categories, we likely have vetted factories on file and can shortlist within days. Not in the list? Ask us — we still may be able to help."
      />

      <Section bg="white">
        <div className="space-y-16 md:space-y-20">
          {productCategories.map((p, i) => {
            const reverse = i % 2 === 1
            const meta = categoryMeta[p.id] || { bullets: [] }
            return (
              <div
                key={p.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                <div className={`lg:col-span-6 ${reverse ? "lg:order-2" : ""}`}>
                  <StrkImage
                    imgId={`cat-img-${p.id}`}
                    query={`[cat-${p.id}-title] [cat-${p.id}-items] [cat-${p.id}-desc] ${imgHints[p.id] || ""}`.trim()}
                    ratio="4x3"
                    width={900}
                    alt={p.title}
                    className="aspect-[4/3]"
                  />
                </div>
                <div className={`lg:col-span-6 ${reverse ? "lg:order-1" : ""}`}>
                  <p className="eyebrow text-accent-600">
                    Category {String(i + 1).padStart(2, "0")}
                  </p>
                  <h2
                    id={`cat-${p.id}-title`}
                    className="mt-3 text-2xl md:text-3xl font-bold text-slate-900"
                  >
                    {p.title}
                  </h2>
                  <p
                    id={`cat-${p.id}-desc`}
                    className="mt-3 text-base text-slate-600 leading-relaxed"
                  >
                    {p.desc}
                  </p>
                  <p
                    id={`cat-${p.id}-items`}
                    className="mt-3 text-sm text-slate-700 leading-relaxed"
                  >
                    <span className="font-semibold text-slate-900">Common items: </span>
                    {p.items}
                  </p>
                  {meta.bullets.length > 0 && (
                    <ul className="mt-5 space-y-2 text-sm text-slate-700">
                      {meta.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-accent-500 mt-0.5 shrink-0" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </Section>

      <Section bg="slate">
        <div className="rounded-xl border border-slate-200 bg-white p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center">
            <div className="md:col-span-2">
              <p className="eyebrow text-accent-600">Not in these categories?</p>
              <h2 className="mt-2 text-xl md:text-2xl font-bold text-slate-900">
                We also handle one-off and cross-category projects.
              </h2>
              <p className="mt-3 text-sm text-slate-600">
                From industrial equipment components to niche consumer
                products, our supplier network goes beyond the eight main
                categories. Send us your product and we'll be honest about
                whether we're the right fit.
              </p>
            </div>
            <div className="md:text-right">
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 bg-navy-900 hover:bg-navy-800 text-white font-semibold rounded-md px-5 py-3 text-sm"
              >
                Ask about your product <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <Section bg="navySubtle" id="inquiry">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5">
            <p className="eyebrow text-accent-600">Get started</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">
              Send your product brief
            </h2>
            <p className="mt-4 text-base text-slate-600">
              The fastest way to find out if we can help is to send the
              product spec and target quantity. We usually reply within 1
              business day.
            </p>
          </div>
          <div className="lg:col-span-7">
            <InquiryForm />
          </div>
        </div>
      </Section>
    </>
  )
}

export default Products
