import { useEffect, useRef } from 'react'
import { ArrowRight, Play, Star } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function Hero() {
  const containerRef = useRef(null)
  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative min-h-screen bg-[#0F0F0F] flex items-center overflow-hidden pt-16">
      {/* Gradient blobs */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-violet-700/25 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-800/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-900/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div>
          <div className="inline-flex items-center gap-2 bg-violet-900/40 border border-violet-500/30 text-violet-300 text-sm font-medium px-4 py-2 rounded-full mb-6">
            <Star className="w-4 h-4 fill-violet-400 text-violet-400" />
            Trusted by 3 million+ creators worldwide
          </div>

          <h1 id="hero-heading" className="text-5xl md:text-7xl font-extrabold text-white leading-[1.05] tracking-tight mb-6">
            Build a stunning<br />
            website{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-300">
              in minutes
            </span>
          </h1>

          <p id="hero-subheading" className="text-lg text-gray-400 leading-relaxed mb-8 max-w-lg">
            Strikingly makes it effortless to create beautiful, mobile-ready websites — no coding required. Launch your idea, business, or portfolio today.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <a href="#pricing"
              className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white font-semibold px-7 py-3.5 rounded-full transition-colors text-base">
              Start for Free <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#features"
              className="inline-flex items-center gap-2 border border-white/20 text-white hover:bg-white/10 font-semibold px-7 py-3.5 rounded-full transition-colors text-base">
              <Play className="w-4 h-4 fill-white" /> See How It Works
            </a>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex -space-x-2">
              {['bg-violet-500', 'bg-purple-500', 'bg-indigo-500', 'bg-fuchsia-500'].map((c, i) => (
                <div key={i} className={`w-8 h-8 rounded-full ${c} border-2 border-[#0F0F0F] flex items-center justify-center text-white text-xs font-bold`}>
                  {['S', 'M', 'A', 'T'][i]}
                </div>
              ))}
            </div>
            <div>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-violet-400 text-violet-400" />
                ))}
              </div>
              <p className="text-gray-400 text-sm">4.8/5 from 10,000+ reviews</p>
            </div>
          </div>
        </div>

        {/* Right — hero image */}
        <div className="relative hidden lg:block">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-violet-900/40 border border-white/10">
            <img
              alt="Beautiful website builder interface"
              className="w-full object-cover"
              data-strk-img-id="hero-img-8f2a9c"
              data-strk-img="[hero-subheading] [hero-heading]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
            />
          </div>
          {/* Floating badge */}
          <div className="absolute -bottom-4 -left-6 bg-white rounded-2xl shadow-xl px-5 py-3 flex items-center gap-3">
            <div className="w-8 h-8 bg-violet-600 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">✓</span>
            </div>
            <div>
              <p className="text-gray-900 font-semibold text-sm">Site Published!</p>
              <p className="text-gray-500 text-xs">Just now</p>
            </div>
          </div>
          <div className="absolute -top-4 -right-4 bg-violet-600 text-white rounded-2xl shadow-xl px-5 py-3 text-center">
            <p className="font-extrabold text-xl">3M+</p>
            <p className="text-violet-200 text-xs">Websites Built</p>
          </div>
        </div>
      </div>
    </section>
  )
}
