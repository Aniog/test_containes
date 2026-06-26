import React, { useEffect, useRef } from 'react'
import SectionHeading from '@/components/shared/SectionHeading'
import InquiryForm from '@/components/shared/InquiryForm'
import { MapPin, Mail, Phone, Clock } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const Contact = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    document.title = 'Contact Us | Get a Free Sourcing Quote | SSourcing China'
    const cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current)
    return cleanup
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-slate-50 py-16 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          data-strk-bg-id="contact-hero-bg"
          data-strk-bg="China business office professional meeting"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-semibold mb-4">Contact Us</h1>
          <p className="text-lg text-slate-600">Tell us about your sourcing requirements. We will respond within one business day with a preliminary assessment and next steps.</p>
        </div>
      </section>

      <section className="section max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-2">Request a Sourcing Quote</h2>
              <p className="text-slate-600">Complete the form below. All fields marked with * are required.</p>
            </div>
            <InquiryForm />
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-8 sticky top-6">
              <div className="mb-6 rounded overflow-hidden">
                <img
                  data-strk-img-id="contact-office"
                  data-strk-img="contact-office China business office professional"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
                  alt="SSourcing China office"
                  className="w-full h-32 object-cover"
                />
              </div>
              <h3 className="font-semibold text-lg mb-6">SSourcing China</h3>
              
              <div className="space-y-6 text-sm">
                <div className="flex gap-4">
                  <MapPin className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium mb-1">Head Office</div>
                    <div className="text-slate-600 leading-relaxed">
                      Room 1208, Building A<br />
                      No. 88 Jiangnan Avenue<br />
                      Yiwu, Zhejiang 322000<br />
                      China
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Mail className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium mb-1">Email</div>
                    <a href="mailto:info@ssourcingchina.com" className="text-slate-600 hover:text-slate-900">info@ssourcingchina.com</a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium mb-1">Phone / WhatsApp</div>
                    <a href="tel:+8657985588123" className="text-slate-600 hover:text-slate-900">+86 579 8558 8123</a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Clock className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium mb-1">Response Time</div>
                    <div className="text-slate-600">We aim to respond to all inquiries within 24 hours during business days.</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200">
                <div className="text-xs text-slate-500 leading-relaxed">
                  Business hours: Monday–Friday, 8:30 AM – 5:30 PM China Standard Time (UTC+8). We are closed on Chinese public holidays.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeading title="What Happens After You Submit" centered={false} />
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div className="bg-slate-800 p-5 rounded-lg">
              <div className="font-medium mb-2">1. Initial Review</div>
              <p className="text-slate-300">We review your requirements and assess whether we can add value based on our experience and supplier network.</p>
            </div>
            <div className="bg-slate-800 p-5 rounded-lg">
              <div className="font-medium mb-2">2. Response</div>
              <p className="text-slate-300">You receive a written response within 24 hours with our preliminary assessment and proposed next steps.</p>
            </div>
            <div className="bg-slate-800 p-5 rounded-lg">
              <div className="font-medium mb-2">3. Consultation</div>
              <p className="text-slate-300">If there is a potential fit, we schedule a call to discuss details, timeline, and scope before providing a formal proposal.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section max-w-3xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-3">Not ready to submit a form?</h2>
          <p className="text-slate-600 mb-6">You can also email us directly at <a href="mailto:info@ssourcingchina.com" className="underline">info@ssourcingchina.com</a>. We read every message.</p>
          <p className="text-xs text-slate-500">We do not share your information with third parties. Your inquiry will only be used to respond to your request.</p>
        </div>
      </section>
    </div>
  )
}

export default Contact
