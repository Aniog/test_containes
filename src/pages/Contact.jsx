import PageHeader from '@/components/shared/PageHeader'
import InquiryForm from '@/components/shared/InquiryForm'
import { Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react'

export default function Contact() {
  return (
    <div>
      <PageHeader
        eyebrow="Contact"
        title="Get a free sourcing quote"
        description="Tell us what you want to source. Our team replies within 1 business day with a clear next step and an indicative quote — no obligation."
      />

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">Reach our sourcing team</h2>
                <p className="mt-3 text-base text-slate-600 leading-relaxed">
                  Email is usually the fastest way to start. If your project is urgent,
                  please mention it in the form and we'll prioritize your reply.
                </p>
              </div>

              <ul className="space-y-5">
                <li className="flex items-start gap-3">
                  <span className="flex w-10 h-10 items-center justify-center rounded-md bg-blue-50 text-blue-700 shrink-0">
                    <Mail className="w-5 h-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Email</p>
                    <a href="mailto:hello@ssourcingchina.com" className="text-sm text-slate-700 hover:text-blue-700">
                      hello@ssourcingchina.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex w-10 h-10 items-center justify-center rounded-md bg-blue-50 text-blue-700 shrink-0">
                    <Phone className="w-5 h-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Phone</p>
                    <p className="text-sm text-slate-700">+86 138 0000 0000</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex w-10 h-10 items-center justify-center rounded-md bg-blue-50 text-blue-700 shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">WhatsApp / WeChat</p>
                    <p className="text-sm text-slate-700">Shared with you after first contact.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex w-10 h-10 items-center justify-center rounded-md bg-blue-50 text-blue-700 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Offices</p>
                    <p className="text-sm text-slate-700">Yiwu (HQ) · Shenzhen · Guangzhou</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex w-10 h-10 items-center justify-center rounded-md bg-blue-50 text-blue-700 shrink-0">
                    <Clock className="w-5 h-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Hours (China Standard Time)</p>
                    <p className="text-sm text-slate-700">Mon–Fri · 09:00 – 18:30</p>
                  </div>
                </li>
              </ul>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-sm text-slate-700 leading-relaxed">
                  <span className="font-semibold text-slate-900">Note:</span> we do not sell products
                  ourselves. We act as an independent sourcing agent on behalf of overseas buyers.
                </p>
              </div>
            </div>

            <div className="lg:col-span-3">
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
