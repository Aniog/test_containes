import { Link } from 'react-router-dom';
import { 
  ArrowRight, Cpu, Shirt, Home, Wrench, Package, 
  Heart, Gift, Car, Sofa, Dumbbell, Sparkles
} from 'lucide-react';

const ProductsPage = () => {
  const categories = [
    {
      icon: <Cpu size={36} />,
      name: 'Electronics & Gadgets',
      description: 'Consumer electronics, smart devices, circuit boards, and electronic components.',
      examples: ['Smartphones', 'Tablets', 'Wearable Devices', 'Smart Home Products', 'LED Lighting', 'Power Banks']
    },
    {
      icon: <Shirt size={36} />,
      name: 'Textiles & Apparel',
      description: 'Garments, fabrics, and fashion accessories for all markets.',
      examples: ['Casual Wear', 'Sports Apparel', 'Formal Dresses', 'Children\'s Clothing', 'Fabrics & Materials', 'Fashion Accessories']
    },
    {
      icon: <Home size={36} />,
      name: 'Home & Garden',
      description: 'Products for home improvement, decoration, and outdoor living.',
      examples: ['Kitchenware', 'Home Decor', 'Bedding', 'Garden Tools', 'Furniture', 'Storage Solutions']
    },
    {
      icon: <Wrench size={36} />,
      name: 'Industrial Equipment',
      description: 'Machinery, tools, and industrial components.',
      examples: ['Power Tools', 'Machinery Parts', 'Safety Equipment', 'Industrial Sensors', 'Motors', 'Hydraulic Components']
    },
    {
      icon: <Package size={36} />,
      name: 'Packaging Materials',
      description: 'All types of packaging solutions for various industries.',
      examples: ['Cardboard Boxes', 'Plastic Packaging', 'Paper Products', 'Labels & Stickers', 'Bottles & Containers', 'Flexible Packaging']
    },
    {
      icon: <Heart size={36} />,
      name: 'Health & Beauty',
      description: 'Beauty products, personal care items, and health supplements.',
      examples: ['Skincare Products', 'Hair Care', 'Cosmetics', 'Personal Care', 'Health Supplements', 'Medical Devices']
    },
    {
      icon: <Gift size={36} />,
      name: 'Toys & Gifts',
      description: 'Toys, games, promotional items, and giftware.',
      examples: ['Educational Toys', 'Plush Toys', 'Board Games', 'Promotional Gifts', 'Seasonal Decorations', 'Craft Supplies']
    },
    {
      icon: <Car size={36} />,
      name: 'Automotive Parts',
      description: 'Vehicle parts, accessories, and components.',
      examples: ['Car Electronics', 'Interior Parts', 'Exterior Accessories', 'Engine Components', 'Tires & Wheels', 'Car Care Products']
    },
    {
      icon: <Sofa size={36} />,
      name: 'Furniture',
      description: 'All types of furniture for home and commercial use.',
      examples: ['Office Furniture', 'Living Room Furniture', 'Bedroom Furniture', 'Outdoor Furniture', 'Kids Furniture', 'Hotel Furniture']
    },
    {
      icon: <Dumbbell size={36} />,
      name: 'Sports & Outdoor',
      description: 'Sports equipment, fitness products, and outdoor gear.',
      examples: ['Fitness Equipment', 'Camping Gear', 'Water Sports', 'Cycling Products', 'Team Sports', 'Outdoor Accessories']
    },
    {
      icon: <Sparkles size={36} />,
      name: 'Jewelry & Watches',
      description: 'Fashion jewelry, watches, and accessories.',
      examples: ['Fashion Jewelry', 'Watches', 'Fine Jewelry', 'Body Jewelry', 'Watch Parts', 'Jewelry Materials']
    },
    {
      icon: <Package size={36} />,
      name: 'Other Products',
      description: 'If you don\'t see your product category, contact us anyway.',
      examples: ['Custom Manufacturing', 'Prototype Development', 'Specialized Products', 'Unique Requirements']
    }
  ];

  const regions = [
    { name: 'Guangdong', specialties: 'Electronics, Textiles, Toys, Machinery' },
    { name: 'Zhejiang', specialties: 'Hardware, Packaging, Furniture, Textiles' },
    { name: 'Jiangsu', specialties: 'Machinery, Textiles, Chemical Products' },
    { name: 'Shandong', specialties: 'Food Processing, Machinery, Textiles' },
    { name: 'Fujian', specialties: 'Shoes, Textiles, Food Products' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section style={{ 
        backgroundColor: '#0F172A', 
        padding: '160px 0 80px',
      }}>
        <div className="container">
          <div style={{ maxWidth: '800px' }}>
            <h1 style={{ color: '#FFFFFF', marginBottom: '24px', fontSize: '48px' }}>
              Products We Source
            </h1>
            <p style={{ color: '#94A3B8', fontSize: '20px', lineHeight: '1.6' }}>
              We source a wide variety of products from verified Chinese manufacturers. 
              Find your product category below or contact us for custom requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-8">
            <h2 style={{ marginBottom: '16px' }}>Product Categories</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '18px' }}>
              Browse our main product categories. We have expertise across multiple industries.
            </p>
          </div>
          
          <div className="grid grid-3">
            {categories.map((category, index) => (
              <div 
                key={index} 
                className="card" 
                style={{ 
                  display: 'flex', 
                  flexDirection: 'column',
                  height: '100%'
                }}
              >
                <div style={{ 
                  width: '64px', 
                  height: '64px', 
                  backgroundColor: '#FFF5EB', 
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px',
                  color: '#E67E22'
                }}>
                  {category.icon}
                </div>
                <h3 style={{ marginBottom: '12px' }}>{category.name}</h3>
                <p style={{ fontSize: '14px', marginBottom: '16px', flex: 1 }}>{category.description}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {category.examples.slice(0, 4).map((example, idx) => (
                    <span 
                      key={idx}
                      style={{ 
                        backgroundColor: '#F8FAFC',
                        padding: '4px 10px',
                        borderRadius: '4px',
                        fontSize: '12px',
                        color: '#64748B'
                      }}
                    >
                      {example}
                    </span>
                  ))}
                  {category.examples.length > 4 && (
                    <span style={{ 
                      backgroundColor: '#F8FAFC',
                      padding: '4px 10px',
                      borderRadius: '4px',
                      fontSize: '12px',
                      color: '#E67E22',
                      fontWeight: '500'
                    }}>
                      +{category.examples.length - 4} more
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Regions */}
      <section className="section" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="container">
          <div className="text-center mb-8">
            <h2 style={{ marginBottom: '16px' }}>Manufacturing Regions</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '18px' }}>
              China's main manufacturing hubs and their specializations
            </p>
          </div>
          
          <div className="grid grid-5">
            {regions.map((region, index) => (
              <div 
                key={index}
                style={{ 
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E2E8F0',
                  borderRadius: '8px',
                  padding: '20px',
                  textAlign: 'center'
                }}
              >
                <h4 style={{ marginBottom: '8px', color: '#1E3A5F' }}>{region.name}</h4>
                <p style={{ fontSize: '13px', margin: 0, color: '#64748B' }}>{region.specialties}</p>
              </div>
            ))}
          </div>
          
          <p style={{ 
            textAlign: 'center', 
            marginTop: '24px', 
            fontSize: '14px', 
            color: '#64748B' 
          }}>
            Our team has presence in all major manufacturing regions across China
          </p>
        </div>
      </section>

      {/* Custom Sourcing */}
      <section className="section">
        <div className="container">
          <div style={{ 
            backgroundColor: '#1E3A5F',
            borderRadius: '16px',
            padding: '64px',
            textAlign: 'center'
          }}>
            <h2 style={{ color: '#FFFFFF', marginBottom: '16px' }}>Don't See Your Product?</h2>
            <p style={{ color: '#94A3B8', fontSize: '18px', marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px' }}>
              We have extensive networks across various industries. Contact us with your specific requirements 
              and we'll find the right suppliers for you.
            </p>
            <Link to="/contact" className="btn btn-primary" style={{ padding: '16px 32px', fontSize: '18px' }}>
              Discuss Your Requirements <ArrowRight size={20} style={{ marginLeft: '8px' }} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;