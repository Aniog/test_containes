import { Mail, MapPin, MessageSquare, Ship } from 'lucide-react'
import InquiryForm from '../components/site/InquiryForm'
import PageHero from '../components/site/PageHero'

function Contact() {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Get a Free Sourcing Quote"
        description="Share your product brief, supplier concerns, or shipment questions. SSourcing China will review the details and suggest a practical next step."
      />
      <section className="bg-brand-bg py-16 text-brand-ink lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div className="space-y-5">
            {[
              { icon: MapPin, title: 'China-based sourcing support', text: 'Local supplier search, factory checks, QC inspection, and production follow-up.' },
              { icon: Mail, title: 'Email', text: 'sourcing@ssourcingchina.com' },
              { icon: MessageSquare, title: 'Best first step', text: 'Send product specs, target quantity, photos, packaging needs, and expected timeline.' },
              { icon: Ship, title: 'Shipment coordination', text: 'Supplier-side documents, carton data, labels, and handover details can be aligned with your freight partner.' },
            ].map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="rounded-2xl border border-brand-line bg-white p-6 text-brand-ink shadow-sm">
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-brand-softBlue text-brand-blue">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h2 className="text-lg font-semibold text-brand-navy">{item.title}</h2>
                      <p className="mt-2 text-sm leading-7 text-brand-ink/70">{item.text}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <InquiryForm />
        </div>
      </section>
    </main>
  )
}

export default Contact
