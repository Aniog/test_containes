import { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    product: '',
  })
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    setStatus('submitting')

    // Simulate form submission
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', company: '', phone: '', message: '', product: '' })
    }, 1500)
  }

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'info@artitectmachinery.com', href: 'mailto:info@artitectmachinery.com' },
    { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567', href: 'tel:+15551234567' },
    { icon: MapPin, label: 'Address', value: '123 Industrial Blvd, Manufacturing City, MC 12345', href: '#' },
  ]

  return (
    <section id="contact" className="py-24 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-brand-accent/10 text-brand-accent text-sm font-medium rounded-full mb-4">
            Get In Touch
          </span>
          <h2 className="heading-section text-4xl md:text-5xl text-brand-primary mb-4">
            Request a Quote
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto text-body">
            Contact our team for pricing, specifications, or custom solutions tailored to your needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-primary/5 rounded-lg flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-6 h-6 text-brand-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-brand-primary mb-1">{info.label}</h4>
                  <a href={info.href} className="text-gray-600 hover:text-brand-accent transition-colors text-body">
                    {info.value}
                  </a>
                </div>
              </div>
            ))}

            <div className="pt-8 border-t border-gray-200">
              <h4 className="font-semibold text-brand-primary mb-4">Business Hours</h4>
              <div className="space-y-2 text-gray-600 text-body">
                <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                <p>Saturday: 9:00 AM - 2:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
              {status === 'success' ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-display font-semibold text-brand-primary mb-2">
                    Thank You!
                  </h3>
                  <p className="text-gray-600 text-body">
                    Your message has been sent. Our team will contact you within 24 hours.
                  </p>
                </div>
              ) : (
                <>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-brand-primary mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-accent/20 focus:border-brand-accent outline-none transition-all text-body"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-brand-primary mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-accent/20 focus:border-brand-accent outline-none transition-all text-body"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-brand-primary mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-accent/20 focus:border-brand-accent outline-none transition-all text-body"
                        placeholder="Your Company"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-brand-primary mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-accent/20 focus:border-brand-accent outline-none transition-all text-body"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="product" className="block text-sm font-medium text-brand-primary mb-2">
                      Product Interest
                    </label>
                    <select
                      id="product"
                      name="product"
                      value={formData.product}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-accent/20 focus:border-brand-accent outline-none transition-all text-body bg-white"
                    >
                      <option value="">Select a product</option>
                      <option value="double-folding">Double Folding Machine</option>
                      <option value="double-folder">Double Folder</option>
                      <option value="sheet-metal-folder">Sheet Metal Folder</option>
                      <option value="sheet-metal-folding">Sheet Metal Folding Machine</option>
                      <option value="metal-folder">Metal Folder</option>
                      <option value="metal-folder-machine">Metal Folder Machine</option>
                      <option value="metal-folding">Metal Folding Machine</option>
                      <option value="custom">Custom Solution</option>
                    </select>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-brand-primary mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-accent/20 focus:border-brand-accent outline-none transition-all resize-none text-body"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>

                  {error && (
                    <p className="text-red-500 text-sm mb-4">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="btn-primary w-full md:w-auto inline-flex items-center justify-center gap-2"
                  >
                    {status === 'submitting' ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
