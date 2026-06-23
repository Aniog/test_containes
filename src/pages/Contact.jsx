import React from 'react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'
import { Building2, Mail, Phone } from 'lucide-react'

// Initialize the generic client
const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

export default function Contact() {
  const [values, setValues] = React.useState({
    name: '',
    email: '',
    company: '',
    product_category: '',
    estimated_budget: '',
    message: ''
  })
  const [status, setStatus] = React.useState('idle')
  const [error, setError] = React.useState(null)

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  const validate = (v) => {
    if (!v.name.trim()) return 'Name is required'
    if (!v.email.trim()) return 'Email is required'
    if (!/^\S+@\S+\.\S+$/.test(v.email)) return 'Provide a valid email'
    if (!v.product_category.trim()) return 'Product Category is required'
    if (!v.message.trim()) return 'Message is required'
    return null
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    const err = validate(values)
    if (err) { setError(err); return }

    setStatus('submitting')

    try {
      // Insert the inquiry directly
      const { error: responseError } = await client
        .from('SourcingInquiries')
        .insert({
          data: {
            name: values.name,
            email: values.email,
            company: values.company,
            product_category: values.product_category,
            estimated_budget: values.estimated_budget,
            message: values.message,
            status: 'new'
          }
        })

      if (responseError) throw responseError

      setStatus('success')
      setValues({ name: '', email: '', company: '', product_category: '', estimated_budget: '', message: '' })

    } catch (err) {
      console.error(err)
      setError(err.message || 'Submission failed. Please try again.')
      setStatus('error')
    }
  }

  return (
    <div className="bg-white">
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">Get a Free Sourcing Quote</h2>
                <p className="mt-4 leading-7 text-gray-600">
                  Fill out the form with your product requirements, and our team will get back to you within 24 hours with an initial assessment and quote.
                </p>
                <div className="mt-8 space-y-6 text-gray-600">
                  <div className="flex gap-x-4">
                     <Building2 className="h-6 w-5 flex-none text-blue-600" />
                     <div>
                        <strong className="text-gray-900 font-semibold block">Headquarters</strong>
                        Shenzhen, Guangdong, China
                     </div>
                  </div>
                  <div className="flex gap-x-4">
                     <Phone className="h-6 w-5 flex-none text-blue-600" />
                     <div>
                        <strong className="text-gray-900 font-semibold block">Phone</strong>
                        +86 123 4567 8900
                     </div>
                  </div>
                  <div className="flex gap-x-4">
                     <Mail className="h-6 w-5 flex-none text-blue-600" />
                     <div>
                        <strong className="text-gray-900 font-semibold block">Email</strong>
                        info@ssourcingchina.com
                     </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8 bg-gray-50 p-8 rounded-3xl border border-gray-200">
                {status === 'success' ? (
                  <div className="col-span-full py-12 text-center">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100 mb-4">
                      <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900">Inquiry Received!</h3>
                    <p className="mt-2 text-gray-600">Thank you for contacting SSourcing China. A sourcing expert will review your requirements and reply within 24 hours.</p>
                    <button 
                      onClick={() => setStatus('idle')}
                      className="mt-6 text-blue-600 hover:text-blue-500 font-medium"
                    >
                       Submit another inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={onSubmit} className="col-span-full grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                      <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-900">
                        Full Name *
                      </label>
                      <div className="mt-2.5">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          value={values.name}
                          onChange={onChange}
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                          placeholder="Your Name"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                        Email Address *
                      </label>
                      <div className="mt-2.5">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          value={values.email}
                          onChange={onChange}
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                          placeholder="you@company.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">
                        Company Name
                      </label>
                      <div className="mt-2.5">
                        <input
                          type="text"
                          name="company"
                          id="company"
                          value={values.company}
                          onChange={onChange}
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                          placeholder="Your Company (Optional)"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                       <label htmlFor="product_category" className="block text-sm font-semibold leading-6 text-gray-900">
                          Product Category *
                       </label>
                       <div className="mt-2.5">
                          <input
                             type="text"
                             name="product_category"
                             id="product_category"
                             value={values.product_category}
                             onChange={onChange}
                             className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                             placeholder="e.g., Consumer Electronics, Apparel, Home Decor"
                          />
                       </div>
                    </div>
                    <div className="sm:col-span-2">
                       <label htmlFor="estimated_budget" className="block text-sm font-semibold leading-6 text-gray-900">
                          Estimated Order Volume / Budget
                       </label>
                       <div className="mt-2.5">
                          <input
                             type="text"
                             name="estimated_budget"
                             id="estimated_budget"
                             value={values.estimated_budget}
                             onChange={onChange}
                             className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                             placeholder="e.g., $5,000, 1000 units"
                          />
                       </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                        Detailed Requirements *
                      </label>
                      <div className="mt-2.5">
                        <textarea
                          name="message"
                          id="message"
                          rows={4}
                          value={values.message}
                          onChange={onChange}
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                          placeholder="Please provide specifics: material, target price, certifications needed, etc."
                        />
                      </div>
                    </div>
                    
                    {error && (
                      <div className="sm:col-span-2 text-sm text-red-600">
                        {error}
                      </div>
                    )}

                    <div className="sm:col-span-2 mt-4">
                      <button
                        type="submit"
                        disabled={status === 'submitting'}
                        className="block w-full rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:opacity-70"
                      >
                        {status === 'submitting' ? 'Sending...' : 'Send Inquiry'}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}