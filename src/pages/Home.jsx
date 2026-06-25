import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, Shield, Gauge, Wrench, Award, Users, Globe } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Built to Last',
    description: 'Heavy-duty construction with premium materials ensures decades of reliable operation.',
  },
  {
    icon: Gauge,
    title: 'Precision Control',
    description: 'Advanced digital controls deliver consistent, accurate folds every single time.',
  },
  {
    icon: Wrench,
    title: 'Easy Operation',
    description: 'Intuitive interfaces and ergonomic design reduce training time and boost productivity.',
  },
  {
    icon: Award,
    title: 'Industry Certified',
    description: 'All machines meet international safety and quality standards for peace of mind.',
  },
]

const stats = [
  { icon: Users, value: '2,500+', label: 'Satisfied Clients' },
  { icon: Globe, value: '45+', label: 'Countries Served' },
  { icon: Award, value: '30+', label: 'Years Experience' },
  { icon: Shield, value: '99.8%', label: 'Uptime Rate' },
]

export default function Home() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative bg-primary overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          data-strk-bg-id="hero-bg-am7x9k"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/70" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-36">
          <div className="max-w-2xl">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-4">
              Precision Engineering Since 1994
            </p>
            <h1 id="hero-title" className="text-4xl lg:text-6xl font-bold text-text-light tracking-tight leading-tight mb-6">
              Sheet Metal Folding Machines Built for Excellence
            </h1>
            <p id="hero-subtitle" className="text-lg text-text-light/80 leading-relaxed mb-10 max-w-xl">
              Industry-leading double folding machines engineered for precision, durability, and effortless operation. Transform your metalworking capabilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 bg-accent text-white px-7 py-3.5 rounded-lg font-semibold hover:bg-accent-light transition-colors"
              >
                Explore Products <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-text-light/30 text-text-light px-7 py-3.5 rounded-lg font-semibold hover:border-accent hover:text-accent transition-colors"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Why Choose Us</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-text tracking-tight mb-4">
              Engineering Excellence in Every Machine
            </h2>
            <p className="text-text-muted leading-relaxed">
              Our double folding machines combine cutting-edge technology with robust construction to deliver unmatched performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-bg p-6 lg:p-8 rounded-xl border border-border hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-text mb-2">{feature.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-20 lg:py-28 bg-bg-alt">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Featured Product</p>
              <h2 id="showcase-title" className="text-3xl lg:text-4xl font-bold text-text tracking-tight mb-6">
                Double Folding Machine Pro Series
              </h2>
              <p id="showcase-desc" className="text-text-muted leading-relaxed mb-8">
                Our flagship double folder delivers exceptional precision with automated fold sequencing, digital angle readout, and rapid setup changes. Designed for high-volume production environments where accuracy and speed are paramount.
              </p>
              <ul className="space-y-3 mb-8">
                {['Up to 3200mm working length', 'Digital angle control ±0.1°', 'Automated fold sequencing', 'Quick-change tooling system'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-text">
                    <div className="w-5 h-5 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                    </div>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
              >
                View All Products <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative">
              <div className="bg-surface rounded-2xl overflow-hidden shadow-lg border border-border">
                <img
                  data-strk-img-id="showcase-product-3f8a2b"
                  data-strk-img="[showcase-desc] [showcase-title]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="Double Folding Machine Pro Series"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="w-8 h-8 text-accent mx-auto mb-3" />
                <p className="text-3xl lg:text-4xl font-bold text-text-light mb-1">{stat.value}</p>
                <p className="text-sm text-text-light/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-text tracking-tight mb-4">
            Ready to Upgrade Your Production?
          </h2>
          <p className="text-text-muted max-w-xl mx-auto mb-10 leading-relaxed">
            Get in touch with our team to discuss your requirements and find the perfect folding machine for your workshop.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-accent text-white px-7 py-3.5 rounded-lg font-semibold hover:bg-accent-light transition-colors"
            >
              Contact Our Team <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-7 py-3.5 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
