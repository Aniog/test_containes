import './App.css'

function App() {
  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center text-white overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0d2b1a 0%, #1a4a2e 40%, #2d6a4f 70%, #1b3a2a 100%)',
      }}
    >
      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 50%, #52b788 0%, transparent 50%), radial-gradient(circle at 80% 20%, #40916c 0%, transparent 40%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        {/* Leaf icon */}
        <div className="flex justify-center mb-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#74c69d"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-14 h-14 opacity-90"
          >
            <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
            <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
          </svg>
        </div>

        {/* Headline */}
        <h1
          className="text-5xl md:text-7xl font-light tracking-wide mb-6 leading-tight"
          style={{ color: '#d8f3dc', letterSpacing: '0.04em' }}
        >
          Into the Forest
        </h1>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-16 bg-green-400 opacity-50" />
          <div className="w-1.5 h-1.5 rounded-full bg-green-400 opacity-60" />
          <div className="h-px w-16 bg-green-400 opacity-50" />
        </div>

        {/* Subheading */}
        <p
          className="text-lg md:text-xl font-light leading-relaxed mb-10 opacity-80"
          style={{ color: '#b7e4c7' }}
        >
          Forests cover nearly a third of our planet's land — ancient, breathing,
          alive. They shelter millions of species, clean our air, and hold
          centuries of silence within their canopy.
        </p>

        {/* CTA Button */}
        <button
          className="px-8 py-3 rounded-full text-sm font-medium tracking-widest uppercase transition-all duration-300 hover:scale-105"
          style={{
            background: 'transparent',
            border: '1px solid #74c69d',
            color: '#74c69d',
            letterSpacing: '0.15em',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = '#74c69d'
            e.currentTarget.style.color = '#0d2b1a'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'transparent'
            e.currentTarget.style.color = '#74c69d'
          }}
        >
          Explore
        </button>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, rgba(13,43,26,0.8), transparent)',
        }}
      />

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-xs tracking-widest uppercase" style={{ color: '#b7e4c7' }}>
          Scroll
        </span>
        <div className="w-px h-8 bg-green-300" />
      </div>
    </div>
  )
}

export default App
