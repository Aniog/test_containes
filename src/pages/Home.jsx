import { Link } from 'react-router-dom'
import { Shield, Cog, Award, Wrench, ArrowRight, CheckCircle } from 'lucide-react'

const products = [
  {
    id: 'double-folding-machine',
    name: 'Double Folding Machine',
    description: 'High-precision double folding for complex sheet metal profiles. Ideal for HVAC, automotive, and architectural applications.',
    imageId: 'dfm-hero-a1b2c3',
    titleId: 'dfm-title-a1b2c3',
  },
  {
    id: 'sheet-metal-folder',
    name: 'Sheet Metal Folder',
    description: 'Versatile sheet metal folding with industry-leading accuracy. Handles steel, aluminum, and stainless steel up to 3mm thickness.',
    imageId: 'smf-hero-d4e5f6',
    titleId: 'smf-title-d4e5f6',
  },
  {
    id: 'metal-folding-machine',
    name: 'Metal Folding Machine',
    description: 'Heavy-duty folding for industrial fabrication. Robust construction with intelligent CNC control for repeatable precision.',
    imageId: 'mfm-hero-g7h8i9',
    titleId: 'mfm-title-g7h8i9',
  },
]

const features = [
  { icon: Cog, title: 'Precision Engineering', description: 'Swiss-grade accuracy with tolerances as tight as ±0.1mm, ensuring every fold meets exact specifications.' },
  { icon: Shield, title: 'Built to Last', description: 'Industrial-grade steel frames and hardened tooling designed for decades of continuous operation.' },
  { icon: Wrench, title: 'Easy Operation', description: 'Intuitive CNC interfaces and ergonomic controls make complex folding sequences simple and efficient.' },
  { icon: Award, title: 'Certified Quality', description: 'ISO 9001 certified manufacturing with CE compliance, backed by comprehensive warranty coverage.' },
]

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
              Premium Sheet Metal<br />
              <span className="text-accent">Folding Machinery</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-primary-foreground/80 leading-relaxed max-w-2xl">
              Precision-engineered double folding machines, sheet metal folders, and metal folding machines built for demanding fabrication environments.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-md font-semibold hover:bg-accent/90 transition-all"
              >
                Explore Products
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 border border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-md font-semibold hover:bg-primary-foreground/10 transition-all"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted badges */}
      <section className="bg-muted border-b border-border py-10">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <p className="text-center text-sm text-muted-foreground uppercase tracking-widest mb-6">Trusted by Industry Leaders</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-50">
            {['SHEETMETAL PRO', 'FABRITECH', 'STEELCRAFT', 'METALFORM', 'PRECISION INC'].map((name) => (
              <span key={name} className="text-sm font-bold text-primary tracking-widest">{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Products Overview */}
      <section className="py-20 md:py-28 bg-card">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">Our Machinery</h2>
            <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore our range of precision sheet metal folding solutions, each engineered for exceptional performance and reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-muted rounded-lg border border-border overflow-hidden hover:shadow-md transition-all group"
              >
                <div className="aspect-[4/3] bg-primary/5 relative overflow-hidden">
                  <img
                    alt={product.name}
                    data-strk-img-id={product.imageId}
                    data-strk-img={`[${product.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 id={product.titleId} className="text-lg font-bold text-primary">{product.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{product.description}</p>
                  <Link
                    to="/products"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent hover:text-accent/80 transition-colors"
                  >
                    Learn more <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-md font-medium hover:bg-primary/90 transition-all"
            >
              View All Products
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 md:py-28 bg-muted">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">Why Choose Our Machines</h2>
            <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
              Every machine we build embodies our commitment to quality, precision, and durability.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary text-accent mb-5">
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-primary">{feature.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/2 w-80 h-80 bg-accent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 md:px-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Ready to Upgrade Your Fabrication?</h2>
          <p className="mt-4 text-primary-foreground/70 text-lg max-w-2xl mx-auto">
            Contact us today to discuss your sheet metal folding requirements and discover the right machine for your workshop.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-md font-semibold hover:bg-accent/90 transition-all"
            >
              Request a Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 border border-primary-foreground/30 px-8 py-4 rounded-md font-semibold hover:bg-primary-foreground/10 transition-all"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
