import { ArrowRight } from 'lucide-react'

const stats = [
  { value: '3M+', label: 'Websites Built' },
  { value: '150+', label: 'Countries' },
  { value: '4.8★', label: 'Average Rating' },
  { value: '24/7', label: 'Support' },
]

export default function CTA() {
  return (
    <section className="relative py-20 md:py-28 bg-[#0F0F0F] overflow-hidden">
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-emerald-700/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-green-800/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-4">Get Started Today</p>
        <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
          Your website is{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300">
            one click away
          </span>
        </h2>
        <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
          Join over 3 million creators, entrepreneurs, and businesses who have already launched with Strikingly. It's free to start — no credit card needed.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <a href="#pricing"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-8 py-4 rounded-full transition-colors text-base">
            Create Your Free Website <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#features"
            className="inline-flex items-center gap-2 border border-white/20 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-full transition-colors text-base">
            Learn More
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(s => (
            <div key={s.label}>
              <p className="text-3xl font-extrabold text-white mb-1">{s.value}</p>
              <p className="text-gray-500 text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
