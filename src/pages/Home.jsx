import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Shield, Cog, Award, Zap, ChevronRight, CheckCircle, Users, Globe, Clock } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

function HeroSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center bg-navy-900 overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        data-strk-bg-id="hero-bg-8f2a9c"
        data-strk-bg="[hero-subtitle] industrial sheet metal folding machine factory"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/90 to-navy-800/70" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gold-500/10 border border-gold-500/20 rounded-full mb-6">
            <div className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
            <span className="text-gold-300 text-sm font-medium">Precision Engineering Since 1998</span>
          </div>

          <h1 id="hero-title" className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-white leading-tight mb-6">
            The Art of{' '}
            <span className="text-gold-400">Metal Folding</span>
          </h1>

          <p id="hero-subtitle" className="text-lg sm:text-xl text-navy-200 leading-relaxed mb-10 max-w-2xl">
            ARTITECT MACHINERY delivers industry-leading double folding machines and sheet metal folders that combine
            unmatched precision with rugged reliability. Built for craftsmen who demand perfection.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/products"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold-500 hover:bg-gold-600 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg shadow-gold-500/25 hover:shadow-gold-500/40 text-base"
            >
              Explore Our Machines
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/20 hover:border-white/40 text-white font-semibold rounded-lg transition-all duration-200 text-base"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}

function StatsSection() {
  const stats = [
    { value: '25+', label: 'Years of Excellence', icon: Clock },
    { value: '10K+', label: 'Machines Delivered', icon: Cog },
    { value: '50+', label: 'Countries Served', icon: Globe },
    { value: '500+', label: 'Enterprise Clients', icon: Users },
  ]

  return (
    <section className="relative -mt-16 z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white rounded-xl shadow-lg p-6 text-center border border-slate-100"
          >
            <stat.icon className="w-6 h-6 text-gold-500 mx-auto mb-3" />
            <div className="text-3xl font-display font-bold text-navy-900 mb-1">{stat.value}</div>
            <div className="text-sm text-slate-500">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

function ProductHighlights() {
  const containerRef = useRef(null)
  const products = [
    {
      id: 'am-df-3200',
      title: 'AM-DF 3200',
      subtitle: 'Double Folding Machine',
      desc: 'Our flagship double folding machine delivers 3200mm bending length with 0.01mm repeatability. Ideal for high-volume production environments.',
      features: ['3200mm bending length', '0.01mm precision', 'Automated tooling'],
      badge: 'Best Seller',
      titleId: 'ph-title-am-df-3200',
      descId: 'ph-desc-am-df-3200',
    },
    {
      id: 'am-sf-2500',
      title: 'AM-SF 2500',
      subtitle: 'Sheet Metal Folder',
      desc: 'Versatile sheet metal folder designed for medium-scale operations. Handles materials up to 6mm thick with consistent accuracy.',
      features: ['2500mm capacity', '6mm thickness', 'Quick-change tools'],
      badge: 'Popular',
      titleId: 'ph-title-am-sf-2500',
      descId: 'ph-desc-am-sf-2500',
    },
    {
      id: 'am-mf-4000',
      title: 'AM-MF 4000',
      subtitle: 'Metal Folding Machine',
      desc: 'Heavy-duty metal folding machine built for the toughest industrial applications. 4000mm capacity with servo-electric drive technology.',
      features: ['4000mm capacity', 'Servo-electric drive', 'Smart controls'],
      badge: 'Premium',
      titleId: 'ph-title-am-mf-4000',
      descId: 'ph-desc-am-mf-4000',
    },
  ]

  useEffect(() => {
    if (containerRef.current) {
      const frameId = requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current)
      })
      return () => cancelAnimationFrame(frameId)
    }
  }, [])

  return (
    <section className="py-24 bg-white" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gold-600 text-sm font-semibold uppercase tracking-wider">Our Products</span>
          <h2 className="mt-3 text-4xl lg:text-5xl font-display font-bold text-navy-900">
            Machines Built to Last
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
            From compact folders to industrial-grade double folding machines, we offer solutions for every sheet metal fabrication need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 hover:border-gold-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  data-strk-img-id={`ph-img-${product.id}`}
                  data-strk-img={`[${product.descId}] [${product.titleId}] sheet metal folding machine`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-gold-500 text-white text-xs font-semibold rounded-full">
                    {product.badge}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <span className="text-gold-600 text-xs font-semibold uppercase tracking-wider">
                  {product.subtitle}
                </span>
                <h3 id={product.titleId} className="mt-2 text-xl font-display font-bold text-navy-900">
                  {product.title}
                </h3>
                <p id={product.descId} className="mt-3 text-sm text-slate-500 leading-relaxed">
                  {product.desc}
                </p>

                <ul className="mt-4 space-y-2">
                  {product.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-gold-500 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/products"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-800 hover:text-gold-600 transition-colors"
                >
                  View Details
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-navy-800 hover:bg-navy-900 text-white font-semibold rounded-lg transition-colors duration-200"
          >
            View All Products
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

function FeaturesSection() {
  const features = [
    {
      icon: Shield,
      title: 'Built to Endure',
      desc: 'Heavy-gauge steel frames and premium components ensure decades of reliable operation in the most demanding environments.',
    },
    {
      icon: Cog,
      title: 'Precision Engineering',
      desc: 'CNC-calibrated systems deliver repeatable accuracy down to 0.01mm, batch after batch.',
    },
    {
      icon: Award,
      title: 'Industry Certified',
      desc: 'CE, ISO 9001, and UL certified. Every machine meets or exceeds international safety and quality standards.',
    },
    {
      icon: Zap,
      title: 'Fast Setup',
      desc: 'Tool-less changeover and intuitive controls mean less downtime and more productive hours on the floor.',
    },
  ]

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gold-600 text-sm font-semibold uppercase tracking-wider">Why Choose Us</span>
          <h2 className="mt-3 text-4xl lg:text-5xl font-display font-bold text-navy-900">
            Engineering That Performs
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
            Every ARTITECT machine is designed with the operator in mind — combining raw power with intuitive controls.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-xl p-8 border border-slate-100 hover:border-gold-200 hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className="w-14 h-14 bg-gold-50 rounded-xl flex items-center justify-center mx-auto mb-5">
                <feature.icon className="w-7 h-7 text-gold-600" />
              </div>
              <h3 className="text-lg font-display font-bold text-navy-900 mb-3">{feature.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section className="py-24 bg-navy-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-navy-800 to-navy-950 opacity-50" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-gold-400 text-sm font-semibold uppercase tracking-wider">Ready to Get Started?</span>
        <h2 className="mt-3 text-4xl lg:text-5xl font-display font-bold text-white">
          Let's Build Something <span className="text-gold-400">Extraordinary</span>
        </h2>
        <p className="mt-4 text-lg text-navy-300 max-w-2xl mx-auto">
          Whether you need a single sheet metal folder or a complete production line, our team is ready
          to design the perfect solution for your operation.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold-500 hover:bg-gold-600 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg shadow-gold-500/25"
          >
            Request a Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            to="/products"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/20 hover:border-white/40 text-white font-semibold rounded-lg transition-all duration-200"
          >
            Browse Products
          </Link>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ProductHighlights />
      <FeaturesSection />
      <CTASection />
    </>
  )
}
