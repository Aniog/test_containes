import { Factory, Users, Globe, TrendingUp } from 'lucide-react'

const milestones = [
  { year: '2008', title: 'Founded', desc: 'ARTITECT MACHINERY was established with a mission to engineer reliable sheet metal equipment.' },
  { year: '2012', title: 'First CNC Line', desc: 'Launched our first CNC-controlled folding machine, setting a new benchmark in programmable accuracy.' },
  { year: '2016', title: 'Global Expansion', desc: 'Expanded distribution to Europe, Asia, and South America with certified service partners.' },
  { year: '2020', title: 'Smart Diagnostics', desc: 'Introduced remote diagnostics and IoT-ready machine monitoring across our product range.' },
  { year: '2024', title: 'Next Generation', desc: 'Released our next-gen servo-electric folding line with energy-efficient motion control.' },
]

const stats = [
  { icon: Factory, value: '16+', label: 'Years in Operation' },
  { icon: Users, value: '2,400+', label: 'Machines Installed' },
  { icon: Globe, value: '35+', label: 'Countries Served' },
  { icon: TrendingUp, value: '98%', label: 'Client Retention' },
]

export default function About() {
  return (
    <div>
      <section className="bg-primary py-20 md:py-28">
        <div className="container-main">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
            About Us
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground-inverse mb-4">
            Engineering Excellence Since 2008
          </h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
            ARTITECT MACHINERY designs and manufactures precision folding equipment
            for sheet metal fabricators worldwide. We combine rigorous engineering
            with a deep understanding of modern manufacturing demands.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container-main">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-16 md:mb-24">
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-surface rounded-xl border border-border p-6 md:p-8 text-center"
              >
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <s.icon className="w-5 h-5 text-accent" />
                </div>
                <p className="text-2xl md:text-3xl font-extrabold text-foreground mb-1">
                  {s.value}
                </p>
                <p className="text-muted text-sm">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted leading-relaxed">
                <p>
                  ARTITECT MACHINERY began as a small engineering workshop focused on
                  solving one problem: making sheet metal folding more accurate and
                  repeatable. Over the years, that focus has grown into a full portfolio
                  of industrial folding machines trusted by fabricators in more than
                  35 countries.
                </p>
                <p>
                  We design every machine with the operator in mind — intuitive controls,
                  robust safety systems, and maintenance-friendly layouts that keep
                  production moving. Our R&D team continuously refines drive systems,
                  backgauge mechanics, and control software to deliver measurable
                  improvements in speed, accuracy, and energy efficiency.
                </p>
                <p>
                  Today, ARTITECT MACHINERY stands for precision, durability, and
                  responsive customer support. Whether you run a small job shop or a
                  high-volume production line, we have a folding solution built for you.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">Company Timeline</h3>
              <div className="relative border-l-2 border-border pl-6 space-y-8">
                {milestones.map((m) => (
                  <div key={m.year} className="relative">
                    <span className="absolute -left-[31px] top-1 w-3 h-3 bg-accent rounded-full border-2 border-white" />
                    <p className="text-accent text-sm font-semibold mb-1">{m.year}</p>
                    <h4 className="text-foreground font-bold mb-1">{m.title}</h4>
                    <p className="text-muted text-sm leading-relaxed">{m.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
