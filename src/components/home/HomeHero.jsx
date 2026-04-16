import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function HomeHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Dashed grid background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(to right, #e2e8f0 1px, transparent 1px),
            linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
        }}
      />

      {/* Dashed circle accents */}
      <div className="absolute top-24 right-16 w-64 h-64 rounded-full border border-dashed border-slate-200 opacity-60" />
      <div className="absolute top-32 right-24 w-48 h-48 rounded-full border border-dashed border-slate-300 opacity-40" />
      <div className="absolute bottom-32 left-8 w-32 h-32 rounded-full border border-dashed border-slate-200 opacity-50" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <div>
            <div className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-full px-4 py-1.5 mb-8">
              <Sparkles className="w-3.5 h-3.5 text-slate-500" />
              <span className="text-xs font-medium text-slate-600 tracking-wide">AI-Powered Website Builder</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.08] tracking-tight mb-6">
              Build websites
              <br />
              <span className="text-slate-400">at the speed</span>
              <br />
              of thought.
            </h1>

            <p className="text-lg text-slate-500 leading-relaxed max-w-md mb-10">
              ArcaneAI transforms your ideas into fully functional, beautifully designed websites in minutes — no code, no friction.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/pricing"
                className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-6 py-3.5 rounded-xl font-medium hover:bg-slate-700 transition-colors"
              >
                Start for free
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/product"
                className="inline-flex items-center justify-center gap-2 border border-slate-200 text-slate-700 px-6 py-3.5 rounded-xl font-medium hover:border-slate-400 transition-colors"
              >
                See how it works
              </Link>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-6 mt-12 pt-8 border-t border-dashed border-slate-200">
              {[
                { value: '50K+', label: 'Sites built' },
                { value: '4.9★', label: 'Average rating' },
                { value: '99.9%', label: 'Uptime SLA' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-xl font-bold text-slate-900">{stat.value}</div>
                  <div className="text-xs text-slate-400 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Hero image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-100 shadow-2xl shadow-slate-200/60">
              <img
                src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80&auto=format&fit=crop"
                alt="AI interface"
                className="w-full h-[480px] object-cover"
              />
              {/* Overlay card */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 border border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-900">AI is generating your site…</div>
                    <div className="text-xs text-slate-400 mt-0.5">Analyzing brand, layout, and content</div>
                  </div>
                  <div className="ml-auto flex gap-1">
                    {[0, 1, 2].map((i) => (
                      <div
                        key={i}
                        className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"
                        style={{ animationDelay: `${i * 0.15}s` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Dashed decorative lines */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-t border-r border-dashed border-slate-300 rounded-tr-2xl" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b border-l border-dashed border-slate-300 rounded-bl-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
