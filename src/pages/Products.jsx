import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { 
  ArrowRight, 
  Smartphone, 
  Shirt, 
  Cog, 
  Package, 
  Home, 
  Dumbbell, 
  Car, 
  Heart, 
  Baby,
  Dog,
  BookOpen,
  Coffee,
  Sparkles,
  Watch,
  Laptop,
  Headphones,
  Camera,
  Speaker
} from 'lucide-react'
import './Products.css'

const Products = () => {
  const categories = [
    {
      icon: Smartphone,
      name: 'Consumer Electronics',
      description: 'Smartphones, tablets, wearables, and accessories',
      products: ['Smartphones', 'Tablets', 'Smart Watches', 'Wireless Earbuds', 'Bluetooth Speakers', 'Power Banks', 'Chargers & Cables', 'Phone Cases'],
    },
    {
      icon: Laptop,
      name: 'Computer & Accessories',
      description: 'Laptops, peripherals, and IT equipment',
      products: ['Laptops', 'Keyboards', 'Mice', 'Monitors', 'Webcams', 'USB Hubs', 'External Storage', 'Computer Bags'],
    },
    {
      icon: Headphones,
      name: 'Audio Equipment',
      description: 'Headphones, earbuds, and audio devices',
      products: ['Over-ear Headphones', 'In-ear Earbuds', 'Soundbars', 'Home Theater Systems', 'Portable Speakers', 'Car Audio', 'Microphones', 'Audio Accessories'],
    },
    {
      icon: Camera,
      name: 'Cameras & Photography',
      description: 'Digital cameras, action cams, and accessories',
      products: ['Digital Cameras', 'Action Cameras', 'Security Cameras', 'Drones', 'Camera Lenses', 'Tripods', 'Camera Bags', 'Memory Cards'],
    },
    {
      icon: Shirt,
      name: 'Apparel & Textiles',
      description: 'Clothing, fabrics, and fashion accessories',
      products: ['T-Shirts', 'Jackets', 'Jeans', 'Dresses', 'Sportswear', 'Uniforms', 'Fabrics', 'Embroidery'],
    },
    {
      icon: Baby,
      name: 'Baby & Kids Products',
      description: 'Toys, clothing, and nursery items',
      products: ['Baby Toys', 'Kids Toys', 'Baby Clothing', 'Strollers', 'Car Seats', 'Nursery Furniture', 'Baby Feeding', 'Kids Backpacks'],
    },
    {
      icon: Home,
      name: 'Home & Garden',
      description: 'Furniture, decor, and outdoor items',
      products: ['Furniture', 'Lighting', 'Bedding', 'Curtains', 'Rugs', 'Garden Tools', 'Outdoor Furniture', 'Home Decor'],
    },
    {
      icon: Cog,
      name: 'Machinery & Industrial',
      description: 'Industrial equipment and machinery parts',
      products: ['Industrial Machinery', 'Machine Parts', 'Tools', 'Safety Equipment', 'Electrical Components', 'Pumps', 'Motors', 'Bearings'],
    },
    {
      icon: Car,
      name: 'Automotive',
      description: 'Vehicle parts and accessories',
      products: ['Car Electronics', 'Car Parts', 'Car Accessories', 'Tires', 'Batteries', 'Oil Filters', 'Brake Pads', 'Car Care Products'],
    },
    {
      icon: Dumbbell,
      name: 'Sports & Outdoors',
      description: 'Fitness equipment and outdoor gear',
      products: ['Exercise Equipment', 'Camping Gear', 'Hiking Supplies', 'Cycling Accessories', 'Water Sports', 'Team Sports', 'Ski & Snowboard', 'Fishing Gear'],
    },
    {
      icon: Heart,
      name: 'Health & Beauty',
      description: 'Personal care and beauty products',
      products: ['Skincare', 'Hair Care', 'Makeup', 'Perfumes', 'Health Supplements', 'Medical Devices', 'Fitness Trackers', 'Massage Devices'],
    },
    {
      icon: Dog,
      name: 'Pet Supplies',
      description: 'Pet food, toys, and accessories',
      products: ['Pet Toys', 'Pet Beds', 'Pet Food', 'Pet Clothing', 'Pet Carriers', 'Grooming Tools', 'Aquarium Supplies', 'Bird Supplies'],
    },
    {
      icon: Package,
      name: 'Packaging & Printing',
      description: 'Packaging materials and printing services',
      products: ['Cardboard Boxes', 'Paper Bags', 'Plastic Bags', 'Labels', 'Bottles', 'Jars', 'Custom Printing', 'Packaging Machinery'],
    },
    {
      icon: Sparkles,
      name: 'Jewelry & Watches',
      description: 'Fashion jewelry and timepieces',
      products: ['Necklaces', 'Rings', 'Bracelets', 'Earrings', 'Wrist Watches', 'Smart Watches', 'Watch Bands', 'Jewelry Boxes'],
    },
    {
      icon: Coffee,
      name: 'Kitchen & Dining',
      description: 'Kitchenware and dining essentials',
      products: ['Cookware', 'Cutlery', 'Kitchen Appliances', 'Food Storage', 'Tableware', 'Coffee Makers', 'Blenders', 'Kitchen Tools'],
    },
    {
      icon: BookOpen,
      name: 'Office & School Supplies',
      description: 'Stationery and office equipment',
      products: ['Notebooks', 'Pens', 'Markers', 'Folders', 'Desk Organizers', 'Printers', 'Office Furniture', 'School Bags'],
    },
  ]

  const capabilities = [
    {
      title: 'Supplier Network',
      description: 'Access to 2,000+ verified manufacturers across all major product categories',
    },
    {
      title: 'Quality Control',
      description: 'Comprehensive inspection services to ensure product quality meets your standards',
    },
    {
      title: 'Competitive Pricing',
      description: 'Strong relationships with manufacturers allow us to negotiate favorable terms',
    },
    {
      title: 'Fast Turnaround',
      description: 'Efficient sourcing process to get your products to market quickly',
    },
  ]

  return (
    <>
      <Helmet>
        <title>Products We Source | China Sourcing Categories | SSourcing China</title>
        <meta name="description" content="Explore the wide range of products we source from China. From electronics to textiles, machinery to consumer goods." />
      </Helmet>

      <section className="products-hero">
        <div className="products-hero-content">
          <h1>Products We Source</h1>
          <p>
            We have expertise across a wide range of product categories. 
            Whether you need consumer electronics, textiles, or industrial machinery, we can help you find the right suppliers.
          </p>
        </div>
      </section>

      <section className="categories-section">
        <div className="section-container">
          <div className="section-header">
            <span className="section-tag">Product Categories</span>
            <h2 className="section-title">Sourcing Expertise</h2>
            <p className="section-subtitle">
              Our team has extensive experience sourcing products across these categories.
            </p>
          </div>

          <div className="categories-grid">
            {categories.map((category, index) => (
              <div key={index} className="category-card">
                <div className="category-header">
                  <div className="category-icon">
                    <category.icon size={28} />
                  </div>
                  <div className="category-title">
                    <h3>{category.name}</h3>
                    <p>{category.description}</p>
                  </div>
                </div>
                <div className="category-products">
                  <h4>Common Products:</h4>
                  <ul>
                    {category.products.map((product, idx) => (
                      <li key={idx}>{product}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="capabilities-section">
        <div className="section-container">
          <div className="section-header">
            <span className="section-tag">Why Choose Us</span>
            <h2 className="section-title">Our Sourcing Capabilities</h2>
          </div>

          <div className="capabilities-grid">
            {capabilities.map((capability, index) => (
              <div key={index} className="capability-card">
                <h3>{capability.title}</h3>
                <p>{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-container">
          <h2>Don't See Your Product?</h2>
          <p>
            We have access to a wide network of manufacturers beyond these categories. 
            Contact us to discuss your specific sourcing needs.
          </p>
          <Link to="/contact" className="cta-btn">
            Discuss Your Needs
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  )
}

export default Products