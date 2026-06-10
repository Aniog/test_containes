import PageHeader from '../components/PageHeader'
import InquiryForm from '../components/InquiryForm'
import { Mail, Phone, MapPin, MessageCircle, Clock } from 'lucide-react'

const CONTACT_BLOCKS = [
  { icon: Mail, title: 'Email', value: 'hello@ssourcingchina.com', href: 'mailto:hello@ssourcingchina.com' },
  { icon: Phone, title: 'Phone / WhatsApp', value: '+86 138 0000 0000', href: 'tel:+8613800000000' },
  { icon: MessageCircle, title: 'WeChat ID', value: 'ssourcing-china', href: null },
  { icon: MapPin, title: 'Office', value: 'Yiwu International Trade City, Yiwu, Zhejiang, China', href: null },
  { icon: Clock, title: 'Hours', value: 'Mon–Sat, 9:00–18:00 (GMT+8)', href: null },
]

export default function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Talk to a sourcing specialist"
        subtitle="Send us your project brief — product, target price, and quantities — and we'll reply within one business day with a tailored proposal."
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold text-brand-navy">Get in touch</h2>
            <p className="mt-3 text-ink-700 leading-relaxed">
              Our sourcing team is based in China. We respond to all qualified B2B inquiries
              within one business day.
            </p>

            <ul className="mt-8 space-y-5">
              {CONTACT_BLOCKS.map((b) => (
                <li key={b.title} className="flex items-start gap-4">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-brand-sky text-brand-blue shrink-0">
                    <b.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-ink-500">{b.title}</p>
                    {b.href ? (
                      <a href={b.href} className="mt-1 block text-sm text-brand-navy font-medium hover:text-brand-blue">
                        {b.value}
                      </a>
                    ) : (
                      <p className="mt-1 text-sm text-brand-navy font-medium">{b.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10 rounded-xl border border-ink-200 bg-surface-muted p-5">
              <p className="text-sm font-semibold text-brand-navy">What to include in your inquiry</p>
              <ul className="mt-3 space-y-2 text-sm text-ink-700 list-disc pl-5">
                <li>Product description, key specs, or reference links</li>
                <li>Target order quantity per shipment</li>
                <li>Target unit price or budget range</li>
                <li>Required certifications (CE, FCC, RoHS, EN71, etc.)</li>
                <li>Destination country and timeline</li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-3">
            <InquiryForm sourcePage="contact" />
          </div>
        </div>
      </section>
    </>
  )
}
