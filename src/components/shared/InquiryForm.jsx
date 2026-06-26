import { useState } from 'react'
import { client } from '@/api/client'
import { toast } from 'sonner'

const initialState = {
  name: '',
  email: '',
  company: '',
  country: '',
  product_category: '',
  product_description: '',
  quantity: '',
  target_price: '',
  message: '',
}

export default function InquiryForm({ onSuccess }) {
  const [values, setValues] = useState(initialState)
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  const validate = (v) => {
    if (!v.name.trim()) return 'Please enter your full name.'
    if (!v.email.trim()) return 'Please enter your business email.'
    if (!/^\S+@\S+\.\S+$/.test(v.email)) return 'Please enter a valid email address.'
    if (!v.product_description.trim()) return 'Please describe the product you want to source.'
    return null
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const error = validate(values)
    if (error) {
      toast.error(error)
      return
    }

    setStatus('submitting')
    const { data: response, error: apiError } = await client
      .from('SourcingInquiry')
      .insert({
        data: {
          ...values,
          status: 'new',
        },
      })
      .select()
      .single()

    if (apiError || response?.success === false) {
      const message = response?.errors?.join(', ') || apiError?.message || 'Submission failed. Please try again.'
      toast.error(message)
      setStatus('error')
      return
    }

    toast.success('Inquiry submitted. We will reply within 24 hours.')
    setValues(initialState)
    setStatus('success')
    if (onSuccess) onSuccess()
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="md:col-span-2">
          <label htmlFor="name" className="block text-sm font-medium text-slate-700">
            Full name <span className="text-amber-600">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={values.name}
            onChange={handleChange}
            placeholder="John Smith"
            className="mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 placeholder:text-slate-400 focus:border-brand-600 focus:ring-2 focus:ring-brand-100 outline-none transition"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700">
            Business email <span className="text-amber-600">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            placeholder="john@company.com"
            className="mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 placeholder:text-slate-400 focus:border-brand-600 focus:ring-2 focus:ring-brand-100 outline-none transition"
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-slate-700">
            Company / brand
          </label>
          <input
            id="company"
            name="company"
            type="text"
            value={values.company}
            onChange={handleChange}
            placeholder="Your company name"
            className="mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 placeholder:text-slate-400 focus:border-brand-600 focus:ring-2 focus:ring-brand-100 outline-none transition"
          />
        </div>

        <div>
          <label htmlFor="country" className="block text-sm font-medium text-slate-700">
            Country
          </label>
          <input
            id="country"
            name="country"
            type="text"
            value={values.country}
            onChange={handleChange}
            placeholder="United States"
            className="mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 placeholder:text-slate-400 focus:border-brand-600 focus:ring-2 focus:ring-brand-100 outline-none transition"
          />
        </div>

        <div>
          <label htmlFor="product_category" className="block text-sm font-medium text-slate-700">
            Product category
          </label>
          <input
            id="product_category"
            name="product_category"
            type="text"
            value={values.product_category}
            onChange={handleChange}
            placeholder="Electronics, apparel, hardware..."
            className="mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 placeholder:text-slate-400 focus:border-brand-600 focus:ring-2 focus:ring-brand-100 outline-none transition"
          />
        </div>

        <div>
          <label htmlFor="quantity" className="block text-sm font-medium text-slate-700">
            Estimated quantity
          </label>
          <input
            id="quantity"
            name="quantity"
            type="text"
            value={values.quantity}
            onChange={handleChange}
            placeholder="e.g. 1,000 units"
            className="mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 placeholder:text-slate-400 focus:border-brand-600 focus:ring-2 focus:ring-brand-100 outline-none transition"
          />
        </div>

        <div>
          <label htmlFor="target_price" className="block text-sm font-medium text-slate-700">
            Target price range
          </label>
          <input
            id="target_price"
            name="target_price"
            type="text"
            value={values.target_price}
            onChange={handleChange}
            placeholder="e.g. $2.50 – $3.00 / unit"
            className="mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 placeholder:text-slate-400 focus:border-brand-600 focus:ring-2 focus:ring-brand-100 outline-none transition"
          />
        </div>

        <div className="md:col-span-2">
          <label htmlFor="product_description" className="block text-sm font-medium text-slate-700">
            Product description <span className="text-amber-600">*</span>
          </label>
          <textarea
            id="product_description"
            name="product_description"
            rows={4}
            value={values.product_description}
            onChange={handleChange}
            placeholder="Tell us about the product, specifications, materials, packaging, and any certifications required."
            className="mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 placeholder:text-slate-400 focus:border-brand-600 focus:ring-2 focus:ring-brand-100 outline-none transition"
          />
        </div>

        <div className="md:col-span-2">
          <label htmlFor="message" className="block text-sm font-medium text-slate-700">
            Additional questions
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            value={values.message}
            onChange={handleChange}
            placeholder="Anything else we should know?"
            className="mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 placeholder:text-slate-400 focus:border-brand-600 focus:ring-2 focus:ring-brand-100 outline-none transition"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="mt-6 w-full md:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-brand-800 text-white font-semibold hover:bg-brand-900 disabled:opacity-60 disabled:cursor-not-allowed transition"
      >
        {status === 'submitting' ? 'Submitting...' : 'Send Inquiry'}
      </button>
    </form>
  )
}
