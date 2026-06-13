import { SectionHeading, CTASection } from '@/components/ui/SectionHeading';
import { Package, Zap, Sofa, Shirt, Cog, Sparkles, Car, Box, Utensils, Baby, Wrench, Bike } from 'lucide-react';

const categories = [
  {
    icon: Zap,
    title: 'Electronics & Gadgets',
    description: 'Consumer electronics, audio products, phone accessories, LED lighting, power banks, USB devices, smart home products, and more.',
    products: ['Wireless earbuds', 'Power banks', 'LED strips', 'Phone cases', 'Smart plugs'],
    imgQuery: 'consumer electronics gadgets manufacturing',
    factories: '80+',
  },
  {
    icon: Sofa,
    title: 'Home & Garden',
    description: 'Indoor and outdoor furniture, home decor, kitchenware, garden tools, storage solutions, lighting fixtures, and household accessories.',
    products: ['Outdoor furniture', 'Kitchen tools', 'Storage organizers', 'Garden tools', 'Wall decor'],
    imgQuery: 'home garden products manufacturing factory',
    factories: '60+',
  },
  {
    icon: Shirt,
    title: 'Apparel & Textiles',
    description: 'Clothing, uniforms, bags, shoes, hats, fabric materials, home textiles, and custom branded garments for all markets.',
    products: ['T-shirts', 'Work uniforms', 'Bags and backpacks', 'Hats and caps', 'Custom fabrics'],
    imgQuery: 'textile apparel garment factory manufacturing',
    factories: '50+',
  },
  {
    icon: Cog,
    title: 'Machinery & Industrial Parts',
    description: 'CNC machined parts, castings, forgings, stamping parts, industrial equipment components, and custom engineering solutions.',
    products: ['CNC parts', 'Metal stampings', 'Injection molds', 'Industrial valves', 'Custom brackets'],
    imgQuery: 'industrial machinery CNC parts manufacturing',
    factories: '45+',
  },
  {
    icon: Sparkles,
    title: 'Beauty & Personal Care',
    description: 'Cosmetics, skincare products, hair care tools, personal hygiene items, beauty accessories, and private label cosmetics.',
    products: ['Makeup brushes', 'Skincare packaging', 'Hair tools', 'Cosmetic bags', 'Mirrors'],
    imgQuery: 'beauty cosmetics personal care products',
    factories: '35+',
  },
  {
    icon: Package,
    title: 'Promotional & Branded Items',
    description: 'Custom branded merchandise, corporate gifts, event giveaways, trade show materials, and promotional products for marketing campaigns.',
    products: ['Custom pens', 'Branded mugs', 'USB drives', 'Tote bags', 'Lanyards'],
    imgQuery: 'promotional branded merchandise corporate gifts',
    factories: '40+',
  },
  {
    icon: Car,
    title: 'Automotive Parts & Accessories',
    description: 'Car accessories, replacement parts, car care products, interior and exterior modifications, and aftermarket automotive components.',
    products: ['Floor mats', 'Phone mounts', 'LED lights', 'Car covers', 'Seat covers'],
    imgQuery: 'automotive parts accessories manufacturing',
    factories: '30+',
  },
  {
    icon: Box,
    title: 'Packaging & Printing',
    description: 'Custom boxes, labels, stickers, shopping bags, tissue paper, product packaging design, and printing services for all industries.',
    products: ['Custom boxes', 'Labels and stickers', 'Paper bags', 'Gift packaging', 'Product manuals'],
    imgQuery: 'packaging printing boxes custom boxes',
    factories: '55+',
  },
  {
    icon: Baby,
    title: 'Toys & Children\'s Products',
    description: 'Educational toys, plush toys, outdoor play equipment, children\'s furniture, baby products, and safety-certified kids\' items.',
    products: ['Plush toys', 'Building blocks', 'Outdoor toys', 'Baby bottles', 'Kids furniture'],
    imgQuery: 'toys children products manufacturing',
    factories: '25+',
  },
  {
    icon: Wrench,
    title: 'Tools & Hardware',
    description: 'Hand tools, power tool accessories, fasteners, plumbing supplies, electrical components, and professional-grade hardware.',
    products: ['Hand tools', 'Screws and bolts', 'Plumbing fittings', 'Electrical connectors', 'Tool sets'],
    imgQuery: 'tools hardware manufacturing factory',
    factories: '40+',
  },
  {
    icon: Bike,
    title: 'Sports & Outdoor',
    description: 'Fitness equipment, camping gear, sports accessories, bicycle parts, outdoor clothing, and recreational products.',
    products: ['Yoga mats', 'Resistance bands', 'Camping tents', 'Water bottles', 'Sports bags'],
    imgQuery: 'sports outdoor fitness equipment manufacturing',
    factories: '30+',
  },
  {
    icon: Utensils,
    title: 'Food & Beverage Equipment',
    description: 'Restaurant equipment, food processing machines, packaging machinery, kitchen appliances, and food-safe storage containers.',
    products: ['Commercial ovens', 'Food containers', 'Processing machines', 'Restaurant supplies', 'Beverage equipment'],
    imgQuery: 'food beverage equipment kitchen manufacturing',
    factories: '20+',
  },
];

export default function Products() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-500 via-navy-600 to-navy-700 py-16 lg:py-20">
        <div className="container-max text-center">
          <span className="inline-block px-4 py-1.5 bg-white/10 text-white/90 text-xs font-semibold uppercase tracking-widest rounded-full mb-4">
            Product Categories
          </span>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-6">
            Products We Source
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            We work across dozens of product categories and industries. Below are the most common types of products we help our clients source from Chinese manufacturers.
          </p>
        </div>
      </section>

      {/* Product grid */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {categories.map((cat, idx) => (
              <div
                key={cat.title}
                className="group bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg hover:border-navy-100 transition-all"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                  <img
                    data-strk-img-id={`product-page-${idx}-${cat.title.toLowerCase().replace(/[&'\s]+/g, '-')}`}
                    data-strk-img={`[product-page-${idx}-title] ${cat.imgQuery} China sourcing`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 px-2.5 py-1 bg-navy-500/80 backdrop-blur-sm rounded-full text-xs font-semibold text-white">
                    {cat.factories} factories
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="w-9 h-9 bg-navy-50 rounded-lg flex items-center justify-center">
                      <cat.icon className="w-4.5 h-4.5 text-navy-500" />
                    </div>
                    <h3 id={`product-page-${idx}-title`} className="text-lg font-bold text-navy-500">{cat.title}</h3>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">{cat.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.products.map((p) => (
                      <span key={p} className="px-2.5 py-1 bg-gray-50 text-xs font-medium text-gray-600 rounded-full border border-gray-100">
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="section-padding bg-gray-50">
        <div className="container-max text-center">
          <SectionHeading
            badge="Don't See Your Product?"
            title="We Source Virtually Any Product"
            description="The categories above are our most common, but our network covers far more. If you have a specific product in mind, contact us and we will research suppliers and provide a feasibility assessment."
          />
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent-500 hover:bg-accent-600 text-white text-base font-semibold rounded-lg transition-colors"
          >
            Tell Us What You Need
          </a>
        </div>
      </section>

      <CTASection />
    </>
  );
}
