import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    product: '',
    quantity: '',
    message: '',
  })
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('submitting')
    // Simulate form submission
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', company: '', phone: '', product: '', quantity: '', message: '' })
    }, 1500)
  }

  return (
    <div>
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              Get a Free Sourcing Quote
            </h1>
            <p className="mt-4 text-lg text-slate-300 leading-relaxed">
              Tell us what you're looking for and our team will respond with a tailored sourcing proposal within 24 hours.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-brand-navy mb-6">Sourcing Inquiry Form</h2>

              {status === 'success' ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-green-800 mb-2">Inquiry Received!</h3>
                  <p className="text-green-700">
                    Thank you for your inquiry. Our sourcing team will review your requirements and respond within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 text-brand-blue font-medium hover:underline bg-transparent border-none cursor-pointer"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-brand-slate mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-brand-border text-brand-slate focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-brand-slate mb-1.5">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-brand-border text-brand-slate focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-brand-slate mb-1.5">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-brand-border text-brand-slate focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                        placeholder="Your company"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-brand-slate mb-1.5">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-brand-border text-brand-slate focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                        placeholder="+1 234 567 8900"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="product" className="block text-sm font-medium text-brand-slate mb-1.5">
                        Product Description <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="product"
                        name="product"
                        required
                        value={formData.product}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-brand-border text-brand-slate focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                        placeholder="e.g., Bluetooth speakers, custom packaging"
                      />
                    </div>
                    <div>
                      <label htmlFor="quantity" className="block text-sm font-medium text-brand-slate mb-1.5">
                        Estimated Quantity
                      </label>
                      <input
                        type="text"
                        id="quantity"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-brand-border text-brand-slate focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                        placeholder="e.g., 1,000 units"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-brand-slate mb-1.5">
                      Additional Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-brand-border text-brand-slate focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent resize-vertical"
                      placeholder="Tell us more about your requirements — specifications, target price, timeline, certifications needed, etc."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="inline-flex items-center bg-brand-blue text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed border-none cursor-pointer"
                  >
                    {status === 'submitting' ? (
                      'Sending...'
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Submit Inquiry
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-brand-navy mb-4">Contact Information</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-brand-blue mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-brand-slate">Email</p>
                      <p className="text-sm text-slate-600">info@ssourcingchina.com</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-brand-blue mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-brand-slate">Phone / WhatsApp</p>
                      <p className="text-sm text-slate-600">+86 138 0000 0000</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-brand-blue mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-brand-slate">Office</p>
                      <p className="text-sm text-slate-600">Guangzhou, Guangdong, China</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-brand-blue mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-brand-slate">Business Hours</p>
                      <p className="text-sm text-slate-600">Mon–Fri: 9:00 AM – 6:00 PM (CST)</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-brand-gray rounded-xl p-6 border border-brand-border">
                <h3 className="text-lg font-semibold text-brand-navy mb-3">What Happens Next?</h3>
                <ol className="space-y-3 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-brand-blue text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                    <span>We review your requirements within 24 hours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-brand-blue text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                    <span>Our team sends you a sourcing proposal with estimated costs and timeline</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-brand-blue text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
                    <span>We schedule a call to discuss your project in detail</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-brand-blue text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">4</span>
                    <span>Once approved, we begin supplier research immediately</span>
                  </li>
                </ol>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                <h3 className="text-lg font-semibold text-brand-navy mb-2">No Obligation</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Your initial consultation and sourcing proposal are completely free. We only charge once you decide to proceed with a project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
