import { useStrkImages } from '@/lib/useStrkImages'
import ProductsSection from '@/components/sections/ProductsSection'
import InquiryForm from '@/components/forms/InquiryForm'
import PageHero from '@/components/sections/PageHero'

const notes = [
  'Provide drawings, photos, samples, dimensions, target quantity, and packaging expectations when available.',
  'For regulated products, certification and destination market requirements should be clarified early.',
  'If your category is not listed, send details and we will advise whether it is suitable for our sourcing process.',
]

export default function Products() {
  const containerRef = useStrkImages()

  return (
    <main ref={containerRef}>
      <PageHero
        eyebrow="Products we source"
        title="Supplier sourcing for practical B2B product categories"
        description="From consumer goods to industrial parts, SSourcing China helps buyers screen suppliers, confirm specifications, and prepare quality control checkpoints before shipment."
      />
      <ProductsSection />
      <section className="bg-white py-16 text-brand-navy md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-cyan">Before sourcing</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Better product information leads to better supplier responses</h2>
            <div className="mt-7 grid gap-4">
              {notes.map((note) => (
                <div key={note} className="rounded-xl border border-brand-line bg-brand-ice p-5 text-sm leading-7 text-brand-slate">
                  {note}
                </div>
              ))}
            </div>
          </div>
          <InquiryForm compact />
        </div>
      </section>
    </main>
  )
}
