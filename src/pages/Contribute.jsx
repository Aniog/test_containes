import { useState } from 'react'
import { Star, CheckCircle } from 'lucide-react'
import { EMOTIONS, ERAS, LIFE_EVENTS, REGIONS } from '../data/memories'

export default function Contribute() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    title: '',
    memory: '',
    contributor: '',
    year: '',
    location: '',
    region: '',
    emotion: '',
    era: '',
    lifeEvent: '',
    consent: false,
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm(f => ({ ...f, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Memory submitted:', form)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-screen pt-20 star-bg flex items-center justify-center px-4">
        <div className="max-w-lg w-full text-center">
          <div className="glass-card rounded-3xl p-10 md:p-14">
            <div className="w-16 h-16 rounded-full bg-aurora-900/40 border border-aurora-500/30 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-aurora-400" />
            </div>
            <h2 className="font-display text-3xl text-white font-bold mb-4">
              Memory Received
            </h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Thank you for contributing to the archive. Your memory has been received and
              will be reviewed by our archivists within 14 days. Once verified, it will
              join the constellation.
            </p>
            <p className="text-slate-500 text-xs font-mono mb-8">
              Reference: MNM-{Date.now().toString(36).toUpperCase()}
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="px-6 py-3 rounded-xl bg-nebula-600 hover:bg-nebula-500 text-white font-medium transition-colors"
            >
              Submit Another Memory
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-20 pb-16 star-bg">
      <div className="max-w-3xl mx-auto px-4 md:px-8 py-12">
        <div className="text-center mb-12">
          <div className="w-12 h-12 rounded-xl bg-nebula-600/20 border border-nebula-500/30 flex items-center justify-center mx-auto mb-6">
            <Star className="w-6 h-6 text-nebula-300" />
          </div>
          <p className="text-xs font-mono text-nebula-400 tracking-widest uppercase mb-3">
            Contribute
          </p>
          <h1 className="font-display text-4xl md:text-5xl text-white font-bold mb-4">
            Add Your Memory
          </h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Share a moment that shaped you. It will be preserved for all of humanity,
            traveling with us to the stars.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-6 md:p-8 space-y-6">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Memory Title <span className="text-memory-love">*</span>
            </label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              required
              placeholder="Give your memory a title..."
              className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-nebula-500/50 focus:ring-1 focus:ring-nebula-500/30 text-sm transition-all"
            />
          </div>

          {/* Memory text */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Your Memory <span className="text-memory-love">*</span>
            </label>
            <textarea
              name="memory"
              value={form.memory}
              onChange={handleChange}
              required
              rows={8}
              placeholder="Write your memory in as much detail as you wish. There is no minimum or maximum length. Write it as you remember it..."
              className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-nebula-500/50 focus:ring-1 focus:ring-nebula-500/30 text-sm transition-all resize-none leading-relaxed"
            />
          </div>

          {/* Contributor & Year */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Your Name
              </label>
              <input
                type="text"
                name="contributor"
                value={form.contributor}
                onChange={handleChange}
                placeholder="Optional — can be anonymous"
                className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-nebula-500/50 text-sm transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Year of Memory <span className="text-memory-love">*</span>
              </label>
              <input
                type="number"
                name="year"
                value={form.year}
                onChange={handleChange}
                required
                placeholder="e.g. 1987"
                min="-3000"
                max="2089"
                className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-nebula-500/50 text-sm transition-all"
              />
            </div>
          </div>

          {/* Location & Region */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Location
              </label>
              <input
                type="text"
                name="location"
                value={form.location}
                onChange={handleChange}
                placeholder="City, Country..."
                className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-nebula-500/50 text-sm transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Region
              </label>
              <select
                name="region"
                value={form.region}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-slate-200 focus:outline-none focus:border-nebula-500/50 text-sm transition-all"
              >
                <option value="" className="bg-cosmos">Select region...</option>
                {REGIONS.map(r => (
                  <option key={r} value={r} className="bg-cosmos">{r}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Emotion, Era, Life Event */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Primary Emotion
              </label>
              <select
                name="emotion"
                value={form.emotion}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-slate-200 focus:outline-none focus:border-nebula-500/50 text-sm transition-all"
              >
                <option value="" className="bg-cosmos">Select...</option>
                {EMOTIONS.map(e => (
                  <option key={e.id} value={e.id} className="bg-cosmos">{e.icon} {e.label}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Era
              </label>
              <select
                name="era"
                value={form.era}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-slate-200 focus:outline-none focus:border-nebula-500/50 text-sm transition-all"
              >
                <option value="" className="bg-cosmos">Select...</option>
                {ERAS.map(e => (
                  <option key={e.id} value={e.id} className="bg-cosmos">{e.label}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Life Event
              </label>
              <select
                name="lifeEvent"
                value={form.lifeEvent}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-slate-200 focus:outline-none focus:border-nebula-500/50 text-sm transition-all"
              >
                <option value="" className="bg-cosmos">Select...</option>
                {LIFE_EVENTS.map(e => (
                  <option key={e.id} value={e.id} className="bg-cosmos">{e.label}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Consent */}
          <div className="p-4 rounded-xl bg-slate-800/30 border border-slate-700/30">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="consent"
                checked={form.consent}
                onChange={handleChange}
                required
                className="mt-0.5 w-4 h-4 rounded border-slate-600 bg-slate-800 text-nebula-500 focus:ring-nebula-500/30"
              />
              <span className="text-slate-300 text-sm leading-relaxed">
                I consent to this memory being preserved in the Mnemosynē Archive and
                transmitted with the migration vessels. I understand it will be accessible
                to future generations. I confirm this memory is my own or I have permission
                to submit it.
              </span>
            </label>
          </div>

          <button
            type="submit"
            disabled={!form.consent}
            className="w-full py-4 rounded-xl bg-nebula-600 hover:bg-nebula-500 disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold text-base transition-all duration-200 shadow-lg shadow-nebula-900/40"
          >
            Preserve This Memory
          </button>

          <p className="text-slate-500 text-xs text-center font-mono">
            Your memory will be reviewed by our archivists within 14 days.
            All submissions are encrypted and stored with redundant backups.
          </p>
        </form>
      </div>
    </div>
  )
}
