import { Link } from 'react-router-dom'
import { ArrowRight, Cpu, Wrench, Shirt, Sofa, Box, Hammer, Beaker, Car, ShoppingBag, Dumbbell, Baby, Lightbulb, Zap, Printer, Scissors, FlaskConical } from 'lucide-react'

const categories = [
  {
    icon: Cpu,
    name: 'Electronics & Components',
    desc: 'Consumer electronics, PCBs, semiconductors, connectors, cables, sensors, displays, power supplies, and electronic accessories.',
    examples: 'Smart home devices, Bluetooth speakers, chargers, LED drivers, PCB assemblies',
  },
  {
    icon: Wrench,
    name: 'Machinery & Industrial Parts',
    desc: 'CNC machined parts, metal fabrication, motors, pumps, valves, bearings, hydraulic components, and industrial equipment.',
    examples: 'Custom CNC parts, gearboxes, conveyor systems, industrial pumps, pneumatic cylinders',
  },
  {
    icon: Shirt,
    name: 'Textiles & Apparel',
    desc: 'Garments, sportswear, workwear, uniforms, bags, home textiles, fabrics, and fashion accessories.',
    examples: 'T-shirts, jackets, sports uniforms, tote bags, bed linens, curtains, towels',
  },
  {
    icon: Sofa,
    name: 'Furniture & Home Goods',
    desc: 'Indoor and outdoor furniture, lighting fixtures, kitchenware, home decor, storage solutions, and garden products.',
    examples: 'Office chairs, dining sets, LED lamps, cookware, ceramic vases, storage racks',
  },
  {
    icon: Box,
    name: 'Packaging & Printing',
    desc: 'Custom packaging, corrugated boxes, paper bags, labels, stickers, promotional materials, and printed products.',
    examples: 'Custom product boxes, gift bags, hang tags, brochures, sticker sheets',
  },
  {
    icon: Hammer,
    name: 'Hardware & Tools',
    desc: 'Fasteners, hand tools, power tools, hardware accessories, construction materials, and DIY products.',
    examples: 'Screws and bolts, wrench sets, electric drills, tape measures, tool kits',
  },
  {
    icon: Beaker,
    name: 'Plastics & Molding',
    desc: 'Injection molding, blow molding, rotational molding, extrusion, thermoforming, and silicone products.',
    examples: 'Plastic enclosures, bottles, containers, silicone kitchenware, plastic toys',
  },
  {
    icon: Car,
    name: 'Auto Parts & Accessories',
    desc: 'Aftermarket auto parts, car accessories, motorcycle parts, EV components, and automotive electronics.',
    examples: 'Brake pads, car mats, LED headlights, phone mounts, motorcycle helmets',
  },
  {
    icon: ShoppingBag,
    name: 'Promotional Products',
    desc: 'Custom branded merchandise, corporate gifts, promotional items, trade show giveaways, and marketing materials.',
    examples: 'Branded pens, USB drives, tote bags, lanyards, custom notebooks, water bottles',
  },
  {
    icon: Dumbbell,
    name: 'Sports & Outdoor',
    desc: 'Fitness equipment, sports gear, outdoor recreation products, camping equipment, and accessories.',
    examples: 'Yoga mats, resistance bands, tents, sleeping bags, fishing gear, bicycles',
  },
  {
    icon: Baby,
    name: 'Baby & Children Products',
    desc: 'Baby gear, toys, children\'s clothing, educational products, nursery items, and safety products.',
    examples: 'Strollers, educational toys, baby clothes, play mats, safety gates',
  },
  {
    icon: Lightbulb,
    name: 'Lighting & Electrical',
    desc: 'LED lighting, commercial and residential fixtures, electrical components, solar products, and wiring accessories.',
    examples: 'LED panels, solar lights, chandeliers, switches and sockets, extension cords',
  },
]

export default function Products() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-primary py-16 md:py-24">
        <div className="section-container">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">Products</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mt-3 mb-4">
              Products We Source
            </h1>
            <p className="text-lg text-white/70 leading-relaxed">
              We have deep expertise across 12+ major product categories, with specialized knowledge 
              in each industry's manufacturing processes, quality standards, and supply chain dynamics.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 md:py-28">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div key={cat.name} className="border border-border rounded-xl p-6 hover:shadow-md hover:border-accent/20 transition-all group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center shrink-0 group-hover:bg-accent/10 transition-colors">
                    <cat.icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{cat.name}</h3>
                    <p className="text-sm text-text-muted leading-relaxed mb-3">{cat.desc}</p>
                    <div className="bg-surface-alt rounded-lg px-3 py-2">
                      <span className="text-xs font-medium text-text-muted">Examples: </span>
                      <span className="text-xs text-text">{cat.examples}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Don't See Your Product */}
      <section className="py-20 bg-surface-alt">
        <div className="section-container max-w-2xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Don't See Your Product?</h2>
          <p className="text-text-muted mb-8">
            Our sourcing capabilities extend far beyond these categories. If you have a product 
            in mind, we likely have experience sourcing it — or we have the network to find the right supplier.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-hover text-white font-semibold rounded-lg transition-colors"
          >
            Tell Us About Your Product
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}