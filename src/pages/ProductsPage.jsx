import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Factory, Cpu, Shirt, Sofa, Box, Wrench, Car, ShoppingBag, Gem, Utensils } from 'lucide-react';

const ProductsPage = () => {
  const productCategories = [
    {
      id: 'electronics',
      icon: Cpu,
      name: 'Electronics',
      description: 'Consumer electronics, smart devices, electronic components, and tech accessories.',
      products: [
        'Smartphones & Tablets',
        'Laptops & Computers',
        'Smart Home Devices',
        'Audio & Video Equipment',
        'Wearable Technology',
        'Electronic Components',
        'LED Lighting',
        'Power Banks & Chargers',
      ],
      suppliers: '2,500+',
    },
    {
      id: 'textiles',
      icon: Shirt,
      name: 'Textiles & Apparel',
      description: 'Fabrics, garments, and fashion accessories for all markets.',
      products: [
        'Casual Wear',
        'Sportswear & Activewear',
        'Formal Attire',
        'Kids Clothing',
        'Underwear & Sleepwear',
        'Fabrics & Materials',
        'Fashion Accessories',
        'Uniforms & Workwear',
      ],
      suppliers: '3,200+',
    },
    {
      id: 'machinery',
      icon: Wrench,
      name: 'Machinery',
      description: 'Industrial machinery, equipment, and mechanical components.',
      products: [
        'Industrial Equipment',
        'Agricultural Machinery',
        'Construction Equipment',
        'Packaging Machinery',
        'Textile Machinery',
        'Food Processing Equipment',
        'CNC Machines',
        'Mechanical Components',
      ],
      suppliers: '1,800+',
    },
    {
      id: 'furniture',
      icon: Sofa,
      name: 'Furniture',
      description: 'Residential, commercial, and industrial furniture solutions.',
      products: [
        'Office Furniture',
        'Home Furniture',
        'Outdoor Furniture',
        'Hotel Furniture',
        'Kitchen Cabinets',
        'Sofas & Seating',
        'Tables & Desks',
        'Storage Solutions',
      ],
      suppliers: '1,200+',
    },
    {
      id: 'packaging',
      icon: Box,
      name: 'Packaging',
      description: 'All types of packaging materials and solutions.',
      products: [
        'Cardboard Boxes',
        'Plastic Packaging',
        'Paper Bags',
        'Gift Boxes',
        'Food Packaging',
        'Bottles & Containers',
        'Labels & Stickers',
        'Flexible Packaging',
      ],
      suppliers: '900+',
    },
    {
      id: 'home',
      icon: Utensils,
      name: 'Home & Garden',
      description: 'Home improvement products, garden equipment, and household items.',
      products: [
        'Kitchenware',
        'Home Decor',
        'Bedding & Linens',
        'Garden Equipment',
        'Cleaning Supplies',
        'Bathroom Accessories',
        'Pet Supplies',
        'Home Organization',
      ],
      suppliers: '1,500+',
    },
    {
      id: 'automotive',
      icon: Car,
      name: 'Automotive',
      description: 'Vehicle parts, accessories, and automotive components.',
      products: [
        'Auto Parts',
        'Car Accessories',
        'Motorcycle Parts',
        'Tires & Wheels',
        'Electronics & GPS',
        'Interior Accessories',
        'Tools & Equipment',
        'Battery & Electrical',
      ],
      suppliers: '1,400+',
    },
    {
      id: 'fashion',
      icon: ShoppingBag,
      name: 'Fashion & Accessories',
      description: 'Fashion accessories, bags, jewelry, and lifestyle products.',
      products: [
        'Bags & Luggage',
        'Jewelry & Watches',
        'Sunglasses',
        'Scarves & Hats',
        'Leather Goods',
        'Belts & Wallets',
        'Hair Accessories',
        'Costume Jewelry',
      ],
      suppliers: '2,100+',
    },
    {
      id: 'toys',
      icon: Gem,
      name: 'Toys & Games',
      description: 'Children\'s toys, games, and recreational products.',
      products: [
        'Educational Toys',
        'Electronic Toys',
        'Plush Toys',
        'Outdoor Toys',
        'Board Games',
        'Puzzles',
        'Action Figures',
        'Baby Toys',
      ],
      suppliers: '1,100+',
    },
  ];

  const capabilities = [
    {
      title: 'Supplier Verification',
      description: 'All suppliers in our network undergo rigorous verification including business license checks, factory visits, and financial stability assessment.',
    },
    {
      title: 'Quality Control',
      description: 'Professional QC inspections at pre-production, during production, and pre-shipment stages ensure consistent quality.',
    },
    {
      title: 'Competitive Pricing',
      description: 'Direct access to manufacturers means better pricing. We negotiate on your behalf to get the best terms.',
    },
    {
      title: 'Fast Turnaround',
      description: 'Our established supplier relationships mean faster sample production and production timelines.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)] text-white py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Products We Source
            </h1>
            <p className="text-xl text-gray-200">
              We have established relationships with verified suppliers across a wide range of industries. Find the right manufacturer for your product needs.
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="section bg-[var(--color-background)]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((category, index) => (
              <div key={index} id={category.id} className="card overflow-hidden">
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-[var(--color-primary)]/10 rounded-lg flex items-center justify-center">
                      <category.icon className="w-7 h-7 text-[var(--color-primary)]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{category.name}</h3>
                      <p className="text-sm text-[var(--color-text-muted)]">{category.suppliers} suppliers</p>
                    </div>
                  </div>
                  <p className="text-[var(--color-text-secondary)] mb-6">
                    {category.description}
                  </p>
                  <ul className="space-y-2">
                    {category.products.slice(0, 4).map((product, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
                        <CheckCircle className="w-4 h-4 text-[var(--color-success)]" />
                        {product}
                      </li>
                    ))}
                    {category.products.length > 4 && (
                      <li className="text-sm text-[var(--color-primary)] font-medium">
                        +{category.products.length - 4} more products
                      </li>
                    )}
                  </ul>
                </div>
                <div className="bg-[var(--color-background)] px-8 py-4 border-t border-[var(--color-border)]">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-[var(--color-primary)] font-medium"
                  >
                    Request Quote for {category.name} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Sourcing Capabilities</h2>
            <p className="text-lg text-[var(--color-text-secondary)]">
              No matter what products you need, we have the expertise and network to find the right suppliers
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="card p-8">
                <h3 className="text-xl font-semibold mb-3">{capability.title}</h3>
                <p className="text-[var(--color-text-secondary)]">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Sourcing */}
      <section className="section bg-[var(--color-background)]">
        <div className="container">
          <div className="card p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Don't See What You're Looking For?</h2>
                <p className="text-lg text-[var(--color-text-secondary)] mb-6">
                  We have access to thousands of suppliers beyond our listed categories. Tell us what you need, and we'll find the right manufacturer for you.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[var(--color-success)]" />
                    <span>Custom product development</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[var(--color-success)]" />
                    <span>ODM and OEM services</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[var(--color-success)]" />
                    <span>Private labeling and branding</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[var(--color-success)]" />
                    <span>Sourcing from trade shows</span>
                  </li>
                </ul>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-[var(--color-secondary)] text-white px-8 py-3 rounded font-semibold hover:bg-[#9b2c2c] transition-colors"
                >
                  Describe Your Product Needs <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
              <div className="hidden lg:block">
                <div 
                  className="aspect-square bg-gray-200 rounded-lg"
                  data-strk-bg-id="custom-sourcing-bg"
                  data-strk-bg="custom product manufacturing factory"
                  data-strk-bg-ratio="1x1"
                  data-strk-bg-width="600"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)] text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Find Your Supplier?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Tell us what products you need, and we'll connect you with verified manufacturers in China.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[var(--color-secondary)] text-white px-10 py-4 rounded font-semibold text-lg hover:bg-[#9b2c2c] transition-colors"
            >
              Start Sourcing Now
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;