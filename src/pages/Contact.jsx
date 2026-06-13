import { useState } from 'react'
import { Link } from 'react-router-dom'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx'
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  ArrowRight,
  Loader2,
} from 'lucide-react'
import { toast } from 'sonner'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const productCategories = [
  'Electronics & Gadgets',
  'Apparel & Textiles',
  'Home & Furniture',
  'Industrial & Hardware',
  'Packaging & Printing',
  'Health & Beauty',
  'Other / Not Sure',
]

const budgetRanges = [
  'Under $5,000',
  '$5,000 – $25,000',
  '$25,000 – $100,000',
  '$100,000 – $500,000',
  '$500,000+',
  'Not sure yet',
]

function getErrorMessage(response, error) {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }
  return error?.message || 'Request failed. Please try again.'
}

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    country: '',
    product_category: '',
    budget_range: '',
    message: '',
  })
  const [status, setStatus] = useState('idle')
  const [errors, setErrors] = useState({})

  const handleChange = (field, value) => {
    setForm((f) => ({ ...f, [field]: value }))
    setErrors((e) => ({ ...e, [field]: undefined }))
  }

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Please enter a valid email'
    if (!form.message.trim()) e.message = 'Message is required'
    else if (form.message.trim().length < 10) e.message = 'Please provide more details (at least 10 characters)'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return

    setStatus('submitting')
    try {
      const { data: response, error } = await client
        .from('SourcingInquiry')
        .insert({
          data: {
            name: form.name,
            email: form.email,
            company: form.company,
            phone: form.phone,
            country: form.country,
            product_category: form.product_category,
            budget_range: form.budget_range,
            message: form.message,
          },
        })
        .select()
        .single()

      if (error || response?.success === false) {
        throw new Error(getErrorMessage(response, error))
      }

      setStatus('success')
      setForm({
        name: '',
        email: '',
        company: '',
        phone: '',
        country: '',
        product_category: '',
        budget_range: '',
        message: '',
      })
      toast.success('Your inquiry has been submitted. We will get back to you within 24 hours.')
    } catch (err) {
      setStatus('error')
      toast.error(err.message || 'Failed to submit inquiry. Please try again.')
    }
  }

  const inputClass = (field) =>
    `w-full rounded-lg border px-4 py-2.5 text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#c4951a]/30 ${
      errors[field]
        ? 'border-red-400 bg-red-50'
        : 'border-[#d1d5db] bg-white focus:border-[#c4951a]'
    }`

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#1a2b4a] pt-24 md:pt-32 pb-16 md:pb-20">
        <div className="container-main text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Get a Free Sourcing Quote
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto text-base md:text-lg">
            Tell us about your product and sourcing needs. Our team will review your inquiry and get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* Form + Contact Info */}
      <section className="bg-white section-padding">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="text-xl md:text-2xl font-bold text-[#1a2b4a] mb-2">
                Submit Your Inquiry
              </h2>
              <p className="text-sm text-[#64748b] mb-6">
                Fields marked with <span className="text-red-500">*</span> are required.
              </p>

              {status === 'success' ? (
                <div className="bg-[#f0fdf4] border border-[#16a34a]/20 rounded-xl p-8 text-center">
                  <CheckCircle2 className="w-12 h-12 text-[#16a34a] mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-[#1a2b4a] mb-2">
                    Inquiry Submitted Successfully
                  </h3>
                  <p className="text-sm text-[#64748b] mb-6">
                    Thank you for reaching out. Our team will review your requirements and contact you within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="btn-primary"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-[#374151] mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        className={inputClass('name')}
                        placeholder="John Smith"
                      />
                      {errors.name && (
                        <p className="text-xs text-red-500 mt-1">{errors.name}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#374151] mb-1.5">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        className={inputClass('email')}
                        placeholder="john@company.com"
                      />
                      {errors.email && (
                        <p className="text-xs text-red-500 mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-[#374151] mb-1.5">
                        Company Name
                      </label>
                      <input
                        type="text"
                        value={form.company}
                        onChange={(e) => handleChange('company', e.target.value)}
                        className={inputClass('company')}
                        placeholder="Your Company Ltd."
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#374151] mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        className={inputClass('phone')}
                        placeholder="+1 555 123 4567"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-[#374151] mb-1.5">
                        Country / Region
                      </label>
                      <input
                        type="text"
                        value={form.country}
                        onChange={(e) => handleChange('country', e.target.value)}
                        className={inputClass('country')}
                        placeholder="United States"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#374151] mb-1.5">
                        Product Category
                      </label>
                      <select
                        value={form.product_category}
                        onChange={(e) => handleChange('product_category', e.target.value)}
                        className={inputClass('product_category')}
                      >
                        <option value="">Select a category</option>
                        {productCategories.map((c) => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#374151] mb-1.5">
                      Estimated Budget / Order Volume
                    </label>
                    <select
                      value={form.budget_range}
                      onChange={(e) => handleChange('budget_range', e.target.value)}
                      className={inputClass('budget_range')}
                    >
                      <option value="">Select a range</option>
                      {budgetRanges.map((r) => (
                        <option key={r} value={r}>{r}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#374151] mb-1.5">
                      Your Sourcing Requirements <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows={5}
                      value={form.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      className={inputClass('message')}
                      placeholder="Tell us about the product you want to source, quantities, target price, quality requirements, and any other details..."
                    />
                    {errors.message && (
                      <p className="text-xs text-red-500 mt-1">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="btn-primary w-full sm:w-auto disabled:opacity-60"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Inquiry
                        <Send className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-2">
              <div className="bg-[#f6f7f9] rounded-xl p-6 md:p-8 border border-[#e2e8f0]">
                <h3 className="text-lg font-bold text-[#1a2b4a] mb-6">
                  Contact Information
                </h3>

                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#c4951a] mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-[#1a2b4a]">Email</p>
                      <p className="text-sm text-[#64748b]">hello@ssourcingchina.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[#c4951a] mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-[#1a2b4a]">Phone</p>
                      <p className="text-sm text-[#64748b]">+86 21 5555 8888</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#c4951a] mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-[#1a2b4a]">Office</p>
                      <p className="text-sm text-[#64748b]">
                        Building 12, Zhangjiang Hi-Tech Park<br />
                        Pudong New Area, Shanghai 201203<br />
                        China
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[#e2e8f0]">
                  <h4 className="text-sm font-semibold text-[#1a2b4a] mb-3">
                    Response Time
                  </h4>
                  <p className="text-sm text-[#64748b]">
                    We aim to respond to all inquiries within 24 hours during business days (Monday to Friday, 9:00 AM - 6:00 PM CST).
                  </p>
                </div>
              </div>

              {/* Quick CTA */}
              <div className="mt-6 bg-[#1a2b4a] rounded-xl p-6 text-white">
                <h4 className="text-base font-bold mb-2">
                  Prefer a Call?
                </h4>
                <p className="text-sm text-white/70 mb-4">
                  Schedule a free 15-minute consultation with our sourcing team.
                </p>
                <Link
                  to="/contact"
                  onClick={() => toast.info('Booking feature coming soon. Please submit the form above for now.')}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-[#c4951a] hover:text-[#d4a83a] transition-colors"
                >
                  Schedule a Call
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
