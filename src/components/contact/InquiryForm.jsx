import { useState } from 'react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx'
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const productCategories = [
  'Electronics & Components',
  'Machinery & Industrial',
  'Textiles & Apparel',
  'Home & Furniture',
  'Packaging Materials',
  'Automotive Parts',
  'Tools & Hardware',
  'Consumer Goods',
  'Other',
]

const orderVolumes = [
  'Under $5,000',
  '$5,000 - $20,000',
  '$20,000 - $100,000',
  '$100,000 - $500,000',
  'Over $500,000',
  'Not sure yet',
]

export default function InquiryForm() {
  const [values, setValues] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: '',
    productCategory: '',
    orderVolume: '',
    productDetails: '',
    timeline: '',
  })
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  const validate = () => {
    if (!values.name.trim()) return 'Name is required'
    if (!values.email.trim()) return 'Email is required'
    if (!/^\S+@\S+\.\S+$/.test(values.email)) return 'Please enter a valid email'
    if (!values.productDetails.trim()) return 'Please describe the product you want to source'
    return null
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    const err = validate()
    if (err) { setError(err); return }

    setStatus('submitting')

    try {
      const { data: response, error: insertError } = await client
        .from('Inquiry')
        .insert({
          data: {
            name: values.name,
            company: values.company,
            email: values.email,
            phone: values.phone,
            country: values.country,
            product_category: values.productCategory,
            order_volume: values.orderVolume,
            product_details: values.productDetails,
            timeline: values.timeline,
            status: 'new',
          },
        })
        .select()
        .single()

      if (insertError || response?.success === false) {
        const msg = response?.errors?.join(', ') || insertError?.message || 'Submission failed'
        throw new Error(msg)
      }

      setStatus('success')
      setValues({
        name: '',
        company: '',
        email: '',
        phone: '',
        country: '',
        productCategory: '',
        orderVolume: '',
        productDetails: '',
        timeline: '',
      })
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
        <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-green-800 mb-2">Inquiry Submitted</h3>
        <p className="text-green-700">
          Thank you! Our team will review your request and get back to you within 24 hours.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={values.name}
            onChange={handleChange}
            className="w-full px-4 py-2.5 border border-slate-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            placeholder="John Smith"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1">
            Company Name
          </label>
          <input
            id="company"
            name="company"
            type="text"
            value={values.company}
            onChange={handleChange}
            className="w-full px-4 py-2.5 border border-slate-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            placeholder="Your Company Ltd"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            className="w-full px-4 py-2.5 border border-slate-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            placeholder="john@company.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
            Phone / WhatsApp
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={values.phone}
            onChange={handleChange}
            className="w-full px-4 py-2.5 border border-slate-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            placeholder="+1 234 567 8900"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="country" className="block text-sm font-medium text-slate-700 mb-1">
            Your Country
          </label>
          <input
            id="country"
            name="country"
            type="text"
            value={values.country}
            onChange={handleChange}
            className="w-full px-4 py-2.5 border border-slate-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            placeholder="United States"
          />
        </div>
        <div>
          <label htmlFor="productCategory" className="block text-sm font-medium text-slate-700 mb-1">
            Product Category
          </label>
          <select
            id="productCategory"
            name="productCategory"
            value={values.productCategory}
            onChange={handleChange}
            className="w-full px-4 py-2.5 border border-slate-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white"
          >
            <option value="">Select category</option>
            {productCategories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="orderVolume" className="block text-sm font-medium text-slate-700 mb-1">
          Estimated Order Volume
        </label>
        <select
          id="orderVolume"
          name="orderVolume"
          value={values.orderVolume}
          onChange={handleChange}
          className="w-full px-4 py-2.5 border border-slate-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white"
        >
          <option value="">Select volume</option>
          {orderVolumes.map((vol) => (
            <option key={vol} value={vol}>{vol}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="productDetails" className="block text-sm font-medium text-slate-700 mb-1">
          Product Details <span className="text-red-500">*</span>
        </label>
        <textarea
          id="productDetails"
          name="productDetails"
          rows={4}
          value={values.productDetails}
          onChange={handleChange}
          className="w-full px-4 py-2.5 border border-slate-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-y"
          placeholder="Describe the product, materials, dimensions, colors, packaging requirements, target price, etc."
        />
      </div>

      <div>
        <label htmlFor="timeline" className="block text-sm font-medium text-slate-700 mb-1">
          Expected Timeline
        </label>
        <input
          id="timeline"
          name="timeline"
          type="text"
          value={values.timeline}
          onChange={handleChange}
          className="w-full px-4 py-2.5 border border-slate-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          placeholder="e.g., Need first delivery within 3 months"
        />
      </div>

      {error && (
        <div className="flex items-center gap-2 text-sm text-red-600 bg-red-50 rounded-md px-4 py-3">
          <AlertCircle className="w-4 h-4 shrink-0" />
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-blue-700 text-white font-semibold rounded-md hover:bg-blue-800 transition-colors disabled:opacity-60"
      >
        {status === 'submitting' ? (
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
    </form>
  )
}
