import PageHeader from '@/components/common/PageHeader'
import InquiryForm from '@/components/common/InquiryForm'
import { Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react'
import { company } from '@/data/site'

export default function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get a free sourcing quote"
        description="Tell us about your product and target. A sourcing coordinator will review your request and reply, usually within 1 business day."
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-14">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold tracking-tight text-brand-ink">
                Talk to a sourcing coordinator
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-brand-muted">
                Whether you are starting a new product or rescuing an order gone
                wrong, we can help. Reach us through any channel below.
              </p>

              <div className="mt-8 space-y-5">
                <ContactItem
                  icon={Mail}
                  label="Email"
                  value={company.email}
                  href={`mailto:${company.email}`}
                />
                <ContactItem
                  icon={Phone}
                  label="Phone"
                  value={company.phone}
                />
                <ContactItem
                  icon={MessageCircle}
                  label="WhatsApp"
                  value={company.whatsapp}
                />
                <ContactItem
                  icon={Clock}
                  label="Working hours"
                  value={company.hours}
                />
                <ContactItem
                  icon={MapPin}
                  label="Office"
                  value={company.address}
                />
              </div>

              <div className="mt-8 rounded-xl border border-slate-200 bg-brand-slate p-6">
                <h3 className="text-base font-bold text-brand-ink">
                  What to prepare before you write
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-brand-muted">
                  <li>• Product description or specifications</li>
                  <li>• Target price and order quantity</li>
                  <li>• Required certifications, if any</li>
                  <li>• Destination country and timeline</li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-3">
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function ContactItem({ icon: Icon, label, value, href }) {
  const content = (
    <div className="flex items-start gap-4">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-slate text-brand-blue">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted">
          {label}
        </p>
        <p className="mt-0.5 text-sm font-medium text-brand-ink">{value}</p>
      </div>
    </div>
  )
  return href ? (
    <a href={href} className="block hover:opacity-80">
      {content}
    </a>
  ) : (
    content
  )
}
