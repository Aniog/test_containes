import React, { useState } from 'react'
import { createBooking } from '../../api/bookings.js'

const LESSON_TYPES = [
  { value: 'beginner', label: 'Beginner Lesson ($65)' },
  { value: 'intermediate', label: 'Intermediate Lesson ($75)' },
  { value: 'advanced', label: 'Advanced Lesson ($90)' },
  { value: 'private', label: 'Private Lesson ($110)' },
]

const EXPERIENCE_LEVELS = [
  { value: 'never_ridden', label: "I've never ridden before" },
  { value: 'beginner', label: 'Beginner (a few lessons)' },
  { value: 'some_experience', label: 'Some experience (1–2 years)' },
  { value: 'intermediate', label: 'Intermediate (3–5 years)' },
  { value: 'advanced', label: 'Advanced (5+ years)' },
]

const TIME_SLOTS = [
  { value: 'morning', label: 'Morning (8am – 12pm)' },
  { value: 'afternoon', label: 'Afternoon (12pm – 4pm)' },
  { value: 'evening', label: 'Evening (4pm – 7pm)' },
]

const EMPTY_FORM = {
  name: '',
  email: '',
  phone: '',
  lesson_type: '',
  experience_level: '',
  preferred_date: '',
  preferred_time: '',
  message: '',
}

function InputField({ label, required, children }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-semibold text-stone-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {children}
    </div>
  )
}

const inputClass =
  'w-full border border-stone-200 rounded-xl px-4 py-3 text-stone-800 bg-white focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition text-sm placeholder-stone-400'

export default function BookingForm() {
  const [form, setForm] = useState(EMPTY_FORM)
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState('')

  const today = new Date().toISOString().split('T')[0]

  const onChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const validate = () => {
    if (!form.name.trim()) return 'Please enter your full name.'
    if (!form.email.trim() || !/^\S+@\S+\.\S+$/.test(form.email)) return 'Please enter a valid email address.'
    if (!form.lesson_type) return 'Please select a lesson type.'
    if (!form.experience_level) return 'Please select your experience level.'
    if (!form.preferred_date) return 'Please choose a preferred date.'
    if (form.preferred_date < today) return 'Please choose a date in the future.'
    if (!form.preferred_time) return 'Please select a preferred time.'
    return null
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setErrorMsg('')
    const err = validate()
    if (err) { setErrorMsg(err); return }

    setStatus('submitting')
    try {
      await createBooking(form)
      setStatus('success')
      setForm(EMPTY_FORM)
    } catch (err) {
      console.error('Booking error:', err)
      setErrorMsg(err.message || 'Something went wrong. Please try again.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="text-center py-16 px-6">
        <div className="text-6xl mb-5">🎉</div>
        <h3 className="text-2xl font-bold text-stone-800 mb-3">Booking Request Received!</h3>
        <p className="text-stone-500 text-lg mb-8 max-w-md mx-auto">
          Thank you! We'll review your request and get back to you within 24 hours to confirm your lesson.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-3 rounded-xl transition-colors"
        >
          Book Another Lesson
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <InputField label="Full Name" required>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={onChange}
            placeholder="Jane Smith"
            className={inputClass}
          />
        </InputField>
        <InputField label="Email Address" required>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={onChange}
            placeholder="jane@example.com"
            className={inputClass}
          />
        </InputField>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <InputField label="Phone Number">
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={onChange}
            placeholder="+1 (555) 000-0000"
            className={inputClass}
          />
        </InputField>
        <InputField label="Lesson Type" required>
          <select name="lesson_type" value={form.lesson_type} onChange={onChange} className={inputClass}>
            <option value="">Select a lesson...</option>
            {LESSON_TYPES.map((l) => (
              <option key={l.value} value={l.value}>{l.label}</option>
            ))}
          </select>
        </InputField>
      </div>

      <InputField label="Your Riding Experience" required>
        <select name="experience_level" value={form.experience_level} onChange={onChange} className={inputClass}>
          <option value="">Select your level...</option>
          {EXPERIENCE_LEVELS.map((e) => (
            <option key={e.value} value={e.value}>{e.label}</option>
          ))}
        </select>
      </InputField>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <InputField label="Preferred Date" required>
          <input
            type="date"
            name="preferred_date"
            value={form.preferred_date}
            onChange={onChange}
            min={today}
            className={inputClass}
          />
        </InputField>
        <InputField label="Preferred Time" required>
          <select name="preferred_time" value={form.preferred_time} onChange={onChange} className={inputClass}>
            <option value="">Select a time...</option>
            {TIME_SLOTS.map((t) => (
              <option key={t.value} value={t.value}>{t.label}</option>
            ))}
          </select>
        </InputField>
      </div>

      <InputField label="Additional Notes">
        <textarea
          name="message"
          value={form.message}
          onChange={onChange}
          rows={4}
          placeholder="Any questions, special requirements, or things we should know..."
          className={inputClass + ' resize-none'}
        />
      </InputField>

      {errorMsg && (
        <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-sm">
          {errorMsg}
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full bg-amber-500 hover:bg-amber-600 disabled:bg-amber-300 text-white font-bold py-4 rounded-xl text-base transition-colors shadow-sm"
      >
        {status === 'submitting' ? 'Sending Request...' : 'Request My Lesson →'}
      </button>

      <p className="text-center text-stone-400 text-xs">
        We'll confirm your booking within 24 hours. No payment required to request.
      </p>
    </form>
  )
}
