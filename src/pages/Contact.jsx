import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Send, CheckCircle, Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'

export default function Contact() {
  const containerRef = useRef(null)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-light py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">Get a Free Sourcing Quote</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Tell us about your product and requirements. Our team will respond within
            24 hours with a tailored sourcing proposal.
          </p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10 lg:gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Get in Touch</h2>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 text-sm">Phone / WhatsApp</h4>
                    <p className="text-slate-500 text-sm">+86 755 8888 6666</p>
                    <p className="text-xs text-slate-400 mt-1">Available Mon-Sat, 9AM-6PM (CST)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 text-sm">Email</h4>
                    <p className="text-slate-500 text-sm">info@ssourcingchina.com</p>
                    <p className="text-xs text-slate-400 mt-1">We reply within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 text-sm">Office Address</h4>
                    <p className="text-slate-500 text-sm">Futian District, Shenzhen</p>
                    <p className="text-slate-500 text-sm">Guangdong, China</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 text-sm">Business Hours</h4>
                    <p className="text-slate-500 text-sm">Monday - Saturday</p>
                    <p className="text-slate-500 text-sm">9:00 AM - 6:00 PM (CST, UTC+8)</p>
                  </div>
                </div>
              </div>

              <div className="bg-surface border border-slate-200 rounded-xl p-6">
                <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-green-500" />
                  WeChat Available
                </h4>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Prefer WeChat? Mention it in your message and we'll share our WeChat ID
                  for faster communication and real-time updates.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-surface border border-slate-200 rounded-2xl p-8 md:p-10">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center text-center py-12">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Thank You for Your Inquiry!</h3>
                    <p className="text-slate-500 max-w-md leading-relaxed mb-6">
                      Our team will review your requirements and get back to you within
                      24 hours with a tailored sourcing proposal. If you need urgent assistance,
                      feel free to call us at +86 755 8888 6666.
                    </p>
                    <Link
                      to="/"
                      className="text-accent font-semibold hover:text-accent-hover transition-colors"
                    >
                      Back to Home
                    </Link>
                  </div>
                ) : (
                  <>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Tell Us About Your Project</h3>
                    <p className="text-slate-500 text-sm mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="name">
                            Full Name *
                          </label>
                          <input
                            id="name"
                            type="text"
                            required
                            className="w-full border border-slate-300 rounded-lg px-4 py-3 bg-white text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition"
                            placeholder="John Smith"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="company">
                            Company Name *
                          </label>
                          <input
                            id="company"
                            type="text"
                            required
                            className="w-full border border-slate-300 rounded-lg px-4 py-3 bg-white text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition"
                            placeholder="Your Company Ltd."
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="email">
                            Email Address *
                          </label>
                          <input
                            id="email"
                            type="email"
                            required
                            className="w-full border border-slate-300 rounded-lg px-4 py-3 bg-white text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition"
                            placeholder="john@company.com"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="phone">
                            Phone / WhatsApp
                          </label>
                          <input
                            id="phone"
                            type="text"
                            className="w-full border border-slate-300 rounded-lg px-4 py-3 bg-white text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition"
                            placeholder="+1 555 0123"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="product">
                          Product Description *
                        </label>
                        <input
                          id="product"
                          type="text"
                          required
                          className="w-full border border-slate-300 rounded-lg px-4 py-3 bg-white text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition"
                          placeholder="e.g., Bluetooth speakers, kitchen knives, yoga mats"
                        />
                      </div>

                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="quantity">
                            Estimated Order Quantity
                          </label>
                          <input
                            id="quantity"
                            type="text"
                            className="w-full border border-slate-300 rounded-lg px-4 py-3 bg-white text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition"
                            placeholder="e.g., 1,000 units"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="country">
                            Your Country *
                          </label>
                          <input
                            id="country"
                            type="text"
                            required
                            className="w-full border border-slate-300 rounded-lg px-4 py-3 bg-white text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition"
                            placeholder="e.g., United States, Germany"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="service">
                          Service Interested In
                        </label>
                        <select
                          id="service"
                          className="w-full border border-slate-300 rounded-lg px-4 py-3 bg-white text-slate-900 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition"
                        >
                          <option value="">Select a service...</option>
                          <option value="supplier-sourcing">Supplier Sourcing</option>
                          <option value="factory-verification">Factory Verification</option>
                          <option value="quality-inspection">Quality Inspection</option>
                          <option value="production-followup">Production Follow-up</option>
                          <option value="shipping-coordination">Shipping Coordination</option>
                          <option value="full-service">Full-Service (End to End)</option>
                          <option value="other">Other / Not Sure</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="message">
                          Additional Details
                        </label>
                        <textarea
                          id="message"
                          rows={5}
                          className="w-full border border-slate-300 rounded-lg px-4 py-3 bg-white text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition resize-none"
                          placeholder="Tell us about your product specifications, target price range, certifications needed, preferred timeline, or any other requirements..."
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-cta text-white px-6 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20"
                      >
                        <Send className="w-5 h-5" />
                        Submit Inquiry
                      </button>

                      <p className="text-xs text-slate-400 text-center">
                        We respect your privacy. Your information is never shared with third parties.
                        No obligation—free initial consultation.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="aspect-[21/9] rounded-2xl overflow-hidden bg-slate-200"
            data-strk-bg-id="contact-map-bg-z1y2x3"
            data-strk-bg="Shenzhen Futian District Guangdong China office business district"
            data-strk-bg-ratio="21x9"
            data-strk-bg-width="1600"
          />
        </div>
      </section>
    </div>
  )
}

