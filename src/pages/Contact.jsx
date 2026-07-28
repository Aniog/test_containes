import { Mail, MapPin, MessageSquare, PackageCheck } from 'lucide-react'
import InquiryForm from '@/components/shared/InquiryForm'

const Contact = () => (
  <main>
    <section className="bg-brand-navy py-16 text-white md:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div className="flex flex-col justify-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-gold">Contact</p>
          <h1 id="contact-page-title" className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
            Request a sourcing quote from SSourcing China
          </h1>
          <p id="contact-page-desc" className="mt-5 text-lg leading-8 text-white/78">
            Tell us what you want to source, your target quantity, and your destination market. We will review your request and outline practical next steps.
          </p>
          <div className="mt-8 grid gap-4">
            {[{ icon: MessageSquare, text: 'Clear English communication for overseas buyers' }, { icon: PackageCheck, text: 'Supplier, sample, QC, and shipment coordination' }, { icon: MapPin, text: 'China-based sourcing support close to supplier clusters' }, { icon: Mail, text: 'Best for qualified B2B product sourcing requests' }].map(({ icon: Icon, text }) => (
              <p key={text} className="flex gap-3 rounded-2xl bg-white/10 px-4 py-3 text-sm font-medium text-white">
                <Icon className="mt-0.5 h-4 w-4 text-brand-gold" />{text}
              </p>
            ))}
          </div>
        </div>
        <InquiryForm />
      </div>
    </section>
  </main>
)

export default Contact
