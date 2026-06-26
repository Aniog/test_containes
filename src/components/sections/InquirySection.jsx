import InquiryForm from './InquiryForm'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export default function InquirySection() {
  return (
    <section id="inquiry" className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-red-600">Get a quote</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
              Tell us what you need to source from China
            </h2>
            <p className="mt-4 text-base text-slate-600 md:text-lg">
              Share product details, target price and quantity. A sourcing manager replies within
              one business day with a quote, suggested factories and recommended next steps.
            </p>

            <ul className="mt-8 space-y-4 text-sm text-slate-700">
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 text-red-600" />
                <div>
                  <p className="font-semibold text-slate-900">Email</p>
                  <a href="mailto:hello@ssourcingchina.com" className="hover:underline">hello@ssourcingchina.com</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 text-red-600" />
                <div>
                  <p className="font-semibold text-slate-900">Phone / WhatsApp / WeChat</p>
                  <p>+86 138 0000 0000</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 text-red-600" />
                <div>
                  <p className="font-semibold text-slate-900">Office</p>
                  <p>Yiwu, Zhejiang Province, China</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 text-red-600" />
                <div>
                  <p className="font-semibold text-slate-900">Working hours</p>
                  <p>Mon–Sat, 9:00–18:00 China time (GMT+8)</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <InquiryForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
