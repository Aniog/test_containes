import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import PageHero from '@/components/PageHero.jsx'
import InquiryForm from '@/components/InquiryForm.jsx'

const CONTACT_INFO = [
  { icon: Mail, label: 'Email', value: 'inquiry@ssourcingchina.com' },
  { icon: Phone, label: 'Phone / WhatsApp', value: '+86 755 8210 4477' },
  { icon: MapPin, label: 'Office', value: 'Room 1206, Building A, Nanshan District, Shenzhen, Guangdong, China' },
  { icon: Clock, label: 'Response time', value: 'Within one business day (Mon–Fri, CST)' },
]

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get a free sourcing quote"
        subtitle="Tell us what you want to source. A specialist — not a sales bot — will reply within one business day."
        id="contact-title"
        subId="contact-subtitle"
        bgId="contact-hero-bg-o2"
      />

      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900">Talk to a sourcing specialist</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">
                The more detail you share (specifications, reference links, target price, quantity),
                the more accurate your quote will be.
              </p>
              <ul className="mt-8 space-y-5">
                {CONTACT_INFO.map((c) => (
                  <li key={c.label} className="flex gap-3.5">
                    <span className="inline-flex h-fit rounded-lg bg-brand-50 p-2.5 text-brand-600">
                      <c.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">{c.label}</p>
                      <p className="mt-0.5 text-sm leading-relaxed text-slate-600">{c.value}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-9 rounded-xl border border-slate-200 bg-white p-6">
                <h3 className="text-sm font-semibold text-slate-900">What happens after you submit?</h3>
                <ol className="mt-4 space-y-3 text-sm text-slate-600">
                  <li className="flex gap-3"><span className="font-bold text-brand-600">1.</span> We review your requirements and clarify anything unclear.</li>
                  <li className="flex gap-3"><span className="font-bold text-brand-600">2.</span> You receive a proposed scope and transparent quote.</li>
                  <li className="flex gap-3"><span className="font-bold text-brand-600">3.</span> If it fits, we start sourcing. If not, no obligation at all.</li>
                </ol>
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm md:p-8 lg:col-span-3">
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
