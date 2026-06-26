import { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    machine: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Get in Touch"
          title="Request a quote or consultation"
          description="Tell us about your project and our team will recommend the right folding machine for your workflow."
        />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-6 rounded-lg border border-border-soft shadow-sm">
              <h3 className="text-lg font-bold text-ink mb-4">Contact Information</h3>
              <ul className="space-y-4 text-stone">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gold-dark flex-shrink-0 mt-0.5" />
                  <span>Industrial Zone, Building 7<br />Manufacturing District</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-gold-dark flex-shrink-0" />
                  <a href="tel:+12345678900" className="hover:text-gold-dark transition-colors">+1 (234) 567-8900</a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-gold-dark flex-shrink-0" />
                  <a href="mailto:info@artitectmachinery.com" className="hover:text-gold-dark transition-colors">info@artitectmachinery.com</a>
                </li>
              </ul>
            </div>

            <div className="bg-charcoal p-6 rounded-lg text-white">
              <h3 className="text-lg font-bold mb-2">Need technical support?</h3>
              <p className="text-white/70 text-sm mb-4">
                Our engineers are available to help with machine selection, tooling, and after-sales service.
              </p>
              <a href="tel:+12345678900" className="text-gold hover:text-white transition-colors text-sm font-semibold">
                Call our support line →
              </a>
            </div>
          </div>

          <div className="lg:col-span-3 bg-white p-6 md:p-8 rounded-lg border border-border-soft shadow-sm">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <CheckCircle className="w-16 h-16 text-gold-dark mb-4" />
                <h3 className="text-2xl font-bold text-ink mb-2">Message Sent</h3>
                <p className="text-stone max-w-md">
                  Thank you for reaching out. Our team will review your request and contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-ink mb-1">Full name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded border border-border-soft bg-cream text-ink placeholder-muted focus:outline-none focus:ring-2 focus:ring-gold"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-ink mb-1">Email address</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded border border-border-soft bg-cream text-ink placeholder-muted focus:outline-none focus:ring-2 focus:ring-gold"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-ink mb-1">Company</label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={form.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded border border-border-soft bg-cream text-ink placeholder-muted focus:outline-none focus:ring-2 focus:ring-gold"
                      placeholder="Your company"
                    />
                  </div>
                  <div>
                    <label htmlFor="machine" className="block text-sm font-medium text-ink mb-1">Machine of interest</label>
                    <select
                      id="machine"
                      name="machine"
                      value={form.machine}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded border border-border-soft bg-cream text-ink focus:outline-none focus:ring-2 focus:ring-gold"
                    >
                      <option value="">Select a machine</option>
                      <option value="double-folding-machine">Double Folding Machine</option>
                      <option value="double-folder">Double Folder</option>
                      <option value="sheet-metal-folder">Sheet Metal Folder</option>
                      <option value="sheet-metal-folding-machine">Sheet Metal Folding Machine</option>
                      <option value="metal-folder">Metal Folder</option>
                      <option value="metal-folder-machine">Metal Folder Machine</option>
                      <option value="metal-folding-machine">Metal Folding Machine</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-ink mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={form.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded border border-border-soft bg-cream text-ink placeholder-muted focus:outline-none focus:ring-2 focus:ring-gold resize-none"
                    placeholder="Tell us about your project, material, and production needs..."
                  />
                </div>

                <Button type="submit" variant="primary" size="lg" className="w-full md:w-auto gap-2">
                  <Send className="w-4 h-4" /> Send Message
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
