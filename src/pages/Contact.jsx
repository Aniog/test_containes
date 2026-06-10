import { Mail, Phone, MapPin, Clock, MessageSquare } from 'lucide-react'
import PageHero from '../components/site/PageHero'
import InquiryForm from '../components/site/InquiryForm'

export default function Contact() {
  return (
    <div>
      <PageHero
        eyebrow="Contact"
        title="Let&rsquo;s talk about your sourcing project"
        description="Tell us what you want to source and we&rsquo;ll reply within 24 working hours with suggested suppliers, an indicative price range and clear next steps."
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid gap-10 lg:grid-cols-12">
            <aside className="lg:col-span-4 order-2 lg:order-1 space-y-6">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
                <h2 className="text-lg font-semibold text-slate-900">Get in touch directly</h2>
                <p className="mt-2 text-sm text-slate-600">Prefer email or WhatsApp? Reach our team in Shenzhen during local business hours.</p>
                <ul className="mt-5 space-y-4 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-white border border-slate-200 text-slate-900"><Mail className="h-4 w-4" /></span>
                    <div>
                      <p className="font-semibold text-slate-900">Email</p>
                      <a href="mailto:hello@ssourcingchina.com" className="text-slate-600 hover:text-red-600">hello@ssourcingchina.com</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-white border border-slate-200 text-slate-900"><Phone className="h-4 w-4" /></span>
                    <div>
                      <p className="font-semibold text-slate-900">Phone / WhatsApp</p>
                      <a href="tel:+8675500000000" className="text-slate-600 hover:text-red-600">+86 755 0000 0000</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-white border border-slate-200 text-slate-900"><MapPin className="h-4 w-4" /></span>
                    <div>
                      <p className="font-semibold text-slate-900">Office</p>
                      <p className="text-slate-600">Room 1208, Futian District,<br />Shenzhen, Guangdong, China</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-white border border-slate-200 text-slate-900"><Clock className="h-4 w-4" /></span>
                    <div>
                      <p className="font-semibold text-slate-900">Hours (China time)</p>
                      <p className="text-slate-600">Mon – Fri, 9:00 – 18:30</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-6">
                <h3 className="flex items-center gap-2 text-base font-semibold text-slate-900">
                  <MessageSquare className="h-5 w-5 text-red-600" />
                  What to include in your message
                </h3>
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-red-600" /> Product description, materials and reference links</li>
                  <li className="flex items-start gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-red-600" /> Target unit price and order quantity</li>
                  <li className="flex items-start gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-red-600" /> Required certifications (CE, FCC, RoHS, FDA, etc.)</li>
                  <li className="flex items-start gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-red-600" /> Destination country and timeline</li>
                </ul>
              </div>
            </aside>

            <div className="lg:col-span-8 order-1 lg:order-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Send a sourcing inquiry</h2>
                <p className="mt-2 text-sm text-slate-600">No commitment — your first quote and supplier shortlist are free.</p>
                <div className="mt-6">
                  <InquiryForm sourcePage="contact" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
