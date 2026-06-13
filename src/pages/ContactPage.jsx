import React from 'react'
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Globe,
  ArrowRight,
} from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    product: '',
    quantity: '',
    budget: '',
    message: '',
  })
  const [status, setStatus] = React.useState('idle')

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('submitting')
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', company: '', phone: '', product: '', quantity: '', budget: '', message: '' })
    }, 1500)
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#0f2b46]">
        <div className="container-custom text-center">
          <span className="text-[#c8963e] font-semibold text-sm uppercase tracking-wider">Contact Us</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Get in Touch
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Ready to start sourcing from China? Contact us for a free consultation and quote.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold mb-8">Contact Information</h2>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#0f2b46]/5 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#c8963e]" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-[#4a5568]">info@ssourcingchina.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#0f2b46]/5 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#c8963e]" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-[#4a5568]">+86 755 8888 6666</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#0f2b46]/5 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#c8963e]" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Office</h3>
                    <p className="text-[#4a5568]">
                      Nanshan District<br />
                      Shenzhen, Guangdong<br />
                      China 518000
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#0f2b46]/5 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-[#c8963e]" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Business Hours</h3>
                    <p className="text-[#4a5568]">
                      Monday - Friday: 9:00 AM - 6:00 PM (CST)<br />
                      Saturday: 9:00 AM - 1:00 PM (CST)
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick contact cards */}
              <div className="bg-[#f5f7fa] rounded-xl p-6 mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <MessageSquare className="w-5 h-5 text-[#c8963e]" />
                  <h3 className="font-semibold">WeChat</h3>
                </div>
                <p className="text-[#4a5568] text-sm">Add us on WeChat for quick communication: SSourcingChina</p>
              </div>

              <div className="bg-[#f5f7fa] rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Globe className="w-5 h-5 text-[#c8963e]" />
                  <h3 className="font-semibold">Response Time</h3>
                </div>
                <p className="text-[#4a5568] text-sm">We typically respond to inquiries within 24 hours during business days.</p>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="lg:col-span-2">
              <div className="bg-[#f5f7fa] rounded-2xl p-8 md:p-10">
                <h2 className="text-2xl font-bold mb-2">Request a Free Sourcing Quote</h2>
                <p className="text-[#4a5568] mb-8">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold mb-2">
                        Full Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-[#e2e8f0] focus:outline-none focus:ring-2 focus:ring-[#c8963e]/50 focus:border-[#c8963e] transition-colors bg-white"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold mb-2">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-[#e2e8f0] focus:outline-none focus:ring-2 focus:ring-[#c8963e]/50 focus:border-[#c8963e] transition-colors bg-white"
                        placeholder="you@company.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold mb-2">
                        Company Name
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-[#e2e8f0] focus:outline-none focus:ring-2 focus:ring-[#c8963e]/50 focus:border-[#c8963e] transition-colors bg-white"
                        placeholder="Your company"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-[#e2e8f0] focus:outline-none focus:ring-2 focus:ring-[#c8963e]/50 focus:border-[#c8963e] transition-colors bg-white"
                        placeholder="+1 234 567 8900"
                      />
                    </div>
                    <div>
                      <label htmlFor="product" className="block text-sm font-semibold mb-2">
                        Product Category *
                      </label>
                      <input
                        id="product"
                        name="product"
                        type="text"
                        required
                        value={formData.product}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-[#e2e8f0] focus:outline-none focus:ring-2 focus:ring-[#c8963e]/50 focus:border-[#c8963e] transition-colors bg-white"
                        placeholder="e.g., Electronics, Apparel"
                      />
                    </div>
                    <div>
                      <label htmlFor="quantity" className="block text-sm font-semibold mb-2">
                        Estimated Quantity
                      </label>
                      <input
                        id="quantity"
                        name="quantity"
                        type="text"
                        value={formData.quantity}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-[#e2e8f0] focus:outline-none focus:ring-2 focus:ring-[#c8963e]/50 focus:border-[#c8963e] transition-colors bg-white"
                        placeholder="e.g., 1,000 units"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="budget" className="block text-sm font-semibold mb-2">
                        Target Budget (USD)
                      </label>
                      <input
                        id="budget"
                        name="budget"
                        type="text"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-[#e2e8f0] focus:outline-none focus:ring-2 focus:ring-[#c8963e]/50 focus:border-[#c8963e] transition-colors bg-white"
                        placeholder="e.g., $10,000 - $50,000"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="message" className="block text-sm font-semibold mb-2">
                        Project Details *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-[#e2e8f0] focus:outline-none focus:ring-2 focus:ring-[#c8963e]/50 focus:border-[#c8963e] transition-colors resize-none bg-white"
                        placeholder="Describe your product requirements, target price, quality standards, timeline, and any other details..."
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="btn-primary w-full md:w-auto text-lg px-10 py-4 disabled:opacity-50"
                  >
                    {status === 'submitting' ? (
                      'Sending...'
                    ) : (
                      <>
                        Send Inquiry
                        <Send className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </button>

                  {status === 'success' && (
                    <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
                      Thank you! We have received your inquiry and will contact you within 24 hours.
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
