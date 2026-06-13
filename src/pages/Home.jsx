import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Cog, Gauge, Shield, Factory } from 'lucide-react'

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-24 md:py-32 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-amber-500/20 text-amber-400 text-xs font-semibold px-3 py-1 rounded-full mb-6 tracking-wider uppercase">
              Precision Engineering
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
              Sheet Metal Folding Machines Built for
              <span className="text-amber-500"> Excellence</span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-lg">
              ARTITECT MACHINERY delivers industry-leading double folding machines and sheet metal folders engineered for precision, durability, and ease of use.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-7 py-3.5 rounded-lg transition-colors text-sm"
              >
                Explore Products
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-7 py-3.5 rounded-lg transition-colors text-sm"
              >
                Get a Quote
              </Link>
            </div>
          </div>
          <div className="hidden md:flex justify-center">
            <div className="w-full aspect-square max-w-md bg-slate-700/50 rounded-2xl flex items-center justify-center border border-slate-600/30">
              <Factory className="w-32 h-32 text-amber-500/30" />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-4">
              Engineered for Precision
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Every ARTITECT machine is built with the highest standards of engineering, ensuring reliable performance for years to come.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Cog,
                title: 'Precision Bending',
                desc: 'Accurate and repeatable folding with tight tolerances for consistent results every time.',
              },
              {
                icon: Gauge,
                title: 'High Efficiency',
                desc: 'Fast cycle times and automated sequences reduce labor and boost productivity.',
              },
              {
                icon: Shield,
                title: 'Built to Last',
                desc: 'Heavy-duty construction with premium components ensures decades of reliable service.',
              },
              {
                icon: Factory,
                title: 'Versatile Solutions',
                desc: 'From compact folders to full double folding machines for any production scale.',
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="bg-slate-50 rounded-xl p-6 hover:shadow-md transition-shadow border border-slate-100"
              >
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Highlight */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">
              Featured Products
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-4">
              Our Folding Machines
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Industry-leading sheet metal folding solutions designed for precision and reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Double Folding Machine',
                desc: 'High-capacity double folding with automated sheet handling for large-scale production environments. Handles up to 4mm steel sheets with precision.',
                specs: ['Max Length: 3200mm', 'Max Thickness: 4mm', 'CNC Controlled'],
              },
              {
                name: 'Sheet Metal Folder',
                desc: 'Versatile sheet metal folding machine with programmable backgauge and angle control. Ideal for job shops and medium production runs.',
                specs: ['Max Length: 2500mm', 'Max Thickness: 3mm', 'Auto Backgauge'],
              },
              {
                name: 'Metal Folding Machine',
                desc: 'Heavy-duty metal folder built for industrial use. Robust frame, precision tooling, and intuitive controls for operator efficiency.',
                specs: ['Max Length: 4000mm', 'Max Thickness: 6mm', 'Hydraulic Clamping'],
              },
            ].map((product) => (
              <div
                key={product.name}
                className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="bg-slate-100 rounded-lg h-48 flex items-center justify-center mb-5">
                  <Factory className="w-16 h-16 text-slate-300" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4 flex-1">
                  {product.desc}
                </p>
                <ul className="space-y-1.5 mb-5">
                  {product.specs.map((spec) => (
                    <li key={spec} className="flex items-center gap-2 text-xs text-slate-500">
                      <CheckCircle className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                      {spec}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/products"
                  className="inline-flex items-center justify-center gap-1.5 text-sm font-semibold text-amber-600 hover:text-amber-700 transition-colors"
                >
                  View Details <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold px-7 py-3.5 rounded-lg transition-colors text-sm"
            >
              View All Products
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Upgrade Your Production Line?
          </h2>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            Contact our team today to discuss your sheet metal folding requirements. We'll help you find the perfect machine for your application.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-sm"
          >
            Get a Free Consultation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
