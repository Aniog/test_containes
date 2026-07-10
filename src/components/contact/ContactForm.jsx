import { useState } from 'react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const EMPTY = { name: '', email: '', message: '' }

export default function ContactForm() {
  const [values, setValues] = useState(EMPTY)
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  const validate = ({ name, email, message }) => {
    if (!name.trim()) return 'Name is required.'
    if (!email.trim()) return 'Email is required.'
    if (!/^\S+@\S+\.\S+$/.test(email)) return 'Please enter a valid email.'
    if (!message.trim()) return 'Message is required.'
    return null
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    const validationError = validate(values)
    if (validationError) {
      setError(validationError)
      return
    }

    setStatus('submitting')

    const { data: response, error: submitError } = await client
      .from('Contact Form Responses')
      .insert({ data: { name: values.name, email: values.email, message: values.message } })
      .select()
      .single()

    if (submitError || response?.success === false) {
      const msg =
        Array.isArray(response?.errors) && response.errors.length > 0
          ? response.errors.join(', ')
          : submitError?.message || 'Something went wrong. Please try again.'
      setError(msg)
      setStatus('idle')
      return
    }

    setStatus('success')
    setValues(EMPTY)
  }

  if (status === 'success') {
    return (
      <div className="text-center py-8">
        <p className="text-sm text-gray-500 mb-1">Message received</p>
        <p className="text-base text-gray-800">Thanks for reaching out. We'll be in touch soon.</p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-6 text-sm text-gray-400 underline underline-offset-2 hover:text-gray-600 transition-colors"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-5">
      <div className="flex flex-col gap-1.5">
        <label htmlFor="name" className="text-sm text-gray-600">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={values.name}
          onChange={onChange}
          placeholder="Your name"
          className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm text-gray-900 placeholder-gray-300 focus:outline-none focus:border-gray-400 transition-colors bg-white"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-sm text-gray-600">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={values.email}
          onChange={onChange}
          placeholder="you@example.com"
          className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm text-gray-900 placeholder-gray-300 focus:outline-none focus:border-gray-400 transition-colors bg-white"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm text-gray-600">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={onChange}
          placeholder="How can we help?"
          className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm text-gray-900 placeholder-gray-300 focus:outline-none focus:border-gray-400 transition-colors bg-white resize-none"
        />
      </div>

      {error && (
        <p className="text-sm text-red-500">{error}</p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full bg-gray-900 text-white text-sm font-medium py-2.5 rounded hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? 'Sending…' : 'Send message'}
      </button>
    </form>
  )
}
