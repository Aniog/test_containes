import { Link } from 'react-router-dom'
import { 
  ArrowRight, 
  CheckCircle,
  Smartphone,
  Laptop,
  Cpu,
  Camera,
  Headphones,
  Watch,
  Shirt,
  Scissors,
  Package,
  Sofa,
  Lamp,
  Bed,
  Wrench,
  Car,
  Box,
  TreeDeciduous,
  Dumbbell,
  Utensils,
  Baby,
  Heart
} from 'lucide-react'

const PageHeader = ({ title, subtitle }) => (
  <section className="bg-gradient-to-br from-[#1E3A5F] to-[#2D5A87] text-white py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
      <p className="text-xl text-gray-200 max-w-2xl">{subtitle}</p>
    </div>
  </section>
)

const ProductCategory = ({ icon: Icon, name, description, examples, capabilities }) => (
  <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
    <div className="h-16 bg-[#1E3A5F] flex items-center justify-center">
      <Icon className="w-8 h-8 text-white" />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-[#1A1A2E] mb-2">{name}</h3>
      <p className="text-[#4A5568] text-sm mb-4">{description}</p>
      <div className="mb-4">
        <h4 className="text-sm font-semibold text-[#1A1A2E] mb-2">Common Products:</h4>
        <div className="flex flex-wrap gap-2">
          {examples.map((example, index) => (
            <span 
              key={index} 
              className="px-3 py-1 bg-[#F8FAFC] text-[#4A5568] text-xs rounded-full"
            >
              {example}
            </span>
          ))}
        </div>
      </div>
      <div>
        <h4 className="text-sm font-semibold text-[#1A1A2E] mb-2">Our Capabilities:</h4>
        <ul className="space-y-2">
          {capabilities.map((capability, index) => (
            <li key={index} className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-[#10B981] flex-shrink-0 mt-0.5" />
              <span className="text-[#4A5568] text-sm">{capability}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
)

const Products = () => {
  const categories = [
    {
      icon: Smartphone,
      name: 'Consumer Electronics',
      description: 'Smartphones, tablets, wearables, and accessories',
      examples: ['Smartphones', 'Tablets', 'Smartwatches', 'Wireless Earbuds', 'Power Banks', 'Chargers', 'USB Cables', 'Phone Cases'],
      capabilities: [
        'Factory verification for electronics',
        'Compliance testing (CE, FCC, RoHS)',
        'Quality inspection for electronic components',
        'Functionality testing',
      ],
    },
    {
      icon: Laptop,
      name: 'Computers & Accessories',
      description: 'Laptops, monitors, keyboards, and computer peripherals',
      examples: ['Laptops', 'Monitors', 'Keyboards', 'Mice', 'Webcams', 'USB Hubs', 'External Hard Drives', 'Memory Cards'],
      capabilities: [
        'Performance testing coordination',
        'Compatibility verification',
        'Safety standards compliance',
        'Bulk order management',
      ],
    },
    {
      icon: Shirt,
      name: 'Textiles & Apparel',
      description: 'Garments, fabrics, and fashion accessories',
      examples: ['T-Shirts', 'Jackets', 'Jeans', 'Dresses', 'Sportswear', 'Underwear', 'Socks', 'Scarves'],
      capabilities: [
        'Fabric quality inspection',
        'Color matching accuracy',
        'Size and measurement verification',
        'Social compliance audits',
      ],
    },
    {
      icon: Sofa,
      name: 'Furniture',
      description: 'Home and office furniture, indoor and outdoor',
      examples: ['Sofas', 'Chairs', 'Tables', 'Desks', 'Cabinets', 'Beds', 'Shelves', 'Outdoor Furniture'],
      capabilities: [
        'Structural integrity testing',
        'Material quality inspection',
        'Finish and coating verification',
        'Assembly instruction review',
      ],
    },
    {
      icon: Wrench,
      name: 'Machinery & Equipment',
      description: 'Industrial machinery, tools, and equipment',
      examples: ['Power Tools', 'Agricultural Machinery', 'Construction Equipment', 'Industrial Pumps', 'Motors', 'Generators'],
      capabilities: [
        'Performance testing',
        'Safety standard compliance',
        'Technical specification verification',
        'Operational training coordination',
      ],
    },
    {
      icon: Car,
      name: 'Automotive Parts',
      description: 'Vehicle parts, accessories, and components',
      examples: ['Auto Parts', 'Tires', 'Batteries', 'Lights', 'Mirrors', 'Filters', 'Brake Pads', 'Oil Filters'],
      capabilities: [
        'OEM/ODM manufacturing coordination',
        'Quality control for safety parts',
        'Certification verification',
        'Performance testing',
      ],
    },
    {
      icon: Package,
      name: 'Packaging',
      description: 'All types of packaging materials and solutions',
      examples: ['Cardboard Boxes', 'Paper Bags', 'Plastic Bags', 'Gift Boxes', 'Bubble Wrap', 'Pallet Wrap', 'Labels', 'Tape'],
      capabilities: [
        'Material quality inspection',
        'Print quality verification',
        'Dimensional accuracy',
        'Eco-friendly options sourcing',
      ],
    },
    {
      icon: TreeDeciduous,
      name: 'Home & Garden',
      description: 'Home decor, garden equipment, and outdoor products',
      examples: ['Garden Tools', 'Plant Pots', 'Outdoor Lights', 'Decor', 'Rugs', 'Curtains', 'Bedding', 'Kitchenware'],
      capabilities: [
        'Material durability testing',
        'Weather resistance verification',
        'Safety standard compliance',
        'Aesthetic quality inspection',
      ],
    },
    {
      icon: Dumbbell,
      name: 'Sports & Outdoors',
      description: 'Fitness equipment, outdoor gear, and sporting goods',
      examples: ['Yoga Mats', 'Dumbbells', 'Bicycles', 'Camping Gear', 'Hiking Equipment', 'Sports Balls', 'Fitness Trackers'],
      capabilities: [
        'Durability testing',
        'Safety standard compliance',
        'Material quality inspection',
        'Performance verification',
      ],
    },
    {
      icon: Baby,
      name: 'Baby & Toys',
      description: 'Children products, toys, and baby supplies',
      examples: ['Toys', 'Baby Strollers', 'Car Seats', 'Baby Furniture', 'Educational Toys', 'Plush Toys', 'Building Blocks'],
      capabilities: [
        'Safety standard compliance (EN71, ASTM)',
        'Age-appropriate testing',
        'Material safety verification',
        'Small parts inspection',
      ],
    },
    {
      icon: Utensils,
      name: 'Kitchenware',
      description: 'Cookware, utensils, and kitchen appliances',
      examples: ['Pots', 'Pans', 'Cutlery', 'Kitchen Appliances', 'Blenders', 'Toasters', 'Coffee Makers', 'Storage Containers'],
      capabilities: [
        'Food safety material verification',
        'Heat resistance testing',
        'Durability inspection',
        'Functionality testing',
      ],
    },
    {
      icon: Heart,
      name: 'Health & Beauty',
      description: 'Beauty products, personal care items, and health accessories',
      examples: ['Skincare', 'Hair Care', 'Makeup', 'Personal Care', 'Health Supplements', 'Medical Devices', 'Fitness Equipment'],
      capabilities: [
        'Ingredient safety verification',
        'Quality control for cosmetics',
        'Regulatory compliance',
        'Lab testing coordination',
      ],
    },
  ]

  const capabilities = [
    'Factory verification and audits',
    'Quality inspection at all production stages',
    'Compliance and certification support',
    'Sample approval and testing',
    'Production monitoring and follow-up',
    'Shipping and logistics coordination',
  ]

  return (
    <>
      <PageHeader 
        title="Products We Source" 
        subtitle="Extensive expertise across multiple industries and product categories"
      />

      {/* Categories Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
              Our Product Categories
            </h2>
            <p className="text-lg text-[#4A5568] max-w-2xl mx-auto">
              We have successfully sourced products across a wide range of industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <ProductCategory key={index} {...category} />
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
              Sourcing Capabilities
            </h2>
            <p className="text-lg text-[#4A5568] max-w-2xl mx-auto">
              Whatever product category you need, we have the expertise to help
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm"
              >
                <CheckCircle className="w-5 h-5 text-[#10B981] flex-shrink-0" />
                <span className="text-[#1A1A2E] font-medium">{capability}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Sourcing */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
            Don't See Your Product?
          </h2>
          <p className="text-lg text-[#4A5568] mb-8">
            We have extensive networks across many industries. Contact us to discuss your specific sourcing needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-[#E67E22] text-white font-semibold rounded-lg hover:bg-[#D35400] transition-colors"
          >
            Discuss Your Requirements
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1E3A5F]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Start Your Sourcing Project
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Tell us what you need and we'll find the right suppliers
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-[#E67E22] text-white font-semibold rounded-lg hover:bg-[#D35400] transition-colors"
          >
            Get a Free Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  )
}

export default Products