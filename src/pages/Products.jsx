import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { 
  Cpu, Home, Dumbbell, Shirt, Settings, Package, 
  ArrowRight, CheckCircle, Phone
} from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const categories = [
  {
    icon: Cpu,
    title: 'Electronics & Components',
    desc: 'Consumer electronics, components, PCBs, LED products, and tech accessories.',
    products: [
      'Smart home devices',
      'Consumer electronics',
      'Electronic components',
      'LED lighting',
      'Phone accessories',
      'Computer peripherals',
    ],
    image: 'electronics manufacturing circuit board'
  },
  {
    icon: Home,
    title: 'Home & Garden',
    desc: 'Furniture, home decor, kitchenware, outdoor equipment, and garden supplies.',
    products: [
      'Home furniture',
      'Kitchen appliances',
      'Home decor items',
      'Garden tools',
      'Outdoor furniture',
      'Storage solutions',
    ],
    image: 'home furniture manufacturing'
  },
  {
    icon: Dumbbell,
    title: 'Sports & Outdoor',
    desc: 'Fitness equipment, sporting goods, camping gear, and outdoor recreation products.',
    products: [
      'Fitness equipment',
      'Sports equipment',
      'Camping gear',
      'Bicycle parts',
      'Yoga accessories',
      'Outdoor apparel',
    ],
    image: 'sports equipment manufacturing'
  },
  {
    icon: Shirt,
    title: 'Fashion & Accessories',
    desc: 'Clothing, footwear, bags, jewelry, and fashion accessories.',
    products: [
      'Apparel manufacturing',
      'Shoes and footwear',
      'Bags and luggage',
      'Fashion jewelry',
      'Watches and accessories',
      'Textile products',
    ],
    image: 'textile manufacturing clothing'
  },
  {
    icon: Settings,
    title: 'Industrial Equipment',
    desc: 'Machinery, tools, industrial components, and manufacturing equipment.',
    products: [
      'Industrial machinery',
      'Power tools',
      'Mechanical components',
      'Safety equipment',
      'Industrial automation',
      'Metal fabrication',
    ],
    image: 'industrial manufacturing machinery'
  },
  {
    icon: Package,
    title: 'Packaging Materials',
    desc: 'Packaging solutions for various industries including food, retail, and shipping.',
    products: [
      'Paper packaging',
      'Plastic containers',
      'Metal packaging',
      'Eco-friendly options',
      'Custom printing',
      'Shipping materials',
    ],
    image: 'packaging manufacturing materials'
  },
]

const additionalCategories = [
  'Toys & Games',
  'Health & Beauty',
  'Automotive Parts',
  'Office Supplies',
  'Pet Products',
  'Food Processing Equipment',
  'Building Materials',
  'Medical Supplies',
]

const Products = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="badge bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 mb-4">Products We Source</span>
            <h1 className="heading-xl mb-6">Wide Range of Product Categories</h1>
            <p className="text-lead text-slate-300 mb-8">
              We have established relationships with verified manufacturers across diverse industries. Whether you're looking for consumer goods, industrial components, or specialized products, we can help you find the right suppliers.
            </p>
            <Link to="/contact" className="btn-primary bg-cyan-600 text-white hover:bg-cyan-700">
              Start Your Search
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Main Categories */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="badge mb-4">Core Categories</span>
            <h2 className="heading-lg mb-4">Our Primary Product Sourcing Categories</h2>
            <p className="section-subtitle">
              These are our most active categories where we have strong supplier relationships and deep expertise.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm card-hover">
                <div className="h-48 relative overflow-hidden">
                  <div 
                    className="absolute inset-0"
                    data-strk-bg-id={`product-cat-bg-${i}`}
                    data-strk-bg={`[product-cat-title-${i}]`}
                    data-strk-bg-ratio="16x9"
                    data-strk-bg-width="600"
                  />
                  <span id={`product-cat-title-${i}`} className="hidden">{category.image}</span>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-slate-900 text-lg mb-2">{category.title}</h3>
                  <p className="text-sm text-slate-600 mb-4">{category.desc}</p>
                  <ul className="space-y-2">
                    {category.products.map((product, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-slate-700">
                        <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                        {product}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Categories */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="badge mb-4">More Options</span>
              <h2 className="heading-lg mb-4">Don't See Your Product?</h2>
              <p className="text-slate-600 mb-6">
                We source a wide variety of products beyond our core categories. If you need something specific, contact us - there's a good chance we can help.
              </p>
              <p className="text-slate-600 mb-6">
                Our supplier network spans thousands of factories across China, and we're constantly expanding our connections. No matter what you're looking for, we can help you find the right manufacturer.
              </p>
              <Link to="/contact" className="btn-primary">
                Contact Us About Your Product
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
            <div className="bg-slate-50 rounded-2xl p-8">
              <h3 className="font-semibold text-slate-900 mb-6">Other Categories We Source</h3>
              <div className="grid grid-cols-2 gap-4">
                {additionalCategories.map((category, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-cyan-600" />
                    </div>
                    <span className="text-slate-700">{category}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="badge mb-4">How It Works</span>
            <h2 className="heading-lg mb-4">Sourcing Any Product in 5 Steps</h2>
            <p className="section-subtitle">
              Our process works the same regardless of what you're sourcing. Here's how we help you find any product in China.
            </p>
          </div>
          <div className="grid md:grid-cols-5 gap-4">
            {[
              { num: '1', title: 'Tell Us What You Need', desc: 'Submit your product requirements' },
              { num: '2', title: 'We Find Suppliers', desc: 'Identify and verify factories' },
              { num: '3', title: 'Review Options', desc: 'Compare quotes and samples' },
              { num: '4', title: 'We Manage Production', desc: 'QC and production follow-up' },
              { num: '5', title: 'Delivery', desc: 'Shipping and customs handled' },
            ].map((step, i) => (
              <div key={i} className="bg-white rounded-xl p-6 text-center">
                <div className="w-10 h-10 bg-cyan-600 text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                  {step.num}
                </div>
                <h3 className="font-semibold text-slate-900 mb-1">{step.title}</h3>
                <p className="text-sm text-slate-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-cyan-600 to-cyan-700 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-4">Ready to Find Your Suppliers?</h2>
          <p className="text-lead text-cyan-100 mb-8 max-w-2xl mx-auto">
            Tell us what products you're looking for. We'll identify verified suppliers and provide quotes within 48 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary bg-white text-cyan-700 hover:bg-cyan-50">
              Start Your Product Search
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <a href="tel:+8615012345678" className="btn-outline border-white/30 text-white hover:bg-white/10">
              <Phone className="w-5 h-5 mr-2" />
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Products