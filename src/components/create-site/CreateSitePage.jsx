import { useState } from 'react'
import { ChevronDown, ChevronUp, Bot } from 'lucide-react'

export default function CreateSitePage() {
  const [siteName, setSiteName] = useState('')
  const [description, setDescription] = useState('')
  const [showAdvanced, setShowAdvanced] = useState(false)
  const [industry, setIndustry] = useState('')
  const [siteType, setSiteType] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!siteName.trim()) return
    setIsSubmitting(true)
    await new Promise((r) => setTimeout(r, 1500))
    setIsSubmitting(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #f0eff5 0%, #e8e0f0 50%, #f5e0ee 100%)' }}>
        <div className="text-center max-w-md px-6">
          <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: 'linear-gradient(135deg, #7c3aed, #ec4899)' }}>
            <Bot className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-3">正在生成您的网站…</h2>
          <p className="text-gray-500 mb-6">AI 正在根据您的信息创建专属网站，请稍候。</p>
          <div className="flex justify-center gap-2">
            <span className="w-2 h-2 rounded-full animate-bounce" style={{ background: '#7c3aed', animationDelay: '0ms' }} />
            <span className="w-2 h-2 rounded-full animate-bounce" style={{ background: '#a855f7', animationDelay: '150ms' }} />
            <span className="w-2 h-2 rounded-full animate-bounce" style={{ background: '#ec4899', animationDelay: '300ms' }} />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ background: 'linear-gradient(135deg, #f0eff5 0%, #e8e0f0 50%, #f5e0ee 100%)' }}
    >
      {/* Top Nav */}
      <nav className="flex items-center justify-between px-8 py-4">
        <div className="flex items-center gap-2">
          <span className="font-bold text-lg italic" style={{ color: '#7c3aed' }}>
            strikingly
          </span>
          <span className="font-bold text-lg italic text-gray-800">AI</span>
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center ml-1"
            style={{ background: 'linear-gradient(135deg, #7c3aed, #ec4899)' }}
          >
            <Bot className="w-4 h-4 text-white" />
          </div>
        </div>
        <button
          className="border border-gray-300 rounded px-3 py-1 text-sm font-medium text-gray-600 bg-white hover:bg-gray-50 transition-colors"
        >
          EN
        </button>
      </nav>

      {/* Main Content */}
      <main className="flex-1 flex items-center px-8 md:px-16 lg:px-24 py-12 gap-16">
        <div className="w-full max-w-xl flex-shrink-0">
          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight mb-2 uppercase tracking-tight">
            Create Your Site
          </h1>
          <h1
            className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 uppercase tracking-tight"
            style={{ background: 'linear-gradient(90deg, #7c3aed, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
          >
            In An Instant
          </h1>
          <p className="text-gray-500 text-base mb-8 max-w-sm">
            Tell us a bit about your business and we'll generate a full site just for you.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Site Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Site Name
              </label>
              <input
                type="text"
                value={siteName}
                onChange={(e) => setSiteName(e.target.value)}
                placeholder="Site title, e.g. your business/organization name"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-800 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:border-transparent transition-all"
                style={{ '--tw-ring-color': '#7c3aed' }}
                required
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Business/Organization Description
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Describe your business in a sentence or two"
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-800 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:border-transparent transition-all resize-none"
                style={{ '--tw-ring-color': '#7c3aed' }}
              />
            </div>

            {/* Advanced Settings Toggle */}
            <button
              type="button"
              onClick={() => setShowAdvanced(!showAdvanced)}
              className="w-full py-3 rounded-xl border border-gray-200 bg-white text-gray-700 font-semibold text-sm uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
            >
              {showAdvanced ? 'Hide Advanced Settings' : 'Show Advanced Settings'}
              {showAdvanced ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>

            {/* Advanced Settings Panel */}
            {showAdvanced && (
              <div className="flex flex-col gap-4 bg-white rounded-xl border border-gray-200 p-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Industry
                  </label>
                  <select
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-700 text-sm focus:outline-none focus:ring-2 transition-all"
                  >
                    <option value="">Select your industry</option>
                    <option value="ecommerce">E-Commerce</option>
                    <option value="portfolio">Portfolio / Creative</option>
                    <option value="restaurant">Restaurant / Food</option>
                    <option value="health">Health & Wellness</option>
                    <option value="education">Education</option>
                    <option value="tech">Technology</option>
                    <option value="nonprofit">Non-Profit</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Site Type
                  </label>
                  <select
                    value={siteType}
                    onChange={(e) => setSiteType(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-700 text-sm focus:outline-none focus:ring-2 transition-all"
                  >
                    <option value="">Select site type</option>
                    <option value="business">Business Website</option>
                    <option value="personal">Personal Blog</option>
                    <option value="store">Online Store</option>
                    <option value="landing">Landing Page</option>
                    <option value="event">Event Page</option>
                  </select>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting || !siteName.trim()}
              className="w-full py-4 rounded-xl text-white font-bold text-sm uppercase tracking-widest transition-opacity disabled:opacity-60"
              style={{ background: 'linear-gradient(90deg, #7c3aed, #ec4899)' }}
            >
              {isSubmitting ? 'Generating…' : 'Confirm & Generate Site'}
            </button>
          </form>
        </div>

        {/* Right Side — Site Preview Mockup */}
        <div className="hidden lg:flex flex-1 items-center justify-center">
          <div className="relative w-full max-w-md">

            {/* Browser mockup card */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-white/60">
              {/* Browser chrome */}
              <div className="flex items-center gap-1.5 px-4 py-3 bg-gray-100 border-b border-gray-200">
                <span className="w-3 h-3 rounded-full bg-red-400" />
                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="w-3 h-3 rounded-full bg-green-400" />
                <div className="flex-1 mx-3 bg-white rounded-full px-3 py-1 text-xs text-gray-400 border border-gray-200">
                  {siteName ? `${siteName.toLowerCase().replace(/\s+/g, '-')}.strikingly.com` : 'yoursite.strikingly.com'}
                </div>
              </div>

              {/* Site preview content */}
              <div className="relative overflow-hidden" style={{ height: 340 }}>
                {/* Hero section */}
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
                  style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 50%, #ec4899 100%)' }}
                >
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mb-3">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-white font-bold text-xl mb-1">
                    {siteName || 'Your Business Name'}
                  </h2>
                  <p className="text-white/80 text-xs max-w-xs leading-relaxed">
                    {description || 'Your business description will appear here once you fill in the form.'}
                  </p>
                  <div className="mt-4 px-5 py-2 bg-white rounded-full text-xs font-bold text-purple-700">
                    Get Started
                  </div>
                </div>

                {/* Floating nav bar overlay */}
                <div className="absolute top-3 left-3 right-3 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 flex items-center justify-between shadow-sm">
                  <span className="text-xs font-bold text-gray-800">{siteName || 'My Site'}</span>
                  <div className="flex gap-3">
                    <span className="text-xs text-gray-500">Home</span>
                    <span className="text-xs text-gray-500">About</span>
                    <span className="text-xs text-gray-500">Contact</span>
                  </div>
                </div>
              </div>

              {/* Bottom section blocks */}
              <div className="p-4 grid grid-cols-3 gap-3 bg-gray-50">
                {['Feature 1', 'Feature 2', 'Feature 3'].map((f) => (
                  <div key={f} className="bg-white rounded-lg p-3 text-center shadow-sm border border-gray-100">
                    <div className="w-6 h-6 rounded-full mx-auto mb-1" style={{ background: 'linear-gradient(135deg, #7c3aed, #ec4899)' }} />
                    <div className="text-xs text-gray-400">{f}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating badge — AI Generated */}
            <div
              className="absolute -top-4 -right-4 px-4 py-2 rounded-full text-white text-xs font-bold shadow-lg flex items-center gap-1.5"
              style={{ background: 'linear-gradient(90deg, #7c3aed, #ec4899)' }}
            >
              <Bot className="w-3.5 h-3.5" />
              AI Generated
            </div>

            {/* Floating stat cards */}
            <div className="absolute -left-6 top-1/3 bg-white rounded-xl shadow-lg px-4 py-3 flex items-center gap-3 border border-gray-100">
              <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)' }}>
                <span className="text-white text-xs font-bold">✓</span>
              </div>
              <div>
                <div className="text-xs font-bold text-gray-800">Ready in seconds</div>
                <div className="text-xs text-gray-400">Powered by AI</div>
              </div>
            </div>

            <div className="absolute -right-6 bottom-1/4 bg-white rounded-xl shadow-lg px-4 py-3 border border-gray-100">
              <div className="text-xs font-bold text-gray-800 mb-1">Pages created</div>
              <div className="text-2xl font-extrabold" style={{ background: 'linear-gradient(90deg, #7c3aed, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                2M+
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
