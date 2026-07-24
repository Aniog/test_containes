import { Palette, Code2, Rocket, LineChart } from 'lucide-react'

const features = [
  {
    icon: Palette,
    title: 'Brand & Identity',
    desc: 'Logos, color systems, and visual languages that make your brand instantly recognizable.',
  },
  {
    icon: Code2,
    title: 'Web Development',
    desc: 'Fast, accessible, responsive websites built with modern tooling and clean code.',
  },
  {
    icon: Rocket,
    title: 'Product Launches',
    desc: 'From landing pages to full campaigns, we help you ship on time and with impact.',
  },
  {
    icon: LineChart,
    title: 'Growth & Analytics',
    desc: 'Data-informed iteration so every release performs better than the last.',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
            What we do
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            Capabilities that cover the whole journey
          </h2>
          <p className="mt-4 text-base md:text-lg leading-relaxed text-slate-600">
            One team from first sketch to final deploy — no handoffs, no
            surprises, just consistent quality.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition"
            >
              <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-indigo-50 text-indigo-600">
                <feature.icon className="w-5 h-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{feature.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
