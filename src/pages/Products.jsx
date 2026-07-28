import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Link } from 'react-router-dom'
import { ArrowRight, Package, Cpu, Home, Shirt, Wrench, Gift, Building, Armchair, Smartphone, Sparkles } from 'lucide-react'

const productCategories = [
  {
    icon: Cpu,
    name: 'Electronics & Components',
    description: 'Consumer electronics, PCB assemblies, LED lighting, power supplies, cables, chargers, audio equipment, and electronic components.',
    subcategories: ['LED Lights & Fixtures', 'Power Adapters & Chargers', 'Audio Equipment', 'Smart Home Devices', 'Electronic Components', 'Cables & Connectors'],
    image: 'electronic components circuit board LED lights consumer electronics manufacturing',
    imgId: 'products-page-electronics-img',
    titleId: 'products-page-electronics-title',
    descId: 'products-page-electronics-desc',
  },
  {
    icon: Home,
    name: 'Home & Garden',
    description: 'Furniture, kitchenware, home decor, garden tools, storage solutions, bathroom accessories, and household items.',
    subcategories: ['Kitchen & Dining', 'Home Decor', 'Garden Tools', 'Storage & Organization', 'Bathroom Accessories', 'Cleaning Supplies'],
    image: 'home furniture kitchenware garden tools household products manufacturing',
    imgId: 'products-page-home-img',
    titleId: 'products-page-home-title',
    descId: 'products-page-home-desc',
  },
  {
    icon: Shirt,
    name: 'Apparel & Textiles',
    description: 'Clothing, bags, shoes, fabrics, accessories, sportswear, workwear, and textile products for all markets.',
    subcategories: ['Casual Wear', 'Sportswear', 'Workwear & Uniforms', 'Bags & Luggage', 'Shoes & Footwear', 'Textile Fabrics'],
    image: 'clothing textile factory garment manufacturing apparel production line',
    imgId: 'products-page-apparel-img',
    titleId: 'products-page-apparel-title',
    descId: 'products-page-apparel-desc',
  },
  {
    icon: Wrench,
    name: 'Machinery & Industrial Parts',
    description: 'Industrial machinery, CNC parts, auto components, metal fabrication, custom engineering, and precision tools.',
    subcategories: ['CNC Machined Parts', 'Auto & Truck Parts', 'Metal Fabrication', 'Industrial Machinery', 'Precision Tools', 'Hydraulic Components'],
    image: 'industrial machinery CNC metal parts manufacturing factory equipment',
    imgId: 'products-page-machinery-img',
    titleId: 'products-page-machinery-title',
    descId: 'products-page-machinery-desc',
  },
  {
    icon: Gift,
    name: 'Promotional Products',
    description: 'Custom branded items, trade show giveaways, corporate gifts, promotional merchandise, and marketing materials.',
    subcategories: ['Custom Branded Items', 'Trade Show Giveaways', 'Corporate Gifts', 'Promotional Pens & Stationery', 'Drinkware', 'Tech Accessories'],
    image: 'promotional products custom branded merchandise corporate gifts manufacturing',
    imgId: 'products-page-promo-img',
    titleId: 'products-page-promo-title',
    descId: 'products-page-promo-desc',
  },
  {
    icon: Building,
    name: 'Building & Construction',
    description: 'Tiles, hardware, plumbing fixtures, electrical fittings, construction tools, and building supplies.',
    subcategories: ['Floor & Wall Tiles', 'Plumbing Fixtures', 'Electrical Fittings', 'Hand Tools', 'Construction Hardware', 'Safety Equipment'],
    image: 'building materials tiles hardware construction supplies manufacturing',
    imgId: 'products-page-building-img',
    titleId: 'products-page-building-title',
    descId: 'products-page-building-desc',
  },
  {
    icon: Armchair,
    name: 'Furniture & Furnishings',
    description: 'Indoor and outdoor furniture, office furniture, custom woodwork, upholstery, and home furnishings.',
    subcategories: ['Indoor Furniture', 'Outdoor Furniture', 'Office Furniture', 'Custom Woodwork', 'Upholstery', 'Lighting Fixtures'],
    image: 'furniture manufacturing wooden chairs tables factory workshop craftsmanship',
    imgId: 'products-page-furniture-img',
    titleId: 'products-page-furniture-title',
    descId: 'products-page-furniture-desc',
  },
  {
    icon: Smartphone,
    name: 'Phone & Computer Accessories',
    description: 'Phone cases, screen protectors, chargers, stands, laptop bags, and computer peripherals.',
    subcategories: ['Phone Cases', 'Screen Protectors', 'Chargers & Power Banks', 'Phone Stands & Holders', 'Laptop Bags & Sleeves', 'Computer Peripherals'],
    image: 'phone accessories cases chargers computer peripherals manufacturing',
    imgId: 'products-page-phone-img',
    titleId: 'products-page-phone-title',
    descId: 'products-page-phone-desc',
  },
  {
    icon: Sparkles,
    name: 'Beauty & Personal Care',
    description: 'Cosmetics packaging, skincare products, hair accessories, personal care items, and beauty tools.',
    subcategories: ['Cosmetics Packaging', 'Skincare Products', 'Hair Accessories', 'Personal Care Items', 'Beauty Tools', 'Spa Products'],
    image: 'beauty cosmetics personal care products packaging manufacturing',
    imgId: 'products-page-beauty-img',
    titleId: 'products-page-beauty-title',
    descId: 'products-page-beauty-desc',
  },
]

export default function Products() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Expertise</span>
          <h1 className="text-4xl md:text-5xl font-bold text-navy mt-3 mb-6">
            Products We Source
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            We have experience sourcing a wide range of products across major industries. 
            Our supplier network covers virtually every product category manufactured in China.
          </p>
        </div>
      </section>

      {/* Product categories */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 group"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    data-strk-img-id={category.imgId}
                    data-strk-img={`[${category.descId}] [${category.titleId}] Chinese manufacturing factory production`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    className="w-full h-full object-cover bg-gray-100 group-hover:scale-105 transition-transform duration-500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={category.name}
                  />
                  <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 id={category.titleId} className="text-xl font-bold text-navy mb-2">
                    {category.name}
                  </h3>
                  <p id={category.descId} className="text-gray-600 mb-4 text-sm">
                    {category.description}
                  </p>
                  
                  {/* Subcategories */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {category.subcategories.slice(0, 4).map((sub, sIndex) => (
                      <span
                        key={sIndex}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs"
                      >
                        {sub}
                      </span>
                    ))}
                    {category.subcategories.length > 4 && (
                      <span className="text-primary text-xs font-medium">
                        +{category.subcategories.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom sourcing */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <Package className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-navy mb-4">
            Don't See Your Product?
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            We source virtually any manufactured product from China. If you have a specific product 
            in mind, contact us and we will find the right supplier for you.
          </p>
          <Link
            to="/contact"
            className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-medium transition-colors inline-flex items-center gap-2"
          >
            Tell Us What You Need
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
