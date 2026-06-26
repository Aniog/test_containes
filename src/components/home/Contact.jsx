import { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  })
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const validate = (values) => {
    if (!values.name.trim()) return 'Name is required'
    if (!values.email.trim()) return 'Email is required'
    if (!/^\S+@\S+\.\S+$/.test(values.email)) return 'Please provide a valid email'
    if (!values.message.trim()) return 'Message is required'
    return null
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    const err = validate(formData)
    if (err) {
      setError(err)
      return
    }

    setStatus('submitting')

    // Simulate form submission
    setTimeout(() => {
      setStatus('success')
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: '',
      })
      setTimeout(() => setStatus('idle'), 5000)
    }, 1500)
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'info@artitect-machinery.com',
      href: 'mailto:info@artitect-machinery.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      label: 'Address',
      value: '123 Industrial Park, Manufacturing District',
      href: '#',
    },
  ]

  return (
    <section id="contact" className="py-20 md:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full mb-6">
            <Send className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Contact Us</span>
          </div>
          <h2 id="contact-title" className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            Get In Touch
          </h2>
          <p id="contact-subtitle" className="text-lg text-text-secondary leading-relaxed">
            Have questions about our machinery? Need a custom solution? Our team is ready to help you find the perfect folding solution for your business.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-100 hover:shadow-md transition-shadow duration-300 group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-text-secondary mb-1">{item.label}</p>
                  <p className="text-text-primary font-medium group-hover:text-primary transition-colors">
                    {item.value}
                  </p>
                </div>
              </a>
            ))}

            {/* Business Hours */}
            <div className="p-6 bg-white rounded-xl border border-gray-100">
              <h3 className="font-semibold text-text-primary mb-3">Business Hours</h3>
              <div className="space-y-2 text-sm text-text-secondary">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-medium">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-medium">9:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-medium">Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-xl p-8 md:p-10 shadow-sm border border-gray-100">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Smith"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200 text-text-primary placeholder:text-gray-400"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@company.com"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200 text-text-primary placeholder:text-gray-400"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-text-primary mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200 text-text-primary placeholder:text-gray-400"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-text-primary mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200 text-text-primary placeholder:text-gray-400"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Tell us about your requirements..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200 text-text-primary placeholder:text-gray-400 resize-none"
                />
              </div>

              {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-sm text-red-600">{error}</p>
                </div>
              )}

              {status === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-sm text-green-600 font-medium">
                    Thank you for your message! We'll get back to you within 24 hours.
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full md:w-auto px-8 py-4 bg-primary hover:bg-primary-light disabled:bg-gray-400 text-white font-semibold rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
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
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
