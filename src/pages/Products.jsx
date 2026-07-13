import Seo from "@/components/shared/Seo.jsx"
import PageHero from "@/components/shared/PageHero.jsx"
import Section, { SectionHeader } from "@/components/shared/Section.jsx"
import IconByName from "@/components/shared/IconByName.jsx"
import InquiryForm from "@/components/shared/InquiryForm.jsx"
import CtaBanner from "@/components/shared/CtaBanner.jsx"
import { productCategories } from "@/data/products.js"

const iconByCategory = {
  "consumer-electronics": "Plug",
  "home-kitchen": "Box",
  "apparel-textiles": "Shirt",
  "beauty-personal-care": "Pill",
  "industrial-equipment": "Cog",
  "packaging-printing": "Package",
  "toys-sporting": "Bike",
  "furniture-decor": "Sofa",
  "auto-parts": "Truck",
}

export default function Products() {
  return (
    <>
      <Seo
        title="Products We Source from China | SSourcing China"
        description="Categories we regularly source from China: consumer electronics, home & kitchen, apparel, beauty, industrial equipment, packaging, toys, furniture, and auto parts."
      />
      <PageHero
        eyebrow="Products we source"
        title="Categories we regularly help overseas buyers with"
        description="This is a working list, not an exhaustive one. If your category is not listed, ask us anyway — we probably have a vetted factory partner for it."
      />

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {productCategories.map((cat) => (
            <article key={cat.id} className="card p-6 md:p-7 h-full">
              <div className="flex items-start gap-3 mb-4">
                <div className="icon-tile shrink-0">
                  <IconByName name={iconByCategory[cat.id] || "Box"} className="w-5 h-5" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-slate-900">
                  {cat.title}
                </h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                {cat.description}
              </p>
              <div className="mt-5 border-t border-slate-200 pt-4">
                <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-2">
                  Examples
                </p>
                <ul className="flex flex-wrap gap-1.5">
                  {cat.examples.map((e) => (
                    <li key={e} className="pill">{e}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-slate-50">
        <SectionHeader
          eyebrow="What we look for in a factory"
          title="A short list of the boxes a factory has to tick"
          description="These are the checks we run during a typical supplier shortlist and verification, regardless of category."
          align="center"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {[
            { t: "Right business license", d: "Valid Chinese business registration, correct scope of business, and clean record." },
            { t: "Real production capacity", d: "Production lines, machinery, and workforce size that match your order quantity." },
            { t: "Export experience", d: "Track record of exporting to your market, including correct export documentation." },
            { t: "Quality system", d: "Documented QC process, in-house inspectors, and willingness to allow third-party inspections." },
          ].map((x) => (
            <div key={x.t} className="card p-5">
              <h3 className="text-base font-semibold text-slate-900">{x.t}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{x.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-5">
            <p className="eyebrow mb-3">Tell us about your product</p>
            <h2 className="h-section">Don't see your category?</h2>
            <p className="body-base mt-4">
              We work with a much wider range of manufacturers than this page
              shows. Send us a short description and we will tell you honestly
              whether we have a strong factory network for it.
            </p>
          </div>
          <div className="lg:col-span-7">
            <InquiryForm sourcePageHint="/products" />
          </div>
        </div>
      </Section>

      <CtaBanner
        eyebrow="Have a product in mind?"
        title="Send a short brief — we will come back with a sourcing plan."
        description="We can usually tell you within one business day whether China is the right place to source your product and roughly what to budget."
        primaryTo="/contact"
        primaryLabel="Get a Free Sourcing Quote"
        secondaryTo="/case-studies"
        secondaryLabel="See Case Studies"
      />
    </>
  )
}
