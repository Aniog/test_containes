import { Link } from 'react-router-dom'
import { ArrowRight, Play } from 'lucide-react'

export default function HomeHero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 25% 25%, white 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm text-slate-300 mb-6">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              Industry-Leading Metal Folding Solutions
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Precision Engineering for
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600"> Perfect Folds</span>
            </h1>
            <p className="text-lg text-slate-300 mb-8 max-w-xl leading-relaxed">
              ARTITECT MACHINERY delivers high-performance double folding machines and sheet metal folders 
              that combine elegant design with industrial-grade reliability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-500 text-slate-900 font-semibold rounded-lg hover:bg-amber-400 transition-colors"
              >
                Explore Products
                <ArrowRight className="w-5 h-5" />
              </Link>
              <button className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-slate-600 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors">
                <Play className="w-5 h-5" />
                Watch Demo
              </button>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative">
            <div className="aspect-square lg:aspect-[4/3] bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl overflow-hidden shadow-2xl">
              <img
                data-strk-img-id="hero-machine-8f2a9c"
                data-strk-img="[hero-title] [hero-subtitle]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="ARTITECT Metal Folding Machine"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <span className="text-emerald-600 font-bold text-lg">25+</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">Years Experience</p>
                  <p className="text-xs text-slate-500">In metal fabrication</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-xl p-4 hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                  <span className="text-amber-600 font-bold text-lg">500+</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">Machines Sold</p>
                  <p className="text-xs text-slate-500">Worldwide delivery</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
