import { Link } from 'react-router-dom'
import { ChevronRight, Shield, Wrench, Zap, Award } from 'lucide-react'
import Button from '@/components/ui/button'

const features = [
  { icon: Shield, title: 'Built to Last', desc: 'Heavy-duty steel construction engineered for decades of reliable operation in demanding industrial environments.' },
  { icon: Wrench, title: 'Precision Engineering', desc: 'Every machine is calibrated to deliver micron-level accuracy for consistent, repeatable folding results.' },
  { icon: Zap, title: 'User-Friendly Controls', desc: 'Intuitive interfaces and ergonomic designs make setup and operation fast and straightforward for any operator.' },
  { icon: Award, title: 'Industry Certified', desc: 'All machines meet or exceed ISO 9001 standards with comprehensive warranty coverage.' },
]

const productHighlights = [
  { name: 'Double Folding Machine', desc: 'High-speed double folding for complex sheet metal profiles with automatic feed and stacking.' },
  { name: 'Sheet Metal Folder', desc: 'Versatile manual and CNC-controlled folders for bending sheet metal with precision and ease.' },
  { name: 'Metal Folding Machine', desc: 'Heavy-duty industrial folding machines designed for high-volume production environments.' },
]

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(245,158,11,0.15),transparent_70%)]" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(245,158,11,0.08),transparent_70%)]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-28 md:py-36">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-amber-400 mb-6">
              Precision Sheet Metal Machinery
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
              Engineered for
              <span className="block text-amber-400">Precision & Power</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-xl mb-10">
              ARTITECT MACHINERY delivers world-class double folding machines, sheet metal folders, and industrial metal folding equipment. Built for accuracy, designed for operators.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/products">
                <Button variant="accent" size="lg">
                  Explore Products
                  <ChevronRight className="w-5 h-5 ml-1" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="primary" size="lg" className="bg-white/10 hover:bg-white/20 text-white border border-white/20">
                  Request a Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4 block">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">
              Built for the Industrial Edge
            </h2>
            <p className="mt-4 text-text-secondary max-w-2xl mx-auto">
              Every ARTITECT machine is designed and manufactured with one goal: to deliver flawless folding performance day after day.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="p-8 rounded-xl border border-border bg-card hover:shadow-md transition-shadow duration-300">
                <div className="w-12 h-12 bg-amber-50 rounded-lg flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-3">{title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Highlights */}
      <section className="py-20 md:py-28 bg-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4 block">
              Our Machinery
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">
              Precision Folding Solutions
            </h2>
            <p className="mt-4 text-text-secondary max-w-2xl mx-auto">
              From compact workshop folders to fully automated production lines, we have the right machine for your needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {productHighlights.map(({ name, desc }) => (
              <div key={name} className="bg-white rounded-xl border border-border p-8 hover:shadow-md transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-primary mb-3">{name}</h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-6">{desc}</p>
                <Link to="/products" className="inline-flex items-center text-sm font-semibold text-accent hover:text-amber-800 transition-colors">
                  Learn more
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/products">
              <Button variant="outline" size="md">
                View All Products
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            Ready to Upgrade Your Production Line?
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto mb-10">
            Speak with our engineering team to find the perfect folding machine for your application. Custom configurations available.
          </p>
          <Link to="/contact">
            <Button variant="accent" size="lg">
              Get in Touch
              <ChevronRight className="w-5 h-5 ml-1" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}