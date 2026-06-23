import { Link } from 'react-router-dom';
import { ArrowRight, Laptop, Shirt, Home, Wrench, Package, Car, Heart, Gift, Phone, Watch, Camera, Headphones } from 'lucide-react';

const Products = () => {
  const categories = [
    {
      name: 'Electronics & Gadgets',
      icon: Laptop,
      products: ['Smartphones', 'Tablets', 'Laptops', 'Smart Home Devices', 'Wearable Tech', 'Accessories'],
      description: 'From consumer electronics to smart devices, we source quality electronics from verified manufacturers.'
    },
    {
      name: 'Textiles & Garments',
      icon: Shirt,
      products: ['Casual Wear', 'Sportswear', 'Formal Attire', 'Kids Clothing', 'Activewear', 'Uniforms'],
      description: 'Find reliable textile manufacturers for apparel, fabrics, and fashion accessories.'
    },
    {
      name: 'Home & Garden',
      icon: Home,
      products: ['Furniture', 'Lighting', 'Decor', 'Kitchenware', 'Bedding', 'Outdoor Equipment'],
      description: 'Source quality home products from furniture to decorative items and garden equipment.'
    },
    {
      name: 'Industrial Equipment',
      icon: Wrench,
      products: ['Machinery', 'Tools', 'Safety Equipment', 'Industrial Parts', 'Electrical Components'],
      description: 'Connect with manufacturers specializing in industrial and B2B products.'
    },
    {
      name: 'Packaging Materials',
      icon: Package,
      products: ['Boxes', 'Bags', 'Labels', 'Bottles', 'Containers', 'Custom Packaging'],
      description: 'Find packaging solutions for retail, food, and industrial applications.'
    },
    {
      name: 'Automotive Parts',
      icon: Car,
      products: ['Spare Parts', 'Accessories', 'Electronics', 'Interior Items', 'Body Parts'],
      description: 'Source automotive components from specialized manufacturers with quality certifications.'
    },
    {
      name: 'Health & Beauty',
      icon: Heart,
      products: ['Skincare', 'Cosmetics', 'Hair Care', 'Personal Care', 'Wellness Products'],
      description: 'Find GMP-certified manufacturers for health and beauty products.'
    },
    {
      name: 'Toys & Gifts',
      icon: Gift,
      products: ['Educational Toys', 'Plush Toys', 'Electronic Toys', 'Party Supplies', 'Seasonal Gifts'],
      description: 'Source fun and safe toys and gifts from quality-conscious manufacturers.'
    }
  ];

  const additionalCategories = [
    'Sports Equipment',
    'Jewelry & Watches',
    'Pet Supplies',
    'Office Supplies',
    'Food & Beverage Equipment',
    'Security Products'
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Products We Source
          </h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            We have expertise across a wide range of product categories. 
            If you don't see your product here, just ask.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-start mb-4">
                  <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                    <category.icon className="w-7 h-7 text-blue-900" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{category.name}</h3>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <div className="flex flex-wrap gap-2">
                  {category.products.map((product, i) => (
                    <span key={i} className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm text-gray-600">
                      {product}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Other Categories We Cover</h2>
            <p className="text-gray-600">Don't see your product? We likely source it too.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {additionalCategories.map((category, index) => (
              <span key={index} className="px-6 py-3 bg-white border border-gray-200 rounded-full text-gray-700 font-medium">
                {category}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Sourcing Any Product</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Even if your product category isn't listed, we can help. Our network of suppliers 
              covers virtually every industry. Contact us with your requirements.
            </p>
          </div>
          <div className="text-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors"
            >
              Tell Us What You Need
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;