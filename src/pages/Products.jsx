import { Link } from 'react-router-dom'
import { ChevronRight, Check, Settings, Gauge, Layers } from 'lucide-react'
import Button from '@/components/ui/button'

const products = [
  {
    id: 'double-folding-machine',
    name: 'Double Folding Machine',
    tagline: 'High-speed automated double folding',
    description: 'Engineered for high-volume production, our double folding machines deliver precise, consistent folds at remarkable speeds. Features automatic material feeding, programmable fold sequences, and integrated stacking. Ideal for HVAC ductwork, architectural panels, and industrial enclosures.',
    specs: ['Max material width: 2,500 mm', 'Material thickness: 0.5 – 2.0 mm', 'Folding speed: Up to 12 folds/min', 'CNC-controlled with touchscreen interface'],
    icon: Layers,
    featured: true,
  },
  {
    id: 'double-folder',
    name: 'Double Folder',
    tagline: 'Compact double folding solution',
    description: 'A versatile double folder designed for workshops and medium-volume production. Combines the power of dual folding beams with a compact footprint. Perfect for sheet metal shops needing reliable double folding without the full-scale automation investment.',
    specs: ['Max material width: 1,600 mm', 'Material thickness: 0.4 – 1.5 mm', 'Folding angle: 0° – 135°', 'Manual or semi-automatic operation'],
    icon: Layers,
  },
  {
    id: 'sheet-metal-folder',
    name: 'Sheet Metal Folder',
    tagline: 'Versatile manual & CNC sheet folding',
    description: 'Our flagship sheet metal folder combines traditional reliability with modern precision. Available in manual and CNC variants, it handles everything from simple bends to complex multi-angle profiles. Ergonomic design reduces operator fatigue during long production runs.',
    specs: ['Max bending length: 3,200 mm', 'Material thickness: 0.4 – 3.0 mm', 'Bending angle accuracy: ±0.3°', 'Heavy-duty clamping beam'],
    icon: Settings,
  },
  {
    id: 'sheet-metal-folding-machine',
    name: 'Sheet Metal Folding Machine',
    tagline: 'Full-featured industrial folding',
    description: 'A complete sheet metal folding solution for demanding industrial applications. Features servo-electric drive for energy efficiency, automatic tool changers, and real-time angle measurement. Designed for 24/7 operation in high-output manufacturing environments.',
    specs: ['Max bending length: 4,000 mm', 'Material thickness: 0.5 – 4.0 mm', 'Servo-electric drive system', 'Automatic crowning & angle correction'],
    icon: Settings,
  },
  {
    id: 'metal-folder',
    name: 'Metal Folder',
    tagline: 'Rugged simplicity for everyday use',
    description: 'A straightforward, durable metal folder built for daily workshop use. Minimal maintenance, maximum reliability. The mechanical clamping system ensures consistent bend quality across the entire working length. Ideal for job shops and maintenance departments.',
    specs: ['Max bending length: 2,000 mm', 'Material thickness: 0.5 – 2.5 mm', 'Manual clamping with quick-release', 'Segmented folding beam'],
    icon: Gauge,
  },
  {
    id: 'metal-folder-machine',
    name: 'Metal Folder Machine',
    tagline: 'Powered precision for metal fabrication',
    description: 'A motorized metal folder machine that bridges the gap between manual folders and full CNC systems. Hydraulic clamping and electrically driven folding beam deliver consistent results with less physical effort. Ideal for medium to high-volume sheet metal fabrication.',
    specs: ['Max bending length: 3,000 mm', 'Material thickness: 0.6 – 3.0 mm', 'Hydraulic clamping system', 'Digital angle display with back gauge'],
    icon: Gauge,
  },
  {
    id: 'metal-folding-machine',
    name: 'Metal Folding Machine',
    tagline: 'The ultimate production workhorse',
    description: 'Our top-of-the-line metal folding machine represents the pinnacle of folding technology. Full CNC control, automatic tool setup, programmable bend sequences, and Industry 4.0 connectivity. Built for manufacturers who demand zero-defect output at maximum throughput.',
    specs: ['Max bending length: 6,000 mm', 'Material thickness: 0.5 – 6.0 mm', 'Full CNC with 3D simulation', 'Industry 4.0 ready with remote diagnostics'],
    icon: Settings,
    featured: true,
  },
]

export default function Products() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400 mb-4 block">
            Our Product Line
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            Precision Folding Machinery
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl">
            Seven distinct machine types engineered for every sheet metal folding application — from compact workshop folders to fully automated production systems.
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-20 md:py-28 bg-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {products.map(({ id, name, tagline, description, specs, icon: Icon, featured }) => (
              <div
                key={id}
                className={`bg-white rounded-xl border border-border overflow-hidden hover:shadow-md transition-shadow duration-300 ${
                  featured ? 'ring-1 ring-amber-200' : ''
                }`}
              >
                <div className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 ${featured ? 'bg-amber-50' : 'bg-slate-100'}`}>
                      <Icon className={`w-6 h-6 ${featured ? 'text-accent' : 'text-primary-light'}`} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h2 className="text-xl font-bold text-primary">{name}</h2>
                        {featured && (
                          <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 bg-amber-100 text-accent rounded-full">
                            Popular
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-text-secondary mt-1">{tagline}</p>
                    </div>
                  </div>

                  <p className="text-sm text-text-secondary leading-relaxed mb-6">{description}</p>

                  <div className="border-t border-border pt-5 mb-6">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-text-light mb-3">
                      Key Specifications
                    </h4>
                    <ul className="space-y-2">
                      {specs.map((spec) => (
                        <li key={spec} className="flex items-start gap-2 text-sm text-slate-600">
                          <Check className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link to="/contact">
                    <Button variant={featured ? 'accent' : 'outline'} size="sm">
                      Request Spec Sheet
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary mb-4">
            Not Sure Which Machine You Need?
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto mb-10">
            Our application engineers will help you select the right machine based on your materials, volumes, and production goals.
          </p>
          <Link to="/contact">
            <Button variant="accent" size="lg">
              Talk to an Engineer
              <ChevronRight className="w-5 h-5 ml-1" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}