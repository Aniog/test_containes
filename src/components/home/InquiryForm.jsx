import { useState } from 'react'
import { Send } from 'lucide-react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const InquiryForm = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    product_description: '',
    quantity: '',
    message: '',
  })
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  const validate = () => {
    if (!values.name.trim()) return 'Name is required'
    if (!values.email.trim()) return 'Email is required'
    if (!/^\S+@\S+\.\S+$/.test(values.email)) return 'Please enter a valid email'
    if (!values.product_description.trim()) return 'Please describe the product you need'
    return null
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    const err = validate()
    if (err) { setError(err); return }

    setStatus('submitting')

    try {
      const { data: response, error: insertError } = await client
        .from('Sourcing Inquiries')
        .insert({
          data: {
            name: values.name,
            email: values.email,
            company: values.company,
            country: values.country,
            product_description: values.product_description,
            quantity: values.quantity,
            message: values.message,
            status: 'new',
          },
        })
        .select()
        .single()

      if (insertError || response?.success === false) {
        throw new Error(response?.errors?.join(', ') || insertError?.message || 'Submission failed')
      }

      setStatus('success')
      setValues({ name: '', email: '', company: '', country: '', product_description: '', quantity: '', message: '' })
    } catch (err) {
      console.error('Inquiry submission error:', err)
      setError(err.message || 'Something went wrong. Please try again.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-white rounded-xl border border-neutral-200 p-8 md:p-10 text-center">
        <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
          <Send className="w-7 h-7 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-neutral-800 mb-2">Inquiry Received!</h3>
        <p className="text-neutral-600 mb-6">Thank you for your interest. Our team will review your requirements and get back to you within 24 hours.</p>
        <button
          onClick={() => setStatus('idle')}
          className="text-primary font-medium hover:underline bg-transparent border-none cursor-pointer"
        >
          Submit another inquiry
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="bg-white rounded-xl border border-neutral-200 p-6 md:p-8">
      <h3 className="text-2xl font-bold text-neutral-800 mb-2">Get a Free Sourcing Quote</h3>
      <p className="text-neutral-600 mb-6">Tell us what you need and we will get back to you within 24 hours.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="inq-name" className="block text-sm font-medium text-neutral-700 mb-1">Full Name *</label>
          <input
            id="inq-name"
            name="name"
            type="text"
            value={values.name}
            onChange={onChange}
            required
            placeholder="John Smith"
            className="w-full px-4 py-2.5 border border-neutral-200 rounded-lg text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
          />
        </div>
        <div>
          <label htmlFor="inq-email" className="block text-sm font-medium text-neutral-700 mb-1">Email *</label>
          <input
            id="inq-email"
            name="email"
            type="email"
            value={values.email}
            onChange={onChange}
            required
            placeholder="john@company.com"
            className="w-full px-4 py-2.5 border border-neutral-200 rounded-lg text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
          />
        </div>
        <div>
          <label htmlFor="inq-company" className="block text-sm font-medium text-neutral-700 mb-1">Company</label>
          <input
            id="inq-company"
            name="company"
            type="text"
            value={values.company}
            onChange={onChange}
            placeholder="Your Company Ltd."
            className="w-full px-4 py-2.5 border border-neutral-200 rounded-lg text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
          />
        </div>
        <div>
          <label htmlFor="inq-country" className="block text-sm font-medium text-neutral-700 mb-1">Country</label>
          <input
            id="inq-country"
            name="country"
            type="text"
            value={values.country}
            onChange={onChange}
            placeholder="United States"
            className="w-full px-4 py-2.5 border border-neutral-200 rounded-lg text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
          />
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="inq-product" className="block text-sm font-medium text-neutral-700 mb-1">Product Description *</label>
        <textarea
          id="inq-product"
          name="product_description"
          rows={3}
          value={values.product_description}
          onChange={onChange}
          required
          placeholder="Describe the product you want to source (material, size, features, etc.)"
          className="w-full px-4 py-2.5 border border-neutral-200 rounded-lg text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-y"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="inq-quantity" className="block text-sm font-medium text-neutral-700 mb-1">Estimated Quantity</label>
          <input
            id="inq-quantity"
            name="quantity"
            type="text"
            value={values.quantity}
            onChange={onChange}
            placeholder="e.g. 1,000 units"
            className="w-full px-4 py-2.5 border border-neutral-200 rounded-lg text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
          />
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="inq-message" className="block text-sm font-medium text-neutral-700 mb-1">Additional Details</label>
        <textarea
          id="inq-message"
          name="message"
          rows={3}
          value={values.message}
          onChange={onChange}
          placeholder="Any other requirements, timeline, budget, or questions?"
          className="w-full px-4 py-2.5 border border-neutral-200 rounded-lg text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-y"
        />
      </div>

      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full bg-accent hover:bg-accent-dark text-neutral-900 font-semibold px-6 py-3.5 rounded-lg transition-colors text-base disabled:opacity-60 disabled:cursor-not-allowed border-none cursor-pointer"
      >
        {status === 'submitting' ? 'Sending...' : 'Get a Free Sourcing Quote'}
      </button>

      <p className="text-xs text-neutral-500 mt-3 text-center">
        We respect your privacy. Your information will not be shared with third parties.
      </p>
    </form>
  )
}

export default InquiryForm
