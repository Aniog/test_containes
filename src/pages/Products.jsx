import { Link } from 'react-router-dom'
import { ArrowRight, Check, Factory } from 'lucide-react'

const products = [
  {
    id: 'double-folding-machine',
    name: 'Double Folding Machine',
    tagline: 'Maximum throughput for high-volume production',
    description: 'Our flagship double folding machine delivers simultaneous dual-direction folding for unmatched efficiency. Designed for continuous operation in demanding industrial environments, it handles sheet metal up to 4mm thickness with precision repeatability.',
    specs: [
      'Maximum sheet width: 3200mm',
      'Material thickness: 0.5mm – 4.0mm (mild steel)',
      'Folding angle range: 0° – 135°',
      'CNC-controlled dual beam system',
      'Programmable memory: 200+ programs',
      'Hydraulic clamping with auto-pressure adjustment',
    ],
    featured: true,
  },
  {
    id: 'sheet-metal-folder',
    name: 'Sheet Metal Folder',
    tagline: 'Versatile precision for custom fabrication',
    description: 'A versatile single-beam folding solution engineered for custom fabrication shops. The intuitive touchscreen interface and programmable presets make complex folding sequences effortless, while the rigid frame ensures consistent accuracy across every bend.',
    specs: [
      'Maximum sheet width: 2500mm',
      'Material thickness: 0.4mm – 3.0mm (mild steel)',
      'Folding angle range: 0° – 135°',
      'Touchscreen CNC controller',
      'Programmable memory: 100 programs',
      'Manual backgauge with digital readout',
    ],
    featured: false,
  },
  {
    id: 'metal-folder-machine',
    name: 'Metal Folder Machine',
    tagline: 'Heavy-duty industrial folding power',
    description: 'Built for the most demanding applications, this heavy-duty metal folder handles thick gauge metals with ease. The reinforced frame and high-torque drive system deliver consistent performance even on the toughest materials.',
    specs: [
      'Maximum sheet width: 4000mm',
      'Material thickness: 0.8mm – 6.0mm (mild steel)',
      'Folding angle range: 0° – 135°',
      'Industrial-grade hydraulic system',
      'Heavy-duty clamping with adjustable pressure zones',
      'Programmable memory: 150 programs',
    ],
    featured: false,
  },
  {
    id: 'double-folder',
    name: 'Double Folder',
    tagline: 'Compact dual folding for mid-size workshops',
    description: 'A space-efficient double folding solution that brings dual-beam productivity to mid-size workshops. The Double Folder delivers the same precision engineering as our full-size machines in a more compact footprint.',
    specs: [
      'Maximum sheet width: 2000mm',
      'Material thickness: 0.5mm – 3.0mm (mild steel)',
      'Folding angle range: 0° – 135°',
      'Dual beam with independent control',
      'Programmable memory: 150 programs',
      'Compact design for limited floor space',
    ],
    featured: false,
  },
  {
    id: 'sheet-metal-folding-machine',
    name: 'Sheet Metal Folding Machine',
    tagline: 'All-around performance for general fabrication',
    description: 'The all-around workhorse for general sheet metal fabrication. This machine balances power, precision, and ease of use, making it the ideal choice for workshops that need reliable folding across a wide range of materials and thicknesses.',
    specs: [
      'Maximum sheet width: 3000mm',
      'Material thickness: 0.4mm – 4.0mm (mild steel)',
      'Folding angle range: 0° – 135°',
      'Servo-electric drive system',
      'Programmable memory: 120 programs',
      'Ergonomic foot pedal control',
    ],
    featured: false,
  },
  {
    id: 'metal-folder',
    name: 'Metal Folder',
    tagline: 'Entry-level precision, professional results',
    description: 'Our most accessible folding machine, designed for smaller workshops and entry-level professional use. The Metal Folder delivers Artitect build quality and folding precision in a streamlined, cost-effective package.',
    specs: [
      'Maximum sheet width: 1500mm',
      'Material thickness: 0.4mm – 2.5mm (mild steel)',
      'Folding angle range: 0° – 135°',
      'Manual backgauge with precision scale',
      'Mechanical clamping system',
      'Compact, mobile-friendly design',
    ],
    featured: false,
  },
]

export default function Products() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#14161a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <p className="text-xs uppercase tracking-[0.2em] text-[#c8a45c] font-medium mb-3">
            Our Product Range
          </p>
          <h1 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[#e8e4dc] mb-4">
            Precision Folding Machines
          </h1>
          <p className="text-[#7a7d85] max-w-2xl text-lg">
            Every Artitect machine is engineered with the same commitment to precision, 
            durability, and operator-friendly design. Explore our full range below.
          </p>
        </div>
        <div className="h-[2px] bg-[#c8a45c]/30" />
      </section>

      {/* Product Listings */}
      <section className="py-20 md:py-28 bg-[#f7f5f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-16">
            {products.map((product, index) => (
              <article
                key={product.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  product.featured
                    ? 'bg-white border border-[#c8a45c]/30 rounded-sm p-8 lg:p-12'
                    : 'bg-white border border-[#e0dcd5] rounded-sm p-8'
                }`}
              >
                {/* Visual */}
                <div className={`order-2 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="w-full h-64 md:h-80 bg-[#f7f5f0] rounded-sm flex items-center justify-center border border-[#e0dcd5]">
                    <Factory className="w-16 h-16 text-[#c8a45c]/20" />
                  </div>
                </div>

                {/* Content */}
                <div className={`order-1 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                  {product.featured && (
                    <span className="inline-block px-3 py-1 text-xs font-medium uppercase tracking-wider bg-[#c8a45c] text-[#14161a] rounded-sm mb-4">
                      Flagship Model
                    </span>
                  )}
                  <h2 className="font-['Playfair_Display'] text-2xl md:text-3xl font-bold text-[#14161a] mb-2">
                    {product.name}
                  </h2>
                  <p className="text-[#c8a45c] font-medium text-sm mb-4">
                    {product.tagline}
                  </p>
                  <p className="text-[#7a7d85] leading-relaxed mb-6">
                    {product.description}
                  </p>

                  {/* Specs */}
                  <div className="mb-6">
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-[#14161a] mb-3">
                      Key Specifications
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {product.specs.map((spec) => (
                        <li key={spec} className="flex items-start gap-2 text-sm text-[#7a7d85]">
                          <Check className="w-4 h-4 text-[#c8a45c] mt-0.5 shrink-0" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-sm bg-[#14161a] text-[#e8e4dc] hover:bg-[#1e2127] transition-colors duration-200"
                  >
                    Request Specifications
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#14161a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-[#e8e4dc] mb-4">
            Not Sure Which Machine Fits Your Needs?
          </h2>
          <p className="text-[#7a7d85] mb-8 max-w-2xl mx-auto">
            Our team of specialists is ready to analyze your production requirements 
            and recommend the ideal solution for your workshop.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-medium rounded-sm bg-[#c8a45c] text-[#14161a] hover:bg-[#d4b87a] transition-colors duration-200"
          >
            Speak with an Expert
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
