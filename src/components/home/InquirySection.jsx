import SectionHeading from '@/components/shared/SectionHeading'
import InquiryForm from '@/components/shared/InquiryForm'
import { Mail, Phone, MessageCircle, Clock } from 'lucide-react'

export default function InquirySection() {
  return (
    <section id="inquiry" className="bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <SectionHeading
              eyebrow="Start sourcing"
              title="Tell us what you want to source"
              description="Send us the basics of your project. Our team replies within 1 business day with a clear next step and an indicative quote."
            />

            <ul className="mt-8 space-y-5">
              <li className="flex items-start gap-3">
                <span className="flex w-10 h-10 items-center justify-center rounded-md bg-white border border-slate-200 text-blue-700 shrink-0">
                  <Mail className="w-5 h-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-900">Email</p>
                  <a href="mailto:hello@ssourcingchina.com" className="text-sm text-slate-600 hover:text-blue-700">
                    hello@ssourcingchina.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex w-10 h-10 items-center justify-center rounded-md bg-white border border-slate-200 text-blue-700 shrink-0">
                  <Phone className="w-5 h-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-900">Phone</p>
                  <p className="text-sm text-slate-600">+86 138 0000 0000</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex w-10 h-10 items-center justify-center rounded-md bg-white border border-slate-200 text-blue-700 shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-900">WhatsApp / WeChat</p>
                  <p className="text-sm text-slate-600">Available on request after first contact.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex w-10 h-10 items-center justify-center rounded-md bg-white border border-slate-200 text-blue-700 shrink-0">
                  <Clock className="w-5 h-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-900">Response time</p>
                  <p className="text-sm text-slate-600">Within 1 business day, Monday–Friday.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <InquiryForm />
          </div>
        </div>
      </div>
    </section>
  )
}
