import { useState } from 'react'
import { Mail, Phone, Globe, MapPin, Send, CheckCircle2 } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    product: '',
    quantity: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
  }

  return (
    <div>
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Get a Free Sourcing Quote
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl">
            Tell us what you're looking for and our team will respond within 24 hours with a tailored sourcing plan.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <CheckCircle2 className="w-16 h-16 text-brand-green mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-brand-navy mb-2">Thank You!</h2>
                  <p className="text-slate-600">
                    We've received your inquiry. Our sourcing team will review your requirements and get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h2 className="text-2xl font-bold text-brand-navy mb-2">Sourcing Inquiry Form</h2>
                  <p className="text-slate-600 mb-6">Fill in your details and product requirements. All fields marked with * are required.</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-brand-navy mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-200 rounded-lg text-brand-slate focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-brand-navy mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-200 rounded-lg text-brand-slate focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                        placeholder="you@company.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-brand-navy mb-1.5">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-200 rounded-lg text-brand-slate focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                        placeholder="Your company"
                      />
                    </div>
                    <div>
                      <label htmlFor="country" className="block text-sm font-medium text-brand-navy mb-1.5">
                        Country *
                      </label>
                      <input
                        type="text"
                        id="country"
                        name="country"
                        required
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-200 rounded-lg text-brand-slate focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                        placeholder="Your country"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="product" className="block text-sm font-medium text-brand-navy mb-1.5">
                        Product Description *
                      </label>
                      <input
                        type="text"
                        id="product"
                        name="product"
                        required
                        value={formData.product}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-200 rounded-lg text-brand-slate focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                        placeholder="What product are you looking for?"
                      />
                    </div>
                    <div>
                      <label htmlFor="quantity" className="block text-sm font-medium text-brand-navy mb-1.5">
                        Estimated Quantity
                      </label>
                      <input
                        type="text"
                        id="quantity"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-200 rounded-lg text-brand-slate focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                        placeholder="e.g., 1,000 units"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-brand-navy mb-1.5">
                      Additional Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg text-brand-slate focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent resize-vertical"
                      placeholder="Tell us more about your requirements — specifications, target price, timeline, certifications needed, etc."
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center bg-brand-blue text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition border-none cursor-pointer text-base"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Submit Inquiry
                  </button>
                </form>
              )}
            </div>

            <div className="space-y-8">
              <div className="bg-brand-gray rounded-xl p-6">
                <h3 className="text-lg font-semibold text-brand-navy mb-4">Contact Information</h3>
                <ul className="space-y-4 list-none p-0 m-0">
                  <li className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-brand-blue mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-brand-navy">Email</p>
                      <p className="text-sm text-slate-600">info@ssourcingchina.com</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-brand-blue mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-brand-navy">Phone / WhatsApp</p>
                      <p className="text-sm text-slate-600">+86 138 0000 0000</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-brand-blue mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-brand-navy">Office</p>
                      <p className="text-sm text-slate-600">Guangzhou, Guangdong, China</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Globe className="w-5 h-5 text-brand-blue mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-brand-navy">Working Hours</p>
                      <p className="text-sm text-slate-600">Mon–Fri, 9:00–18:00 (China Time, GMT+8)</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-brand-navy mb-3">What Happens Next?</h3>
                <ol className="space-y-3 list-none p-0 m-0">
                  <li className="flex items-start gap-3 text-sm text-slate-700">
                    <span className="w-6 h-6 bg-brand-blue text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">1</span>
                    We review your requirements within 24 hours
                  </li>
                  <li className="flex items-start gap-3 text-sm text-slate-700">
                    <span className="w-6 h-6 bg-brand-blue text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">2</span>
                    Our team prepares a sourcing plan and quote
                  </li>
                  <li className="flex items-start gap-3 text-sm text-slate-700">
                    <span className="w-6 h-6 bg-brand-blue text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">3</span>
                    We schedule a call to discuss your project
                  </li>
                  <li className="flex items-start gap-3 text-sm text-slate-700">
                    <span className="w-6 h-6 bg-brand-blue text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">4</span>
                    Once approved, we begin supplier research
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
