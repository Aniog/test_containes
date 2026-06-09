import { Mail, MapPin, MessagesSquare, PhoneCall } from 'lucide-react'
import PageHero from '@/components/site/PageHero'
import InquiryForm from '@/components/contact/InquiryForm'
import FaqSection from '@/components/site/FaqSection'
import { faqItems } from '@/content/siteContent'
import { usePageMeta } from '@/lib/usePageMeta'

const contactCards = [
  {
    icon: Mail,
    title: 'Email',
    text: 'hello@ssourcingchina.com',
  },
  {
    icon: MessagesSquare,
    title: 'Response focus',
    text: 'Qualified sourcing inquiries for supplier search, verification, QC, and shipping coordination.',
  },
  {
    icon: MapPin,
    title: 'Base',
    text: 'China-based support for overseas buyers in North America, Europe, Oceania, and other markets.',
  },
  {
    icon: PhoneCall,
    title: 'Project fit',
    text: 'Best for buyers who can share product details, order context, and current sourcing challenges.',
  },
]

export default function ContactPage() {
  usePageMeta('Contact | SSourcing China')

  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Get a Free Sourcing Quote"
        description="Tell us what you want to source, what support you need, and where the shipment is going. We will review the brief and reply with a practical next step."
      />

      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.85fr,1.15fr] lg:px-8">
          <div className="space-y-6">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
                Before you submit
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">
                Share a useful sourcing brief
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Stronger inquiries usually include your product category, estimated order volume, target market, quality concerns, and whether you need supplier search, verification, inspection, or production follow-up.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {contactCards.map((item) => {
                const Icon = item.icon

                return (
                  <article key={item.title} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-slate-950">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{item.text}</p>
                  </article>
                )
              })}
            </div>
          </div>

          <InquiryForm sourcePage="contact" />
        </div>
      </section>

      <FaqSection items={faqItems.slice(0, 4)} />
    </main>
  )
}
