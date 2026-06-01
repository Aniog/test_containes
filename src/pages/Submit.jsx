import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { submitMemory } from '../api/memories'

const ERAS = ['Ancient', 'Medieval', 'Industrial', 'Modern', 'Digital', 'Near Future']
const EMOTIONS = ['Joy', 'Love', 'Nostalgia', 'Wonder', 'Grief', 'Hope', 'Fear', 'Peace']
const LIFE_EVENTS = ['Birth', 'Childhood', 'First Love', 'Marriage', 'Loss', 'Achievement', 'Travel', 'War', 'Discovery', 'Farewell', 'Reunion', 'Daily Life']
const CONTINENTS = ['Africa', 'Antarctica', 'Asia', 'Europe', 'North America', 'Oceania', 'South America']

const inputClass = "w-full bg-nebula border border-stardust text-starlight placeholder-twilight rounded-xl px-4 py-3 text-sm focus:border-aurora focus:ring-1 focus:ring-aurora outline-none transition-all duration-200"
const labelClass = "block text-xs text-moonlight font-mono uppercase tracking-wider mb-2"
const selectClass = `${inputClass} cursor-pointer`

export default function Submit() {
  const navigate = useNavigate()
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)
  const [form, setForm] = useState({
    title: '',
    description: '',
    contributor_name: '',
    contributor_origin: '',
    era: '',
    year: '',
    location: '',
    continent: '',
    emotion: '',
    life_event: '',
    tags: '',
  })

  const set = (key, value) => setForm(f => ({ ...f, [key]: value }))

  const validate = () => {
    if (!form.title.trim()) return 'Title is required'
    if (!form.description.trim()) return 'Description is required'
    if (form.description.trim().length < 50) return 'Description must be at least 50 characters'
    if (!form.era) return 'Please select an era'
    if (!form.emotion) return 'Please select an emotion'
    if (!form.life_event) return 'Please select a life event'
    return null
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    const err = validate()
    if (err) { setError(err); return }

    setStatus('submitting')
    const tags = form.tags ? form.tags.split(',').map(t => t.trim()).filter(Boolean) : []
    const payload = {
      title: form.title.trim(),
      description: form.description.trim(),
      era: form.era,
      emotion: form.emotion,
      life_event: form.life_event,
      ...(form.contributor_name && { contributor_name: form.contributor_name.trim() }),
      ...(form.contributor_origin && { contributor_origin: form.contributor_origin.trim() }),
      ...(form.year && { year: parseInt(form.year) }),
      ...(form.location && { location: form.location.trim() }),
      ...(form.continent && { continent: form.continent }),
      ...(tags.length > 0 && { tags }),
      is_featured: false,
      view_count: 0,
    }

    const created = await submitMemory(payload)
    setStatus('success')
    setTimeout(() => navigate(`/memory/${created.id}`), 1500)
  }

  return (
    <div className="min-h-screen bg-cosmos pt-20">
      <div className="max-w-2xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full border border-aurora/30 bg-aurora/10">
            <span className="w-2 h-2 rounded-full bg-aurora animate-pulse" />
            <span className="text-xs font-mono text-aurora-light tracking-widest uppercase">Contribute to the Archive</span>
          </div>
          <h1 className="font-cinzel text-3xl md:text-4xl text-starlight mb-3">
            Share Your Memory
          </h1>
          <p className="text-moonlight text-sm max-w-md mx-auto">
            Your memory will be preserved for all time, carried with humanity to the stars.
          </p>
        </div>

        {status === 'success' ? (
          <div className="rounded-2xl border border-aurora/30 bg-aurora/10 p-12 text-center">
            <div className="text-5xl mb-4">✦</div>
            <h2 className="font-cinzel text-2xl text-starlight mb-2">Memory Preserved</h2>
            <p className="text-moonlight text-sm">Your memory has been added to the archive. Redirecting...</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Title */}
            <div>
              <label className={labelClass}>Memory Title *</label>
              <input
                type="text"
                value={form.title}
                onChange={e => set('title', e.target.value)}
                placeholder="Give your memory a title..."
                className={inputClass}
                maxLength={200}
              />
            </div>

            {/* Description */}
            <div>
              <label className={labelClass}>Your Memory *</label>
              <textarea
                value={form.description}
                onChange={e => set('description', e.target.value)}
                placeholder="Describe your memory in detail. What did you see, feel, hear? Who was there? Why does this moment matter to you?"
                className={`${inputClass} resize-none`}
                rows={8}
                maxLength={2000}
              />
              <div className="text-right text-xs text-twilight font-mono mt-1">
                {form.description.length}/2000
              </div>
            </div>

            {/* Era + Emotion */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Era *</label>
                <select value={form.era} onChange={e => set('era', e.target.value)} className={selectClass}>
                  <option value="">Select era...</option>
                  {ERAS.map(e => <option key={e} value={e}>{e}</option>)}
                </select>
              </div>
              <div>
                <label className={labelClass}>Emotion *</label>
                <select value={form.emotion} onChange={e => set('emotion', e.target.value)} className={selectClass}>
                  <option value="">Select emotion...</option>
                  {EMOTIONS.map(e => <option key={e} value={e}>{e}</option>)}
                </select>
              </div>
            </div>

            {/* Life Event */}
            <div>
              <label className={labelClass}>Life Event *</label>
              <select value={form.life_event} onChange={e => set('life_event', e.target.value)} className={selectClass}>
                <option value="">Select life event...</option>
                {LIFE_EVENTS.map(e => <option key={e} value={e}>{e}</option>)}
              </select>
            </div>

            {/* Year + Location */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Year</label>
                <input
                  type="number"
                  value={form.year}
                  onChange={e => set('year', e.target.value)}
                  placeholder="e.g. 1985"
                  className={inputClass}
                  min={-3000}
                  max={2100}
                />
              </div>
              <div>
                <label className={labelClass}>Continent</label>
                <select value={form.continent} onChange={e => set('continent', e.target.value)} className={selectClass}>
                  <option value="">Select continent...</option>
                  {CONTINENTS.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
            </div>

            {/* Location */}
            <div>
              <label className={labelClass}>Location</label>
              <input
                type="text"
                value={form.location}
                onChange={e => set('location', e.target.value)}
                placeholder="City, country, or region..."
                className={inputClass}
                maxLength={150}
              />
            </div>

            {/* Contributor */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Your Name</label>
                <input
                  type="text"
                  value={form.contributor_name}
                  onChange={e => set('contributor_name', e.target.value)}
                  placeholder="Optional"
                  className={inputClass}
                  maxLength={100}
                />
              </div>
              <div>
                <label className={labelClass}>Your Origin</label>
                <input
                  type="text"
                  value={form.contributor_origin}
                  onChange={e => set('contributor_origin', e.target.value)}
                  placeholder="City, country..."
                  className={inputClass}
                  maxLength={100}
                />
              </div>
            </div>

            {/* Tags */}
            <div>
              <label className={labelClass}>Tags</label>
              <input
                type="text"
                value={form.tags}
                onChange={e => set('tags', e.target.value)}
                placeholder="Comma-separated: family, ocean, childhood..."
                className={inputClass}
              />
            </div>

            {/* Error */}
            {error && (
              <div className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-red-400 text-sm font-mono">
                {error}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full py-4 rounded-full bg-aurora hover:bg-aurora-light text-white font-semibold text-base transition-all duration-200 shadow-lg shadow-aurora/30 hover:shadow-aurora/50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'submitting' ? 'Preserving your memory...' : 'Preserve This Memory ✦'}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
