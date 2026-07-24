import { ArrowRight, Play } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden" id="top">
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-lumen-01"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-slate-50" />

      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-28 md:pt-32 md:pb-36 text-center">
        <span className="inline-block rounded-full bg-indigo-50 text-indigo-700 text-sm font-medium px-4 py-1.5 border border-indigo-100">
          New: AI-assisted design reviews
        </span>
        <h1
          id="hero-title"
          className="mt-6 text-4xl md:text-6xl font-bold tracking-tight text-slate-900"
        >
          Modern creative studio for brands that want to stand out
        </h1>
        <p
          id="hero-subtitle"
          className="mt-6 max-w-2xl mx-auto text-base md:text-lg leading-relaxed text-slate-600"
        >
          We design and build beautiful websites, brand identities, and digital
          products — blending strategy, craft, and technology to help ambitious
          teams launch faster.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-indigo-600 text-white rounded-full px-7 py-3.5 font-semibold hover:bg-indigo-700 transition"
          >
            Start a project
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#showcase"
            className="inline-flex items-center gap-2 bg-white text-slate-900 border border-slate-300 rounded-full px-7 py-3.5 font-semibold hover:border-slate-400 transition"
          >
            <Play className="w-4 h-4" />
            See our work
          </a>
        </div>

        <dl className="mt-16 grid grid-cols-3 gap-6 max-w-2xl mx-auto">
          {[
            { value: '120+', label: 'Projects shipped' },
            { value: '98%', label: 'Client satisfaction' },
            { value: '8 yrs', label: 'Craft experience' },
          ].map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd className="text-2xl md:text-3xl font-bold text-slate-900">{stat.value}</dd>
              <dd className="mt-1 text-xs md:text-sm text-slate-500">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
