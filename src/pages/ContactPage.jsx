import React from 'react'
import { Mail, Phone, MapPin, Clock, MessageSquare } from 'lucide-react'
import InquiryForm from '../components/home/InquiryForm'

export default function ContactPage() {
  return (
    <div>
      {/* Header */}
      <section className="bg-brand-navy text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Contact Us</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Ready to start sourcing from China? Fill out the form below and we will get back to you within 48 hours with a tailored proposal.
          </p>
        </div>
      </section>

      {/* Contact Details + Form */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-1">
              <div className="space-y-6">
                <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                  <h2 className="font-bold text-brand-navy text-lg mb-4">Our Office</h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-gray-700">Address</p>
                        <p className="text-sm text-gray-500">Guangzhou, Guangdong Province, China</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-gray-700">Email</p>
                        <a href="mailto:info@ssourcingchina.com" className="text-sm text-brand-navy hover:text-brand-navy-light transition-colors">
                          info@ssourcingchina.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-gray-700">Phone</p>
                        <a href="tel:+862012345678" className="text-sm text-brand-navy hover:text-brand-navy-light transition-colors">
                          +86 20 1234 5678
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-gray-700">Business Hours</p>
                        <p className="text-sm text-gray-500">Monday - Friday: 9:00 - 18:00 (CST)</p>
                        <p className="text-sm text-gray-500">Saturday: 9:00 - 13:00 (CST)</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-brand-navy text-white rounded-xl p-6">
                  <MessageSquare className="w-8 h-8 mb-3" />
                  <h3 className="font-bold text-lg mb-2">Prefer a Quick Call?</h3>
                  <p className="text-sm text-gray-300 mb-4">
                    If you have a quick question, schedule a 15-minute call with our team to discuss your sourcing needs.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-4 py-2 rounded-lg transition-colors text-sm"
                  >
                    Schedule a Call
                  </a>
                </div>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="lg:col-span-2">
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}