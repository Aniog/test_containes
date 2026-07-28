import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Mail, Phone, MapPin, Clock, Send, CheckCircle2,
  MessageSquare, ShieldCheck, ClipboardCheck, Truck
} from 'lucide-react'

const Contact = () => {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-300 font-semibold text-sm uppercase tracking-wider mb-3">Contact Us</p>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            Get a Free Sourcing Quote
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Tell us about your product requirements and we'll provide a free sourcing assessment within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-xl border border-slate-100 p-6 md:p-8 shadow-sm">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8 text-green-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-navy mb-2">Inquiry Submitted</h3>
                    <p className="text-slate-500 mb-6">
                      Thank you for your inquiry. Our team will review your requirements and respond within 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-accent-blue font-semibold hover:underline"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-xl font-semibold text-navy mb-6">Sourcing Inquiry Form</h2>
                    <form className="space-y-5" onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-1">Full Name *</label>
                          <input
                            type="text"
                            required
                            className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent"
                            placeholder="John Smith"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-1">Company Name</label>
                          <input
                            type="text"
                            className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent"
                            placeholder="Your Company"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-1">Email Address *</label>
                          <input
                            type="email"
                            required
                            className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent"
                            placeholder="john@company.com"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                          <input
                            type="tel"
                            className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent"
                            placeholder="+1 234 567 8900"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-1">Country *</label>
                          <input
                            type="text"
                            required
                            className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent"
                            placeholder="United States"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-1">Industry</label>
                          <select className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent text-slate-600">
                            <option value="">Select your industry</option>
                            <option>Electronics</option>
                            <option>Home & Garden</option>
                            <option>Apparel & Textiles</option>
                            <option>Machinery & Parts</option>
                            <option>Packaging & Printing</option>
                            <option>Health & Beauty</option>
                            <option>Building Materials</option>
                            <option>Automotive</option>
                            <option>Other</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Product You Want to Source *</label>
                        <input
                          type="text"
                          required
                          className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent"
                          placeholder="e.g. Stainless steel water bottles, 500ml, with custom logo"
                        />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-1">Estimated Quantity</label>
                          <input
                            type="text"
                            className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent"
                            placeholder="e.g. 1,000 - 5,000 units"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-1">Target Price per Unit</label>
                          <input
                            type="text"
                            className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent"
                            placeholder="e.g. $2 - $5"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Service Needed</label>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-1">
                          {['Supplier Sourcing', 'Factory Verification', 'Quality Inspection', 'Production Follow-up', 'Shipping Coordination', 'Full Service'].map((svc) => (
                            <label key={svc} className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer">
                              <input type="checkbox" className="rounded border-slate-300 text-accent-blue focus:ring-accent-blue" />
                              {svc}
                            </label>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Additional Details</label>
                        <textarea
                          rows={4}
                          className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent resize-none"
                          placeholder="Any additional requirements, specifications, certifications needed, timeline preferences..."
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-accent-blue text-white py-3.5 rounded-lg font-semibold hover:bg-navy transition-colors flex items-center justify-center gap-2"
                      >
                        <Send className="w-4 h-4" />
                        Submit Your Inquiry
                      </button>
                      <p className="text-xs text-slate-400 text-center">
                        We'll respond within 24 hours. Your information is kept confidential and will only be used to respond to your inquiry.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                <h3 className="font-semibold text-navy mb-4">Contact Information</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-accent-blue shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-medium text-navy">Email</div>
                      <div className="text-sm text-slate-500">info@ssourcingchina.com</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-accent-blue shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-medium text-navy">Phone</div>
                      <div className="text-sm text-slate-500">+86 755 8888 8888</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent-blue shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-medium text-navy">Office</div>
                      <div className="text-sm text-slate-500">Shenzhen, Guangdong, China</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-accent-blue shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-medium text-navy">Business Hours</div>
                      <div className="text-sm text-slate-500">Mon-Fri: 9:00 AM - 6:00 PM (CST)</div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                <h3 className="font-semibold text-navy mb-4">What Happens Next?</h3>
                <ol className="space-y-3">
                  {[
                    { step: '1', text: 'We review your requirements within 24 hours' },
                    { step: '2', text: 'A dedicated account manager is assigned to you' },
                    { step: '3', text: 'We provide a sourcing plan and quotation' },
                    { step: '4', text: 'You decide how to proceed — no obligation' },
                  ].map((item) => (
                    <li key={item.step} className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-accent-blue text-white rounded-full flex items-center justify-center text-xs font-bold shrink-0">
                        {item.step}
                      </span>
                      <span className="text-sm text-slate-600">{item.text}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                <h3 className="font-semibold text-navy mb-3">No Upfront Fees</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  Our initial consultation and sourcing assessment are completely free. You only pay for services you choose to use.
                </p>
                <ul className="space-y-2">
                  {['Free initial consultation', 'No obligation to proceed', 'Transparent pricing'].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
