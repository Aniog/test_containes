import { useState } from 'react'
import { Mail, MapPin, Send } from 'lucide-react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [values, setValues] = useState({ name: '', email: '', message: '' })

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-white border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
            Contact
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            Tell us about your project
          </h2>
          <p className="mt-4 text-base md:text-lg leading-relaxed text-slate-600">
            Share a few details and we will get back to you within one business
            day with next steps.
          </p>

          <div className="mt-8 space-y-4 text-slate-700">
            <p className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-indigo-600" />
              hello@lumenstudio.example
            </p>
            <p className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-indigo-600" />
              418 Mercer Street, Seattle, WA
            </p>
          </div>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm">
          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50 text-indigo-600">
                <Send className="w-5 h-5" />
              </span>
              <h3 className="mt-5 text-xl font-semibold text-slate-900">Message sent</h3>
              <p className="mt-2 text-sm text-slate-600 max-w-sm">
                Thanks for reaching out, {values.name || 'friend'} — we will reply
                to {values.email || 'your inbox'} shortly.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false)
                  setValues({ name: '', email: '', message: '' })
                }}
                className="mt-6 text-sm font-semibold text-indigo-600 hover:text-indigo-700"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid gap-5">
              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium text-slate-700">
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  value={values.name}
                  onChange={onChange}
                  placeholder="Jane Cooper"
                  className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-slate-700">
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  value={values.email}
                  onChange={onChange}
                  placeholder="jane@company.com"
                  className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-slate-700">
                  Project details
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  required
                  value={values.message}
                  onChange={onChange}
                  placeholder="What are you building, and when do you want to launch?"
                  className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 bg-indigo-600 text-white rounded-full px-6 py-3 font-semibold hover:bg-indigo-700 transition"
              >
                Send message
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
