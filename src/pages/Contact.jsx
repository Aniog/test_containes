import { useState } from 'react'
import { Send, Mail, Phone, MapPin, Clock } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    product: '',
    quantity: '',
    budget: '',
    timeline: '',
    message: '',
  })
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('success')
    console.log('Contact form submitted:', formData)
  }

  return (
    <div>
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
              Get a Free Sourcing Quote
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              Tell us what you need from China. Our team will review your requirements and respond within 24 hours with a tailored sourcing plan and cost estimate.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {status === 'success' ? (
                <div className="text-center py-16 bg-neutral-50 rounded-xl border border-neutral-200">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-7 h-7 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-neutral-800 mb-2">Inquiry Received!</h2>
                  <p className="text-neutral-600 max-w-md mx-auto">
                    Thank you for your inquiry. Our sourcing team will review your requirements and respond within 24 business hours with a tailored plan.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h2 className="text-2xl font-bold text-neutral-800 mb-6">Sourcing Inquiry Form</h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-1.5">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 text-sm text-neutral-800 bg-white focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-1.5">Business Email *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 text-sm text-neutral-800 bg-white focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-1.5">Company Name</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 text-sm text-neutral-800 bg-white focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
                        placeholder="Your company"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-1.5">Country</label>
                      <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 text-sm text-neutral-800 bg-white focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
                        placeholder="United States"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1.5">Product Description *</label>
                    <input
                      type="text"
                      name="product"
                      required
                      value={formData.product}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 text-sm text-neutral-800 bg-white focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
                      placeholder="e.g. LED panel lights, 600x600mm, 40W, 4000K"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-1.5">Estimated Quantity</label>
                      <input
                        type="text"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 text-sm text-neutral-800 bg-white focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
                        placeholder="e.g. 5,000 pcs"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-1.5">Target Budget</label>
                      <input
                        type="text"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 text-sm text-neutral-800 bg-white focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
                        placeholder="e.g. $15-20/unit"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-1.5">Timeline</label>
                      <input
                        type="text"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 text-sm text-neutral-800 bg-white focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
                        placeholder="e.g. 6 weeks"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1.5">Additional Details</label>
                    <textarea
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 text-sm text-neutral-800 bg-white focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent resize-none"
                      placeholder="Any specific requirements: certifications needed, packaging preferences, shipping destination, previous supplier issues..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-accent hover:bg-accent-hover text-white font-semibold px-8 py-3.5 rounded-lg transition-colors text-sm flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Submit Sourcing Inquiry
                  </button>

                  <p className="text-xs text-neutral-500">
                    Your information is confidential. We never share details with suppliers without your explicit permission.
                  </p>
                </form>
              )}
            </div>

            <div className="space-y-6">
              <div className="bg-neutral-50 rounded-xl border border-neutral-200 p-6">
                <h3 className="font-semibold text-neutral-800 mb-4">Contact Information</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-neutral-800">Email</p>
                      <p className="text-sm text-neutral-600">info@ssourcingchina.com</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-neutral-800">Phone / WhatsApp</p>
                      <p className="text-sm text-neutral-600">+86 136 0000 8888</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-neutral-800">Office</p>
                      <p className="text-sm text-neutral-600">Guangzhou, Guangdong, China</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-neutral-800">Response Time</p>
                      <p className="text-sm text-neutral-600">Within 24 business hours</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-primary/5 rounded-xl border border-primary/10 p-6">
                <h3 className="font-semibold text-neutral-800 mb-3">What Happens Next?</h3>
                <ol className="space-y-3 text-sm text-neutral-600">
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold shrink-0">1</span>
                    We review your requirements within 24 hours
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold shrink-0">2</span>
                    We send you a sourcing plan with estimated costs
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold shrink-0">3</span>
                    If you approve, we begin supplier research
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold shrink-0">4</span>
                    You receive supplier shortlist within 2–3 weeks
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
