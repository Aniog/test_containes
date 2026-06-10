import React from 'react'
import InquiryForm from '@/components/sections/InquiryForm'
import { MapPin, Mail, Phone } from 'lucide-react'

const Contact = () => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-primary text-white py-16 md:py-20">
        <div className="container">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold tracking-wider text-blue-300 mb-3">GET IN TOUCH</div>
            <h1 className="text-white mb-6">Contact Our Sourcing Team</h1>
            <p className="text-xl text-slate-200 leading-relaxed">
              Tell us about your sourcing needs. We will review your requirements and respond within 24 hours with a preliminary assessment and next steps.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="section container">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-2">
            <h2 className="font-semibold text-xl mb-6">SSourcing China</h2>
            
            <div className="space-y-6 text-sm">
              <div className="flex gap-4">
                <div className="text-accent mt-0.5"><MapPin className="w-5 h-5" /></div>
                <div>
                  <div className="font-medium mb-1">Office</div>
                  <div className="text-slate-600 leading-relaxed">
                    Shanghai, China<br />
                    Serving clients across Asia, Europe, North America, and Australia
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-accent mt-0.5"><Mail className="w-5 h-5" /></div>
                <div>
                  <div className="font-medium mb-1">Email</div>
                  <a href="mailto:info@ssourcingchina.com" className="text-slate-600 hover:text-accent">info@ssourcingchina.com</a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-accent mt-0.5"><Phone className="w-5 h-5" /></div>
                <div>
                  <div className="font-medium mb-1">WhatsApp / WeChat</div>
                  <a href="https://wa.me/8613812345678" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-accent">+86 138 1234 5678</a>
                </div>
              </div>
            </div>

            <div className="mt-8 p-5 bg-slate-50 rounded-lg border border-slate-200">
              <div className="font-medium mb-2 text-sm">Response Time</div>
              <p className="text-sm text-slate-600">We aim to respond to all inquiries within 24 business hours. For urgent matters, please reach out via WhatsApp.</p>
            </div>

            <div className="mt-6 text-xs text-slate-500">
              We work with buyers from all countries. English is our primary business language. We can also communicate in Mandarin Chinese as needed.
            </div>

            {/* Office / factory visual */}
            <div className="mt-6 h-40 rounded-xl overflow-hidden border border-slate-200">
              <img
                data-strk-img-id="contact-office"
                data-strk-img={`Shanghai China office factory sourcing agent professional`}
                data-strk-img-ratio="16x9"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Our team in Shanghai"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="lg:col-span-3">
            <div className="bg-white border border-slate-200 rounded-xl p-8">
              <h2 className="font-semibold text-xl mb-2">Request a Free Sourcing Quote</h2>
              <p className="text-sm text-slate-600 mb-6">Provide as much detail as possible. The more we understand about your requirements, the more accurately we can assess and respond.</p>
              <InquiryForm source="Contact Page" />
            </div>
          </div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="section bg-slate-50 border-t border-slate-200">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-heading text-center mb-8">What Happens After You Submit</h2>
            
            <div className="space-y-4">
              <div className="flex gap-4 bg-white p-5 rounded-lg border border-slate-200">
                <div className="font-mono text-sm text-accent font-semibold w-8 flex-shrink-0">1</div>
                <div>
                  <div className="font-medium">We Review Your Inquiry</div>
                  <p className="text-sm text-slate-600">Our team assesses your requirements, product category, and timeline to determine if we are a good fit.</p>
                </div>
              </div>
              <div className="flex gap-4 bg-white p-5 rounded-lg border border-slate-200">
                <div className="font-mono text-sm text-accent font-semibold w-8 flex-shrink-0">2</div>
                <div>
                  <div className="font-medium">Initial Response Within 24 Hours</div>
                  <p className="text-sm text-slate-600">You will receive a reply confirming receipt and, if appropriate, a preliminary assessment and estimated timeline.</p>
                </div>
              </div>
              <div className="flex gap-4 bg-white p-5 rounded-lg border border-slate-200">
                <div className="font-mono text-sm text-accent font-semibold w-8 flex-shrink-0">3</div>
                <div>
                  <div className="font-medium">Discovery Call (If Needed)</div>
                  <p className="text-sm text-slate-600">For complex or high-volume projects, we may schedule a call to clarify specifications and scope before providing a formal proposal.</p>
                </div>
              </div>
              <div className="flex gap-4 bg-white p-5 rounded-lg border border-slate-200">
                <div className="font-mono text-sm text-accent font-semibold w-8 flex-shrink-0">4</div>
                <div>
                  <div className="font-medium">Proposal & Next Steps</div>
                  <p className="text-sm text-slate-600">If we proceed, we provide a clear scope, timeline, and pricing for your review before any work begins.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
