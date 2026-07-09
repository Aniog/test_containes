import { ArrowDown, Sparkles } from 'lucide-react'

export default function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById('about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-microcosmos-7d3f9a"
        data-strk-bg="microscopic organisms cells bacteria deep space nebula"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#0a0a1a]/80 via-[#0a0a1a]/50 to-[#0a0a1a]" />

      {/* Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-micro-400/10 border border-micro-400/20 mb-8 animate-fade-in-up">
          <Sparkles className="w-4 h-4 text-micro-400" />
          <span className="text-sm font-medium text-micro-300">Explore the Invisible Universe</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Welcome to{' '}
          <span className="relative inline-block">
            <span className="relative z-10 bg-gradient-to-r from-micro-400 via-cosmos-400 to-nebula-400 bg-clip-text text-transparent">
              MicroCosmos
            </span>
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-micro-400 to-nebula-400 rounded-full" />
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          Discover the breathtaking beauty of the microscopic world, where tiny organisms create 
          galaxies of life invisible to the naked eye.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <button
            onClick={scrollToAbout}
            className="px-8 py-3 bg-micro-500 hover:bg-micro-600 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg shadow-micro-500/25 hover:shadow-micro-500/40"
          >
            Start Exploring
          </button>
          <button
            onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg border border-white/20 transition-all duration-200"
          >
            View Gallery
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToAbout}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Scroll down"
          >
            <ArrowDown className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-micro-400 rounded-full animate-pulse-glow opacity-60" />
      <div className="absolute top-1/3 right-20 w-3 h-3 bg-nebula-400 rounded-full animate-pulse-glow opacity-40" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-cosmos-400 rounded-full animate-pulse-glow opacity-50" style={{ animationDelay: '2s' }} />
    </section>
  )
}