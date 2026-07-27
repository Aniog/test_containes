import { Link } from 'react-router-dom';
import { Cpu, Shirt, Home, Wrench, ShoppingBag, Car, Heart, UtensilsCrossed, Package, Lightbulb, Watch, Baby, Dumbbell, Camera } from 'lucide-react';

const categories = [
  {
    icon: Cpu,
    name: 'Electronics & Components',
    description: 'Consumer electronics, PCBs, cables, connectors, sensors, LED products, smart devices, and electronic components.',
    examples: ['Smartphones & accessories', 'PCB assemblies', 'LED lighting', 'Smart home devices', 'Cables & connectors'],
  },
  {
    icon: Shirt,
    name: 'Textiles & Apparel',
    description: 'Clothing, fabrics, footwear, bags, and textile products for fashion brands and retailers.',
    examples: ['Men\'s and women\'s clothing', 'Sportswear', 'Footwear', 'Bags & luggage', 'Home textiles'],
  },
  {
    icon: Home,
    name: 'Home & Garden',
    description: 'Furniture, kitchenware, garden tools, home decor, and household products.',
    examples: ['Furniture', 'Kitchen appliances', 'Garden tools', 'Home decor', 'Storage solutions'],
  },
  {
    icon: Wrench,
    name: 'Industrial Equipment',
    description: 'Machinery, tools, industrial components, and manufacturing equipment.',
    examples: ['CNC machines', 'Power tools', 'Industrial valves', 'Pumps & motors', 'Safety equipment'],
  },
  {
    icon: ShoppingBag,
    name: 'Consumer Goods',
    description: 'Everyday products, promotional items, gifts, toys, and general merchandise.',
    examples: ['Toys & games', 'Promotional products', 'Gift items', 'Stationery', 'Pet supplies'],
  },
  {
    icon: Car,
    name: 'Auto Parts & Accessories',
    description: 'Vehicle components, accessories, and aftermarket parts for all types of vehicles.',
    examples: ['Engine parts', 'Body kits', 'Interior accessories', 'Lighting', 'Electronics'],
  },
  {
    icon: Heart,
    name: 'Health & Beauty',
    description: 'Cosmetics, skincare, personal care, health supplements, and beauty tools.',
    examples: ['Skincare products', 'Makeup', 'Hair care', 'Health supplements', 'Beauty tools'],
  },
  {
    icon: UtensilsCrossed,
    name: 'Food & Packaging',
    description: 'Food products, packaging materials, kitchen supplies, and food processing equipment.',
    examples: ['Packaging materials', 'Food processing equipment', 'Kitchen supplies', 'Snack foods', 'Beverages'],
  },
  {
    icon: Package,
    name: 'Packaging & Printing',
    description: 'Custom packaging, labels, boxes, bags, and printed materials for products.',
    examples: ['Custom boxes', 'Labels & stickers', 'Shopping bags', 'Product packaging', 'Printed materials'],
  },
  {
    icon: Lightbulb,
    name: 'Lighting & Electrical',
    description: 'LED lights, fixtures, electrical components, and lighting solutions.',
    examples: ['LED bulbs', 'Light fixtures', 'Solar lights', 'Street lighting', 'Electrical components'],
  },
  {
    icon: Watch,
    name: 'Jewelry & Accessories',
    description: 'Fashion jewelry, watches, sunglasses, and personal accessories.',
    examples: ['Fashion jewelry', 'Watches', 'Sunglasses', 'Hair accessories', 'Belts & wallets'],
  },
  {
    icon: Baby,
    name: 'Baby & Kids Products',
    description: 'Baby care products, children\'s toys, kids clothing, and nursery items.',
    examples: ['Baby clothing', 'Toys', 'Strollers', 'Nursery furniture', 'Baby care products'],
  },
  {
    icon: Dumbbell,
    name: 'Sports & Fitness',
    description: 'Fitness equipment, sportswear, outdoor gear, and sporting goods.',
    examples: ['Fitness equipment', 'Sportswear', 'Outdoor gear', 'Yoga products', 'Cycling accessories'],
  },
  {
    icon: Camera,
    name: 'Photography & Video',
    description: 'Camera accessories, tripods, lighting equipment, and video production gear.',
    examples: ['Camera accessories', 'Tripods & mounts', 'Studio lighting', 'Video equipment', 'Drone accessories'],
  },
];

export default function ProductsPage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Products We Source</h1>
            <p className="text-lg text-blue-100">
              We source a wide range of products from verified Chinese manufacturers. If you do not see your product category below, contact us anyway.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categories.map((cat, index) => (
              <div key={index} className="p-6 rounded-xl border border-slate-200 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <cat.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-slate-900 mb-2">{cat.name}</h2>
                    <p className="text-slate-600 text-sm mb-4">{cat.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {cat.examples.map((example, eIndex) => (
                        <span key={eIndex} className="px-3 py-1 bg-slate-100 text-slate-700 text-xs rounded-full">
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

      <section className="py-16 bg-slate-50">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Do Not See Your Product?</h2>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            We source almost any product manufactured in China. Tell us what you need and we will find the right supplier.
          </p>
          <Link to="/contact" className="btn-primary">
            Get a Free Sourcing Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
