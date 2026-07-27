import { Link } from 'react-router-dom';
import { 
  Package, Factory, Building2, BarChart3, Laptop, Shirt, 
  Sofa, Cog, Box, CircuitBoard, ArrowRight, CheckCircle
} from 'lucide-react';
import SectionHeader from '../components/common/SectionHeader';
import CTASection from '../components/common/CTASection';

const Products = () => {
  const categories = [
    {
      id: 'electronics',
      icon: <Laptop className="w-12 h-12" />,
      title: 'Electronics & Components',
      description: 'Consumer electronics, components, and tech accessories from verified manufacturers.',
      products: [
        'Smartphones and tablets',
        'Consumer electronics',
        'PCB and electronic components',
        'LED lighting',
        'Power banks and batteries',
        'Audio equipment',
        'Computer accessories',
        'Smart home devices',
      ],
    },
    {
      id: 'textile',
      icon: <Shirt className="w-12 h-12" />,
      title: 'Textiles & Apparel',
      description: 'Garments, fabrics, and accessories from experienced garment manufacturers.',
      products: [
        'Men\'s and women\'s clothing',
        'Children\'s apparel',
        'Sportswear and activewear',
        'Outdoor and workwear',
        'Fabrics and raw materials',
        'Bags and accessories',
        'Shoes and footwear',
        'Custom textile products',
      ],
    },
    {
      id: 'furniture',
      icon: <Sofa className="w-12 h-12" />,
      title: 'Home Goods & Furniture',
      description: 'Furniture, home décor, and household items for residential and commercial use.',
      products: [
        'Living room furniture',
        'Bedroom furniture',
        'Office furniture',
        'Kitchen and dining',
        'Home décor items',
        'Bedding and linens',
        'Bathroom accessories',
        'Outdoor furniture',
      ],
    },
    {
      id: 'machinery',
      icon: <Cog className="w-12 h-12" />,
      title: 'Machinery & Equipment',
      description: 'Industrial machinery, equipment, and tools for manufacturing and construction.',
      products: [
        'Industrial machinery',
        'Agricultural equipment',
        'Construction tools',
        'Medical equipment',
        'Laboratory instruments',
        'Printing equipment',
        'Packaging machinery',
        'CNC machines',
      ],
    },
    {
      id: 'packaging',
      icon: <Box className="w-12 h-12" />,
      title: 'Packaging Materials',
      description: 'All types of packaging solutions for various industries.',
      products: [
        'Paper packaging',
        'Plastic packaging',
        'Metal packaging',
        'Eco-friendly packaging',
        'Custom printed boxes',
        'Labels and stickers',
        'Bottles and containers',
        'Protective packaging',
      ],
    },
    {
      id: 'parts',
      icon: <CircuitBoard className="w-12 h-12" />,
      title: 'Industrial Parts',
      description: 'Precision parts and components for various industrial applications.',
      products: [
        'Metal parts and components',
        'Plastic parts and moldings',
        'Fasteners and hardware',
        'Rubber parts',
        'Precision machining parts',
        'Hydraulic components',
        'Automotive parts',
        'Custom fabricated parts',
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0f172a] via-[#1e3a5f] to-[#2d4a6f] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Products We Source
            </h1>
            <p className="text-xl text-[#94a3b8]">
              We have extensive experience sourcing a wide range of products from verified Chinese manufacturers across multiple industries.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {categories.map((category) => (
              <div 
                key={category.id} 
                id={category.id}
                className="scroll-mt-24 bg-white border border-[#e2e8f0] rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="bg-gradient-to-r from-[#1e3a5f] to-[#2d4a6f] p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center text-white">
                      {category.icon}
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-white">{category.title}</h2>
                      <p className="text-white/70 text-sm">{category.description}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-3">
                    {category.products.map((product, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-accent-500 flex-shrink-0 mt-0.5 mr-2" />
                        <span className="text-sm text-[#475569]">{product}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Sourcing */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#1e3a5f] to-[#2d4a6f] rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Don't See Your Product?
            </h2>
            <p className="text-[#94a3b8] mb-6">
              We source a wide variety of products beyond what's listed here. If you have specific product requirements, contact us with your details and we'll help you find the right suppliers.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-accent-400 mr-3" />
                <span>Custom product development support</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-accent-400 mr-3" />
                <span>Multi-category sourcing available</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-accent-400 mr-3" />
                <span>Free initial consultation</span>
              </li>
            </ul>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-white text-[#1e3a5f] font-semibold rounded-lg hover:bg-[#f1f5f9] transition-colors"
            >
              Request Custom Sourcing
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Sourcing Process Reminder */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Our Sourcing Process"
            subtitle="No matter what product you're looking for, our proven process ensures quality and reliability"
          />
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: '1',
                title: 'Requirements',
                description: 'Share your product specifications and requirements',
              },
              {
                step: '2',
                title: 'Matching',
                description: 'We find and verify suitable factories',
              },
              {
                step: '3',
                title: 'Inspection',
                description: 'Quality control at every stage',
              },
              {
                step: '4',
                title: 'Delivery',
                description: 'Safe and timely shipping to your door',
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-[#1e3a5f] rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-[#0f172a] mb-2">{item.title}</h3>
                <p className="text-sm text-[#64748b]">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/how-it-works" className="btn-secondary">
              Learn More About Our Process
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Source Your Products?"
        subtitle="Get started with a free consultation. Tell us what you need and we'll find the right suppliers."
        buttonText="Start Your Sourcing Request"
        buttonLink="/contact"
        features={[
          'Free supplier recommendations',
          'No minimum order quantities',
          'Full QC and logistics support',
        ]}
      />
    </div>
  );
};

export default Products;
