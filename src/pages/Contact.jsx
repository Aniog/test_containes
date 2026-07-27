import { Mail, Phone, MapPin, Clock, Globe, MessageSquare } from 'lucide-react'
import PageHero from '@/components/shared/PageHero'
import InquiryForm from '@/components/shared/InquiryForm'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { FAQS } from '@/data/content'

const contactDetails = [
  {
    icon: Mail,
    label: 'Email',
    value: 'inquiries@ssourcingchina.com',
    note: 'Fastest way to reach us — attach specs or links',
  },
  {
    icon: Phone,
    label: 'Phone / WhatsApp',
    value: '+86 755 8632 4471',
    note: 'Mon–Fri, 9:00–18:00 (GMT+8)',
  },
  {
    icon: MapPin,
    label: 'Office',
    value: 'Room 1806, Block B, Nanshan i-Park, Shenzhen, Guangdong, China',
    note: 'Visits by appointment',
  },
]

const Contact = () => (
  <>
    <PageHero eyebrow="Contact" title="Tell us what you want to source">
      <p>
        Send your product details and we will reply within one working day with an
        initial assessment — free and without obligation.
      </p>
    </PageHero>

    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="space-y-8 lg:col-span-2">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900">Contact details</h2>
              <div className="mt-6 space-y-6">
                {contactDetails.map((item) => (
                  <div key={item.label} className="flex gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50">
                      <item.icon className="h-5 w-5 text-blue-800" />
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-900">{item.label}</h3>
                      <p className="mt-0.5 text-sm text-slate-700">{item.value}</p>
                      <p className="mt-0.5 text-xs text-slate-500">{item.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                <Clock className="h-4 w-4 text-blue-800" /> What happens after you submit
              </h3>
              <ol className="mt-4 space-y-3 text-sm leading-relaxed text-slate-600">
                <li className="flex gap-3">
                  <span className="font-semibold text-blue-800">1.</span>
                  A sourcing specialist reviews your requirements the same or next working day.
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-blue-800">2.</span>
                  You receive clarifying questions or an initial price and MOQ assessment.
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-blue-800">3.</span>
                  If it makes sense to proceed, you get a written scope and a fixed quote.
                </li>
              </ol>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                <Globe className="h-4 w-4 text-blue-800" /> Who we work with
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                E-commerce sellers, retail chains, distributors, and startups in North
                America, Europe, and Australia. Most programs start from USD 5,000–10,000
                per order.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                <MessageSquare className="h-4 w-4 text-blue-800" /> Helpful details to include
              </h3>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-slate-600">
                <li>Product links, photos, drawings, or reference samples</li>
                <li>Materials, dimensions, and any certification requirements</li>
                <li>Target price, estimated quantity, and destination country</li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-3">
            <InquiryForm />
          </div>
        </div>
      </div>
    </section>

    <section className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900">
          Frequently asked questions
        </h2>
        <Accordion type="single" collapsible className="mt-10 rounded-xl border border-slate-200 bg-white px-6 shadow-sm">
          {FAQS.map((faq, index) => (
            <AccordionItem key={faq.q} value={`contact-faq-${index}`} className={index === FAQS.length - 1 ? 'border-b-0' : ''}>
              <AccordionTrigger>{faq.q}</AccordionTrigger>
              <AccordionContent>{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  </>
)

export default Contact
