import React from 'react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const ContactForm = ({ productId = '' }) => {
  const [values, setValues] = React.useState({
    name: '',
    email: '',
    company: '',
    message: '',
    product_id: productId
  })
  const [status, setStatus] = React.useState('idle')
  const [error, setError] = React.useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')
    setError(null)

    try {
      const { data: response, error: createError } = await client
        .from('InquiryForm')
        .insert({
          data: values
        })

      if (createError || response?.success === false) {
        throw new Error(createError?.message || 'Failed to send inquiry')
      }

      setStatus('success')
      setValues({
        name: '',
        email: '',
        company: '',
        message: '',
        product_id: productId
      })
    } catch (err) {
      console.error(err)
      setError(err.message)
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-white p-8 rounded-xl text-center shadow-2xl border border-slate-100">
        <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2 uppercase tracking-tighter">Inquiry Sent</h3>
        <p className="text-slate-500 font-light mb-6">Thank you for your interest. Our engineering team will contact you shortly.</p>
        <button 
          onClick={() => setStatus('idle')}
          className="text-slate-900 font-bold uppercase tracking-widest text-xs border-b border-slate-900 pb-1"
        >
          Send Another Inquiry
        </button>
      </div>
    )
  }

  return (
    <div className="bg-white p-8 rounded-xl text-left w-full shadow-2xl border border-slate-100">
      <h3 className="text-slate-900 font-bold mb-6 uppercase tracking-tighter">Request Product Details</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input 
            type="text" 
            name="name"
            required
            value={values.name}
            onChange={handleChange}
            placeholder="Name *" 
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900" 
          />
          <input 
            type="email" 
            name="email"
            required
            value={values.email}
            onChange={handleChange}
            placeholder="Email *" 
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900" 
          />
        </div>
        <input 
          type="text" 
          name="company"
          value={values.company}
          onChange={handleChange}
          placeholder="Company" 
          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900" 
        />
        <textarea 
          name="message"
          required
          rows="4"
          value={values.message}
          onChange={handleChange}
          placeholder="Your Message *" 
          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
        ></textarea>
        
        {error && <p className="text-red-500 text-xs">{error}</p>}
        
        <button 
          type="submit" 
          disabled={status === 'submitting'}
          className="w-full bg-slate-900 text-white px-6 py-4 rounded font-bold uppercase tracking-widest text-xs hover:bg-slate-800 disabled:opacity-50 transition-all shadow-lg hover:shadow-slate-200"
        >
          {status === 'submitting' ? 'Sending...' : 'Send Inquiry'}
        </button>
      </form>
    </div>
  )
}

export default ContactForm
