import { Button } from './ui/button'

const products = [
  {
    id: 1,
    name: "Double Folding Machine",
    description: "Our flagship model featuring dual folding capabilities for maximum efficiency and precision on every bend.",
    specs: ["Up to 4mm thickness", "3200mm working length", "CNC controlled", "Dual motor system"]
  },
  {
    id: 2,
    name: "Double Folder",
    description: "Compact yet powerful double folder designed for workshops requiring versatility without compromising on quality.",
    specs: ["Up to 3mm thickness", "2500mm working length", "Manual & auto modes", "Space-efficient design"]
  },
  {
    id: 3,
    name: "Sheet Metal Folder",
    description: "Professional-grade sheet metal folder engineered for consistent, accurate bends across a wide range of materials.",
    specs: ["Up to 2.5mm thickness", "3000mm working length", "Adjustable angle stops", "Heavy-duty construction"]
  },
  {
    id: 4,
    name: "Sheet Metal Folding Machine",
    description: "Advanced folding machine with digital controls and programmable sequences for high-volume production.",
    specs: ["Up to 5mm thickness", "4000mm working length", "Touchscreen interface", "Multi-step programming"]
  },
  {
    id: 5,
    name: "Metal Folder",
    description: "Robust metal folder built for demanding industrial applications with exceptional durability and performance.",
    specs: ["Up to 6mm thickness", "2000mm working length", "Hydraulic clamping", "Safety interlocks"]
  },
  {
    id: 6,
    name: "Metal Folder Machine",
    description: "Precision metal folder machine combining traditional craftsmanship with modern engineering excellence.",
    specs: ["Up to 3.5mm thickness", "2800mm working length", "Foot pedal operation", "Quick-release tooling"]
  },
  {
    id: 7,
    name: "Metal Folding Machine",
    description: "State-of-the-art metal folding machine featuring advanced automation and superior build quality.",
    specs: ["Up to 4.5mm thickness", "3500mm working length", "Servo-driven system", "Remote diagnostics"]
  }
]

const Products = () => {
  return (
    <section id="products" className="py-20 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-[#1a1f2e]/5">
            <span className="text-[#1a1f2e] text-sm font-medium tracking-wider">OUR RANGE</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1a1f2e] mb-4">
            Engineered for Excellence
          </h2>
          <p className="text-lg text-[#2d3748]/70 max-w-2xl mx-auto">
            Discover our comprehensive lineup of precision folding machinery, each model crafted to meet the exacting standards of modern fabrication.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group bg-white rounded-2xl p-8 border border-[#e8e4de] hover:border-[#b8860b]/30 transition-all duration-300 flex flex-col">
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-[#1a1f2e] mb-4 group-hover:text-[#b8860b] transition-colors">
                  {product.name}
                </h3>
                <p className="text-[#2d3748]/70 mb-6 leading-relaxed">
                  {product.description}
                </p>
                <ul className="space-y-2 mb-8">
                  {product.specs.map((spec, index) => (
                    <li key={index} className="flex items-center text-sm text-[#2d3748]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#b8860b] mr-3"></div>
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                Request Information
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products