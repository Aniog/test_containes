import { useState } from 'react'
import { Send, Mail, Phone, MapPin, Clock, MessageSquare } from 'lucide-react'

const Contact = () => {
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
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('success')
    console.log('Contact form submitted:', formData)
  }

  return (
    <div>
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Get a Free Sourcing Quote</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Tell us what you are looking for and our team will respond within 24 hours with a sourcing plan tailored to your needs.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {status === 'success' ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-10 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-brand-green" />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-dark mb-2">Inquiry Received!</h3>
                  <p className="text-brand-muted">Thank you for your inquiry. Our sourcing team will review your requirements and respond within 24 hours with a detailed plan.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h2 className="text-2xl font-bold text-brand-dark mb-2">Sourcing Inquiry Form</h2>
                  <p className="text-brand-muted text-sm mb-6">Fields marked with * are required. The more detail you provide, the faster we can help.</p>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-brand-dark mb-1.5">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-brand-border rounded-lg text-brand-dark text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-brand-dark mb-1.5">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-brand-border rounded-lg text-brand-dark text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-brand-dark mb-1.5">Company Name</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-brand-border rounded-lg text-brand-dark text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue"
                        placeholder="Your company"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-brand-dark mb-1.5">Phone / WhatsApp</label>
                      <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-brand-border rounded-lg text-brand-dark text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue"
                        placeholder="+1 234 567 8900"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-brand-dark mb-1.5">Product Description *</label>
                    <input
                      type="text"
                      name="product"
                      required
                      value={formData.product}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-brand-border rounded-lg text-brand-dark text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue"
                      placeholder="Describe the product you want to source"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-brand-dark mb-1.5">Estimated Quantity</label>
                    <input
                      type="text"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-brand-border rounded-lg text-brand-dark text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue"
                      placeholder="e.g. 1,000 units per month"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-brand-dark mb-1.5">Additional Details</label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-brand-border rounded-lg text-brand-dark text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue resize-none"
                      placeholder="Target price, certifications needed, timeline, special requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-brand-orange text-white font-semibold px-8 py-3 rounded-lg hover:bg-orange-600 transition flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Submit Sourcing Inquiry
                  </button>
                  <p className="text-xs text-brand-muted">We respond within 24 hours. Your information is kept strictly confidential.</p>
                </form>
              )}
            </div>

            <div className="space-y-6">
              <div className="bg-brand-light rounded-xl border border-brand-border p-6">
                <h3 className="text-lg font-semibold text-brand-dark mb-4">Contact Information</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-brand-blue mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-brand-dark">Email</p>
                      <p className="text-sm text-brand-muted">info@ssourcingchina.com</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-brand-blue mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-brand-dark">Phone / WhatsApp</p>
                      <p className="text-sm text-brand-muted">+86 138 0000 0000</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-brand-blue mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-brand-dark">Office</p>
                      <p className="text-sm text-brand-muted">Guangzhou, Guangdong, China</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-brand-blue mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-brand-dark">Business Hours</p>
                      <p className="text-sm text-brand-muted">Mon-Fri: 9:00 AM - 6:00 PM (CST)</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MessageSquare className="w-5 h-5 text-brand-blue mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-brand-dark">Response Time</p>
                      <p className="text-sm text-brand-muted">Within 24 hours</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 rounded-xl border border-blue-100 p-6">
                <h3 className="text-base font-semibold text-brand-dark mb-2">What Happens Next?</h3>
                <ol className="space-y-2 text-sm text-brand-muted">
                  <li className="flex gap-2">
                    <span className="font-semibold text-brand-blue">1.</span>
                    We review your requirements
                  </li>
                  <li className="flex gap-2">
                    <span className="font-semibold text-brand-blue">2.</span>
                    We send you a sourcing plan within 24h
                  </li>
                  <li className="flex gap-2">
                    <span className="font-semibold text-brand-blue">3.</span>
                    We begin supplier research upon your approval
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

export default Contact
