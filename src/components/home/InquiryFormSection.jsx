import { useState, useRef } from 'react'
import { Send, Phone, Mail, MapPin, CheckCircle, Loader2 } from 'lucide-react'

export default function InquiryFormSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    phone: '',
    productType: '',
    quantity: '',
    message: '',
  })
  const [status, setStatus] = useState('idle')
  const formRef = useRef(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')

    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setStatus('success')
    setFormData({
      name: '', email: '', company: '', country: '',
      phone: '', productType: '', quantity: '', message: '',
    })

    setTimeout(() => setStatus('idle'), 5000)
  }

  return (
    <section className="section-padding bg-white" id="inquiry-form">
      <div className="container-wide mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Info */}
          <div>
            <span className="label-tag mb-4 inline-block">Get in Touch</span>
            <h2 className="heading-section mb-4">Get a Free Sourcing Quote</h2>
            <p className="text-body text-base md:text-lg mb-8">
              Tell us what you need to source from China. Our team will review your
              requirements and respond with a tailored sourcing plan within 24 hours.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-brand-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-brand-800 mb-1">Call Us</h3>
                  <p className="text-sm text-steel-600">+86 138 0000 0000</p>
                  <p className="text-xs text-steel-400 mt-0.5">Mon-Fri, 9:00 AM - 6:00 PM (GMT+8)</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-brand-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-brand-800 mb-1">Email Us</h3>
                  <p className="text-sm text-steel-600">info@ssourcingchina.com</p>
                  <p className="text-xs text-steel-400 mt-0.5">We respond within 24 hours</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-brand-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-brand-800 mb-1">Visit Us</h3>
                  <p className="text-sm text-steel-600">Guangzhou, Guangdong, China</p>
                  <p className="text-xs text-steel-400 mt-0.5">Visits by appointment only</p>
                </div>
              </div>
            </div>

            {/* Trust badges */}
            <div className="bg-steel-50 rounded-xl p-5 border border-steel-200">
              <h3 className="font-semibold text-brand-800 text-sm mb-3">What you can expect:</h3>
              <ul className="space-y-2.5">
                {[
                  'Response within 24 hours',
                  'Free, no-obligation sourcing quote',
                  'Confidential handling of your requirements',
                  'Dedicated project manager assigned to you',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-steel-600">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Form */}
          <div>
            <div className="card-base shadow-lg border-steel-200">
              {status === 'success' ? (
                <div className="text-center py-12 animate-fade-in">
                  <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-5">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="heading-card text-xl mb-3">Thank You!</h3>
                  <p className="text-body">
                    We have received your inquiry. Our team will review your
                    requirements and get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-steel-700 mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 rounded-lg border border-steel-300 text-steel-800 text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all bg-white"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-steel-700 mb-1.5">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 rounded-lg border border-steel-300 text-steel-800 text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all bg-white"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-steel-700 mb-1.5">
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-steel-300 text-steel-800 text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all bg-white"
                        placeholder="Company Name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-steel-700 mb-1.5">
                        Country <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 rounded-lg border border-steel-300 text-steel-800 text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all bg-white"
                        placeholder="United States"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-steel-700 mb-1.5">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-steel-300 text-steel-800 text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all bg-white"
                        placeholder="+1 234 567 890"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-steel-700 mb-1.5">
                        Product Category <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="productType"
                        value={formData.productType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 rounded-lg border border-steel-300 text-steel-800 text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all bg-white"
                      >
                        <option value="">Select category</option>
                        <option value="electronics">Electronics & Gadgets</option>
                        <option value="home">Home & Garden</option>
                        <option value="apparel">Apparel & Textiles</option>
                        <option value="industrial">Industrial & Machinery</option>
                        <option value="health">Health & Beauty</option>
                        <option value="toys">Toys & Promotional</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-steel-700 mb-1.5">
                      Estimated Quantity
                    </label>
                    <input
                      type="text"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-steel-300 text-steel-800 text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all bg-white"
                      placeholder="e.g., 1,000 units"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-steel-700 mb-1.5">
                      Project Details <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-2.5 rounded-lg border border-steel-300 text-steel-800 text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all resize-none bg-white"
                      placeholder="Describe what you need to source, including specifications, target price, timeline, and any special requirements."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="btn-accent w-full text-base py-3.5 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Submit Inquiry
                      </>
                    )}
                  </button>

                  <p className="text-xs text-center text-steel-400">
                    We respect your privacy. Your information will never be shared with third parties.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
