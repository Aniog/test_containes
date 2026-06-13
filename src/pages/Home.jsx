import { Link } from 'react-router-dom'
import { ArrowRight, Shield, Cog, Award, Zap, ChevronRight, Star } from 'lucide-react'
import { useRef, useEffect } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const featuredProducts = [
  {
    id: 'double-folding',
    title: 'Double Folding Machine',
    desc: 'High-capacity double folding system for precision metal fabrication. Handles complex bend sequences with superior accuracy.',
    titleId: 'fp-double-folding-title',
    descId: 'fp-double-folding-desc',
    imgId: 'fp-double-folding-img',
    badge: 'Best Seller',
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    desc: 'Versatile sheet metal folder engineered for consistent performance across a wide range of materials and thicknesses.',
    titleId: 'fp-sheet-metal-folder-title',
    descId: 'fp-sheet-metal-folder-desc',
    imgId: 'fp-sheet-metal-folder-img',
    badge: 'Popular',
  },
  {
    id: 'metal-folding',
    title: 'Metal Folding Machine',
    desc: 'Industrial-grade metal folding machine built for heavy-duty operations. Unmatched durability and bend quality.',
    titleId: 'fp-metal-folding-title',
    descId: 'fp-metal-folding-desc',
    imgId: 'fp-metal-folding-img',
    badge: 'Premium',
  },
]

const stats = [
  { value: '30+', label: 'Years of Excellence' },
  { value: '12K+', label: 'Machines Installed' },
  { value: '45+', label: 'Countries Served' },
  { value: '99.7%', label: 'Uptime Rating' },
]

const advantages = [
  {
    icon: Shield,
    title: 'Built to Last',
    desc: 'Every machine is constructed with premium-grade steel and undergoes rigorous quality testing before delivery.',
  },
  {
    icon: Cog,
    title: 'Precision Engineering',
    desc: 'Advanced CNC controls and servo-driven systems ensure repeatable accuracy to within 0.01mm tolerance.',
  },
  {
    icon: Award,
    title: 'Industry Certified',
    desc: 'All products meet ISO 9001:2015, CE, and UL standards for safety and manufacturing excellence.',
  },
  {
    icon: Zap,
    title: 'Rapid Deployment',
    desc: 'From order to installation, our streamlined process gets your production line running in under 6 weeks.',
  },
]

const testimonials = [
  {
    quote: "ARTITECT's double folder transformed our production line. We increased output by 40% while maintaining tighter tolerances than ever before.",
    name: 'James Whitfield',
    role: 'Plant Manager, Apex Fabrication',
  },
  {
    quote: "The reliability of their sheet metal folding machines is outstanding. In three years of operation, we haven't had a single unplanned downtime event.",
    name: 'Maria Chen',
    role: 'Operations Director, TechSheet Industries',
  },
  {
    quote: "From the initial consultation to installation and training, the ARTITECT team delivered a world-class experience. Highly recommended.",
    name: 'Robert Andersson',
    role: 'CEO, Nordic Metals AB',
  },
]

export default function Home() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          data-strk-bg-id="hero-bg-6a3f2e"
          data-strk-bg="[hero-title] industrial sheet metal folding machine"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/80 to-brand-dark/60" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-0">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-brand-gold/10 border border-brand-gold/30 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-brand-gold rounded-full animate-pulse" />
              <span className="text-brand-gold text-xs font-body font-medium uppercase tracking-widest">
                Trusted Worldwide Since 1994
              </span>
            </div>

            <h1 id="hero-title" className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6">
              Precision{' '}
              <span className="text-brand-gold italic">Sheet Metal</span>{' '}
              Folding Machines
            </h1>

            <p className="font-body text-lg sm:text-xl text-white/70 leading-relaxed mb-10 max-w-xl">
              Engineered for performance. Built for reliability. ARTITECT MACHINERY delivers 
              industrial-grade double folding machines that set the standard for precision metal fabrication.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 bg-brand-gold hover:bg-brand-gold-hover text-brand-dark px-8 py-4 rounded-lg font-body font-semibold text-sm uppercase tracking-wider transition-all duration-300 hover:shadow-xl hover:shadow-brand-gold/20 group"
              >
                Explore Products
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-lg font-body font-semibold text-sm uppercase tracking-wider transition-all duration-300"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden lg:block">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center pt-2">
            <div className="w-1.5 h-3 bg-brand-gold rounded-full" />
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-brand-navy py-8 lg:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="font-display text-3xl lg:text-4xl font-bold text-brand-gold mb-1">
                  {stat.value}
                </div>
                <div className="font-body text-sm text-white/60 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-brand-cream py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 lg:mb-20">
            <span className="font-body text-xs uppercase tracking-[0.3em] text-brand-gold font-semibold">
              Our Machines
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark mt-4 mb-6">
              Featured Products
            </h2>
            <p className="font-body text-lg text-gray-500 max-w-2xl mx-auto">
              Discover our range of precision-engineered sheet metal folding machines, designed 
              to meet the demands of modern fabrication shops.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {featuredProducts.map((product) => (
              <Link
                key={product.id}
                to="/products"
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-brand-warm-gray"
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    data-strk-img-id={product.imgId}
                    data-strk-img={`[${product.descId}] [${product.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-brand-gold text-brand-dark px-3 py-1 rounded-full text-xs font-body font-semibold uppercase tracking-wider">
                      {product.badge}
                    </span>
                  </div>
                </div>
                <div className="p-6 lg:p-8">
                  <h3 id={product.titleId} className="font-display text-xl font-bold text-brand-dark mb-3 group-hover:text-brand-gold transition-colors">
                    {product.title}
                  </h3>
                  <p id={product.descId} className="font-body text-sm text-gray-500 leading-relaxed mb-4">
                    {product.desc}
                  </p>
                  <span className="inline-flex items-center gap-1 text-brand-gold font-body font-semibold text-sm group-hover:gap-2 transition-all">
                    Learn More
                    <ChevronRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-brand-dark hover:bg-brand-navy text-white px-8 py-4 rounded-lg font-body font-semibold text-sm uppercase tracking-wider transition-all duration-300 group"
            >
              View All Products
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why ARTITECT */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="font-body text-xs uppercase tracking-[0.3em] text-brand-gold font-semibold">
                Why Choose Us
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark mt-4 mb-6 leading-tight">
                Engineering Excellence,{' '}
                <span className="text-brand-gold italic">Delivered</span>
              </h2>
              <p className="font-body text-gray-500 leading-relaxed mb-8">
                For over three decades, ARTITECT MACHINERY has been at the forefront of sheet metal 
                folding technology. Our machines are trusted by fabrication shops, aerospace manufacturers, 
                and construction firms across 45+ countries.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-brand-gold font-body font-semibold text-sm uppercase tracking-wider hover:gap-3 transition-all group"
              >
                Our Story
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {advantages.map((item, i) => {
                const Icon = item.icon
                return (
                  <div key={i} className="bg-brand-cream/60 border border-brand-warm-gray rounded-xl p-6 hover:border-brand-gold/30 transition-colors">
                    <div className="w-10 h-10 bg-brand-gold/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-brand-gold" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-brand-dark mb-2">
                      {item.title}
                    </h3>
                    <p className="font-body text-sm text-gray-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-brand-navy py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="font-body text-xs uppercase tracking-[0.3em] text-brand-gold font-semibold">
              Testimonials
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 mb-6">
              Trusted by Industry Leaders
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-brand-dark/50 border border-white/10 rounded-2xl p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-brand-gold fill-brand-gold" />
                  ))}
                </div>
                <p className="font-body text-white/80 text-sm leading-relaxed mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="font-display font-bold text-white text-sm">{t.name}</p>
                  <p className="font-body text-white/50 text-xs mt-0.5">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-cream py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark mb-6">
            Ready to Upgrade Your{' '}
            <span className="text-brand-gold italic">Production Line</span>?
          </h2>
          <p className="font-body text-lg text-gray-500 mb-10 max-w-xl mx-auto">
            Get in touch with our engineering team to discuss the perfect sheet metal 
            folding solution for your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-brand-gold hover:bg-brand-gold-hover text-brand-dark px-8 py-4 rounded-lg font-body font-semibold text-sm uppercase tracking-wider transition-all duration-300 hover:shadow-xl hover:shadow-brand-gold/20 group"
            >
              Contact Us Today
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:+18005551234"
              className="inline-flex items-center justify-center gap-2 border-2 border-brand-dark/20 hover:border-brand-dark text-brand-dark px-8 py-4 rounded-lg font-body font-semibold text-sm uppercase tracking-wider transition-all duration-300"
            >
              Call +1 (800) 555-1234
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
