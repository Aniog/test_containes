import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Shield, Cog, Award, HeadphonesIcon } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const features = [
  {
    icon: Cog,
    title: 'Advanced Engineering',
    desc: 'State-of-the-art folding technology engineered for precision and reliability in every operation.',
  },
  {
    icon: Shield,
    title: 'Built to Last',
    desc: 'Heavy-duty construction using premium materials ensures decades of dependable service.',
  },
  {
    icon: Award,
    title: 'Industry Certified',
    desc: 'All machines meet international quality and safety standards for industrial use.',
  },
  {
    icon: HeadphonesIcon,
    title: '24/7 Support',
    desc: 'Dedicated technical support and service teams ready to assist you around the clock.',
  },
]

const featuredProducts = [
  {
    title: 'Double Folding Machine',
    desc: 'High-speed dual-action folding for maximum productivity in large-scale operations.',
  },
  {
    title: 'Sheet Metal Folder',
    desc: 'Versatile precision folding for sheets of various thicknesses and dimensions.',
  },
  {
    title: 'Metal Folding Machine',
    desc: 'Robust hydraulic folding solution for heavy-gauge industrial metal work.',
  },
]

export default function Home() {
  const heroRef = useRef(null)
  const featuresRef = useRef(null)

  useEffect(() => {
    if (heroRef.current) {
      return ImageHelper.loadImages(strkImgConfig, heroRef.current)
    }
  }, [])

  useEffect(() => {
    if (featuresRef.current) {
      return ImageHelper.loadImages(strkImgConfig, featuresRef.current)
    }
  }, [])

  return (
    <div>
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 bg-brand-navy"
          data-strk-bg-id="hero-bg-8f2a9c"
          data-strk-bg="[hero-title] [hero-subtitle]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/90 via-brand-navy/70 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="max-w-2xl animate-fade-in">
            <span className="inline-block text-brand-gold text-sm uppercase tracking-[0.3em] font-medium mb-6">
              Precision Metal Folding Solutions
            </span>
            <h1
              id="hero-title"
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
            >
              Engineering the Future of Metal Folding
            </h1>
            <p
              id="hero-subtitle"
              className="text-lg md:text-xl text-white/80 leading-relaxed mb-10 max-w-xl"
            >
              From double folding machines to precision sheet metal folders — ARTITECT MACHINERY delivers industrial-grade equipment trusted by manufacturers worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand-gold text-white font-medium uppercase tracking-wider text-sm hover:bg-brand-gold-dark transition-colors duration-200"
              >
                Explore Products
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-white/30 text-white font-medium uppercase tracking-wider text-sm hover:bg-white/10 transition-colors duration-200"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-20 md:py-28 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-brand-gold text-xs uppercase tracking-[0.3em] font-medium mb-3">
              Why Choose Us
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-navy">
              Built for Precision. Designed for Performance.
            </h2>
            <p className="mt-4 text-brand-slate max-w-2xl mx-auto">
              Every machine we build reflects decades of engineering expertise and a commitment to quality that sets industry standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="bg-white p-8 border border-brand-cream-dark hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-brand-navy flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-brand-gold" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-brand-navy mb-3">
                  {feature.title}
                </h3>
                <p className="text-brand-slate text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-brand-gold text-xs uppercase tracking-[0.3em] font-medium mb-3">
                Our Product Line
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-navy mb-6">
                Precision Metal Folding Machines for Every Application
              </h2>
              <p className="text-brand-slate mb-8 leading-relaxed">
                From compact sheet metal folders to industrial double folding machines, our range covers every metal fabrication need. Each machine is engineered for accuracy, durability, and ease of operation.
              </p>

              <div className="space-y-6">
                {featuredProducts.map((product) => (
                  <div key={product.title} className="flex gap-4 items-start">
                    <div className="w-1 h-full min-h-[3rem] bg-brand-gold flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-serif text-lg font-semibold text-brand-navy">
                        {product.title}
                      </h3>
                      <p className="text-brand-slate text-sm mt-1">{product.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                to="/products"
                className="inline-flex items-center gap-2 mt-10 px-8 py-3.5 bg-brand-navy text-white font-medium uppercase tracking-wider text-sm hover:bg-brand-navy-light transition-colors duration-200"
              >
                View All Products
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] bg-brand-cream-dark overflow-hidden">
                <img
                  alt="Industrial metal folding machine in operation"
                  data-strk-img-id="featured-products-7b3e1f"
                  data-strk-img="[hero-title] [hero-subtitle]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-brand-gold p-6 md:p-8 max-w-[200px]">
                <p className="text-3xl md:text-4xl font-bold text-white font-serif">15+</p>
                <p className="text-white/80 text-sm mt-1">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-brand-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-brand-gold text-xs uppercase tracking-[0.3em] font-medium mb-3">
            Get Started
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Upgrade Your Production Line?
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-10">
            Contact our team today for a personalized consultation and discover how ARTITECT MACHINERY can transform your metal folding operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand-gold text-white font-medium uppercase tracking-wider text-sm hover:bg-brand-gold-dark transition-colors duration-200"
            >
              Contact Us
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-white/30 text-white font-medium uppercase tracking-wider text-sm hover:bg-white/10 transition-colors duration-200"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}