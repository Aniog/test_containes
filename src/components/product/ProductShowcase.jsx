import { CheckCircle2, ArrowRight } from 'lucide-react'

const features = [
  'Real-time AI editing with natural language commands',
  'Automatic mobile & tablet responsive layouts',
  'One-click domain connection and SSL',
  'Built-in A/B testing for headlines and CTAs',
  'E-commerce ready with AI product descriptions',
  'Integrated analytics and heatmaps',
]

export default function ProductShowcase() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 border-t border-dashed border-slate-200" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: content */}
          <div>
            <p className="text-indigo-600 text-sm font-semibold uppercase tracking-widest mb-4">Platform</p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-6">
              The most intelligent<br />website editor ever built
            </h2>
            <p className="text-slate-500 text-base leading-relaxed mb-8">
              NexusAI's editor isn't just a drag-and-drop tool — it's a collaborative AI partner that understands your goals and helps you achieve them.
            </p>

            <ul className="space-y-3 mb-10">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-700">{f}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="group inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              Request a Demo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Right: image */}
          <div className="relative">
            <div className="dashed-border rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800&q=80&auto=format&fit=crop"
                alt="Minimalist workspace with modern UI"
                className="w-full h-[480px] object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl border border-slate-100 p-4 hidden md:block">
              <p className="text-xs text-slate-500 font-medium mb-1">AI Confidence Score</p>
              <div className="flex items-center gap-2">
                <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full w-[94%] bg-indigo-500 rounded-full" />
                </div>
                <span className="text-sm font-bold text-slate-900">94%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
