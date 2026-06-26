import { useState } from 'react'
import { Icons } from '@/lib/data'
import { toast } from 'sonner'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    product: '',
    quantity: '',
    message: '',
  })
  const [submitting, setSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    await new Promise((r) => setTimeout(r, 1000))
    toast.success('Thank you for your inquiry! We will respond within 24 hours.')
    setForm({ name: '', email: '', company: '', phone: '', product: '', quantity: '', message: '' })
    setSubmitting(false)
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-primary pt-28 pb-16 lg:pt-32 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-accent-light font-semibold text-sm uppercase tracking-wider">Contact Us</span>
          <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Get a Free Sourcing Quote
          </h1>
          <p className="mt-4 text-white/70 text-lg max-w-2xl mx-auto">
            Tell us about your sourcing needs and our team will respond within 24 hours 
            with a tailored plan and no-obligation quote.
          </p>
        </div>
      </section>

      {/* Contact form + info */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="bg-surface-alt rounded-xl p-6 sm:p-8 border border-border">
                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-medium text-text-primary mb-1.5">Name *</label>
                    <input id="contact-name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder="Your full name" className="w-full px-4 py-2.5 border border-border rounded-md text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium text-text-primary mb-1.5">Email *</label>
                    <input id="contact-email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="you@company.com" className="w-full px-4 py-2.5 border border-border rounded-md text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label htmlFor="contact-company" className="block text-sm font-medium text-text-primary mb-1.5">Company</label>
                    <input id="contact-company" name="company" type="text" value={form.company} onChange={handleChange} placeholder="Your company name" className="w-full px-4 py-2.5 border border-border rounded-md text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" />
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="block text-sm font-medium text-text-primary mb-1.5">Phone / WhatsApp</label>
                    <input id="contact-phone" name="phone" type="text" value={form.phone} onChange={handleChange} placeholder="+1 (555) 000-0000" className="w-full px-4 py-2.5 border border-border rounded-md text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label htmlFor="contact-product" className="block text-sm font-medium text-text-primary mb-1.5">Product Description *</label>
                    <input id="contact-product" name="product" type="text" required value={form.product} onChange={handleChange} placeholder="What do you want to source?" className="w-full px-4 py-2.5 border border-border rounded-md text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" />
                  </div>
                  <div>
                    <label htmlFor="contact-quantity" className="block text-sm font-medium text-text-primary mb-1.5">Est. Order Quantity</label>
                    <input id="contact-quantity" name="quantity" type="text" value={form.quantity} onChange={handleChange} placeholder="e.g. 10,000 units" className="w-full px-4 py-2.5 border border-border rounded-md text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" />
                  </div>
                </div>

                <div className="mb-5">
                  <label htmlFor="contact-message" className="block text-sm font-medium text-text-primary mb-1.5">Additional Details</label>
                  <textarea id="contact-message" name="message" rows={5} value={form.message} onChange={handleChange} placeholder="Target price, materials, certifications, timeline, or any other requirements..." className="w-full px-4 py-2.5 border border-border rounded-md text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none" />
                </div>

                <button type="submit" disabled={submitting} className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-accent hover:bg-accent-dark text-white font-semibold rounded-md transition-colors shadow-sm disabled:opacity-60 disabled:cursor-not-allowed">
                  {submitting ? 'Sending...' : (
                    <>
                      <Icons.Send className="w-4 h-4" />
                      Submit Inquiry
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact info */}
            <div>
              <div className="bg-surface-alt rounded-xl p-6 sm:p-8 border border-border sticky top-24">
                <h3 className="text-lg font-bold text-text-primary mb-6">Contact Information</h3>

                <div className="space-y-5">
                  <div className="flex gap-3">
                    <Icons.MapPin className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                    <div>
                      <h4 className="font-semibold text-text-primary text-sm">Office Address</h4>
                      <p className="text-text-secondary text-sm">No. 888 Tiyu Xi Road, Tianhe District<br />Guangzhou, Guangdong, China</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Icons.Phone className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                    <div>
                      <h4 className="font-semibold text-text-primary text-sm">Phone / WhatsApp</h4>
                      <p className="text-text-secondary text-sm">+86 20 8888 6666</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Icons.Mail className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                    <div>
                      <h4 className="font-semibold text-text-primary text-sm">Email</h4>
                      <p className="text-text-secondary text-sm">info@ssourcingchina.com</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Icons.Clock className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                    <div>
                      <h4 className="font-semibold text-text-primary text-sm">Business Hours</h4>
                      <p className="text-text-secondary text-sm">Monday - Friday<br />9:00 AM - 6:00 PM (CST)</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-border">
                  <h4 className="font-semibold text-text-primary text-sm mb-2">Response Time</h4>
                  <p className="text-text-secondary text-sm">
                    We reply to all inquiries within <span className="text-primary font-semibold">24 hours</span> on business days.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}