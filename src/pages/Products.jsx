import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, Home, Shirt, Wrench, Package, Car, Heart, Dumbbell, ToyBrick, Coffee, Sparkles } from 'lucide-react';

const Products = () => {
  const productCategories = [
    {
      icon: Cpu,
      name: 'Electronics & Technology',
      products: ['Consumer Electronics', 'Smart Devices', 'LED Lighting', 'Computer Accessories', 'Mobile Phone Accessories', 'Audio Equipment'],
    },
    {
      icon: Home,
      name: 'Home & Garden',
      products: ['Kitchenware', 'Home Decor', 'Furniture', 'Bedding & Textiles', 'Garden Tools', 'Storage Solutions'],
    },
    {
      icon: Shirt,
      name: 'Apparel & Textiles',
      products: ['Ready-made Garments', 'Fabric & Materials', 'Fashion Accessories', 'Sportswear', 'Children\'s Clothing', 'Workwear'],
    },
    {
      icon: Wrench,
      name: 'Industrial Equipment',
      products: ['Machinery Parts', 'Tools & Hardware', 'Electrical Components', 'Industrial Sensors', 'Power Tools', 'Safety Equipment'],
    },
    {
      icon: Package,
      name: 'Packaging & Printing',
      products: ['Paper Packaging', 'Plastic Packaging', 'Custom Printing', 'Labels & Stickers', 'Gift Boxes', 'Corrugated Boxes'],
    },
    {
      icon: Car,
      name: 'Automotive',
      products: ['Auto Parts', 'Car Accessories', 'Electronics', 'Interior Accessories', 'Tires & Wheels', 'Car Care Products'],
    },
    {
      icon: Heart,
      name: 'Health & Beauty',
      products: ['Personal Care', 'Beauty Equipment', 'Medical Supplies', 'Fitness Equipment', 'Skincare Products', 'Hair Care'],
    },
    {
      icon: Dumbbell,
      name: 'Sports & Outdoors',
      products: ['Fitness Equipment', 'Camping Gear', 'Outdoor Furniture', 'Sports Accessories', 'Cycling Equipment', 'Water Sports'],
    },
    {
      icon: ToyBrick,
      name: 'Toys & Games',
      products: ['Educational Toys', 'Electronic Toys', 'Plush Toys', 'Building Blocks', 'Outdoor Toys', 'Puzzles'],
    },
    {
      icon: Coffee,
      name: 'Food & Beverage',
      products: ['Kitchen Appliances', 'Coffee Machines', 'Food Processing', 'Restaurant Equipment', 'Barware', 'Storage Containers'],
    },
    {
      icon: Sparkles,
      name: 'Jewelry & Fashion',
      products: ['Fashion Jewelry', 'Watches', 'Bags & Luggage', 'Sunglasses', 'Scarves & Wraps', 'Belts & Accessories'],
    },
    {
      icon: Package,
      name: 'More Categories',
      products: ['Pet Supplies', 'Office Supplies', 'Party Supplies', 'Festival Products', 'Religious Items', 'Craft Supplies'],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section style={{ 
        background: 'linear-gradient(135deg, #1E3A5F 0%, #2C5282 100%)',
        padding: '160px 0 100px',
      }}>
        <div className="container">
          <div style={{ maxWidth: '700px' }}>
            <h1 style={{ color: '#FFFFFF', fontSize: '48px', fontWeight: '700', marginBottom: '24px' }}>
              Products We Source
            </h1>
            <p style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '20px', lineHeight: '1.6' }}>
              From electronics to textiles, we help you find reliable manufacturers across virtually any product category.
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="section" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }} className="products-grid">
            {productCategories.map((category, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: '#FFFFFF',
                  padding: '32px',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s ease',
                }}
              >
                <div style={{
                  width: '56px',
                  height: '56px',
                  backgroundColor: '#1E3A5F',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px',
                }}>
                  <category.icon size={28} color="#C9A227" />
                </div>
                <h3 style={{ fontSize: '20px', marginBottom: '16px' }}>{category.name}</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {category.products.map((product, pIndex) => (
                    <li 
                      key={pIndex} 
                      style={{ 
                        padding: '8px 0', 
                        borderBottom: pIndex < category.products.length - 1 ? '1px solid #E2E8F0' : 'none',
                        fontSize: '14px',
                        color: '#4A5568',
                      }}
                    >
                      {product}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="section" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ marginBottom: '16px' }}>Sourcing for Any Product</h2>
            <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '18px' }}>
              Even if you don\'t see your product category listed, contact us. We have access to thousands of manufacturers across China and can find the right supplier for virtually any product.
            </p>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(4, 1fr)', 
            gap: '24px',
            maxWidth: '1000px',
            margin: '0 auto',
          }} className="process-cards">
            {[
              { title: 'Submit Request', desc: 'Tell us your product requirements' },
              { title: 'We Find Suppliers', desc: 'We match you with verified manufacturers' },
              { title: 'Quality Control', desc: 'Inspections ensure top quality' },
              { title: 'Global Delivery', desc: 'We handle shipping to your location' },
            ].map((item, index) => (
              <div 
                key={index}
                style={{
                  textAlign: 'center',
                  padding: '24px',
                  backgroundColor: '#F8FAFC',
                  borderRadius: '8px',
                }}
              >
                <div style={{
                  width: '48px',
                  height: '48px',
                  backgroundColor: '#1E3A5F',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px',
                  fontSize: '18px',
                  fontWeight: '700',
                  color: '#C9A227',
                }}>
                  {index + 1}
                </div>
                <h4 style={{ fontSize: '16px', marginBottom: '8px' }}>{item.title}</h4>
                <p style={{ fontSize: '13px', color: '#718096' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ backgroundColor: '#1E3A5F' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
            <h2 style={{ color: '#FFFFFF', marginBottom: '16px' }}>
              Can\'t Find Your Product?
            </h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '18px', marginBottom: '32px' }}>
              Contact us with your requirements. We likely already work with suppliers in your industry.
            </p>
            <Link
              to="/contact"
              style={{
                backgroundColor: '#C9A227',
                color: '#1E3A5F',
                padding: '16px 32px',
                borderRadius: '4px',
                fontWeight: '600',
                fontSize: '16px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              Tell Us What You Need <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 1024px) {
          .products-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .process-cards { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 768px) {
          .products-grid { grid-template-columns: 1fr !important; }
          .process-cards { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
};

export default Products;