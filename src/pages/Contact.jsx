import PageHero from '@/components/shared/PageHero'
import InquiryForm from '@/components/shared/InquiryForm'
import { company } from '@/data/site'
import { Mail, Phone, MessageCircle, MapPin, Clock, Globe2 } from 'lucide-react'

const channels = [
  { icon: Mail, label: 'Email', value: company.email, href: `mailto:${company.email}` },
  { icon: Phone, label: 'Phone', value: company.phone, href: `tel:${company.phone.replace(/\s/g, '')}` },
  { icon: MessageCircle, label: 'WhatsApp', value: company.whatsapp, href: '#' },
  { icon: MapPin, label: 'Office', value: company.address },
  { icon: Clock, label: 'Working hours', value: company.hours },
  { icon: Globe2, label: 'Service area', value: 'Worldwide — buyers in 40+ countries' },
]

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get a free sourcing quote"
        subtitle="Tell us about your product and target price. A sourcing specialist will reply within one business day with a transparent quote and suggested next steps."
        bgQueryId="contact-hero-bg-7g8h9i"
        bgQueryText="business meeting factory negotiation China office"
      />

      <section className="section-pad bg-canvas">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-ink">Talk to a sourcing specialist</h2>
              <p className="mt-3 text-muted leading-relaxed">
                Whether you are sourcing your first product or scaling an established supply chain, we will give you a clear, honest assessment of feasibility, pricing, and timeline.
              </p>

              <ul className="mt-8 space-y-4">
                {channels.map((row) => (
                  <li key={row.label} className="flex items-start gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy/5 text-navy">
                      <row.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wide text-muted">{row.label}</div>
                      {row.href ? (
                        <a href={row.href} className="text-sm font-medium text-steel hover:text-navy">{row.value}</a>
                      ) : (
                        <div className="text-sm font-medium text-ink">{row.value}</div>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-8 rounded-xl border border-slate-200 bg-white p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-muted">What happens next</h3>
                <ol className="mt-3 space-y-3 text-sm text-ink">
                  <li className="flex gap-3"><span className="font-bold text-amber">1.</span> We review your requirements within one business day.</li>
                  <li className="flex gap-3"><span className="font-bold text-amber">2.</span> We send a free quote with a transparent service fee.</li>
                  <li className="flex gap-3"><span className="font-bold text-amber">3.</span> On your go-ahead, we start sourcing verified suppliers.</li>
                </ol>
              </div>
            </div>

            <div id="inquiry-form">
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
