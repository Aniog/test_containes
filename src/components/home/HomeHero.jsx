import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function HomeHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Dashed grid background */}
      <div className="absolute inset-0 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#e5e7eb" strokeWidth="0.5" strokeDasharray="4 4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Decorative dashed circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-dashed border-gray-200 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-dashed border-gray-200 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border border-dashed border-indigo-100 pointer-events-none" />

      {/* Gradient blobs */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-indigo-50 rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-violet-50 rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 py-24 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-medium px-3 py-1.5 rounded-full mb-8">
          <Sparkles className="w-3.5 h-3.5" />
          Introducing NexusAI 2.0 — Now with GPT-5 integration
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tight leading-tight mb-6 max-w-4xl mx-auto">
          Build websites that{' '}
          <span className="relative inline-block">
            <span className="text-indigo-600">think</span>
            <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 6 Q50 2 100 6 Q150 10 198 6" stroke="#6366f1" strokeWidth="2" strokeDasharray="4 2" fill="none" />
            </svg>
          </span>{' '}
          for you
        </h1>

        <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          NexusAI transforms your ideas into fully functional, beautifully designed websites in minutes — no code required.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/pricing"
            className="flex items-center gap-2 bg-black text-white font-medium px-6 py-3 rounded-xl hover:bg-gray-800 transition-all shadow-lg shadow-black/10"
          >
            Start building free
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/product"
            className="flex items-center gap-2 text-gray-700 font-medium px-6 py-3 rounded-xl border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all"
          >
            See how it works
          </Link>
        </div>

        {/* Social proof */}
        <p className="mt-8 text-sm text-gray-400">
          Trusted by <span className="text-gray-700 font-medium">12,000+</span> businesses worldwide
        </p>

        {/* Hero image */}
        <div className="mt-16 relative max-w-5xl mx-auto">
          <div className="absolute -inset-4 bg-gradient-to-b from-indigo-50/50 to-transparent rounded-3xl pointer-events-none" />
          <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-2xl shadow-gray-200/80">
            <img
              src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&q=80&auto=format&fit=crop"
              alt="AI-powered website builder interface"
              className="w-full object-cover"
              style={{ aspectRatio: '16/9' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
