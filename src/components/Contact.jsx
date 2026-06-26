import { useState } from 'react'
import { Mail, MapPin, Phone, Send, Loader2 } from 'lucide-react'

export default function Contact() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    company: '',
    machine: '',
    message: '',
  })
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setError(null)

    if (!values.name.trim() || !values.email.trim() || !values.message.trim()) {
      setError('Please fill in all required fields.')
      return
    }
    if (!/^\S+@\S+\.\S+$/.test(values.email)) {
      setError('Please enter a valid email address.')
      return
    }

    setStatus('submitting')
    // Simulate submission — in production this would POST to an API
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setStatus('success')
    setValues({ name: '', email: '', company: '', machine: '', message: '' })
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-brand-surface">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 text-accent-gold text-sm font-medium uppercase tracking-[0.2em] mb-4">
            <span className="w-6 h-px bg-accent-gold" />
            Get In Touch
          </span>
          <h2 className="font-[family-name:var(--font-family-heading)] text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Let&apos;s Discuss Your Needs
          </h2>
          <p className="text-text-secondary text-base md:text-lg">
            Tell us about your fabrication requirements and we&apos;ll help you
            find the perfect folding solution.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Form */}
          <form onSubmit={onSubmit} className="lg:col-span-3 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-text-secondary mb-2"
                >
                  Name <span className="text-accent-gold">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={values.name}
                  onChange={onChange}
                  required
                  placeholder="Your full name"
                  className="w-full bg-brand-card border border-border-subtle rounded-lg px-4 py-3 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-gold/50 transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-text-secondary mb-2"
                >
                  Email <span className="text-accent-gold">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={onChange}
                  required
                  placeholder="you@company.com"
                  className="w-full bg-brand-card border border-border-subtle rounded-lg px-4 py-3 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-gold/50 transition-colors"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-text-secondary mb-2"
                >
                  Company
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  value={values.company}
                  onChange={onChange}
                  placeholder="Your company name"
                  className="w-full bg-brand-card border border-border-subtle rounded-lg px-4 py-3 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-gold/50 transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="machine"
                  className="block text-sm font-medium text-text-secondary mb-2"
                >
                  Machine of Interest
                </label>
                <select
                  id="machine"
                  name="machine"
                  value={values.machine}
                  onChange={onChange}
                  className="w-full bg-brand-card border border-border-subtle rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-accent-gold/50 transition-colors appearance-none"
                >
                  <option value="">Select a machine...</option>
                  <option value="double-folding-machine">
                    Double Folding Machine
                  </option>
                  <option value="sheet-metal-folder">
                    Sheet Metal Folder
                  </option>
                  <option value="metal-folding-machine">
                    Metal Folding Machine
                  </option>
                  <option value="other">Other / Not Sure</option>
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-text-secondary mb-2"
              >
                Message <span className="text-accent-gold">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={values.message}
                onChange={onChange}
                required
                placeholder="Tell us about your project, materials, volume, and any specific requirements..."
                className="w-full bg-brand-card border border-border-subtle rounded-lg px-4 py-3 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-gold/50 transition-colors resize-none"
              />
            </div>

            {error && (
              <p className="text-red-400 text-sm" role="alert">
                {error}
              </p>
            )}
            {status === 'success' && (
              <p className="text-accent-gold text-sm" role="status">
                Thank you! We&apos;ve received your inquiry and will respond
                within 24 hours.
              </p>
            )}

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="inline-flex items-center gap-3 bg-accent-gold text-brand-dark px-8 py-3.5 rounded-lg font-semibold text-base hover:bg-accent-gold-light transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'submitting' ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Send Inquiry
                </>
              )}
            </button>
          </form>

          {/* Contact info sidebar */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-brand-card border border-border-subtle rounded-2xl p-6 md:p-8">
              <h3 className="font-[family-name:var(--font-family-heading)] text-xl font-bold text-text-primary mb-6">
                Contact Information
              </h3>
              <div className="space-y-5">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent-gold/10 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-accent-gold" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-text-primary">
                      Phone
                    </div>
                    <div className="text-text-secondary text-sm">
                      +1 (555) 123-4567
                    </div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent-gold/10 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-accent-gold" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-text-primary">
                      Email
                    </div>
                    <div className="text-text-secondary text-sm">
                      sales@artitectmachinery.com
                    </div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent-gold/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-accent-gold" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-text-primary">
                      Headquarters
                    </div>
                    <div className="text-text-secondary text-sm">
                      2200 Industrial Parkway
                      <br />
                      Cleveland, OH 44101
                      <br />
                      United States
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-accent-gold/10 to-accent-gold/5 border border-accent-gold/20 rounded-2xl p-6 md:p-8">
              <h3 className="font-[family-name:var(--font-family-heading)] text-lg font-bold text-text-primary mb-3">
                Need Urgent Assistance?
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-4">
                Our support team is available Monday through Friday, 7 AM to 7
                PM EST. We respond to all inquiries within one business day.
              </p>
              <div className="text-accent-gold font-semibold text-sm">
                +1 (555) 123-4599 — Technical Support
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
