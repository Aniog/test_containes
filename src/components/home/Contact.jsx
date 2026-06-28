import { useState, useCallback } from 'react'
import { DataClient } from '@strikingly/sdk'
import { CheckCircle2, AlertCircle } from 'lucide-react'

import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../../config'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

export default function Contact() {
  const [values, setValues] = useState({ name: '', email: '', phone: '', company: '', message: '' })
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)

  const onChange = useCallback((e) => {
    const { name, value } = e.target
    setValues((prev) => ({ ...prev, [name]: value }))
  }, [])

  const onSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    setStatus('submitting')

    try {
      // Submit form response
      const { error: submitError } = await client.from('ContactFormResponse').insert({
        data: {
          name: values.name,
          email: values.email,
          phone: values.phone,
          company: values.company,
          message: values.message,
        }
      })

      if (submitError) throw submitError

      setStatus('success')
      setValues({ name: '', email: '', phone: '', company: '', message: '' })
    } catch (err) {
      console.error(err)
      setError(err.message || 'Submission failed. Please try again.')
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="absolute inset-0 bg-slate-900 h-1/2 z-0" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden">
           <div className="px-6 py-12 sm:p-12">
              <div className="text-center mb-10">
                 <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                   Ready to Upgrade Your Production?
                 </h2>
                 <p className="mt-4 text-lg text-slate-600">
                   Contact our sales team for a custom quote or to schedule a demonstration.
                 </p>
              </div>

              {status === 'success' ? (
                 <div className="text-center py-12 bg-green-50 rounded-xl border border-green-100">
                    <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-green-900 mb-2">Message Sent!</h3>
                    <p className="text-green-700">We've received your inquiry and will be in touch shortly.</p>
                    <button 
                       onClick={() => setStatus('idle')}
                       className="mt-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-green-700 bg-green-100 hover:bg-green-200"
                    >
                       Send another message
                    </button>
                 </div>
              ) : (
                <form onSubmit={onSubmit} className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                  <div className="sm:col-span-2">
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700">Full name *</label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={values.name}
                        onChange={onChange}
                        className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-slate-300 rounded-md bg-slate-50 border"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email *</label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        value={values.email}
                        onChange={onChange}
                        className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-slate-300 rounded-md bg-slate-50 border"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700">Phone</label>
                    <div className="mt-1">
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        autoComplete="tel"
                        value={values.phone}
                        onChange={onChange}
                        className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-slate-300 rounded-md bg-slate-50 border"
                      />
                    </div>
                  </div>
                  
                  <div className="sm:col-span-2">
                    <label htmlFor="company" className="block text-sm font-medium text-slate-700">Company</label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="company"
                        id="company"
                        value={values.company}
                        onChange={onChange}
                        className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-slate-300 rounded-md bg-slate-50 border"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700">Message *</label>
                    <div className="mt-1">
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        value={values.message}
                        onChange={onChange}
                        className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-slate-300 rounded-md bg-slate-50 border"
                      />
                    </div>
                  </div>

                  {status === 'error' && (
                     <div className="sm:col-span-2 p-4 bg-red-50 rounded-md flex items-start">
                        <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5" />
                        <p className="text-sm text-red-700">{error}</p>
                     </div>
                  )}

                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className={`w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors ${status === 'submitting' ? 'opacity-75 cursor-not-allowed' : ''}`}
                    >
                      {status === 'submitting' ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </form>
              )}
           </div>
        </div>
      </div>
    </section>
  )
}