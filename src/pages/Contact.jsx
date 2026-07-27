import { useStrkImages } from '@/lib/useStrkImages'
import { contactHighlights } from '@/data/siteData'
import InquiryForm from '@/components/forms/InquiryForm'
import PageHero from '@/components/sections/PageHero'

export default function Contact() {
  const containerRef = useStrkImages()

  return (
    <main ref={containerRef}>
      <PageHero
        eyebrow="Contact"
        title="Get a Free Sourcing Quote"
        description="Send your sourcing request and receive a practical review of supplier search, verification, QC, production follow-up, or shipping coordination options."
      />
      <section className="bg-brand-ice py-16 text-brand-navy md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <div className="overflow-hidden rounded-3xl border border-brand-line bg-white p-4 shadow-b2b">
              <img
                alt="Shipping containers and export coordination in China"
                className="h-72 w-full rounded-2xl object-cover"
                data-strk-img-id="contact-shipping-containers-671ad9"
                data-strk-img="[contact-image-desc] [contact-image-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="p-4">
                <h2 id="contact-image-title" className="text-2xl font-bold tracking-tight">What happens after you send a request?</h2>
                <p id="contact-image-desc" className="mt-3 text-sm leading-7 text-brand-slate">
                  We review your product details, clarify missing information, and suggest a realistic path for supplier sourcing, factory checks, quality inspection, or shipment support.
                </p>
              </div>
            </div>
            <div className="mt-6 grid gap-4">
              {contactHighlights.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.title} className="rounded-2xl border border-brand-line bg-white p-5 shadow-sm">
                    <div className="flex gap-4">
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-blue-50 text-brand-blue">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-bold">{item.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-brand-slate">{item.description}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <InquiryForm />
        </div>
      </section>
    </main>
  )
}
