import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import InquiryForm from '@/components/shared/InquiryForm'

export default function Contact() {
  return (
    <>
      <section className="bg-slate-900 py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold tracking-wide uppercase text-brand-300 mb-3">
            Get in Touch
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Request a free sourcing quote
          </h1>
          <p className="mt-5 text-lg text-slate-300 leading-relaxed">
            Tell us about your product and sourcing goals. We will respond with
            a clear plan within 24 hours.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-2">
              <InquiryForm />
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl border border-slate-200 p-6">
                <h2 className="text-lg font-semibold text-slate-900">
                  Contact information
                </h2>
                <p className="mt-2 text-sm text-slate-600">
                  Based in Shenzhen, we work with buyers across North America,
                  Europe, Australia, and the Middle East.
                </p>
                <ul className="mt-5 space-y-4">
                  <li className="flex items-start gap-3 text-sm text-slate-700">
                    <Mail className="w-5 h-5 text-brand-700 shrink-0" />
                    <span>hello@ssourcingchina.com</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-slate-700">
                    <Phone className="w-5 h-5 text-brand-700 shrink-0" />
                    <span>+86 755 1234 5678</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-slate-700">
                    <MapPin className="w-5 h-5 text-brand-700 shrink-0" />
                    <span>
                      18F, Tower B, Futian CBD
                      <br />
                      Shenzhen, Guangdong, China
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-slate-700">
                    <Clock className="w-5 h-5 text-brand-700 shrink-0" />
                    <span>
                      Mon – Fri: 9:00 AM – 6:30 PM CST
                      <br />
                      We reply to inquiries within 24 hours.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-brand-800 rounded-xl p-6 text-white">
                <h3 className="text-lg font-semibold">
                  What happens after you submit?
                </h3>
                <ol className="mt-4 space-y-3 text-sm text-blue-100 list-decimal list-inside">
                  <li>We review your product requirements within 24 hours.</li>
                  <li>We send questions or a supplier search plan.</li>
                  <li>We start sourcing once the plan is confirmed.</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
