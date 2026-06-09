import { useEffect, useRef } from 'react'
import { ArrowDown, Zap, Activity, Gauge } from 'lucide-react'

const HeroSection = () => {
  const containerRef = useRef(null)

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 grid-overlay opacity-30" />

      {/* Asymmetric Split: 60/40 */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 min-h-[calc(100vh-5rem)]">

          {/* Left Side: 60% — Text Content */}
          <div className="lg:col-span-3 flex flex-col justify-center py-12 lg:py-0 lg:pr-12">
            {/* System Badge */}
            <div className="flex items-center gap-3 mb-8 animate-fade-in">
              <div className="h-px w-12 bg-plasma-purple" />
              <span className="font-mono text-[10px] tracking-[0.3em] text-plasma-purple uppercase">
                COMMERCIAL FUSION ENERGY
              </span>
            </div>

            {/* Main Title */}
            <h1 className="animate-slide-left" style={{ animationDelay: '0.1s' }}>
              <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[0.9] tracking-tighter">
                IGNITION
              </span>
              <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.9] tracking-tighter mt-1">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-plasma-purple via-laser-cyan to-tritium-green">
                  DYNAMICS
                </span>
              </span>
              <span className="block text-lg sm:text-xl lg:text-2xl font-light text-neutral-500 mt-4 tracking-wide">
                The Fusion Era
              </span>
            </h1>

            {/* Description */}
            <p
              className="text-neutral-400 text-base lg:text-lg leading-relaxed max-w-xl mt-8 animate-fade-in"
              style={{ animationDelay: '0.3s' }}
            >
              Engineering the next epoch of planetary energy infrastructure.
              We harness the power of stellar fusion — 150 million degree plasma
              confined in electromagnetic cages — to deliver limitless, clean
              power at terawatt scale.
            </p>

            {/* Telemetry Stats */}
            <div
              className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-border-gray animate-fade-in"
              style={{ animationDelay: '0.5s' }}
            >
              {[
                { label: 'PLASMA TEMP', value: '150M°C', icon: Gauge, color: 'text-solar-orange' },
                { label: 'GRID OUTPUT', value: '12.4 TW', icon: Zap, color: 'text-plasma-purple' },
                { label: 'REACTOR UPTIME', value: '99.97%', icon: Activity, color: 'text-tritium-green' },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <stat.icon size={14} className={`${stat.color} mb-2 mx-auto lg:mx-0`} />
                  <div className={`font-mono text-xl lg:text-2xl font-bold ${stat.color}`}>
                    {stat.value}
                  </div>
                  <div className="font-mono text-[9px] tracking-widest text-neutral-600 uppercase mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 mt-10 animate-fade-in" style={{ animationDelay: '0.7s' }}>
              <a
                href="/reactors"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-void font-mono text-xs tracking-[0.2em] uppercase hover:bg-plasma-purple hover:text-white transition-all duration-300 border border-white hover:border-plasma-purple"
              >
                <Zap size={12} />
                Explore Reactors
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-transparent text-neutral-400 font-mono text-xs tracking-[0.2em] uppercase border border-border-gray hover:border-plasma-purple hover:text-white transition-all duration-300"
              >
                Power Allocation Inquiry
              </a>
            </div>
          </div>

          {/* Right Side: 40% — Vibrant Tokamak Image */}
          <div className="lg:col-span-2 relative flex items-center justify-center py-8 lg:py-0">
            <div className="relative w-full h-full min-h-[400px] lg:min-h-0">
              {/* Main Image Container */}
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80"
                  alt="Tokamak reactor interior with swirling plasma core"
                  className="w-full h-full object-cover"
                  style={{
                    maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
                    WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
                  }}
                />
                {/* Glow Overlay */}
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-plasma-purple/5 to-void" />
              </div>

              {/* Telemetry Overlay */}
              <div className="absolute bottom-8 left-4 right-4">
                <div className="bg-void/80 backdrop-blur-sm border border-border-gray p-4">
                  <div className="flex items-center justify-between">
                    <div className="font-mono text-[9px] tracking-widest text-neutral-500 uppercase">
                      TOKAMAK CROSS-SECTION
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="telemetry-dot bg-plasma-purple" />
                      <span className="font-mono text-[9px] text-plasma-purple">LIVE</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-3 mt-3 pt-3 border-t border-border-gray/50">
                    <div>
                      <div className="font-mono text-[8px] text-neutral-600 uppercase">MAG FIELD</div>
                      <div className="font-mono text-[11px] text-laser-cyan">13.5 T</div>
                    </div>
                    <div>
                      <div className="font-mono text-[8px] text-neutral-600 uppercase">PLASMA</div>
                      <div className="font-mono text-[11px] text-plasma-pink">150 MK</div>
                    </div>
                    <div>
                      <div className="font-mono text-[8px] text-neutral-600 uppercase">Q-FACTOR</div>
                      <div className="font-mono text-[11px] text-tritium-green">Q &gt; 10</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="font-mono text-[9px] tracking-widest text-neutral-600 uppercase">
            Scroll
          </span>
          <ArrowDown size={14} className="text-neutral-600" />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
