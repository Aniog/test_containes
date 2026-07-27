import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Boxes, Package, Target, HeartHandshake, Zap, Award,
  ArrowRight, CheckCircle, Search, Globe, Factory
} from 'lucide-react';

export default function Products() {
  const categories = [
    {
      icon: Boxes,
      name: 'Consumer Electronics',
      products: ['Bluetooth speakers', 'Headphones', 'Phone accessories', 'Smart home devices', 'Charging solutions', 'LED lighting'],
      description: 'Source high-quality electronics from certified manufacturers with competitive pricing.',
      supplierCount: '500+',
      image: 'Electronics'
    },
    {
      icon: Package,
      name: 'Home & Garden',
      products: ['Kitchen utensils', 'Storage solutions', 'Garden tools', 'Home decor', 'Bathroom accessories', 'Cleaning supplies'],
      description: 'Find reliable suppliers for home and garden products with custom branding options.',
      supplierCount: '300+',
      image: 'Home'
    },
    {
      icon: Target,
      name: 'Sporting Goods',
      products: ['Fitness equipment', 'Outdoor gear', 'Sports accessories', 'Yoga mats', 'Water bottles', 'Camping equipment'],
      description: 'Access quality sporting goods manufacturers with MOQ flexibility.',
      supplierCount: '200+',
      image: 'Sports'
    },
    {
      icon: HeartHandshake,
      name: 'Health & Beauty',
      products: ['Skincare tools', 'Hair accessories', 'Makeup brushes', 'Wellness products', 'Personal care items', 'Beauty devices'],
      description: 'Source health and beauty products with compliance to international safety standards.',
      supplierCount: '250+',
      image: 'Beauty'
    },
    {
      icon: Zap,
      name: 'Automotive Parts',
      products: ['LED lights', 'Car accessories', 'Tools & equipment', 'Interior accessories', 'Exterior parts', 'Electrical components'],
      description: 'Find certified automotive parts manufacturers with quality certifications.',
      supplierCount: '180+',
      image: 'Auto'
    },
    {
      icon: Award,
      name: 'Industrial Equipment',
      products: ['Machinery parts', 'Tools', 'Safety equipment', 'Packaging solutions', 'Hardware', 'Metal products'],
      description: 'Source industrial products from experienced manufacturers with technical expertise.',
      supplierCount: '150+',
      image: 'Industrial'
    },
    {
      icon: Boxes,
      name: 'Toys & Games',
      products: ['Educational toys', 'Board games', 'Plush toys', 'Outdoor toys', 'Puzzles', 'Electronic toys'],
      description: 'Access toy manufacturers with safety certifications (CE, ASTM, EN71).',
      supplierCount: '220+',
      image: 'Toys'
    },
    {
      icon: Package,
      name: 'Fashion & Apparel',
      products: ['Clothing', 'Bags', 'Accessories', 'Jewelry', 'Shoes', 'Fabrics'],
      description: 'Find fashion manufacturers with flexible MOQ and custom design capabilities.',
      supplierCount: '350+',
      image: 'Fashion'
    },
    {
      icon: Target,
      name: 'Pet Supplies',
      products: ['Pet toys', 'Grooming tools', 'Pet beds', 'Feeding accessories', 'Pet clothing', 'Training equipment'],
      description: 'Source quality pet products from reliable manufacturers.',
      supplierCount: '120+',
      image: 'Pet'
    },
    {
      icon: HeartHandshake,
      name: 'Kitchen & Dining',
      products: ['Cookware', 'Utensils', 'Storage containers', 'Appliances', 'Dinnerware', 'Bakeware'],
      description: 'Find kitchen product manufacturers with food-safe certifications.',
      supplierCount: '190+',
      image: 'Kitchen'
    },
    {
      icon: Zap,
      name: 'Office Supplies',
      products: ['Stationery', 'Desk accessories', 'Organizers', 'Writing instruments', 'Paper products', 'Office decor'],
      description: 'Source office supplies with custom branding and packaging options.',
      supplierCount: '160+',
      image: 'Office'
    },
    {
      icon: Award,
      name: 'Custom Products',
      products: ['Custom designs', 'OEM products', 'ODM solutions', 'Private label', 'Prototyping', 'Small batch production'],
      description: 'We specialize in finding manufacturers for custom and unique product requirements.',
      supplierCount: '400+',
      image: 'Custom'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-600 to-brand-800 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-brand-200 font-semibold text-sm uppercase tracking-wider">Product Categories</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
              Products We Source
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              We source a wide range of products across multiple industries. Our extensive supplier network 
              covers virtually any product category you need.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300 group">
                <div className="h-48 bg-gradient-to-br from-brand-50 to-brand-100 flex items-center justify-center">
                  <category.icon className="w-16 h-16 text-brand-500 group-hover:scale-110 transition-transform" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-slate-900">{category.name}</h3>
                    <span className="text-sm font-medium text-brand-500 bg-brand-50 px-2 py-1 rounded">
                      {category.supplierCount}
                    </span>
                  </div>
                  <p className="text-slate-600 text-sm mb-4">{category.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {category.products.slice(0, 4).map((product, pIndex) => (
                      <span key={pIndex} className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded">
                        {product}
                      </span>
                    ))}
                    {category.products.length > 4 && (
                      <span className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded">
                        +{category.products.length - 4} more
                      </span>
                    )}
                  </div>
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-brand-500 font-medium text-sm hover:text-brand-600 transition-colors"
                  >
                    Inquire About This Category
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Source With Us */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Source Products With Us?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We make sourcing products from China reliable, efficient, and cost-effective.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Search,
                title: 'Extensive Network',
                description: 'Access to 1,000+ verified suppliers across all product categories.'
              },
              {
                icon: CheckCircle,
                title: 'Quality Assured',
                description: 'Rigorous quality control at every stage of production.'
              },
              {
                icon: Globe,
                title: 'Competitive Pricing',
                description: 'Direct factory pricing with 15-30% average cost savings.'
              },
              {
                icon: Factory,
                title: 'Custom Solutions',
                description: 'OEM/ODM capabilities for custom product requirements.'
              }
            ].map((advantage, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center border border-slate-200">
                <div className="w-14 h-14 bg-brand-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <advantage.icon className="w-7 h-7 text-brand-500" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{advantage.title}</h3>
                <p className="text-slate-600 text-sm">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Sourcing Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Don't See Your Product Category?
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                We specialize in finding suppliers for unique and custom product requirements. 
                If you don't see your specific product category listed, that doesn't mean we can't help.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Our team has experience sourcing a wide variety of products beyond our listed categories. 
                Simply tell us what you need, and we'll leverage our network to find the right suppliers.
              </p>
              <div className="space-y-4">
                {[
                  'Custom and unique product sourcing',
                  'Niche market products',
                  'Specialized industrial components',
                  'Custom packaging and branding'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center bg-brand-500 hover:bg-brand-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors mt-8"
              >
                Contact Us for Custom Sourcing
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Our Sourcing Capabilities</h3>
              <div className="space-y-4">
                {[
                  { stat: '40+', label: 'Product Categories' },
                  { stat: '1,000+', label: 'Verified Suppliers' },
                  { stat: '20+', label: 'Provinces Covered' },
                  { stat: '10+', label: 'Years Experience' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg border border-slate-200">
                    <span className="text-slate-700 font-medium">{item.label}</span>
                    <span className="text-2xl font-bold text-brand-500">{item.stat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-brand-600 to-brand-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Source Your Products?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Tell us what you need and we'll find the right suppliers for your business.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg"
          >
            Get a Free Quote
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}
