import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const categories = [
  {
    name: 'Electronics',
    description: 'Consumer electronics, smart devices, PC accessories, audio/video equipment',
    examples: ['Smartphones', 'Tablets', 'Wireless speakers', 'LED lights', 'Power banks', 'USB cables'],
    image: 'electronics manufacturing',
  },
  {
    name: 'Textiles & Apparel',
    description: 'Garments, fabrics, accessories, and home textiles',
    examples: ['T-shirts', 'Jackets', 'Jeans', 'Sportswear', 'Scarves', 'Bedding'],
    image: 'textile factory',
  },
  {
    name: 'Machinery & Industrial',
    description: 'Industrial equipment, machinery parts, tools',
    examples: ['CNC machines', 'Power tools', 'Pumps', 'Motors', 'Conveyor systems', 'Valves'],
    image: 'industrial machinery manufacturing',
  },
  {
    name: 'Furniture',
    description: 'Home furniture, office furniture, outdoor furniture',
    examples: ['Sofas', 'Tables', 'Chairs', 'Cabinets', 'Bed frames', 'Outdoor sets'],
    image: 'furniture manufacturing factory',
  },
  {
    name: 'Packaging',
    description: 'All types of packaging solutions',
    examples: ['Cardboard boxes', 'Plastic containers', 'Paper bags', 'Bottles', 'Blister packs', 'Gift boxes'],
    image: 'packaging factory',
  },
  {
    name: 'Home & Garden',
    description: 'Home products, garden equipment, kitchenware',
    examples: ['Cookware', 'Kitchen utensils', 'Garden tools', 'Decor', 'Storage', 'Cleaning supplies'],
    image: 'home products manufacturing',
  },
  {
    name: 'Automotive Parts',
    description: 'Vehicle parts, accessories, components',
    examples: ['Tires', 'Batteries', 'Lights', 'Mirrors', 'Filters', 'Electronics'],
    image: 'auto parts manufacturing',
  },
  {
    name: 'Health & Beauty',
    description: 'Beauty products, personal care, health supplements',
    examples: ['Skincare', 'Hair care', 'Makeup', 'Vitamins', 'Medical devices', 'Fitness equipment'],
    image: 'beauty product manufacturing',
  },
  {
    name: 'Toys & Games',
    description: 'Children toys, educational products, games',
    examples: ['Action figures', 'Puzzles', 'Board games', 'Electronic toys', 'Building blocks', 'Plush toys'],
    image: 'toy factory manufacturing',
  },
  {
    name: 'Sports & Outdoors',
    description: 'Sports equipment, outdoor gear, fitness products',
    examples: ['Bicycles', 'Camping gear', 'Fitness equipment', 'Fishing gear', 'Water sports', 'Team sports'],
    image: 'sports equipment manufacturing',
  },
  {
    name: 'Jewelry & Watches',
    description: 'Fashion jewelry, watches, accessories',
    examples: ['Necklaces', 'Rings', 'Bracelets', 'Watches', 'Earrings', 'Brooches'],
    image: 'jewelry manufacturing',
  },
  {
    name: 'Pet Supplies',
    description: 'Pet products, accessories, food containers',
    examples: ['Pet beds', 'Toys', 'Collars', 'Feeders', 'Grooming tools', 'Aquarium supplies'],
    image: 'pet products factory',
  },
]

const capabilities = [
  'OEM & ODM manufacturing',
  'Custom design and prototyping',
  'Small batch production',
  'Mass production',
  'Private labeling',
  'Component sourcing',
]

export default function Products() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative bg-[#1E3A5F] pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Products We Source
            </h1>
            <p className="text-lg text-[#A0AEC0] max-w-2xl mx-auto">
              We have expertise across a wide range of product categories. If you don't see your product listed, contact us anyway - we can likely help.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 lg:py-28 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-[#E2E8F0]"
              >
                <div className="aspect-video bg-[#E2E8F0]">
                  <img
                    data-strk-img-id={`category-img-${index}`}
                    data-strk-img={category.image}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#1E3A5F] mb-2">{category.name}</h3>
                  <p className="text-sm text-[#4A5568] mb-4">{category.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {category.examples.slice(0, 4).map((example, eIndex) => (
                      <span 
                        key={eIndex}
                        className="text-xs bg-[#F8FAFC] text-[#4A5568] px-2 py-1 rounded"
                      >
                        {example}
                      </span>
                    ))}
                    {category.examples.length > 4 && (
                      <span className="text-xs text-[#C9A227] px-2 py-1">
                        +{category.examples.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A5F] mb-6">
                Manufacturing Capabilities
              </h2>
              <p className="text-lg text-[#4A5568] mb-8">
                We work with factories that offer various manufacturing arrangements to meet your needs.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {capabilities.map((capability, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="text-[#38A169] flex-shrink-0" size={20} />
                    <span className="text-[#4A5568]">{capability}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                data-strk-img-id="capability-img"
                data-strk-img="factory manufacturing production line"
                data-strk-img-ratio="4x3"
                data-strk-img-width="500"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Manufacturing capabilities"
                className="rounded-xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-[#1E3A5F] to-[#2C5282]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Don't See Your Product?
          </h2>
          <p className="text-lg text-[#A0AEC0] mb-8 max-w-2xl mx-auto">
            Contact us with your requirements. We have extensive supplier networks and can often source products outside our listed categories.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#C9A227] text-[#1E3A5F] font-semibold rounded-lg hover:bg-[#B8911F] transition-colors"
          >
            Discuss Your Requirements
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  )
}