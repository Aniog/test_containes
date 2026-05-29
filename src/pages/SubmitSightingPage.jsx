import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { submitSighting } from '../api/archive.js'
import { Compass, Loader2, Check, AlertCircle, MapPin, Clock, User } from 'lucide-react'

const SIGHTING_TYPES = ['Temporal Rift', 'Displaced Person', 'Anachronistic Object', 'Timeline Echo', 'Dimensional Bleed', 'Paradox Event', 'Unknown Anomaly']
const URGENCY_LEVELS = ['Low', 'Medium', 'High', 'Critical']

export default function SubmitSightingPage() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(null)
  const [form, setForm] = useState({
    title: '',
    description: '',
    location: '',
    date_observed: '',
    sighting_type: '',
    urgency: 'Medium',
    witness_name: '',
    witness_email: '',
    coordinates: '',
  })

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    setLoading(true)
    try {
      await submitSighting(form)
      setSuccess(true)
    } catch (err) {
      setError(err.message || 'Submission failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (success) return (
    <div className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="text-center max-w-md">
        <div className="w-16 h-16 rounded-full bg-green-400/10 border border-green-400/30 flex items-center justify-center mx-auto mb-4">
          <Check className="w-8 h-8 text-green-400" />
        </div>
        <h2 className="font-cinzel text-2xl font-bold text-slate-100 mb-2">Sighting Submitted</h2>
        <p className="text-slate-400 mb-2">Your report has been received and assigned to the nearest field team.</p>
        <p className="font-mono-archive text-xs text-slate-600 mb-6">DO NOT RETURN TO THE LOCATION. DO NOT DISCUSS WITH CIVILIANS.</p>
        <button onClick={() => navigate('/')} className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm">
          Return to Archive →
        </button>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen pt-20">
      <div className="relative py-12 px-6 overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(245,158,11,0.05), transparent 60%)' }} />
        <div className="relative max-w-3xl mx-auto">
          <div className="flex items-center gap-2 mb-3">
            <Compass className="w-4 h-4 text-amber-400" />
            <span className="font-mono-archive text-xs text-amber-400 tracking-widest">FIELD REPORT SYSTEM</span>
          </div>
          <h1 className="font-cinzel text-4xl font-bold text-slate-100 mb-3">Submit a Sighting</h1>
          <p className="text-slate-400 leading-relaxed">
            Report temporal anomalies, displaced artifacts, or unusual phenomena to the Archive's field operations team. All reports are reviewed within 24 hours.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 pb-20">
        <div className="glass border border-amber-400/15 rounded-2xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Title */}
            <div>
              <label className="block font-mono-archive text-xs text-slate-500 tracking-wide mb-2">SIGHTING TITLE *</label>
              <input
                type="text"
                value={form.title}
                onChange={e => set('title', e.target.value)}
                required
                placeholder="Brief description of the anomaly"
                className="w-full px-4 py-3 bg-white/5 border border-amber-400/15 rounded-lg text-slate-200 placeholder-slate-600 focus:outline-none focus:border-amber-400/30 text-sm"
              />
            </div>

            {/* Type + Urgency */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-mono-archive text-xs text-slate-500 tracking-wide mb-2">ANOMALY TYPE *</label>
                <select
                  value={form.sighting_type}
                  onChange={e => set('sighting_type', e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-amber-400/15 rounded-lg text-slate-300 focus:outline-none focus:border-amber-400/30 text-sm appearance-none"
                >
                  <option value="" style={{ background: '#0a0f1e' }}>Select type...</option>
                  {SIGHTING_TYPES.map(t => <option key={t} value={t} style={{ background: '#0a0f1e' }}>{t}</option>)}
                </select>
              </div>
              <div>
                <label className="block font-mono-archive text-xs text-slate-500 tracking-wide mb-2">URGENCY LEVEL</label>
                <select
                  value={form.urgency}
                  onChange={e => set('urgency', e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-amber-400/15 rounded-lg text-slate-300 focus:outline-none focus:border-amber-400/30 text-sm appearance-none"
                >
                  {URGENCY_LEVELS.map(u => <option key={u} value={u} style={{ background: '#0a0f1e' }}>{u}</option>)}
                </select>
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block font-mono-archive text-xs text-slate-500 tracking-wide mb-2">DETAILED DESCRIPTION *</label>
              <textarea
                value={form.description}
                onChange={e => set('description', e.target.value)}
                required
                rows={5}
                placeholder="Describe what you observed in as much detail as possible. Include sensory details, duration, and any effects on the surrounding environment."
                className="w-full px-4 py-3 bg-white/5 border border-amber-400/15 rounded-lg text-slate-200 placeholder-slate-600 focus:outline-none focus:border-amber-400/30 text-sm resize-none"
              />
            </div>

            {/* Location + Date */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-mono-archive text-xs text-slate-500 tracking-wide mb-2">
                  <MapPin className="inline w-3 h-3 mr-1" />LOCATION *
                </label>
                <input
                  type="text"
                  value={form.location}
                  onChange={e => set('location', e.target.value)}
                  required
                  placeholder="City, Country or coordinates"
                  className="w-full px-4 py-3 bg-white/5 border border-amber-400/15 rounded-lg text-slate-200 placeholder-slate-600 focus:outline-none focus:border-amber-400/30 text-sm"
                />
              </div>
              <div>
                <label className="block font-mono-archive text-xs text-slate-500 tracking-wide mb-2">
                  <Clock className="inline w-3 h-3 mr-1" />DATE OBSERVED *
                </label>
                <input
                  type="date"
                  value={form.date_observed}
                  onChange={e => set('date_observed', e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-amber-400/15 rounded-lg text-slate-200 focus:outline-none focus:border-amber-400/30 text-sm"
                  style={{ colorScheme: 'dark' }}
                />
              </div>
            </div>

            {/* Witness info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-mono-archive text-xs text-slate-500 tracking-wide mb-2">
                  <User className="inline w-3 h-3 mr-1" />YOUR NAME
                </label>
                <input
                  type="text"
                  value={form.witness_name}
                  onChange={e => set('witness_name', e.target.value)}
                  placeholder="Optional — kept confidential"
                  className="w-full px-4 py-3 bg-white/5 border border-amber-400/15 rounded-lg text-slate-200 placeholder-slate-600 focus:outline-none focus:border-amber-400/30 text-sm"
                />
              </div>
              <div>
                <label className="block font-mono-archive text-xs text-slate-500 tracking-wide mb-2">CONTACT EMAIL</label>
                <input
                  type="email"
                  value={form.witness_email}
                  onChange={e => set('witness_email', e.target.value)}
                  placeholder="For follow-up contact"
                  className="w-full px-4 py-3 bg-white/5 border border-amber-400/15 rounded-lg text-slate-200 placeholder-slate-600 focus:outline-none focus:border-amber-400/30 text-sm"
                />
              </div>
            </div>

            {error && (
              <div className="flex items-center gap-2 p-3 rounded-lg bg-red-400/10 border border-red-400/20">
                <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                <p className="text-sm text-red-400">{error}</p>
              </div>
            )}

            <div className="p-4 rounded-lg bg-amber-400/5 border border-amber-400/15">
              <p className="text-xs text-slate-500 leading-relaxed">
                <strong className="text-amber-400">Important:</strong> Do not return to the location of the anomaly until cleared by an Archive field agent. Do not photograph temporal rifts with digital devices. If you are experiencing temporal displacement symptoms, call the Archive emergency line immediately.
              </p>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-lg font-medium text-slate-900 transition-all hover:scale-105 disabled:opacity-50"
              style={{ background: 'linear-gradient(135deg, #f59e0b, #d97706)' }}
            >
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Compass className="w-4 h-4" />}
              {loading ? 'Transmitting Report...' : 'Submit Sighting Report'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
