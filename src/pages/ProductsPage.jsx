import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Cog, Shirt, Home, Car, Dumbbell, Lightbulb, ShoppingBag, ArrowRight, CheckCircle } from 'lucide-react';

const categories = [
  {
    icon: Cpu,
    title: 'Electronics & Components',
    description: 'We source a wide range of electronic products and components from verified manufacturers in Shenzhen, Dongguan, and other tech hubs.',
    products: [
      'Consumer electronics (phones, tablets, wearables)',
      'PCBs and electronic components',
      'Cables, connectors, and adapters',
      'Smart home devices and IoT products',
      'LED displays and lighting components',
      'Batteries and power supplies',
    ],
    regions: 'Shenzhen, Dongguan, Guangzhou',
  },
  {
    icon: Cog,
    title: 'Machinery & Industrial',
    description: 'From heavy machinery to precision tools, we connect you with reliable industrial manufacturers across China.',
    products: [
      'Manufacturing equipment and machines',
      'Hand tools and power tools',
      'Pumps, valves, and fittings',
      'Bearings and mechanical components',
      'Packaging machinery',
      'Agricultural equipment',
    ],
    regions: 'Shanghai, Ningbo, Wenzhou, Jinan',
  },
  {
    icon: Shirt,
    title: 'Textiles & Apparel',
    description: 'China is a global leader in textile manufacturing. We source clothing, fabrics, and accessories from verified factories.',
    products: [
      'Ready-made garments and clothing',
      'Fabrics and textile materials',
      'Footwear and accessories',
      'Bags, luggage, and leather goods',
      'Uniforms and workwear',
      'Custom printed textiles',
    ],
    regions: 'Guangzhou, Hangzhou, Shaoxing, Quanzhou',
  },
  {
    icon: Home,
    title: 'Home & Garden',
    description: 'From furniture to kitchenware, we source home and garden products that meet international quality standards.',
    products: [
      'Furniture (indoor and outdoor)',
      'Kitchenware and cookware',
      'Home decor and accessories',
      'Garden tools and equipment',
      'Bathroom fixtures and accessories',
      'Storage and organization products',
    ],
    regions: 'Foshan, Dongguan, Yiwu, Ningbo',
  },
  {
    icon: Car,
    title: 'Auto Parts & Accessories',
    description: 'We source automotive components and accessories from manufacturers with international certifications.',
    products: [
      'Engine components and parts',
      'Brake systems and components',
      'Electrical and electronic parts',
      'Body parts and accessories',
      'Tires and wheels',
      'Car care and maintenance products',
    ],
    regions: 'Guangzhou, Changchun, Shanghai, Wenzhou',
  },
  {
    icon: Dumbbell,
    title: 'Sports & Outdoor',
    description: 'From fitness equipment to outdoor gear, we source sports and recreational products from specialized manufacturers.',
    products: [
      'Fitness and gym equipment',
      'Outdoor camping gear',
      'Sports apparel and footwear',
      'Water sports equipment',
      'Cycling accessories',
      'Team sports equipment',
    ],
    regions: 'Xiamen, Ningbo, Yiwu, Guangzhou',
  },
  {
    icon: Lightbulb,
    title: 'Lighting & Electrical',
    description: 'China dominates the global lighting market. We source LED products, fixtures, and electrical components.',
    products: [
      'LED lighting and bulbs',
      'Commercial and industrial fixtures',
      'Smart lighting systems',
      'Electrical components and switches',
      'Solar lighting products',
      'Decorative and architectural lighting',
    ],
    regions: 'Zhongshan, Shenzhen, Ningbo, Shanghai',
  },
  {
    icon: ShoppingBag,
    title: 'Consumer Goods',
    description: 'We source everyday consumer products from verified manufacturers, ensuring quality and competitive pricing.',
    products: [
      'Toys and games',
      'Gifts and promotional items',
      'Packaging materials',
      'Stationery and office supplies',
      'Beauty and personal care products',
      'Pet supplies and accessories',
    ],
    regions: 'Yiwu, Shantou, Ningbo, Guangzhou',
  },
];

export default function ProductsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-gray-900 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Products We Source
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              From electronics to textiles, we source a wide range of products from verified Chinese manufacturers across all major industrial regions.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors text-lg"
            >
              Request a Product Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 lg:space-y-16">
            {categories.map((category, index) => (
              <div
                key={category.title}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center">
                      <category.icon className="w-7 h-7 text-blue-700" />
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                      {category.title}
                    </h2>
                  </div>
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    {category.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {category.products.map((product) => (
                      <li key={product} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{product}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <p className="text-sm text-gray-600">
                      <span className="font-medium text-gray-900">Main Manufacturing Regions:</span>{' '}
                      {category.regions}
                    </p>
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden">
                    <img
                      alt={category.title}
                      className="w-full h-full object-cover"
                      data-strk-img-id={`product-${category.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}-img`}
                      data-strk-img={`[${category.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}-title] [${category.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}-desc]`}
                      data-strk-img-ratio="16x9"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Do Not See Your Product Category?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We source many more product categories than listed here. Contact us with your specific requirements and we will let you know how we can help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-lg transition-colors text-lg"
          >
            Contact Us
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
