import { Link } from 'react-router-dom';
import { 
  Laptop, Smartphone, Watch, Headphones, Camera, Speaker,
  Shirt, Scissors, Package, Sofa, Bed, Lamp, ChefHat, Coffee,
  Wrench, Settings, Car, Battery, Lightbulb, Zap,
  Box, Gift, ShoppingBag, Palette, Brush, Pen,
  Heart, Activity, Stethoscope, Baby, Dog, Cat,
  Globe, Plane, Train, Bike
} from 'lucide-react';

const ProductsPage = () => {
  const categories = [
    {
      name: 'Consumer Electronics',
      icon: Laptop,
      products: ['Laptops', 'Tablets', 'Smartphones', 'Smartwatches', 'Wireless Earbuds', 'Cameras', 'Speakers', 'Gaming Consoles'],
    },
    {
      name: 'Home Appliances',
      icon: ChefHat,
      products: ['Air Conditioners', 'Refrigerators', 'Washing Machines', 'Microwaves', 'Vacuum Cleaners', 'Coffee Makers', 'Air Purifiers', 'Electric Kettles'],
    },
    {
      name: 'Furniture',
      icon: Sofa,
      products: ['Sofas', 'Chairs', 'Tables', 'Beds', 'Wardrobes', 'Bookshelves', 'Office Furniture', 'Outdoor Furniture'],
    },
    {
      name: 'Textiles & Apparel',
      icon: Shirt,
      products: ['T-Shirts', 'Jackets', 'Pants', 'Dresses', 'Sportswear', 'Uniforms', 'Bedding', 'Curtains'],
    },
    {
      name: 'Machinery & Equipment',
      icon: Settings,
      products: ['Industrial Machinery', 'Agricultural Equipment', 'Construction Tools', 'Packaging Machines', 'Printing Equipment', 'CNC Machines'],
    },
    {
      name: 'Automotive Parts',
      icon: Car,
      products: ['Engine Parts', 'Brake Systems', 'Suspension Parts', 'Electrical Components', 'Body Parts', 'Interior Accessories'],
    },
    {
      name: 'Packaging & Printing',
      icon: Box,
      products: ['Cardboard Boxes', 'Plastic Packaging', 'Paper Bags', 'Labels', 'Bottles', 'Cans', 'Flexible Packaging', 'Gift Boxes'],
    },
    {
      name: 'Health & Beauty',
      icon: Heart,
      products: ['Skincare Products', 'Hair Care', 'Makeup', 'Personal Care', 'Medical Devices', 'Fitness Equipment', 'Vitamins & Supplements'],
    },
    {
      name: 'Toys & Games',
      icon: Gift,
      products: ['Educational Toys', 'Action Figures', 'Board Games', 'Puzzles', 'Electronic Toys', 'Outdoor Toys', 'Baby Toys'],
    },
    {
      name: 'Sports & Outdoors',
      icon: Activity,
      products: ['Fitness Equipment', 'Camping Gear', 'Bicycles', 'Fishing Equipment', 'Sports Apparel', 'Water Sports Equipment'],
    },
    {
      name: 'Lighting',
      icon: Lightbulb,
      products: ['LED Lights', 'Smart Lighting', 'Industrial Lights', 'Outdoor Lights', 'Decorative Lights', 'Solar Lights'],
    },
    {
      name: 'Pet Supplies',
      icon: Dog,
      products: ['Pet Food', 'Pet Toys', 'Pet Beds', 'Pet Carriers', 'Grooming Products', 'Aquarium Supplies'],
    },
  ];

  const capabilities = [
    {
      title: 'Custom Manufacturing',
      description: 'We can help you find manufacturers for custom-designed products with specific specifications.',
    },
    {
      title: 'Private Label',
      description: 'Source products and add your own brand with custom packaging and labeling.',
    },
    {
      title: 'Bulk Orders',
      description: 'Handle large volume orders with competitive pricing and reliable delivery.',
    },
    {
      title: 'Sample Development',
      description: 'Assist with creating prototypes and samples before mass production.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section style={{ 
        background: 'linear-gradient(135deg, #1a365d 0%, #2c5282 100%)',
        padding: '160px 0 80px',
      }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 style={{ color: 'white', fontSize: '3rem', marginBottom: '16px' }}>
            Products We Source
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
            Extensive experience across multiple product categories with access to verified manufacturers.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="section" style={{ backgroundColor: 'var(--background)' }}>
        <div className="container">
          <div className="grid grid-3" style={{ gap: '32px' }}>
            {categories.map((category, index) => (
              <div key={index} className="card" style={{ textAlign: 'left' }}>
                <div style={{ 
                  width: '56px', 
                  height: '56px', 
                  backgroundColor: 'var(--primary)', 
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px'
                }}>
                  <category.icon size={28} color="white" />
                </div>
                <h3 style={{ marginBottom: '16px', fontSize: '1.25rem' }}>{category.name}</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {category.products.map((product, idx) => (
                    <li key={idx} style={{ 
                      padding: '8px 0',
                      borderBottom: idx < category.products.length - 1 ? '1px solid var(--border)' : 'none',
                      color: 'var(--text-secondary)',
                      fontSize: '0.9rem',
                    }}>
                      {product}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section" style={{ backgroundColor: 'white' }}>
        <div className="container">
          <div className="section-title">
            <h2>Sourcing Capabilities</h2>
            <p>Beyond standard sourcing, we offer these specialized services.</p>
          </div>
          <div className="grid grid-4">
            {capabilities.map((cap, index) => (
              <div key={index} style={{ 
                padding: '32px',
                backgroundColor: 'var(--background)',
                borderRadius: '8px',
                textAlign: 'left',
              }}>
                <h3 style={{ marginBottom: '12px', fontSize: '1.1rem', color: 'var(--primary)' }}>{cap.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ 
        background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)',
        padding: '80px 0',
      }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ color: 'white', marginBottom: '16px' }}>Don't See Your Product?</h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.1rem', marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px' }}>
            We have access to thousands of manufacturers across various industries. Contact us to discuss your specific requirements.
          </p>
          <Link to="/contact" className="btn btn-accent" style={{ padding: '16px 40px', fontSize: '1.1rem' }}>
            Discuss Your Needs
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;