import React from 'react'
import InquiryForm from '@/components/InquiryForm'
import SectionHeading from '@/components/SectionHeading'

const Contact = () => {
  return (
    <div>
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-xs tracking-[2px] uppercase text-slate-400 mb-3">GET IN TOUCH</div>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">Contact Us</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Tell us about your sourcing project. We'll respond within one business day.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            <div className="mb-8">
              <SectionHeading
                title="Request a Sourcing Quote"
                description="Complete the form below with details about your project. The more information you provide, the more accurately we can respond."
              />
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-8">
              <InquiryForm />
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-slate-50 rounded-xl p-8 h-full">
              <h3 className="font-semibold text-lg mb-6">Office Information</h3>
              
              <div className="space-y-6 text-sm">
                <div>
                  <div className="font-medium text-slate-900 mb-1">Headquarters</div>
                  <div className="text-slate-600">
                    Room 1208, Building 3<br />
                    1288 Huashan Road<br />
                    Shanghai 200050, China
                  </div>
                </div>

                <div>
                  <div className="font-medium text-slate-900 mb-1">Email</div>
                  <a href="mailto:info@ssourcingchina.com" className="text-slate-600 hover:text-slate-900">info@ssourcingchina.com</a>
                </div>

                <div>
                  <div className="font-medium text-slate-900 mb-1">Phone</div>
                  <a href="tel:+862162345678" className="text-slate-600 hover:text-slate-900">+86 21 6234 5678</a>
                </div>

                <div>
                  <div className="font-medium text-slate-900 mb-1">Business Hours</div>
                  <div className="text-slate-600">
                    Monday – Friday<br />
                    8:30 AM – 6:00 PM (China Standard Time)
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200">
                <h4 className="font-medium text-sm mb-3">What to Expect</h4>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Response within 24 business hours</li>
                  <li>• Initial assessment of your requirements</li>
                  <li>• Clear next steps and timeline</li>
                  <li>• No obligation quote</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
