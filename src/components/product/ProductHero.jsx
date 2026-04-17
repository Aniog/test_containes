import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ProductHero() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Dashed grid */}
      <div className="absolute inset-0 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="pgrid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#f3f4f6" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pgrid)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-semibold text-indigo-600 uppercase tracking-widest">Product</span>
            <h1 className="mt-3 text-5xl md:text-6xl font-bold text-gray-900 tracking-tight leading-tight">
              The AI that builds<br />
              <span className="text-indigo-600">your web presence</span>
            </h1>
            <p className="mt-5 text-gray-500 text-lg leading-relaxed max-w-lg">
              Explore the full suite of AI capabilities that power NexusAI — from intelligent design generation to real-time content optimization.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <Link
                to="/pricing"
                className="flex items-center gap-2 bg-black text-white font-medium px-5 py-2.5 rounded-xl hover:bg-gray-800 transition-colors"
              >
                Start free trial <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#contact"
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                Talk to sales →
              </a>
            </div>
          </div>

          <div className="relative">
            {/* Dashed border frame */}
            <div className="absolute -inset-3 border border-dashed border-indigo-200 rounded-3xl pointer-events-none" />
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80&auto=format&fit=crop"
                alt="AI interface"
                className="w-full object-cover"
                style={{ aspectRatio: '4/3' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
