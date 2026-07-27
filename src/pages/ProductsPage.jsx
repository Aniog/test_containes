import { Link } from 'react-router-dom'
import { ArrowRight, Cpu, Shirt, Wrench, Home, Car, Package, Utensils, Dumbbell, Baby, Lightbulb, Paintbrush, Camera, Watch, HeartPulse, Building2 } from 'lucide-react'

const categories = [
  {
    icon: Cpu,
    title: 'Electronics & Components',
    description: 'Consumer electronics, PCBs, cables, connectors, sensors, LED products, smart devices, and electronic components.',
    examples: ['Smartphones & accessories', 'PCB assemblies', 'LED lighting', 'Cables & connectors', 'Sensors & modules'],
  },
  {
    icon: Shirt,
    title: 'Textiles & Apparel',
    description: 'Clothing, fabrics, accessories, footwear, and textile materials for fashion and industrial use.',
    examples: ['Custom apparel', 'Activewear', 'Fabrics & materials', 'Footwear', 'Bags & accessories'],
  },
  {
    icon: Wrench,
    title: 'Machinery & Tools',
    description: 'Industrial machinery, hand tools, power tools, hardware, and manufacturing equipment.',
    examples: ['CNC machines', 'Power tools', 'Hand tools', 'Hardware components', 'Manufacturing equipment'],
  },
  {
    icon: Home,
    title: 'Home & Garden Products',
    description: 'Furniture, home decor, kitchenware, garden tools, and household products.',
    examples: ['Furniture', 'Kitchenware', 'Home decor', 'Garden tools', 'Storage solutions'],
  },
  {
    icon: Car,
    title: 'Automotive Parts',
    description: 'Auto parts, accessories, motorcycle components, and automotive electronics.',
    examples: ['Engine components', 'Body parts', 'Interior accessories', 'Automotive electronics', 'Motorcycle parts'],
  },
  {
    icon: Package,
    title: 'Packaging & Materials',
    description: 'Custom packaging, labels, boxes, bags, and packaging materials for all industries.',
    examples: ['Custom boxes', 'Labels & stickers', 'Plastic bags', 'Paper packaging', 'Protective materials'],
  },
  {
    icon: Utensils,
    title: 'Food & Beverage',
    description: 'Food processing equipment, packaging, ingredients, and beverage products.',
    examples: ['Food processing equipment', 'Packaging solutions', 'Ingredients', 'Beverage products', 'Kitchen equipment'],
  },
  {
    icon: Dumbbell,
    title: 'Sports & Fitness',
    description: 'Fitness equipment, sportswear, outdoor gear, and sporting goods.',
    examples: ['Fitness equipment', 'Sportswear', 'Outdoor gear', 'Yoga & pilates', 'Team sports equipment'],
  },
  {
    icon: Baby,
    title: 'Baby & Kids Products',
    description: 'Baby clothing, toys, nursery furniture, and children\'s products.',
    examples: ['Baby clothing', 'Toys & games', 'Nursery furniture', 'Baby care products', 'Children\'s accessories'],
  },
  {
    icon: Lightbulb,
    title: 'Lighting & Electrical',
    description: 'LED lighting, electrical components, solar products, and lighting fixtures.',
    examples: ['LED bulbs & strips', 'Lighting fixtures', 'Solar products', 'Electrical components', 'Smart lighting'],
  },
  {
    icon: Paintbrush,
    title: 'Beauty & Personal Care',
    description: 'Cosmetics, skincare, personal care products, and beauty tools.',
    examples: ['Skincare products', 'Makeup', 'Hair care', 'Beauty tools', 'Personal care items'],
  },
  {
    icon: Camera,
    title: 'Photography & Video',
    description: 'Camera accessories, lighting equipment, tripods, and photography gear.',
    examples: ['Camera accessories', 'Lighting equipment', 'Tripods & mounts', 'Studio gear', 'Drone accessories'],
  },
  {
    icon: Watch,
    title: 'Jewelry & Watches',
    description: 'Fashion jewelry, watches, accessories, and precious metal products.',
    examples: ['Fashion jewelry', 'Watches', 'Accessories', 'Precious metal items', 'Custom designs'],
  },
  {
    icon: HeartPulse,
    title: 'Medical & Health',
    description: 'Medical devices, health products, laboratory equipment, and wellness items.',
    examples: ['Medical devices', 'Health monitors', 'Lab equipment', 'Wellness products', 'PPE supplies'],
  },
  {
    icon: Building2,
    title: 'Building & Construction',
    description: 'Building materials, hardware, tools, and construction equipment.',
    examples: ['Building materials', 'Hardware', 'Construction tools', 'Safety equipment', 'Plumbing supplies'],
  },
]

export default function ProductsPage() {
  return (
    <div>
      <section className="section-padding bg-gradient-to-br from-primary/5 via-background to-secondary/50">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Products We Source
            </h1>
            <p className="text-lg text-muted-foreground">
              We work with verified suppliers across all major manufacturing categories in China.
              If it is made in China, we can source it for you.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat) => (
              <div
                key={cat.title}
                className="flex flex-col rounded-lg border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <cat.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">{cat.title}</h3>
                <p className="mb-4 text-sm text-muted-foreground">{cat.description}</p>
                <ul className="mb-4 flex-1 space-y-1">
                  {cat.examples.map((example) => (
                    <li key={example} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="h-1 w-1 rounded-full bg-primary" />
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground">
              Do Not See Your Product Category?
            </h2>
            <p className="mb-8 text-muted-foreground">
              We source virtually any product manufactured in China. Contact us with your specific requirements.
            </p>
            <Link to="/contact" className="btn-primary">
              Get a Free Sourcing Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
