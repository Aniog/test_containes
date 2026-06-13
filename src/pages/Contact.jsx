import { useState, useEffect, useRef } from 'react'
import { Mail, Phone, MapPin, Send, Clock, CheckCircle } from 'lucide-react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const projectUrl = STRK_PROJECT_URL
const projectAnonKey = STRK_PROJECT_ANON_KEY
const client = new DataClient(projectUrl, projectAnonKey)

const productOptions = [
  'Double Folding Machine',
  'Double Folder',
  'Sheet Metal Folder',
  'Sheet Metal Folding Machine',
  'Metal Folder',
  'Metal Folder Machine',
  'Metal Folding Machine',
  'Not sure yet',
]

const initialForm = {
  name: '',
  email: '',
  phone: '',
  company: '',
  productInterest: '',
  message: '',
}

export default function Contact() {
  const heroRef = useRef(null)
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)

  useEffect(() => {
    if (heroRef.current) {
      return ImageHelper.loadImages(strkImgConfig, heroRef.current)
    }
  }, [])

  const onChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const validate = (v) => {
    if (!v.name.trim()) return 'Name is required'
    if (!v.email.trim()) return 'Email is required'
    if (!/^\S+@\S+\.\S+$/.test(v.email)) return 'Please provide a valid email address'
    if (!v.message.trim()) return 'Message is required'
    return null
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    const validationError = validate(form)
    if (validationError) {
      setError(validationError)
      return
    }

    setStatus('submitting')

    try {
      const { error: responseError } = await client
        .from('contactFormResponses')
        .insert({
          data: {
            email: form.email,
            name: form.name,
            phone: form.phone,
            company: form.company,
            productInterest: form.productInterest,
            message: form.message,
          },
        })

      if (responseError) throw responseError

      setStatus('success')
      setForm(initialForm)
    } catch (err) {
      console.error('Contact form submission error:', err)
      setError(err.message || 'Submission failed. Please try again later.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div>
        <section className="py-20 md:py-28 bg-brand-navy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <CheckCircle className="w-16 h-16 text-brand-gold mx-auto mb-6" />
            <h1 className="font-serif text-3xl md:text-5xl font-bold text-white mb-4">
              Thank You!
            </h1>
            <p className="text-white/70 max-w-xl mx-auto text-lg">
              Your inquiry has been received. Our team will review your request and get back to you within 24 hours.
            </p>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div>
      {/* Hero */}
      <section ref={heroRef} className="relative py-20 md:py-28 bg-brand-navy overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          data-strk-bg-id="contact-hero-2d4f8b"
          data-strk-bg="[contact-title] [contact-subtitle]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/95 to-brand-navy/80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-brand-gold text-xs uppercase tracking-[0.3em] font-medium mb-3">
            Get In Touch
          </span>
          <h1
            id="contact-title"
            className="font-serif text-3xl md:text-5xl font-bold text-white"
          >
            Contact Us
          </h1>
          <p
            id="contact-subtitle"
            className="mt-4 text-white/70 max-w-2xl mx-auto"
          >
            Ready to discuss your metal folding needs? Fill out the form below and our team will get back to you promptly.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <h2 className="font-serif text-2xl font-bold text-brand-navy mb-2">
                Send Us a Message
              </h2>
              <p className="text-brand-slate text-sm mb-8">
                Tell us about your project and we will find the right solution for you.
              </p>

              <form onSubmit={onSubmit} className="space-y-6" aria-busy={status === 'submitting'}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-brand-navy mb-1.5">
                      Name <span className="text-brand-gold">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={onChange}
                      required
                      placeholder="Your full name"
                      className="w-full px-4 py-3 border border-brand-cream-dark text-brand-navy placeholder:text-brand-slate-light/60 bg-white focus:outline-none focus:border-brand-gold transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-brand-navy mb-1.5">
                      Email <span className="text-brand-gold">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={onChange}
                      required
                      placeholder="you@company.com"
                      className="w-full px-4 py-3 border border-brand-cream-dark text-brand-navy placeholder:text-brand-slate-light/60 bg-white focus:outline-none focus:border-brand-gold transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-brand-navy mb-1.5">
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={onChange}
                      placeholder="+1 (555) 123-4567"
                      className="w-full px-4 py-3 border border-brand-cream-dark text-brand-navy placeholder:text-brand-slate-light/60 bg-white focus:outline-none focus:border-brand-gold transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-brand-navy mb-1.5">
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={form.company}
                      onChange={onChange}
                      placeholder="Your company name"
                      className="w-full px-4 py-3 border border-brand-cream-dark text-brand-navy placeholder:text-brand-slate-light/60 bg-white focus:outline-none focus:border-brand-gold transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="productInterest" className="block text-sm font-medium text-brand-navy mb-1.5">
                    Product of Interest
                  </label>
                  <select
                    id="productInterest"
                    name="productInterest"
                    value={form.productInterest}
                    onChange={onChange}
                    className="w-full px-4 py-3 border border-brand-cream-dark text-brand-navy bg-white focus:outline-none focus:border-brand-gold transition-colors appearance-none"
                  >
                    <option value="">Select a product...</option>
                    {productOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-brand-navy mb-1.5">
                    Message <span className="text-brand-gold">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={onChange}
                    required
                    placeholder="Tell us about your requirements, production volume, materials, etc."
                    className="w-full px-4 py-3 border border-brand-cream-dark text-brand-navy placeholder:text-brand-slate-light/60 bg-white focus:outline-none focus:border-brand-gold transition-colors resize-y"
                  />
                </div>

                {error && (
                  <div className="p-4 bg-red-50 border border-red-200">
                    <p className="text-red-700 text-sm">{error}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand-gold text-white font-medium uppercase tracking-wider text-sm hover:bg-brand-gold-dark transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-brand-navy mb-2">
                Contact Information
              </h2>
              <p className="text-brand-slate text-sm mb-8">
                Reach out through any of the channels below.
              </p>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-brand-navy flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-brand-gold" />
                  </div>
                  <div>
                    <h3 className="font-medium text-brand-navy text-sm uppercase tracking-wider">Email</h3>
                    <a href="mailto:info@artitectmachinery.com" className="text-brand-slate text-sm hover:text-brand-gold transition-colors">
                      info@artitectmachinery.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-brand-navy flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-brand-gold" />
                  </div>
                  <div>
                    <h3 className="font-medium text-brand-navy text-sm uppercase tracking-wider">Phone</h3>
                    <a href="tel:+15551234567" className="text-brand-slate text-sm hover:text-brand-gold transition-colors">
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-brand-navy flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-brand-gold" />
                  </div>
                  <div>
                    <h3 className="font-medium text-brand-navy text-sm uppercase tracking-wider">Address</h3>
                    <p className="text-brand-slate text-sm">
                      123 Industrial Blvd, Suite 200
                      <br />
                      Manufacturing City, MC 12345
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-brand-navy flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-brand-gold" />
                  </div>
                  <div>
                    <h3 className="font-medium text-brand-navy text-sm uppercase tracking-wider">Business Hours</h3>
                    <p className="text-brand-slate text-sm">
                      Monday - Friday: 8:00 AM - 6:00 PM
                      <br />
                      Saturday: 9:00 AM - 2:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 p-6 bg-brand-cream border border-brand-cream-dark">
                <h3 className="font-serif text-lg font-semibold text-brand-navy mb-2">
                  Need Immediate Assistance?
                </h3>
                <p className="text-brand-slate text-sm mb-4">
                  Our technical support team is available 24/7 for emergency inquiries.
                </p>
                <a
                  href="tel:+15551234567"
                  className="inline-flex items-center gap-2 text-brand-gold font-medium text-sm uppercase tracking-wider hover:text-brand-gold-dark transition-colors"
                >
                  Call Us Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}