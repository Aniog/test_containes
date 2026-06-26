import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import PageHero from '@/components/shared/PageHero'
import SectionHeader from '@/components/shared/SectionHeader'
import Button from '@/components/shared/Button'
import StockImage from '@/components/shared/StockImage'
import InquiryForm from '@/components/shared/InquiryForm'
import { products } from '@/data/content'

export default function Products() {
  return (
    <>
      <PageHero
        eyebrow="Products We Source"
        title="Product categories we cover for overseas buyers"
        description="We work with manufacturers across the categories most B2B buyers source from China — from consumer goods to industrial hardware."
        image={{
          imgId: 'products-hero-bg-2f6d8a',
          query: '[products-hero-title]',
        }}
      />

      <section className="py-20 md:py-24 bg-white">
        <div className="container-page">
          <SectionHeader
            eyebrow="Categories"
            title="Main sourcing categories"
            description="Within each category, we work with multiple verified factories and can usually propose a few options matched to your specifications and budget."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {products.map((cat) => (
              <div
                key={cat.id}
                className="bg-white border border-brand-line rounded-xl p-6 md:p-7 hover:border-brand-ink/30 transition-colors"
              >
                <h3 className="text-lg md:text-xl font-semibold text-brand-ink">
                  {cat.title}
                </h3>
                <ul className="mt-4 space-y-2">
                  {cat.items.map((it) => (
                    <li
                      key={it}
                      className="flex items-start gap-2 text-sm md:text-base text-brand-text/85"
                    >
                      <span className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-brand-accent shrink-0" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-brand-mist">
        <div className="container-page">
          <SectionHeader
            eyebrow="Specialized Capabilities"
            title="Capabilities that come up most often"
            description="Beyond the categories above, our partner factories cover common production capabilities buyers ask for."
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {[
              {
                title: 'Private label and OEM',
                body: 'Custom branding, packaging design, and tooling for buyers building their own product line.',
              },
              {
                title: 'ODM product development',
                body: 'Working with existing factory molds and designs to adapt color, material, or features for your market.',
              },
              {
                title: 'Custom packaging',
                body: 'Retail-ready boxes, gift packaging, mailers, and sustainable packaging options.',
              },
              {
                title: 'Compliance documentation',
                body: 'CE, FCC, RoHS, REACH, Prop 65, and other documentation for regulated markets.',
              },
            ].map((c) => (
              <div
                key={c.title}
                className="bg-white border border-brand-line rounded-xl p-6 md:p-7 flex gap-4"
              >
                <CheckCircle2 className="w-6 h-6 text-brand-accent shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-lg font-semibold text-brand-ink">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-sm md:text-base text-brand-muted leading-relaxed">
                    {c.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-white">
        <div className="container-page">
          <SectionHeader
            eyebrow="Not seeing your category?"
            title="If it is made in China, we can probably source it"
            description="Tell us what you are looking for. We will tell you honestly whether we are a good fit or refer you to a specialist partner."
          />
          <div className="mt-10">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-accent hover:text-brand-accent-2"
            >
              Send your product details
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-brand-mist">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow="Start a Project"
                title="Get a sourcing shortlist for your product"
                description="Share a few details and we will come back with factory options, sample plan, and the next step."
              />
              <div className="mt-8">
                <StockImage
                  imgId="products-form-img-9a7c3f"
                  query="[products-form-title]"
                  ratio="4x3"
                  width={700}
                  alt=""
                  className="w-full"
                />
                <p
                  id="products-form-title"
                  className="sr-only"
                >
                  Sourcing inquiry form
                </p>
              </div>
            </div>
            <div className="lg:col-span-7">
              <InquiryForm source="products" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}