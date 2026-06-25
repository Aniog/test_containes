import { Factory, Globe, Award, Users, Target } from 'lucide-react'
import { Link } from 'react-router-dom'

const STATS = [
  { icon: Factory, value: '2,000+', label: 'Machines Installed' },
  { icon: Globe, value: '40+', label: 'Countries Served' },
  { icon: Award, value: '25+', label: 'Years of Engineering' },
  { icon: Users, value: '500+', label: 'Happy Clients' },
]

const VALUES = [
  {
    icon: Target,
    title: 'Precision Without Compromise',
    text: 'Every machine leaves our factory calibrated to tolerances most manufacturers consider impossible. We settle for nothing less because our clients demand perfection.',
  },
  {
    icon: Factory,
    title: 'Built by Fabricators, for Fabricators',
    text: 'Our engineering team comes from the shop floor. We understand the daily challenges of metal fabrication and design every machine to solve real-world problems.',
  },
  {
    icon: Globe,
    title: 'Global Reach, Local Support',
    text: 'With distribution partners in over 40 countries and remote diagnostic capabilities, ARTITECT MACHINERY support is always within reach.',
  },
]

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-900 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 rounded-full text-xs font-medium text-amber-400 mb-5">
            <Factory className="w-3.5 h-3.5" />
            About Us
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Engineering the Future of{' '}
            <span className="text-amber-500">Metal Fabrication</span>
          </h1>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl">
            ARTITECT MACHINERY has been at the forefront of sheet metal folding
            technology for over two decades. Our mission: machines that never
            compromise.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat, i) => (
              <div key={i} className="text-center">
                <stat.icon className="w-7 h-7 text-amber-500 mx-auto mb-3" />
                <p className="text-3xl md:text-4xl font-bold text-slate-900">
                  {stat.value}
                </p>
                <p className="text-sm text-slate-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-2xl md:text-4xl font-bold text-slate-900 tracking-tight mb-6">
                A Story of{' '}
                <span className="text-amber-500">Precision & Passion</span>
              </h2>
              <div className="space-y-4 text-slate-500 leading-relaxed">
                <p>
                  ARTITECT MACHINERY was founded on a simple belief: sheet metal
                  folding machinery should be as precise as the products it
                  helps create. What started as a small engineering workshop has
                  grown into a global leader in folding technology.
                </p>
                <p>
                  Our double folding machines, sheet metal folders, and metal
                  folding machines are trusted by aerospace, automotive,
                  construction, and electronics manufacturers worldwide. Every
                  machine is designed, assembled, and tested at our headquarters
                  with rigorous quality control.
                </p>
                <p>
                  We invest heavily in R&D, constantly refining our CNC control
                  systems, hydraulic mechanisms, and folding beam geometry to
                  push the boundaries of what&apos;s possible in metal folding.
                </p>
              </div>
            </div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100">
              <img
                alt="ARTITECT MACHINERY factory floor"
                className="w-full h-full object-cover"
                data-strk-img-id="am-about-factory-v4w5x6"
                data-strk-img={`[about-story-text] [about-story-title]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
              What Drives Us
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {VALUES.map((val, i) => (
              <div
                key={i}
                className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-amber-200 transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-5">
                  <val.icon className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  {val.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {val.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
            Let&apos;s Build Something Great Together
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto mb-8">
            Partner with ARTITECT MACHINERY and experience the difference that
            precision engineering makes.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-slate-900 bg-amber-500 rounded-xl hover:bg-amber-400 transition-all duration-300 shadow-lg shadow-amber-500/20"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  )
}
