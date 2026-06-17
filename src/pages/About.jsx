import { Link } from 'react-router-dom'
import { ArrowRight, Target, Eye, Heart, Users } from 'lucide-react'

const values = [
  {
    icon: Target,
    title: 'Precision',
    desc: 'Every component is machined to exacting tolerances. We believe precision is not a feature — it is the foundation.',
  },
  {
    icon: Eye,
    title: 'Innovation',
    desc: 'We continually refine our designs, incorporating the latest in CNC control systems and hydraulic technology.',
  },
  {
    icon: Heart,
    title: 'Craftsmanship',
    desc: 'Our machines are built by skilled technicians who take pride in their work. Quality is visible in every weld and every finish.',
  },
  {
    icon: Users,
    title: 'Partnership',
    desc: 'We work closely with our customers to understand their needs and provide ongoing support throughout the machine lifecycle.',
  },
]

export default function About() {
  return (
    <div>
      {/* Header */}
      <section className="bg-brand-charcoal py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            About <span className="text-brand-gold">ARTITECT MACHINERY</span>
          </h1>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl">
            A legacy of precision engineering and industrial craftsmanship spanning over two decades.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              Our Story
            </h2>
            <div className="mt-6 space-y-5 text-slate-600 leading-relaxed">
              <p>
                Founded in 1998, ARTITECT MACHINERY began with a simple conviction: that sheet metal fabrication shops deserved better machinery. Our founder, a mechanical engineer with decades of hands-on fabrication experience, saw the gap between the precision that modern manufacturing demanded and the machines available on the market.
              </p>
              <p>
                Starting from a small workshop in Chicago, we designed and built our first double folding machine — a machine that quickly gained a reputation for its exceptional build quality and accuracy. Word spread through the fabrication community, and ARTITECT MACHINERY grew organically, driven by word-of-mouth recommendations from satisfied customers.
              </p>
              <p>
                Today, we operate from a state-of-the-art manufacturing facility and serve customers across more than 60 countries. Our product line has expanded to include a full range of sheet metal folders, double folders, and metal folding machines — but our philosophy remains unchanged: build machines that we would be proud to use in our own shop.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-slate-50 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              What We Stand For
            </h2>
            <p className="mt-4 text-slate-600">
              Four principles guide everything we do at ARTITECT MACHINERY.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 text-center"
              >
                <div className="w-12 h-12 rounded-lg bg-amber-50 flex items-center justify-center mx-auto mb-5">
                  <value.icon className="w-6 h-6 text-brand-gold" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{value.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            Let's Build Something Together
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-xl mx-auto">
            Whether you need a single machine or a complete fabrication line, we're here to help.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg text-sm font-semibold text-white bg-brand-gold hover:bg-brand-gold-light transition-colors"
            >
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg text-sm font-semibold text-slate-700 border border-slate-300 hover:border-brand-gold hover:text-brand-gold transition-colors"
            >
              View Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
