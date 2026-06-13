import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Shield, Award, Settings, Clock, ChevronRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import ProductCard from '@/components/home/ProductCard'
import FeatureCard from '@/components/home/FeatureCard'

const products = [
  {
    id: 'double-folding-machine',
    title: 'Double Folding Machine',
    description: 'High-precision dual-action folding for complex metal formations with consistent results.',
    slug: 'double-folding-machine',
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    description: 'Professional-grade sheet metal folding with adjustable angles and thickness capacity.',
    slug: 'sheet-metal-folder',
  },
  {
    id: 'metal-folding-machine',
    title: 'Metal Folding Machine',
    description: 'Heavy-duty metal folding solution for industrial applications and large-scale production.',
    slug: 'metal-folding-machine',
  },
]

const features = [
  {
    icon: Shield,
    title: 'Built to Last',
    description: 'Constructed with premium materials and rigorous quality control for decades of reliable service.',
  },
  {
    icon: Award,
    title: 'Precision Engineering',
    description: 'Micrometer-accurate folding capabilities ensure consistent results on every operation.',
  },
  {
    icon: Settings,
    title: 'Easy Operation',
    description: 'Intuitive controls and ergonomic design reduce training time and operator fatigue.',
  },
  {
    icon: Clock,
    title: 'Fast Delivery',
    description: 'Streamlined manufacturing and logistics get your equipment to you when you need it.',
  },
]

export default function Home() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div
          className="absolute inset-0"
          data-strk-bg-id="hero-bg-a1b2c3"
          data-strk-bg="[hero-title] [hero-subtitle]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/40" />
        
        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-32">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-amber-500/20 text-amber-400 text-sm font-semibold rounded-full mb-6">
              Industry-Leading Metal Folding Solutions
            </span>
            <h1
              id="hero-title"
              className="text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight leading-tight mb-6"
            >
              Precision Metal
              <span className="text-amber-500"> Folding</span>
              <br />Machinery
            </h1>
            <p
              id="hero-subtitle"
              className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed"
            >
              Engineered for excellence. ARTITECT MACHINERY delivers world-class 
              double folding machines, sheet metal folders, and metal folding solutions 
              for professionals who demand precision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/products" className="btn-primary text-lg">
                Explore Products
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link to="/contact" className="btn-secondary text-lg">
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-slate-900 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '25+', label: 'Years Experience' },
              { value: '5000+', label: 'Machines Delivered' },
              { value: '50+', label: 'Countries Served' },
              { value: '99%', label: 'Client Satisfaction' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-bold text-amber-500 mb-1">
                  {stat.value}
                </div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">
              Our Products
            </span>
            <h2 id="products-title" className="section-title mt-3 mb-4">
              Featured Machinery
            </h2>
            <p className="section-subtitle">
              Discover our range of precision-engineered metal folding equipment, 
              designed for professionals who demand excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/products" className="btn-outline">
              View All Products
              <ChevronRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">
              Why Choose Us
            </span>
            <h2 className="section-title mt-3 mb-4">
              The ARTITECT Advantage
            </h2>
            <p className="section-subtitle">
              We combine decades of engineering expertise with modern manufacturing 
              to deliver machinery that exceeds expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <FeatureCard key={feature.title} feature={feature} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-slate-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6">
            Ready to Upgrade Your
            <span className="text-amber-500"> Production Line?</span>
          </h2>
          <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
            Contact our team of experts to discuss your metal folding requirements. 
            We'll help you find the perfect solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary text-lg">
              Get in Touch
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link to="/about" className="btn-secondary text-lg">
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
