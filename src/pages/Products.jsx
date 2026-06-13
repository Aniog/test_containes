import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Settings, Gauge, Layers } from 'lucide-react'

const allProducts = [
  {
    id: 'double-folding-machine',
    name: 'Double Folding Machine',
    tagline: 'Dual-direction precision folding',
    description: 'The ARTITECT DFM series delivers simultaneous double-sided folding for complex sheet metal profiles. Perfect for HVAC ductwork, automotive panels, and architectural cladding.',
    specs: ['Folding length: 2m – 6m', 'Material thickness: 0.5mm – 3mm', 'CNC controlled', '±0.1mm accuracy'],
    imageId: 'dfm-detail-j0k1l2',
    titleId: 'dfm-detail-title-j0k1l2',
  },
  {
    id: 'double-folder',
    name: 'Double Folder',
    tagline: 'Compact dual-folding solution',
    description: 'A space-efficient double folding machine designed for small to medium workshops. Combines two folding actions in one seamless operation without repositioning the workpiece.',
    specs: ['Folding length: 1.5m – 4m', 'Material thickness: 0.4mm – 2.5mm', 'Semi-automatic control', 'Quick-change tooling'],
    imageId: 'df-detail-m3n4o5',
    titleId: 'df-detail-title-m3n4o5',
  },
  {
    id: 'sheet-metal-folder',
    name: 'Sheet Metal Folder',
    tagline: 'Versatile precision folding',
    description: 'Our flagship sheet metal folder handles steel, aluminum, stainless steel, and galvanized sheets with ease. The ergonomic design reduces operator fatigue during long production runs.',
    specs: ['Folding length: 2m – 8m', 'Material thickness: 0.3mm – 4mm', 'Hydraulic clamping', 'Digital angle readout'],
    imageId: 'smf-detail-p6q7r8',
    titleId: 'smf-detail-title-p6q7r8',
  },
  {
    id: 'sheet-metal-folding-machine',
    name: 'Sheet Metal Folding Machine',
    tagline: 'Full-featured production workhorse',
    description: 'Advanced CNC folding machine for high-volume production environments. Features automatic tool changing, programmable bend sequences, and real-time angle correction.',
    specs: ['Folding length: 3m – 10m', 'Material thickness: 0.3mm – 5mm', 'Full CNC with touchscreen', 'Automatic angle correction'],
    imageId: 'smfm-detail-s9t0u1',
    titleId: 'smfm-detail-title-s9t0u1',
  },
  {
    id: 'metal-folder',
    name: 'Metal Folder',
    tagline: 'Reliable industrial folding',
    description: 'Built for demanding metal fabrication shops, this metal folder combines raw power with surgical precision. Handles thick gauge materials while maintaining tight bend tolerances.',
    specs: ['Folding length: 2m – 6m', 'Material thickness: 0.5mm – 6mm', 'Heavy-duty steel frame', 'Servo-electric drive'],
    imageId: 'mf-detail-v2w3x4',
    titleId: 'mf-detail-title-v2w3x4',
  },
  {
    id: 'metal-folder-machine',
    name: 'Metal Folder Machine',
    tagline: 'Automated metal folding cell',
    description: 'The pinnacle of our engineering — a fully automated metal folder machine with robotic part handling, intelligent bend sequencing, and lights-out production capability.',
    specs: ['Folding length: 3m – 12m', 'Material thickness: 0.5mm – 8mm', 'Robotic handling ready', 'Industry 4.0 enabled'],
    imageId: 'mfm-detail-y5z6a7',
    titleId: 'mfm-detail-title-y5z6a7',
  },
  {
    id: 'metal-folding-machine',
    name: 'Metal Folding Machine',
    tagline: 'Universal folding solution',
    description: 'A versatile metal folding machine suitable for job shops and mixed production environments. Quick setup times and intuitive programming make it ideal for custom fabrication work.',
    specs: ['Folding length: 2m – 5m', 'Material thickness: 0.4mm – 4mm', 'User-friendly CNC', 'Flexible tooling system'],
    imageId: 'mfm2-detail-b8c9d0',
    titleId: 'mfm2-detail-title-b8c9d0',
  },
]

const featuresList = [
  { icon: Settings, text: 'Precision-ground tooling for clean, burr-free folds' },
  { icon: Gauge, text: 'High-speed cycle times without compromising accuracy' },
  { icon: Layers, text: 'Handles steel, stainless, aluminum, and coated materials' },
]

export default function Products() {
  return (
    <div>
      {/* Header */}
      <section className="bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-80 h-80 bg-accent rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Our Products</h1>
          <p className="mt-4 text-primary-foreground/70 text-lg max-w-2xl">
            A complete range of sheet metal folding machines engineered for precision, reliability, and ease of use.
          </p>
        </div>
      </section>

      {/* Products List */}
      <section className="py-20 md:py-28 bg-card">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="space-y-16 md:space-y-24">
            {allProducts.map((product, idx) => (
              <div
                key={product.id}
                className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-14 items-center`}
              >
                {/* Image */}
                <div className="w-full lg:w-1/2 aspect-[4/3] bg-muted rounded-lg border border-border overflow-hidden">
                  <img
                    alt={product.name}
                    data-strk-img-id={product.imageId}
                    data-strk-img={`[${product.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2">
                  <p className="text-accent font-semibold text-sm uppercase tracking-widest">{product.tagline}</p>
                  <h2 id={product.titleId} className="mt-2 text-2xl md:text-3xl font-bold text-primary tracking-tight">{product.name}</h2>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{product.description}</p>

                  {/* Specs */}
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    {product.specs.map((spec) => (
                      <div key={spec} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                        <span className="text-sm text-primary font-medium">{spec}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/about"
                    className="mt-8 inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-md font-medium hover:bg-accent/90 transition-all"
                  >
                    Request a Quote
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features banner */}
      <section className="bg-muted py-14">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            {featuresList.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <item.icon className="w-6 h-6 text-accent" />
                <span className="text-sm font-medium text-primary">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 md:px-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Need Help Choosing?</h2>
          <p className="mt-4 text-primary-foreground/70 text-lg max-w-2xl mx-auto">
            Our team of experts is ready to help you find the perfect machine for your production requirements.
          </p>
          <Link
            to="/about"
            className="mt-8 inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-md font-semibold hover:bg-accent/90 transition-all"
          >
            Contact Our Team
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
