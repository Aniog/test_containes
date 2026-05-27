import { useState } from 'react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from './config.jsx'
import './App.css'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const MEETING_DATE = 'Monday, 1 June 2026'

function App() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    attendance: '',
    dietary: '',
    notes: '',
  })
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState('')

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  const validate = () => {
    if (!values.name.trim()) return 'Please enter your name.'
    if (!values.email.trim()) return 'Please enter your email.'
    if (!/^\S+@\S+\.\S+$/.test(values.email)) return 'Please enter a valid email.'
    if (!values.attendance) return 'Please select your attendance.'
    return null
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setErrorMsg('')
    const err = validate()
    if (err) { setErrorMsg(err); return }

    setStatus('submitting')
    try {
      const { data: response, error } = await client
        .from('Meeting Arrangements')
        .insert({
          data: {
            name: values.name.trim(),
            email: values.email.trim(),
            attendance: values.attendance,
            dietary: values.dietary.trim() || undefined,
            notes: values.notes.trim() || undefined,
          },
        })
        .select()
        .single()

      if (error || response?.success === false) {
        const msg = Array.isArray(response?.errors) && response.errors.length
          ? response.errors.join(', ')
          : error?.message || 'Submission failed. Please try again.'
        setErrorMsg(msg)
        setStatus('error')
        return
      }

      setStatus('success')
    } catch (err) {
      console.error('Submission error:', err)
      setErrorMsg(err.message || 'Submission failed. Please try again.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-10 max-w-md w-full text-center">
          <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-semibold text-slate-800 mb-2">You're all set!</h2>
          <p className="text-slate-500 mb-1">Thanks, <span className="font-medium text-slate-700">{values.name}</span>.</p>
          <p className="text-slate-500">
            Your response for the <span className="font-medium text-slate-700">{MEETING_DATE}</span> meeting has been recorded.
          </p>
          <button
            onClick={() => { setValues({ name: '', email: '', attendance: '', dietary: '', notes: '' }); setStatus('idle') }}
            className="mt-6 text-sm text-slate-400 hover:text-slate-600 underline underline-offset-2 transition-colors"
          >
            Submit another response
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-lg">
        {/* Header */}
        <div className="text-center mb-8">
          <p className="text-sm font-medium text-indigo-600 uppercase tracking-widest mb-2">Meeting</p>
          <h1 className="text-3xl font-bold text-slate-800">{MEETING_DATE}</h1>
          <p className="text-slate-500 mt-2">Please fill in your details below so we can arrange everything.</p>
        </div>

        {/* Form card */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
          <form onSubmit={onSubmit} noValidate>
            <div className="space-y-5">

              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                  Full Name <span className="text-red-400">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={values.name}
                  onChange={onChange}
                  placeholder="Jane Smith"
                  className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                  Email <span className="text-red-400">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={onChange}
                  placeholder="jane@example.com"
                  className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition"
                />
              </div>

              {/* Attendance */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Will you attend? <span className="text-red-400">*</span>
                </label>
                <div className="flex gap-3">
                  {[
                    { value: 'attending', label: "Yes, I'll attend" },
                    { value: 'not_attending', label: "No, I can't make it" },
                  ].map((opt) => (
                    <label
                      key={opt.value}
                      className={`flex-1 flex items-center justify-center gap-2 rounded-lg border px-4 py-2.5 cursor-pointer text-sm font-medium transition
                        ${values.attendance === opt.value
                          ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
                          : 'border-slate-300 text-slate-600 hover:border-slate-400'}`}
                    >
                      <input
                        type="radio"
                        name="attendance"
                        value={opt.value}
                        checked={values.attendance === opt.value}
                        onChange={onChange}
                        className="sr-only"
                      />
                      {opt.label}
                    </label>
                  ))}
                </div>
              </div>

              {/* Dietary */}
              <div>
                <label htmlFor="dietary" className="block text-sm font-medium text-slate-700 mb-1">
                  Dietary Requirements <span className="text-slate-400 font-normal">(optional)</span>
                </label>
                <input
                  id="dietary"
                  name="dietary"
                  type="text"
                  value={values.dietary}
                  onChange={onChange}
                  placeholder="e.g. vegetarian, gluten-free"
                  className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition"
                />
              </div>

              {/* Notes */}
              <div>
                <label htmlFor="notes" className="block text-sm font-medium text-slate-700 mb-1">
                  Additional Notes <span className="text-slate-400 font-normal">(optional)</span>
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={3}
                  value={values.notes}
                  onChange={onChange}
                  placeholder="Anything else we should know?"
                  className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition resize-none"
                />
              </div>

              {/* Error */}
              {errorMsg && (
                <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-2.5">
                  {errorMsg}
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:opacity-60 text-white font-semibold rounded-lg px-4 py-3 transition-colors"
              >
                {status === 'submitting' ? 'Submitting…' : 'Submit'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
