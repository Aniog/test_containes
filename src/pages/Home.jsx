import { Link } from 'react-router-dom'
import { ArrowRight, Shield, Zap, Wrench, Star, Factory, ChevronRight } from 'lucide-react'

const stats = [
  { value: '25+', label: 'Years Experience' },
  { value: '5,000+', label: 'Machines Delivered' },
  { value: '40+', label: 'Countries Served' },
  { value: '98%', label: 'Customer Satisfaction' },
]

const features = [
  {
    icon: Shield,
    title: 'Built to Last',
    description: 'Heavy-duty steel construction with precision-machined components ensures decades of reliable operation.',
  },
  {
    icon: Zap,
    title: 'Precision Engineering',
    description: 'CNC-controlled bending with repeatable accuracy to within 0.1mm for consistent, high-quality folds.',
  },
  {
    icon: Wrench,
    title: 'Easy Operation',
    description: 'Intuitive control interface with programmable memory settings for quick setup and changeover.',
  },
  {
    icon: Star,
    title: 'Industry Leading Support',
    description: 'Comprehensive warranty, responsive technical support, and readily available spare parts worldwide.',
  },
]

const testimonials = [
  {
    quote: 'The Artitect double folder transformed our production line. The precision and build quality are exceptional.',
    name: 'Michael Torres',
    company: 'Precision Metalworks Inc.',
  },
  {
    quote: "We've been running our Artitect machine for 7 years without a single day of downtime. Truly built to last.",
    name: 'Sarah Chen',
    company: 'Atlas Fabrication',
  },
]

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#14161a] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl">
              <h1 className="font-['Playfair_Display'] text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#e8e4dc] mb-6">
                Precision Sheet Metal{' '}
                <span className="text-[#c8a45c]">Folding Machines</span>
              </h1>
              <p className="text-lg text-[#7a7d85] mb-8 leading-relaxed">
                Engineered for accuracy, built for endurance. From single folders to advanced double folding systems, 
                Artitect Machinery delivers the reliability your production demands.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/products"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium rounded-sm bg-[#c8a45c] text-[#14161a] hover:bg-[#d4b87a] transition-colors duration-200"
                >
                  Explore Products
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium rounded-sm border border-[#2a2d35] text-[#e8e4dc] hover:border-[#c8a45c] hover:text-[#c8a45c] transition-all duration-200"
                >
                  Request a Quote
                </Link>
              </div>
            </div>
            <div className="hidden lg:block relative">
              <div className="w-full h-[400px] bg-[#1e2127] rounded-sm border border-[#2a2d35] flex items-center justify-center">
                <Factory className="w-24 h-24 text-[#c8a45c]/30" />
              </div>
              {/* Decorative gold accent */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-[#c8a45c]/40 rounded-sm" />
            </div>
          </div>
        </div>
        {/* Thin gold accent line at bottom */}
        <div className="h-[2px] bg-[#c8a45c]/30" />
      </section>

      {/* Stats Bar */}
      <section className="bg-[#1e2127] border-b border-[#2a2d35]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#2a2d35]">
            {stats.map((stat) => (
              <div key={stat.label} className="py-8 px-4 text-center">
                <div className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-[#c8a45c] mb-1">
                  {stat.value}
                </div>
                <div className="text-xs uppercase tracking-wider text-[#7a7d85]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 md:py-28 bg-[#f7f5f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.2em] text-[#c8a45c] font-medium mb-3">
              Why Choose Artitect
            </p>
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-[#14161a]">
              Engineered for Excellence
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white border border-[#e0dcd5] rounded-sm p-6 hover:border-[#c8a45c]/40 transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-[#f7f5f0] flex items-center justify-center rounded-sm mb-5">
                  <feature.icon className="w-6 h-6 text-[#c8a45c]" />
                </div>
                <h3 className="font-semibold text-[#14161a] mb-3">{feature.title}</h3>
                <p className="text-sm text-[#7a7d85] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Teaser */}
      <section className="py-20 md:py-28 bg-white border-y border-[#e0dcd5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.2em] text-[#c8a45c] font-medium mb-3">
              Our Machines
            </p>
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-[#14161a]">
              Folding Solutions for Every Need
            </h2>
            <p className="text-[#7a7d85] mt-4 max-w-2xl mx-auto">
              From compact single folders to high-capacity double folding systems, 
              every Artitect machine is built to the same exacting standards.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Double Folding Machine',
                desc: 'High-capacity dual folding for maximum throughput. Ideal for high-volume sheet metal production lines.',
              },
              {
                name: 'Sheet Metal Folder',
                desc: 'Versatile single folding solution with programmable controls. Perfect for custom fabrication shops.',
              },
              {
                name: 'Metal Folder Machine',
                desc: 'Heavy-duty industrial folding for thick gauge metals. Built for the most demanding applications.',
              },
            ].map((product) => (
              <div
                key={product.name}
                className="group border border-[#e0dcd5] rounded-sm p-6 hover:border-[#c8a45c]/50 transition-all duration-300"
              >
                <div className="w-full h-48 bg-[#f7f5f0] rounded-sm mb-5 flex items-center justify-center">
                  <Factory className="w-12 h-12 text-[#c8a45c]/20" />
                </div>
                <h3 className="font-semibold text-[#14161a] mb-2 text-lg">{product.name}</h3>
                <p className="text-sm text-[#7a7d85] leading-relaxed mb-4">
                  {product.desc}
                </p>
                <Link
                  to="/products"
                  className="inline-flex items-center gap-1 text-sm font-medium text-[#c8a45c] hover:text-[#14161a] transition-colors"
                >
                  Learn more
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-sm bg-[#14161a] text-[#e8e4dc] hover:bg-[#1e2127] transition-colors duration-200"
            >
              View All Products
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28 bg-[#14161a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.2em] text-[#c8a45c] font-medium mb-3">
              Trusted Worldwide
            </p>
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-[#e8e4dc]">
              What Our Customers Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((t) => (
              <blockquote
                key={t.name}
                className="bg-[#1e2127] border border-[#2a2d35] rounded-sm p-8"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#c8a45c] text-[#c8a45c]" />
                  ))}
                </div>
                <p className="text-[#e8e4dc]/80 leading-relaxed mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer>
                  <div className="text-sm font-semibold text-[#e8e4dc]">{t.name}</div>
                  <div className="text-xs text-[#7a7d85]">{t.company}</div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-[#f7f5f0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-[#14161a] mb-4">
            Ready to Upgrade Your Production Line?
          </h2>
          <p className="text-[#7a7d85] mb-8 max-w-2xl mx-auto">
            Let our experts help you find the perfect folding solution for your needs. 
            Get in touch for a personalized consultation and quote.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-medium rounded-sm bg-[#c8a45c] text-[#14161a] hover:bg-[#d4b87a] transition-colors duration-200"
          >
            Contact Us Today
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
