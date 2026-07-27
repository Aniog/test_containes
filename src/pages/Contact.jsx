import InquiryForm from '../components/InquiryForm.jsx'
import PageHero from '../components/PageHero.jsx'
import { useStrkImages } from '../hooks/useStrkImages.js'

const Contact = () => {
  const containerRef = useStrkImages()

  return (
    <main ref={containerRef} className="bg-slate-50 text-slate-950">
      <PageHero
        eyebrow="Contact"
        title="Get a Free Sourcing Quote"
        description="Send your product details and sourcing needs. We will review the information and respond with practical next steps for supplier sourcing, verification, QC, production follow-up, or shipping coordination."
        imageId="contact-hero-export-qc-0a7f36"
        imageAlt="Shipping cartons and quality control checklist for export order"
        visualContext="export shipping cartons quality control checklist and factory inspection before international shipment"
      />
      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <aside className="rounded-3xl bg-slate-950 p-8 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">What to include</p>
            <h2 className="mt-3 text-3xl font-bold text-white">A stronger brief gets a more useful answer</h2>
            <ul className="mt-6 grid gap-4 text-sm leading-6 text-slate-200">
              <li>Product photos, drawings, materials, or specifications.</li>
              <li>Target quantity, packaging needs, and destination country.</li>
              <li>Current supplier status, if you already have one.</li>
              <li>Quality concerns, inspection needs, and shipment timeline.</li>
            </ul>
          </aside>
          <InquiryForm />
        </div>
      </section>
    </main>
  )
}

export default Contact
