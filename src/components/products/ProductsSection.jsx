import ProductCard from './ProductCard'

const products = [
  {
    id: 'double-folding-machine',
    imgId: 'a1b2c3',
    imgRatio: '4x3',
    category: 'Double Folding',
    title: 'Double Folding Machine',
    description:
      'High-speed double folding machine engineered for precision bending of sheet metal. Ideal for high-volume production lines requiring consistent, repeatable folds with minimal operator intervention.',
    specs: [
      'Folding capacity up to 4mm mild steel',
      'CNC-controlled dual-axis bending',
      'Automatic material thickness compensation',
      'Touchscreen HMI with programmable profiles',
    ],
  },
  {
    id: 'double-folder-pro',
    imgId: 'd4e5f6',
    imgRatio: '4x3',
    category: 'Double Folder',
    title: 'Double Folder Pro Series',
    description:
      'Professional-grade double folder with advanced servo-electric technology. Delivers energy-efficient operation with precision folding for complex sheet metal components.',
    specs: [
      'Servo-electric drive system (no hydraulics)',
      'Folding length up to 3200mm',
      '±0.1mm positional accuracy',
      'Energy saving up to 60% vs hydraulic models',
    ],
  },
  {
    id: 'sheet-metal-folder',
    imgId: 'g7h8i9',
    imgRatio: '4x3',
    category: 'Sheet Metal Folder',
    title: 'Sheet Metal Folder SX',
    description:
      'Versatile sheet metal folding machine designed for job shops and production facilities. Handles a wide range of materials from thin gauge aluminum to heavy steel plates.',
    specs: [
      'Multi-material compatibility (steel, alu, copper)',
      'Quick-change tooling system',
      'Programmable back gauge with 8-axis control',
      'Safety light curtain with CE certification',
    ],
  },
  {
    id: 'sheet-metal-folding',
    imgId: 'j0k1l2',
    imgRatio: '4x3',
    category: 'Folding Systems',
    title: 'Sheet Metal Folding Center',
    description:
      'Integrated folding center combining bending, folding, and forming operations in a single pass. Maximizes throughput for complex sheet metal components.',
    specs: [
      'Integrated folding + bending + forming',
      'Automatic tool changer with 12 stations',
      'Offline programming software included',
      'Production rate up to 120 parts/hour',
    ],
  },
  {
    id: 'metal-folder-hd',
    imgId: 'm3n4o5',
    imgRatio: '4x3',
    category: 'Metal Folder',
    title: 'Metal Folder HD',
    description:
      'Heavy-duty metal folding machine built for the toughest industrial applications. Reinforced frame and powerful clamping system for folding thick metal plates.',
    specs: [
      'Folding capacity up to 8mm mild steel',
      'Reinforced steel frame construction',
      'Hydraulic clamping with mechanical stops',
      'Max folding length: 4000mm',
    ],
  },
  {
    id: 'metal-folding-machine',
    imgId: 'p6q7r8',
    imgRatio: '4x3',
    category: 'Metal Folding',
    title: 'Metal Folding Machine MFX',
    description:
      'State-of-the-art metal folding machine with smart control system and IoT connectivity. Perfect for Industry 4.0 manufacturing environments demanding data-driven production.',
    specs: [
      'IoT-enabled with real-time production monitoring',
      'Servo-hybrid drive for precision and power',
      'Auto-diagnostics and predictive maintenance',
      'Remote support and software updates',
    ],
  },
]

export default function ProductsSection() {
  return (
    <section id="products" className="py-20 md:py-28 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="text-brand-gold text-xs uppercase tracking-[0.2em] font-medium">
            Our Product Range
          </span>
          <h2
            id="products-heading"
            className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-brand-navy mt-3 mb-5"
          >
            Precision Folding Machinery
          </h2>
          <div className="flex items-center justify-center gap-3">
            <span className="w-12 h-0.5 bg-brand-gold" />
            <span className="w-2 h-2 bg-brand-gold rotate-45" />
            <span className="w-12 h-0.5 bg-brand-gold" />
          </div>
          <p className="text-brand-text-muted text-lg max-w-3xl mx-auto mt-5 leading-relaxed">
            From compact sheet metal folders to industrial-grade double folding
            machines — every product is engineered for precision, durability,
            and productivity.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}