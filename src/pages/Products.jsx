import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle,
  Monitor,
  Shirt,
  Sofa,
  Watch,
  Gift,
  Briefcase,
  Home,
  Heart,
  Cpu,
  Package
} from 'lucide-react';

const categories = [
  {
    icon: Monitor,
    name: 'Electronics & Tech',
    description: 'Consumer electronics, components, gadgets, and tech accessories',
    products: ['Smartphones & Tablets', 'Laptops & Computers', 'Audio Equipment', 'LED Lighting', 'Computer Accessories', 'Smart Home Devices'],
    image: 'Electronics manufacturing assembly line',
  },
  {
    icon: Shirt,
    name: 'Apparel & Fashion',
    description: 'Clothing, footwear, accessories, and textile products',
    products: ['Casual Wear', 'Sportswear', 'Formal Attire', 'Shoes & Footwear', 'Bags & Luggage', 'Fashion Accessories'],
    image: 'Textile manufacturing factory production',
  },
  {
    icon: Sofa,
    name: 'Home & Furniture',
    description: 'Furniture, home decor, kitchenware, and household items',
    products: ['Living Room Furniture', 'Bedroom Sets', 'Kitchen Cabinets', 'Home Decor', 'Bathroom Fixtures', 'Outdoor Furniture'],
    image: 'Furniture manufacturing workshop',
  },
  {
    icon: Watch,
    name: 'Watches & Jewelry',
    description: 'Timepieces, jewelry, accessories, and precious items',
    products: ['Smart Watches', 'Fashion Watches', 'Costume Jewelry', 'Fine Jewelry', 'Eyewear', 'Leather Goods'],
    image: 'Watch manufacturing quality control',
  },
  {
    icon: Gift,
    name: 'Gift & Promotional',
    description: 'Promotional items, gifts, crafts, and seasonal products',
    products: ['Custom Promo Items', 'Festival Decorations', 'Craft Supplies', 'Party Supplies', 'Stationery', 'Trophy & Awards'],
    image: 'Gift manufacturing packaging',
  },
  {
    icon: Briefcase,
    name: 'Bags & Cases',
    description: 'Bags, luggage, cases, and carrying solutions',
    products: ['Backpacks', 'Travel Luggage', 'Laptop Bags', 'Handbags', 'Wallet & Card Holders', 'Sport Bags'],
    image: 'Leather bag manufacturing workshop',
  },
  {
    icon: Home,
    name: 'Garden & Outdoor',
    description: 'Outdoor equipment, garden tools, and patio items',
    products: ['Garden Tools', 'Outdoor Lighting', 'Patio Furniture', 'BBQ Equipment', 'Camping Gear', 'Pool Supplies'],
    image: 'Garden equipment warehouse',
  },
  {
    icon: Heart,
    name: 'Health & Beauty',
    description: 'Personal care, beauty products, and wellness items',
    products: ['Skincare Products', 'Hair Care', 'Makeup & Cosmetics', 'Fitness Equipment', 'Health Supplements', 'Personal Care Devices'],
    image: 'Beauty product manufacturing lab',
  },
  {
    icon: Cpu,
    name: 'Industrial & Tools',
    description: 'Tools, machinery, industrial equipment, and components',
    products: ['Power Tools', 'Hand Tools', 'Industrial Machinery', 'Electronic Components', 'Hardware Supplies', 'Safety Equipment'],
    image: 'Industrial manufacturing machinery',
  },
];

const CategoryCard = ({ category, index }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden border border-slate-200 card-hover">
      <div className="h-48 img-placeholder relative overflow-hidden">
        <img 
          data-strk-img-id={`category-${index}-img-mno789`}
          data-strk-img={`[category-${index}-name] [category-${index}-desc]`}
          data-strk-img-ratio="16x9"
          data-strk-img-width="400"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={category.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
            <category.icon className="w-6 h-6 text-blue-600" />
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 id={`category-${index}-name`} className="text-xl font-semibold text-slate-900 mb-2">
          {category.name}
        </h3>
        <p id={`category-${index}-desc`} className="text-slate-600 text-sm mb-4">
          {category.description}
        </p>
        <div className="space-y-2">
          {category.products.slice(0, 4).map((product, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-slate-600">
              <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
              <span>{product}</span>
            </div>
          ))}
          {category.products.length > 4 && (
            <span className="text-sm text-blue-600 font-medium">+{category.products.length - 4} more</span>
          )}
        </div>
      </div>
    </div>
  );
};

const Products = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Products We Source
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              From electronics to furniture, we have expertise across 50+ product categories. Whatever you need manufactured, we can help.
            </p>
            <Link to="/contact" className="btn-primary text-lg px-8 py-4">
              Request a Product <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-slate-50">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mx-auto mb-3">
                <Package className="w-7 h-7 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-slate-900">50+</div>
              <div className="text-sm text-slate-600">Product Categories</div>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-7 h-7 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-slate-900">1000+</div>
              <div className="text-sm text-slate-600">Verified Suppliers</div>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mx-auto mb-3">
                <Monitor className="w-7 h-7 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-slate-900">5+</div>
              <div className="text-sm text-slate-600">Major Industries</div>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mx-auto mb-3">
                <Shirt className="w-7 h-7 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-slate-900">Global</div>
              <div className="text-sm text-slate-600">Shipping Coverage</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="badge badge-primary mb-4">Product Range</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Explore Our Sourcing Categories
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We source products across a wide range of industries. Click on any category to learn more about what we can help you source.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <CategoryCard key={category.name} category={category} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Can't Find Section */}
      <section className="section-spacing bg-slate-50">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-blue-600 to-teal-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Don't See Your Product?
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              We source products across many categories beyond what's listed here. If you don't see your product, just ask. There's a good chance we can help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center gap-2">
                Request a Quote <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/how-it-works" className="bg-white/10 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-colors inline-flex items-center justify-center gap-2 border border-white/20">
                Learn How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              How We Source Your Products
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Regardless of the product category, our sourcing process remains thorough and systematic.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Research</h3>
              <p className="text-sm text-slate-600">Identify suitable suppliers for your product</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Verify</h3>
              <p className="text-sm text-slate-600">Factory audits and credential checks</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Produce</h3>
              <p className="text-sm text-slate-600">Quality-controlled manufacturing</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">4</span>
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Deliver</h3>
              <p className="text-sm text-slate-600">Safe shipping to your location</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing bg-slate-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Source Your Products?
          </h2>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            Get a free quote for your sourcing needs. Tell us what you're looking for, and we'll find the right suppliers for you.
          </p>
          <Link to="/contact" className="btn-primary text-lg px-8 py-4">
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;
