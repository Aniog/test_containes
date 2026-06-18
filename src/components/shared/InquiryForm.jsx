import { useState } from 'react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx'
import { CheckCircle, AlertCircle, MapPin, Mail, Phone, Clock } from 'lucide-react'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const serviceOptions = [
  'Supplier Sourcing',
  'Factory Verification',
  'Quality Inspection',
  'Production Follow-up',
  'Shipping Coordination',
  'Private Label / OEM',
  'Sample Procurement',
]

const productCategories = [
  'Electronics & Components',
  'Furniture & Home Decor',
  'Clothing & Textiles',
  'Machinery & Industrial',
  'Toys & Baby Products',
  'Health & Beauty',
  'Sports & Outdoor',
  'Packaging & Printing',
  'Auto Parts',
  'Other',
]

const timelines = [
  'ASAP (within 2 weeks)',
  '1 month',
  '2-3 months',
  'Flexible',
]

const initialValues = {
  full_name: '',
  email: '',
  company: '',
  country: '',
  phone: '',
  product_category: '',
  product_description: '',
  estimated_quantity: '',
  target_price: '',
  services_needed: [],
  timeline: '',
  additional_notes: '',
}

export default function ContactForm() {
  const [values, setValues] = useState(initialValues)
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  const handleServiceToggle = (service) => {
    setValues((v) => ({
      ...v,
      services_needed: v.services_needed.includes(service)
        ? v.services_needed.filter((s) => s !== service)
        : [...v.services_needed, service],
    }))
  }

  const validate = () => {
    if (!values.full_name.trim()) return 'Full name is required.'
    if (!values.email.trim()) return 'Email address is required.'
    if (!/^\S+@\S+\.\S+$/.test(values.email)) return 'Please enter a valid email address.'
    if (!values.product_description.trim()) return 'Product description is required.'
    return null
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    const validationError = validate()
    if (validationError) {
      setError(validationError)
      return
    }

    setStatus('submitting')

    const { data: response, error: submitError } = await client
      .from('Sourcing Inquiries')
      .insert({
        data: {
          full_name: values.full_name,
          email: values.email,
          company: values.company || undefined,
          country: values.country || undefined,
          phone: values.phone || undefined,
          product_category: values.product_category || undefined,
          product_description: values.product_description,
          estimated_quantity: values.estimated_quantity || undefined,
          target_price: values.target_price || undefined,
          services_needed: values.services_needed.length > 0 ? values.services_needed : undefined,
          timeline: values.timeline || undefined,
          additional_notes: values.additional_notes || undefined,
          status: 'new',
        },
      })
      .select()
      .single()

    if (submitError || response?.success === false) {
      const msg = Array.isArray(response?.errors) && response.errors.length > 0
        ? response.errors.join(', ')
        : submitError?.message || 'Submission failed. Please try again.'
      setError(msg)
      setStatus('error')
      return
    }

    setStatus('success')
    setValues(initialValues)
  }

  if (status === 'success') {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-4 py-16">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">Inquiry Received!</h2>
          <p className="text-[#4A5568] mb-6">
            Thank you for your inquiry. Our team will review your requirements and get back to you within 24 hours.
          </p>
          <button
            onClick={() => setStatus('idle')}
            className="bg-[#1A3C6E] hover:bg-[#15305A] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
          >
            Submit Another Inquiry
          </button>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-lg p-4">
          <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
          <p className="text-red-700 text-sm">{error}</p>
        </div>
      )}

      {/* Contact Info */}
      <div>
        <h3 className="text-base font-semibold text-[#1A1A2E] mb-4 pb-2 border-b border-[#E2E8F0]">Contact Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-[#1A1A2E] mb-1.5">
              Full Name <span className="text-[#C0392B]">*</span>
            </label>
            <input
              type="text"
              name="full_name"
              value={values.full_name}
              onChange={handleChange}
              placeholder="Your full name"
              className="w-full border border-[#E2E8F0] rounded-lg px-4 py-2.5 text-[#1A1A2E] text-sm focus:outline-none focus:ring-2 focus:ring-[#1A3C6E] focus:border-transparent placeholder-[#A0AEC0]"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#1A1A2E] mb-1.5">
              Business Email <span className="text-[#C0392B]">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              placeholder="you@company.com"
              className="w-full border border-[#E2E8F0] rounded-lg px-4 py-2.5 text-[#1A1A2E] text-sm focus:outline-none focus:ring-2 focus:ring-[#1A3C6E] focus:border-transparent placeholder-[#A0AEC0]"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#1A1A2E] mb-1.5">Company Name</label>
            <input
              type="text"
              name="company"
              value={values.company}
              onChange={handleChange}
              placeholder="Your company"
              className="w-full border border-[#E2E8F0] rounded-lg px-4 py-2.5 text-[#1A1A2E] text-sm focus:outline-none focus:ring-2 focus:ring-[#1A3C6E] focus:border-transparent placeholder-[#A0AEC0]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#1A1A2E] mb-1.5">Country</label>
            <input
              type="text"
              name="country"
              value={values.country}
              onChange={handleChange}
              placeholder="Your country"
              className="w-full border border-[#E2E8F0] rounded-lg px-4 py-2.5 text-[#1A1A2E] text-sm focus:outline-none focus:ring-2 focus:ring-[#1A3C6E] focus:border-transparent placeholder-[#A0AEC0]"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-[#1A1A2E] mb-1.5">Phone / WhatsApp</label>
            <input
              type="text"
              name="phone"
              value={values.phone}
              onChange={handleChange}
              placeholder="+1 234 567 8900"
              className="w-full border border-[#E2E8F0] rounded-lg px-4 py-2.5 text-[#1A1A2E] text-sm focus:outline-none focus:ring-2 focus:ring-[#1A3C6E] focus:border-transparent placeholder-[#A0AEC0]"
            />
          </div>
        </div>
      </div>

      {/* Product Info */}
      <div>
        <h3 className="text-base font-semibold text-[#1A1A2E] mb-4 pb-2 border-b border-[#E2E8F0]">Product Requirements</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#1A1A2E] mb-1.5">Product Category</label>
            <select
              name="product_category"
              value={values.product_category}
              onChange={handleChange}
              className="w-full border border-[#E2E8F0] rounded-lg px-4 py-2.5 text-[#1A1A2E] text-sm focus:outline-none focus:ring-2 focus:ring-[#1A3C6E] focus:border-transparent bg-white"
            >
              <option value="">Select a category</option>
              {productCategories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-[#1A1A2E] mb-1.5">
              Product Description <span className="text-[#C0392B]">*</span>
            </label>
            <textarea
              name="product_description"
              value={values.product_description}
              onChange={handleChange}
              rows={4}
              placeholder="Describe the product(s) you want to source — include specifications, materials, dimensions, certifications needed, etc."
              className="w-full border border-[#E2E8F0] rounded-lg px-4 py-2.5 text-[#1A1A2E] text-sm focus:outline-none focus:ring-2 focus:ring-[#1A3C6E] focus:border-transparent placeholder-[#A0AEC0] resize-none"
              required
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[#1A1A2E] mb-1.5">Estimated Quantity</label>
              <input
                type="text"
                name="estimated_quantity"
                value={values.estimated_quantity}
                onChange={handleChange}
                placeholder="e.g. 500 units/month"
                className="w-full border border-[#E2E8F0] rounded-lg px-4 py-2.5 text-[#1A1A2E] text-sm focus:outline-none focus:ring-2 focus:ring-[#1A3C6E] focus:border-transparent placeholder-[#A0AEC0]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#1A1A2E] mb-1.5">Target Unit Price</label>
              <input
                type="text"
                name="target_price"
                value={values.target_price}
                onChange={handleChange}
                placeholder="e.g. USD 5–8 per unit"
                className="w-full border border-[#E2E8F0] rounded-lg px-4 py-2.5 text-[#1A1A2E] text-sm focus:outline-none focus:ring-2 focus:ring-[#1A3C6E] focus:border-transparent placeholder-[#A0AEC0]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Services */}
      <div>
        <h3 className="text-base font-semibold text-[#1A1A2E] mb-4 pb-2 border-b border-[#E2E8F0]">Services Needed</h3>
        <div className="flex flex-wrap gap-2">
          {serviceOptions.map((service) => (
            <button
              key={service}
              type="button"
              onClick={() => handleServiceToggle(service)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors duration-200 ${
                values.services_needed.includes(service)
                  ? 'bg-[#1A3C6E] text-white border-[#1A3C6E]'
                  : 'bg-white text-[#4A5568] border-[#E2E8F0] hover:border-[#1A3C6E] hover:text-[#1A3C6E]'
              }`}
            >
              {service}
            </button>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div>
        <label className="block text-sm font-medium text-[#1A1A2E] mb-1.5">Timeline</label>
        <select
          name="timeline"
          value={values.timeline}
          onChange={handleChange}
          className="w-full border border-[#E2E8F0] rounded-lg px-4 py-2.5 text-[#1A1A2E] text-sm focus:outline-none focus:ring-2 focus:ring-[#1A3C6E] focus:border-transparent bg-white"
        >
          <option value="">Select your timeline</option>
          {timelines.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      {/* Notes */}
      <div>
        <label className="block text-sm font-medium text-[#1A1A2E] mb-1.5">Additional Notes</label>
        <textarea
          name="additional_notes"
          value={values.additional_notes}
          onChange={handleChange}
          rows={3}
          placeholder="Any other requirements, questions, or context that would help us understand your needs."
          className="w-full border border-[#E2E8F0] rounded-lg px-4 py-2.5 text-[#1A1A2E] text-sm focus:outline-none focus:ring-2 focus:ring-[#1A3C6E] focus:border-transparent placeholder-[#A0AEC0] resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full bg-[#C0392B] hover:bg-[#A93226] disabled:bg-[#E2E8F0] disabled:text-[#A0AEC0] text-white font-semibold py-4 rounded-lg transition-colors duration-200 text-base"
      >
        {status === 'submitting' ? 'Submitting...' : 'Submit Sourcing Inquiry'}
      </button>

      <p className="text-xs text-[#718096] text-center">
        We respond to all inquiries within 24 hours. Your information is kept confidential.
      </p>
    </form>
  )
}
