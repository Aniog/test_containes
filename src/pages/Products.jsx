import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Cpu, Sofa, Shirt, Package, Car, Heart, Box, ShoppingBag, Laptop, Smartphone, Watch, Headphones, Lamp, Utensils, Baby, Sparkles } from 'lucide-react'

const categories = [
  {
    icon: Cpu,
    name: "Electronics",
    products: ["Smart Home Devices", "Consumer Electronics", "LED Lighting", "Power Banks", "Chargers & Cables", "Audio Equipment"],
    description: "From consumer electronics to smart devices, we help you source quality electronic products from verified manufacturers."
  },
  {
    icon: Sofa,
    name: "Furniture",
    products: ["Office Furniture", "Home Furniture", "Outdoor Furniture", "Hotel Furniture", "Custom Furniture", "Furniture Components"],
    description: "Find reliable furniture manufacturers for residential, commercial, and hospitality projects."
  },
  {
    icon: Shirt,
    name: "Textiles & Apparel",
    products: ["Casual Wear", "Sportswear", "Workwear", "Fashion Accessories", "Home Textiles", "Industrial Textiles"],
    description: "Source quality apparel and textile products from experienced manufacturers with modern facilities."
  },
  {
    icon: Package,
    name: "Packaging",
    products: ["Paper Packaging", "Plastic Packaging", "Gift Boxes", "Corrugated Boxes", "Flexible Packaging", "Custom Packaging"],
    description: "Find packaging solutions that protect your products and enhance your brand presentation."
  },
  {
    icon: Car,
    name: "Automotive Parts",
    products: ["Auto Accessories", "Replacement Parts", "Electronics Components", "Interior Parts", "Exterior Parts", "Tools & Equipment"],
    description: "Connect with automotive parts manufacturers meeting international quality standards."
  },
  {
    icon: Heart,
    name: "Health & Beauty",
    products: ["Skincare Products", "Hair Care", "Makeup & Cosmetics", "Personal Care", "Beauty Devices", "Health Supplements"],
    description: "Source beauty and health products from GMP-certified manufacturers."
  },
  {
    icon: Box,
    name: "Home & Garden",
    products: ["Kitchenware", "Home Decor", "Garden Tools", "Pet Supplies", "Cleaning Products", "Storage Solutions"],
    description: "Find a wide range of home and garden products from established manufacturers."
  },
  {
    icon: ShoppingBag,
    name: "Bags & Luggage",
    products: ["Backpacks", "Travel Bags", "Fashion Bags", "Luggage", "Wallet & Purses", "Promotional Bags"],
    description: "Source quality bags and luggage from manufacturers with export experience."
  },
  {
    icon: Laptop,
    name: "Computer & Office",
    products: ["Computer Accessories", "Office Supplies", "Stationery", "Printers & Scanners", "Storage Devices", "Networking Equipment"],
    description: "Find office and computer equipment from verified suppliers with competitive pricing."
  },
  {
    icon: Baby,
    name: "Toys & Baby Products",
    products: ["Educational Toys", "Electronic Toys", "Baby Furniture", "Baby Care Products", "Kids Clothing", "Baby Feeding"],
    description: "Source safe, quality toys and baby products from certified manufacturers."
  },
  {
    icon: Lamp,
    name: "Lights & Lighting",
    products: ["LED Lights", "Indoor Lighting", "Outdoor Lighting", "Commercial Lighting", "Smart Lighting", "Lighting Components"],
    description: "Find lighting solutions for residential, commercial, and industrial applications."
  },
  {
    icon: Utensils,
    name: "Kitchenware",
    products: ["Cookware", "Cutlery", "Kitchen Tools", "Food Storage", "Drinkware", "Kitchen Appliances"],
    description: "Source quality kitchen products from manufacturers specializing in housewares."
  }
]

const Products = () => {
  return (
    <div>
      <Helmet>
        <title>Products We Source | China Sourcing Categories | SSourcing China</title>
        <meta name="description" content="We source a wide range of products from China including electronics, furniture, textiles, packaging, automotive parts, and more." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Products We Source
            </h1>
            <p className="text-lg text-slate-600">
              We have established relationships with verified manufacturers across various industries. Find the right supplier for your product needs.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <category.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{category.name}</h3>
                <p className="text-slate-600 mb-4 text-sm">{category.description}</p>
                <div className="flex flex-wrap gap-2">
                  {category.products.slice(0, 4).map((product, idx) => (
                    <span key={idx} className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs text-slate-600">
                      {product}
                    </span>
                  ))}
                  {category.products.length > 4 && (
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                      +{category.products.length - 4} more
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Sourcing */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-600 rounded-2xl p-8 lg:p-12 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Don't See Your Product Category?
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              We have access to a vast network of manufacturers beyond these categories. Contact us to discuss your specific sourcing needs.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-colors"
            >
              Discuss Your Needs
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Products