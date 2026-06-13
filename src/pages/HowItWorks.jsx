import ProcessSection from '../components/sections/ProcessSection'
import ContactCTASection from '../components/sections/ContactCTASection'
import FAQSection from '../components/sections/FAQSection'

export default function HowItWorks() {
  return (
    <main>
      <section className="bg-brand-navy px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">How it works</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">A structured sourcing workflow from requirements to shipment readiness</h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">We help buyers organize supplier options, order details, production updates, quality checkpoints, and export handover information.</p>
        </div>
      </section>
      <ProcessSection />
      <FAQSection />
      <ContactCTASection />
    </main>
  )
}
