import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Cpu, Home, Shirt, Factory, Package, Car, Dumbbell, Sparkles } from 'lucide-react';

const categories = [
  {
    icon: Cpu,
    title: 'Electronics & Components',
    description: 'Consumer electronics, PCBs, cables, connectors, LED products, smart devices, and electronic components.',
    examples: ['Smart home devices', 'PCB assemblies', 'LED lighting', 'Cables & connectors', 'Audio equipment'],
  },
  {
    icon: Home,
    title: 'Home & Garden Products',
    description: 'Furniture, kitchenware, garden tools, home decor, lighting fixtures, and household items.',
    examples: ['Outdoor furniture', 'Kitchen gadgets', 'Garden tools', 'Home decor', 'LED fixtures'],
  },
  {
    icon: Shirt,
    title: 'Apparel & Textiles',
    description: 'Clothing, fabrics, accessories, footwear, and textile products for all markets.',
    examples: ['Custom apparel', 'Sportswear', 'Bags & accessories', 'Footwear', 'Technical fabrics'],
  },
  {
    icon: Factory,
    title: 'Industrial Equipment',
    description: 'Machinery, tools, automation equipment, industrial components, and manufacturing supplies.',
    examples: ['CNC machines', 'Power tools', 'Automation systems', 'Industrial valves', 'Safety equipment'],
  },
  {
    icon: Package,
    title: 'Packaging & Printing',
    description: 'Custom packaging, labels, printed materials, boxes, bags, and promotional products.',
    examples: ['Custom boxes', 'Labels & stickers', 'Shopping bags', 'Promotional items', 'Printed materials'],
  },
  {
    icon: Car,
    title: 'Automotive Parts',
    description: 'Auto components, accessories, tools, and aftermarket parts for various vehicle types.',
    examples: ['Engine parts', 'Body accessories', 'Interior components', 'Tools & equipment', 'Lighting systems'],
  },
  {
    icon: Dumbbell,
    title: 'Sports & Outdoor',
    description: 'Fitness equipment, outdoor gear, sporting goods, and recreational products.',
    examples: ['Fitness equipment', 'Camping gear', 'Sports accessories', 'Outdoor apparel', 'Water sports'],
  },
  {
    icon: Sparkles,
    title: 'Beauty & Personal Care',
    description: 'Cosmetics, skincare, hair care, personal care tools, and beauty accessories.',
    examples: ['Skincare products', 'Makeup tools', 'Hair care', 'Personal care devices', 'Beauty accessories'],
  },
];

export default function ProductsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 text-white">
        <div className="container-main section-padding">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full bg-blue-600/50 px-4 py-1.5 text-sm font-medium">
              Products We Source
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl">
              What We Can Source for You
            </h1>
            <p className="mt-6 text-lg text-blue-100">
              We source products across a wide range of industries. If you do not see your product
              category listed, contact us — we likely have the expertise and supplier network to help.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="grid gap-6 md:grid-cols-2">
            {categories.map((category) => (
              <div key={category.title} className="card">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 flex-shrink-0">
                    <category.icon className="h-6 w-6 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">{category.title}</h3>
                    <p className="mt-2 text-slate-600">{category.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {category.examples.map((example) => (
                        <span
                          key={example}
                          className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700"
                        >
                          <CheckCircle className="h-3.5 w-3.5 text-blue-700" />
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-slate-50">
        <div className="container-main text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Do Not See Your Product Category?
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Our supplier network covers thousands of manufacturers across China. Contact us with your
            product requirements and we will let you know how we can help.
          </p>
          <div className="mt-8">
            <Link to="/contact" className="btn-primary">
              Submit a Sourcing Request
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
