import React from 'react'

export default function HeroSection() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1c1008 0%, #3d2008 40%, #5c3010 70%, #7a4520 100%)',
      }}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-amber-500 opacity-10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-orange-400 opacity-10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-600 opacity-5 rounded-full blur-3xl" />
      </div>

      {/* Large horse silhouette */}
      <div className="absolute right-0 bottom-0 text-[22rem] leading-none opacity-10 select-none pointer-events-none hidden lg:block">
        🐴
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-amber-200 text-sm font-medium px-5 py-2 rounded-full mb-8">
          <span>🌟</span>
          <span>Lessons for all ages & skill levels</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight">
          Discover the Joy of<br />
          <span className="text-amber-400">Horse Riding</span>
        </h1>

        <p className="text-xl md:text-2xl text-amber-100/80 mb-10 max-w-2xl mx-auto leading-relaxed">
          Professional riding lessons in a safe, welcoming environment. Whether you're a first-timer or a seasoned rider, we have a lesson for you.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollTo('book')}
            className="bg-amber-500 hover:bg-amber-400 text-white font-bold px-10 py-4 rounded-2xl text-lg transition-all shadow-lg hover:shadow-amber-500/30 hover:-translate-y-0.5"
          >
            Book a Lesson
          </button>
          <button
            onClick={() => scrollTo('lessons')}
            className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold px-10 py-4 rounded-2xl text-lg transition-all"
          >
            View Lessons
          </button>
        </div>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto">
          {[
            { value: '15+', label: 'Years Experience' },
            { value: '500+', label: 'Happy Riders' },
            { value: '4', label: 'Lesson Types' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-extrabold text-amber-400">{stat.value}</div>
              <div className="text-amber-200/70 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center pt-2">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  )
}
