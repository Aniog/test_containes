import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, MessageSquare, Globe, Loader2 } from 'lucide-react'
import { toast } from 'sonner'
import SectionTitle from '../components/shared/SectionTitle'
import { createInquiry } from '../api/inquiries'

const productCategories = [
  'Electronics & Components',
  'Textiles & Apparel',
  'Hardware & Tools',
  'Home & Kitchen',
  'Packaging Materials',
  'Industrial & Machinery',
  'Beauty & Personal Care',
  'Sports & Outdoor',
  'Other',
]

const orderVolumes = [
  'Under $5,000',
  '$5,000 - $25,000',
  '$25,000 - $100,000',
  '$100,000 - $500,000',
  'Over $500,000',
  'Not sure yet',
]

const servicesNeeded = [
  'Supplier Sourcing',
  'Factory Verification',
  'Quality Control',
  'Production Follow-Up',
  'Shipping Coordination',
  'Full Service Package',
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    country: '',
    productCategory: '',
    orderVolume: '',
    services: [],
    productDescription: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleServiceToggle = (service) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    try {
      await createInquiry({
        name: formData.name,
        email: formData.email,
        company: formData.company,
        phone: formData.phone,
        country: formData.country,
        product_category: formData.productCategory,
        order_volume: formData.orderVolume,
        services_needed: formData.services,
        product_description: formData.productDescription,
        message: formData.message,
      })
      setSubmitted(true)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } catch (err) {
      toast.error(err.message || 'Failed to submit inquiry. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-surface">
        <div className="max-w-lg mx-auto px-4 text-center">
          <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-success" />
          </div>
          <h1 className="text-3xl font-bold text-text-primary mb-4">Thank You!</h1>
          <p className="text-text-secondary mb-2">
            Your inquiry has been submitted successfully.
          </p>
          <p className="text-text-secondary mb-8">
            Our team will review your requirements and get back to you within 24 business hours with a tailored sourcing plan.
          </p>
          <div className="bg-white rounded-xl border border-border p-6 mb-8 text-left">
            <h4 className="text-sm font-semibold text-text-primary mb-3">What happens next?</h4>
            <ul className="space-y-3 text-sm text-text-secondary">
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">1</span>
                We review your product requirements and sourcing goals
              </li>
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">2</span>
                Our team prepares a customized sourcing proposal
              </li>
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">3</span>
                We schedule a call to discuss next steps (if needed)
              </li>
            </ul>
          </div>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-accent-hover transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-surface py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-text-primary mb-4">
            Get a Free Sourcing Quote
          </h1>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Tell us about your product and sourcing needs. We'll get back to you within 24 hours with a no-obligation quote and sourcing plan.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-24 space-y-8">
                <div>
                  <h3 className="text-lg font-bold text-text-primary mb-4">Contact Information</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-xs text-text-muted uppercase tracking-wider font-medium">Email</div>
                        <a href="mailto:hello@ssourcingchina.com" className="text-sm text-text-secondary hover:text-primary transition-colors">
                          hello@ssourcingchina.com
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-xs text-text-muted uppercase tracking-wider font-medium">Phone</div>
                        <a href="tel:+8613800138000" className="text-sm text-text-secondary hover:text-primary transition-colors">
                          +86 138 0013 8000
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-xs text-text-muted uppercase tracking-wider font-medium">Office</div>
                        <p className="text-sm text-text-secondary">
                          Room 1805, Block A<br />
                          Fortune Plaza, Yiwu<br />
                          Zhejiang, China 322000
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <Clock className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-xs text-text-muted uppercase tracking-wider font-medium">Response Time</div>
                        <p className="text-sm text-text-secondary">
                          Under 4 hours during business hours<br />
                          (Mon-Fri, 9:00-18:00 CST)
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-surface rounded-xl p-6 border border-border">
                  <div className="flex items-center gap-2 mb-3">
                    <MessageSquare className="w-5 h-5 text-primary" />
                    <h4 className="font-semibold text-text-primary">Prefer to Chat?</h4>
                  </div>
                  <p className="text-sm text-text-secondary mb-4">
                    We also offer consultations via WeChat and WhatsApp for faster communication.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-text-secondary">
                    <Globe className="w-4 h-4 text-text-muted" />
                    <span>English, Chinese</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-8">
              <form onSubmit={handleSubmit} className="bg-surface rounded-2xl p-6 md:p-10 border border-border">
                <h2 className="text-xl font-bold text-text-primary mb-6">Tell Us About Your Sourcing Needs</h2>

                <div className="space-y-6">
                  {/* Name & Email */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-1.5">
                        Full Name <span className="text-accent">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-white text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-1.5">
                        Email Address <span className="text-accent">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-white text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  {/* Company & Phone */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-text-primary mb-1.5">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-white text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                        placeholder="Your Company Ltd."
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-text-primary mb-1.5">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-white text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                        placeholder="+1 234 567 8900"
                      />
                    </div>
                  </div>

                  {/* Country */}
                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-text-primary mb-1.5">
                      Your Country <span className="text-accent">*</span>
                    </label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      required
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-white text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="United States"
                    />
                  </div>

                  {/* Product Category */}
                  <div>
                    <label htmlFor="productCategory" className="block text-sm font-medium text-text-primary mb-1.5">
                      Product Category <span className="text-accent">*</span>
                    </label>
                    <select
                      id="productCategory"
                      name="productCategory"
                      required
                      value={formData.productCategory}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-white text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    >
                      <option value="">Select a category</option>
                      {productCategories.map((cat) => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>

                  {/* Order Volume */}
                  <div>
                    <label htmlFor="orderVolume" className="block text-sm font-medium text-text-primary mb-1.5">
                      Estimated Order Volume
                    </label>
                    <select
                      id="orderVolume"
                      name="orderVolume"
                      value={formData.orderVolume}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-white text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    >
                      <option value="">Select estimated volume</option>
                      {orderVolumes.map((vol) => (
                        <option key={vol} value={vol}>{vol}</option>
                      ))}
                    </select>
                  </div>

                  {/* Services Needed */}
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Services Needed
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {servicesNeeded.map((service) => (
                        <button
                          key={service}
                          type="button"
                          onClick={() => handleServiceToggle(service)}
                          className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all ${
                            formData.services.includes(service)
                              ? 'bg-primary text-white border-primary'
                              : 'bg-white text-text-secondary border-border hover:border-primary/40'
                          }`}
                        >
                          {service}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Product Description */}
                  <div>
                    <label htmlFor="productDescription" className="block text-sm font-medium text-text-primary mb-1.5">
                      Product Description <span className="text-accent">*</span>
                    </label>
                    <textarea
                      id="productDescription"
                      name="productDescription"
                      required
                      rows={4}
                      value={formData.productDescription}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-white text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                      placeholder="Describe the product you want to source, including specifications, materials, colors, sizes, and any special requirements."
                    />
                  </div>

                  {/* Additional Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-1.5">
                      Additional Information
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-white text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                      placeholder="Any other details: target price, timeline, certifications needed, packaging requirements, etc."
                    />
                  </div>

                  {/* Submit */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-accent text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-accent-hover transition-colors shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {submitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Submit Inquiry
                        </>
                      )}
                    </button>
                    <p className="text-xs text-text-muted mt-3">
                      By submitting this form, you agree to our privacy policy. We never share your information with third parties.
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
