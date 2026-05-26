import { useState } from 'react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from './config.jsx'
import { Plane, MapPin, Calendar, Users, CheckCircle } from 'lucide-react'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const INITIAL = {
  name: '',
  email: '',
  phone: '',
  from_city: '',
  to_city: '',
  departure_date: '',
  return_date: '',
  travelers: 1,
  travel_class: 'economy',
  notes: '',
}

export default function App() {
  const [form, setForm] = useState(INITIAL)
  const [status, setStatus] = useState('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const onChange = (e) => {
    const { name, value, type } = e.target
    setForm((f) => ({ ...f, [name]: type === 'number' ? Number(value) : value }))
  }

  const validate = () => {
    if (!form.name.trim()) return 'Full name is required.'
    if (!form.email.trim() || !/^\S+@\S+\.\S+$/.test(form.email)) return 'A valid email is required.'
    if (!form.from_city.trim()) return 'Departure city is required.'
    if (!form.to_city.trim()) return 'Destination city is required.'
    if (!form.departure_date) return 'Departure date is required.'
    if (form.return_date && form.return_date < form.departure_date) return 'Return date must be after departure date.'
    return null
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const err = validate()
    if (err) { setErrorMsg(err); return }
    setErrorMsg('')
    setStatus('submitting')

    const payload = {
      name: form.name,
      email: form.email,
      from_city: form.from_city,
      to_city: form.to_city,
      departure_date: form.departure_date,
      travelers: form.travelers,
      travel_class: form.travel_class,
    }
    if (form.phone) payload.phone = form.phone
    if (form.return_date) payload.return_date = form.return_date
    if (form.notes) payload.notes = form.notes

    const { data: response, error } = await client
      .from('Travel Arrangements')
      .insert({ data: payload })
      .select()
      .single()

    if (error || response?.success === false) {
      const msg = Array.isArray(response?.errors) ? response.errors.join(', ') : (error?.message || 'Submission failed.')
      setErrorMsg(msg)
      setStatus('error')
      return
    }

    setStatus('success')
    setForm(INITIAL)
  }

  if (status === 'success') {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-10 max-w-md w-full text-center">
          <CheckCircle className="w-14 h-14 text-emerald-500 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-slate-800 mb-2">All set!</h2>
          <p className="text-slate-500 mb-6">Your travel arrangement has been submitted. We'll be in touch soon.</p>
          <button
            onClick={() => setStatus('idle')}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2.5 rounded-lg transition-colors"
          >
            Submit another
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <header className="bg-white border-b border-slate-100 py-5 px-6">
        <div className="max-w-2xl mx-auto flex items-center gap-3">
          <div className="bg-blue-600 text-white p-2 rounded-lg">
            <Plane className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-slate-800 leading-tight">Travel Arrangements</h1>
            <p className="text-sm text-slate-400">Fill in your trip details below</p>
          </div>
        </div>
      </header>

      <main className="flex-1 flex items-start justify-center p-6 pt-10">
        <form onSubmit={onSubmit} className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 w-full max-w-2xl space-y-6">

          <section>
            <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
              <Users className="w-4 h-4" /> Traveler Info
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-slate-700 mb-1">Full Name <span className="text-red-400">*</span></label>
                <input
                  name="name" value={form.name} onChange={onChange} required
                  placeholder="Jane Smith"
                  className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-slate-800 placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Email <span className="text-red-400">*</span></label>
                <input
                  name="email" type="email" value={form.email} onChange={onChange} required
                  placeholder="jane@example.com"
                  className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-slate-800 placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Phone <span className="text-slate-400 font-normal">(optional)</span></label>
                <input
                  name="phone" type="tel" value={form.phone} onChange={onChange}
                  placeholder="+1 555 000 0000"
                  className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-slate-800 placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
              </div>
            </div>
          </section>

          <hr className="border-slate-100" />

          <section>
            <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
              <MapPin className="w-4 h-4" /> Route
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">From <span className="text-red-400">*</span></label>
                <input
                  name="from_city" value={form.from_city} onChange={onChange} required
                  placeholder="New York (JFK)"
                  className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-slate-800 placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">To <span className="text-red-400">*</span></label>
                <input
                  name="to_city" value={form.to_city} onChange={onChange} required
                  placeholder="London (LHR)"
                  className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-slate-800 placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
              </div>
            </div>
          </section>

          <hr className="border-slate-100" />

          <section>
            <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
              <Calendar className="w-4 h-4" /> Dates & Preferences
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Departure Date <span className="text-red-400">*</span></label>
                <input
                  name="departure_date" type="date" value={form.departure_date} onChange={onChange} required
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Return Date <span className="text-slate-400 font-normal">(optional)</span></label>
                <input
                  name="return_date" type="date" value={form.return_date} onChange={onChange}
                  min={form.departure_date || new Date().toISOString().split('T')[0]}
                  className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Travelers <span className="text-red-400">*</span></label>
                <input
                  name="travelers" type="number" min="1" max="20" value={form.travelers} onChange={onChange} required
                  className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Class <span className="text-red-400">*</span></label>
                <select
                  name="travel_class" value={form.travel_class} onChange={onChange}
                  className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm bg-white"
                >
                  <option value="economy">Economy</option>
                  <option value="business">Business</option>
                  <option value="first">First Class</option>
                </select>
              </div>
            </div>
          </section>

          <hr className="border-slate-100" />

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Special Requests <span className="text-slate-400 font-normal">(optional)</span></label>
            <textarea
              name="notes" value={form.notes} onChange={onChange} rows={3}
              placeholder="Dietary requirements, accessibility needs, seat preferences…"
              className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-slate-800 placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm resize-none"
            />
          </div>

          {errorMsg && (
            <p className="text-sm text-red-500 bg-red-50 border border-red-100 rounded-lg px-4 py-2.5">{errorMsg}</p>
          )}

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3 rounded-lg transition-colors text-sm"
          >
            {status === 'submitting' ? 'Submitting…' : 'Submit Arrangement'}
          </button>
        </form>
      </main>

      <footer className="text-center text-xs text-slate-400 py-6">
        © {new Date().getFullYear()} Travel Arrangements
      </footer>
    </div>
  )
}
