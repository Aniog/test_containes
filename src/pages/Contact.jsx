import React from 'react'
import PageHeader from '../components/PageHeader'
import { Section } from '../components/Section'
import InquiryForm from '../components/InquiryForm'
import { Mail, Phone, MapPin, Clock, MessageSquare } from 'lucide-react'

export default function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get a Free Sourcing Quote"
        description="Send us your sourcing requirements and we will reply within 1 business day. Our team is based in China and works in English."
      />

      <Section className="bg-white">
        <div className="grid gap-12 lg:grid-cols-5">
          <aside className="lg:col-span-2 space-y-6">
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-900">Direct contacts</h2>
              <ul className="mt-5 space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-blue-700 mt-0.5" />
                  <div>
                    <p className="font-semibold text-slate-900">Email</p>
                    <a href="mailto:contact@ssourcingchina.com" className="text-slate-700 hover:text-blue-700">contact@ssourcingchina.com</a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-blue-700 mt-0.5" />
                  <div>
                    <p className="font-semibold text-slate-900">Phone / WhatsApp / WeChat</p>
                    <p className="text-slate-700">+86 138 0000 0000</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-blue-700 mt-0.5" />
                  <div>
                    <p className="font-semibold text-slate-900">Office</p>
                    <p className="text-slate-700">Yiwu, Zhejiang, China</p>
                    <p className="text-slate-500 text-xs mt-1">Additional staff in Shenzhen & Guangzhou</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-blue-700 mt-0.5" />
                  <div>
                    <p className="font-semibold text-slate-900">Hours</p>
                    <p className="text-slate-700">Mon – Sat, 09:00 – 18:00 (GMT+8)</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <div className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-blue-700" />
                <h3 className="text-base font-semibold text-slate-900">What happens next</h3>
              </div>
              <ol className="mt-4 space-y-3 text-sm text-slate-700">
                <li className="flex gap-3"><span className="text-blue-700 font-semibold">1.</span> A sourcing manager reviews your inquiry.</li>
                <li className="flex gap-3"><span className="text-blue-700 font-semibold">2.</span> We reply with questions and a sourcing plan.</li>
                <li className="flex gap-3"><span className="text-blue-700 font-semibold">3.</span> Once aligned, we begin supplier outreach.</li>
              </ol>
            </div>
          </aside>

          <div className="lg:col-span-3">
            <div className="rounded-xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-900">Sourcing inquiry form</h2>
              <p className="mt-2 text-sm text-slate-600">
                Fields marked with <span className="text-rose-600">*</span> are required. Everything you share remains confidential.
              </p>
              <div className="mt-6">
                <InquiryForm />
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
