import { Factory, Target, Users, Globe } from 'lucide-react'

const stats = [
  { value: '25+', label: 'Years of Engineering' },
  { value: '15,000+', label: 'Machines Installed' },
  { value: '60+', label: 'Countries Served' },
  { value: '98%', label: 'Customer Satisfaction' },
]

const values = [
  {
    icon: Target,
    title: 'Precision First',
    desc: 'Every machine we build is held to exacting tolerances. We believe precision is not a feature — it is the foundation of everything we do.',
  },
  {
    icon: Users,
    title: 'Operator-Centric Design',
    desc: 'We design machines that people love to use. Intuitive controls, ergonomic layouts, and clear documentation make every ARTITECT machine a pleasure to operate.',
  },
  {
    icon: Globe,
    title: 'Global Support',
    desc: 'With service centers and distribution partners across six continents, we provide rapid support, spare parts, and training wherever our customers operate.',
  },
]

export default function About() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400 mb-4 block">
            About Us
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            Engineering the Future of<br />Sheet Metal Fabrication
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl">
            ARTITECT MACHINERY has been at the forefront of sheet metal folding technology since our founding. We combine industrial heritage with modern innovation.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-16 h-16 bg-amber-50 rounded-xl flex items-center justify-center mb-6">
                <Factory className="w-8 h-8 text-accent" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-primary mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>
                  ARTITECT MACHINERY was founded with a clear vision: to build the most precise, reliable, and user-friendly sheet metal folding machines in the world. What began as a small engineering workshop has grown into a global leader in folding technology.
                </p>
                <p>
                  Our engineering team brings together decades of experience in mechanical design, control systems, and industrial manufacturing. We invest heavily in R&D, continuously refining our machines to meet the evolving needs of modern fabrication shops.
                </p>
                <p>
                  Today, ARTITECT machines are trusted by manufacturers across automotive, aerospace, HVAC, architectural metalwork, and general fabrication industries. From small job shops to multinational production lines, our machines deliver consistent, high-quality results.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {stats.map(({ value, label }) => (
                <div key={label} className="bg-bg rounded-xl p-8 text-center border border-border">
                  <div className="text-3xl font-extrabold text-accent mb-1">{value}</div>
                  <div className="text-sm text-text-secondary">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4 block">
              What Drives Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">
              Our Values
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-xl border border-border p-8">
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-3">{title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}