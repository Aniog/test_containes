import { useState } from 'react'
import SectionHeading from '@/components/shared/SectionHeading'
import FAQ from '@/components/shared/FAQ'
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react'

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
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('submitting')
    // Simulate submission
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', company: '', phone: '', product: '', quantity: '', message: '' })
    }, 1500)
  }

  return (
    <div>
      <section className="bg-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Get a Free Sourcing Quote</h1>
          <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
            Tell us what you're looking for and we'll respond within 48 hours with a sourcing plan.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-text-primary mb-2">Sourcing Inquiry Form</h2>
              <p className="text-text-secondary mb-8">Fill in the details below and our team will get back to you with supplier options and a service proposal.</p>

              {status === 'success' ? (
                <div className="bg-success/10 border border-success/20 rounded-xl p-8 text-center">
                  <div className="w-14 h-14 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-4">
                    <Send className="w-7 h-7 text-success" />
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-2">Inquiry Submitted!</h3>
                  <p className="text-text-secondary">Thank you for your inquiry. Our sourcing team will review your requirements and respond within 48 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-1.5">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-border rounded-lg text-text-primary bg-white focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-1.5">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-border rounded-lg text-text-primary bg-white focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-text-primary mb-1.5">Company Name</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-border rounded-lg text-text-primary bg-white focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                        placeholder="Your Company Ltd."
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-text-primary mb-1.5">Phone / WhatsApp</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-border rounded-lg text-text-primary bg-white focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                        placeholder="+1 234 567 8900"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="product" className="block text-sm font-medium text-text-primary mb-1.5">Product You Need *</label>
                      <input
                        type="text"
                        id="product"
                        name="product"
                        required
                        value={formData.product}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-border rounded-lg text-text-primary bg-white focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                        placeholder="e.g. Bluetooth headphones"
                      />
                    </div>
                    <div>
                      <label htmlFor="quantity" className="block text-sm font-medium text-text-primary mb-1.5">Estimated Quantity</label>
                      <input
                        type="text"
                        id="quantity"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-border rounded-lg text-text-primary bg-white focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                        placeholder="e.g. 1,000 units"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-1.5">Project Details *</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-border rounded-lg text-text-primary bg-white focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors resize-y"
                      placeholder="Describe your product requirements, target price, timeline, and any specific needs..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full sm:w-auto px-8 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent-hover transition-colors disabled:opacity-60 disabled:cursor-not-allowed border-none cursor-pointer text-base"
                  >
                    {status === 'submitting' ? 'Submitting...' : 'Submit Sourcing Inquiry'}
                  </button>
                </form>
              )}
            </div>

            <div className="lg:col-span-1">
              <div className="bg-surface rounded-xl p-6 border border-border sticky top-24">
                <h3 className="text-lg font-semibold text-text-primary mb-5">Contact Information</h3>

                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-text-primary">Email</p>
                      <p className="text-sm text-text-secondary">info@ssourcingchina.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-text-primary">Phone / WhatsApp</p>
                      <p className="text-sm text-text-secondary">+86 138 0000 0000</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-text-primary">Office Location</p>
                      <p className="text-sm text-text-secondary">Guangzhou, Guangdong, China</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-text-primary">Response Time</p>
                      <p className="text-sm text-text-secondary">Within 24-48 hours</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <h4 className="text-sm font-semibold text-text-primary mb-3">What Happens Next?</h4>
                  <ol className="space-y-2 list-none p-0 m-0">
                    <li className="flex items-start gap-2 text-sm text-text-secondary">
                      <span className="font-bold text-accent">1.</span>
                      We review your requirements
                    </li>
                    <li className="flex items-start gap-2 text-sm text-text-secondary">
                      <span className="font-bold text-accent">2.</span>
                      We send a service proposal & quote
                    </li>
                    <li className="flex items-start gap-2 text-sm text-text-secondary">
                      <span className="font-bold text-accent">3.</span>
                      We begin supplier research
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQ />
    </div>
  )
}

export default Contact
