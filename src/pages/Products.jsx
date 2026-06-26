import { Link } from 'react-router-dom';
import { 
  Laptop, Smartphone, Headphones, Watch, 
  Camera, Speaker, Tv, Wifi,
  Shirt, Scissors, Package, Gem,
  Wrench, Settings, Cpu, Zap,
  Sofa, Lamp, Utensils, Bed,
  ArrowRight, CheckCircle
} from 'lucide-react';

const Products = () => {
  const categories = [
    {
      icon: Laptop,
      title: 'Consumer Electronics',
      description: 'Laptops, tablets, monitors, and computer accessories',
      products: ['Laptops & Tablets', 'Monitors & Displays', 'Computer Accessories', 'Storage Devices', 'Keyboards & Mice']
    },
    {
      icon: Smartphone,
      title: 'Mobile & Communication',
      description: 'Smartphones, wearables, and communication devices',
      products: ['Smartphones', 'Smartwatches', 'Bluetooth Devices', 'Phone Accessories', 'Walkie-Talkies']
    },
    {
      icon: Headphones,
      title: 'Audio & Video',
      description: 'Audio equipment, cameras, and entertainment systems',
      products: ['Headphones & Earbuds', 'Speakers', 'Cameras', 'Projectors', 'TVs & Streaming']
    },
    {
      icon: Shirt,
      title: 'Textiles & Apparel',
      description: 'Garments, fabrics, and fashion accessories',
      products: ['Casual Wear', 'Sportswear', 'Formal Attire', 'Fabrics & Materials', 'Fashion Accessories']
    },
    {
      icon: Wrench,
      title: 'Machinery & Industrial',
      description: 'Industrial equipment, tools, and machinery parts',
      products: ['Power Tools', 'Industrial Machinery', 'Mechanical Parts', 'Electrical Components', 'Safety Equipment']
    },
    {
      icon: Cpu,
      title: 'Electronics Components',
      description: 'Electronic components and circuit boards',
      products: ['Semiconductors', 'PCBs', 'Connectors', 'Sensors', 'LED Components']
    },
    {
      icon: Sofa,
      title: 'Home & Furniture',
      description: 'Furniture, home decor, and household items',
      products: ['Living Room Furniture', 'Bedroom Furniture', 'Home Decor', 'Kitchenware', 'Lighting']
    },
    {
      icon: Package,
      title: 'Packaging & Printing',
      description: 'Packaging materials and printed products',
      products: ['Paper Packaging', 'Plastic Packaging', 'Custom Printing', 'Labels & Stickers', 'Bags']
    }
  ];

  const capabilities = [
    'OEM (Original Equipment Manufacturing)',
    'ODM (Original Design Manufacturing)',
    'Custom specifications and designs',
    'Small batch production',
    'Mass production',
    'Prototype development'
  ];

  const processFeatures = [
    { title: 'Supplier Network', desc: '500+ verified factories in our database' },
    { title: 'Quality Standards', desc: 'ISO 9001, CE, FCC, RoHS compliant' },
    { title: 'MOQ Flexibility', desc: 'From 100 to 100,000+ units' },
    { title: 'Lead Times', desc: 'Typically 15-45 days production' }
  ];

  return (
    <main>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Products We Source</h1>
          <p>
            Extensive experience across multiple product categories with access 
            to hundreds of verified Chinese manufacturers.
          </p>
        </div>
      </section>

      {/* Product Categories */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Product Categories</h2>
          <p className="section-subtitle">
            We source across a wide range of industries and product types
          </p>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(4, 1fr)', 
            gap: '24px',
            marginTop: '48px'
          }}>
            {categories.map((category, index) => (
              <div key={index} style={{
                background: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '16px',
                padding: '32px 24px',
                transition: 'all 0.3s ease'
              }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  background: 'linear-gradient(135deg, #1e3a5f 0%, #2d4a6f 100%)',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                  color: 'white'
                }}>
                  <category.icon size={28} />
                </div>
                <h3 style={{ fontSize: '1.25rem', color: '#1e3a5f', marginBottom: '12px', textAlign: 'center' }}>
                  {category.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '20px', textAlign: 'center' }}>
                  {category.description}
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {category.products.slice(0, 3).map((product, pIndex) => (
                    <li key={pIndex} style={{
                      fontSize: '0.85rem',
                      color: '#555',
                      padding: '6px 0',
                      borderBottom: pIndex < 2 ? '1px solid #f0f0f0' : 'none'
                    }}>
                      {product}
                    </li>
                  ))}
                  {category.products.length > 3 && (
                    <li style={{ fontSize: '0.85rem', color: '#1e3a5f', paddingTop: '8px' }}>
                      +{category.products.length - 3} more
                    </li>
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Capabilities */}
      <section className="section" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <h2 className="section-title">Manufacturing Capabilities</h2>
          <p className="section-subtitle">
            Our factories support various manufacturing arrangements
          </p>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(3, 1fr)', 
            gap: '32px',
            marginTop: '48px'
          }}>
            {capabilities.map((capability, index) => (
              <div key={index} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                background: 'white',
                padding: '24px',
                borderRadius: '12px',
                border: '1px solid #e5e7eb'
              }}>
                <CheckCircle size={24} color="#059669" />
                <span style={{ fontSize: '1rem', color: '#333', fontWeight: 500 }}>
                  {capability}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Features */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Sourcing Specifications</h2>
          <p className="section-subtitle">
            What we need to find the right factory for you
          </p>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(4, 1fr)', 
            gap: '24px',
            marginTop: '48px'
          }}>
            {processFeatures.map((feature, index) => (
              <div key={index} style={{
                background: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '12px',
                padding: '32px 24px',
                textAlign: 'center'
              }}>
                <h3 style={{ fontSize: '1.125rem', color: '#1e3a5f', marginBottom: '8px' }}>
                  {feature.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#666' }}>
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Not Finding What You Need */}
      <section className="section" style={{ background: '#1e3a5f', color: 'white' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '16px', color: 'white' }}>
            Don't See Your Product?
          </h2>
          <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.8)', marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px' }}>
            We have access to thousands of factories across all industries. 
            Contact us with your specific requirements.
          </p>
          <Link to="/contact" className="btn btn-primary" style={{ fontSize: '1.125rem', padding: '16px 32px' }}>
            Discuss Your Requirements <ArrowRight size={20} style={{ marginLeft: '8px' }} />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Products;