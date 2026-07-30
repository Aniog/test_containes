import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import CTAButton from '@/components/CTAButton'

const categories = [
  {
    id: 'electronics',
    name: 'Electronics & Components',
    imgId: 'prod-elec-p001',
    titleId: 'prod-elec-title',
    descId: 'prod-elec-desc',
    desc: 'Consumer electronics, PCBs, LED lighting, cables, chargers, smart home devices, and electronic components.',
    examples: ['LED Lights', 'Power Banks', 'Smart Speakers', 'PCB Assemblies', 'Cables & Adapters'],
  },
  {
    id: 'furniture',
    name: 'Furniture & Home Decor',
    imgId: 'prod-furn-p002',
    titleId: 'prod-furn-title',
    descId: 'prod-furn-desc',
    desc: 'Office furniture, home furniture, decorative items, storage solutions, and custom-made pieces from Foshan and Guangdong.',
    examples: ['Office Chairs', 'Sofas', 'Shelving Units', 'Decorative Mirrors', 'Storage Boxes'],
  },
  {
    id: 'clothing',
    name: 'Clothing & Textiles',
    imgId: 'prod-cloth-p003',
    titleId: 'prod-cloth-title',
    descId: 'prod-cloth-desc',
    desc: 'Apparel, sportswear, workwear, uniforms, fabrics, and accessories from factories in Guangzhou, Hangzhou, and Yiwu.',
    examples: ['T-Shirts & Hoodies', 'Sportswear', 'Workwear', 'Bags & Accessories', 'Fabrics'],
  },
  {
    id: 'machinery',
    name: 'Machinery & Industrial',
    imgId: 'prod-mach-p004',
    titleId: 'prod-mach-title',
    descId: 'prod-mach-desc',
    desc: 'Industrial machinery, tools, equipment, and components for manufacturing, construction, and agriculture.',
    examples: ['CNC Machines', 'Power Tools', 'Pumps & Valves', 'Agricultural Equipment', 'Safety Equipment'],
  },
  {
    id: 'toys',
    name: 'Toys & Baby Products',
    imgId: 'prod-toys-p005',
    titleId: 'prod-toys-title',
    descId: 'prod-toys-desc',
    desc: 'Toys, educational products, baby gear, and children\'s accessories with EN71, ASTM, and other safety certifications.',
    examples: ['Educational Toys', 'Plush Toys', 'Baby Strollers', 'Children\'s Furniture', 'Outdoor Play'],
  },
  {
    id: 'health',
    name: 'Health & Beauty',
    imgId: 'prod-health-p006',
    titleId: 'prod-health-title',
    descId: 'prod-health-desc',
    desc: 'Personal care products, cosmetics, health devices, supplements packaging, and wellness accessories.',
    examples: ['Skincare Products', 'Hair Care', 'Massage Devices', 'Fitness Accessories', 'Medical Supplies'],
  },
  {
    id: 'sports',
    name: 'Sports & Outdoor',
    imgId: 'prod-sport-p007',
    titleId: 'prod-sport-title',
    descId: 'prod-sport-desc',
    desc: 'Sports equipment, outdoor gear, camping products, fitness equipment, and activewear.',
    examples: ['Gym Equipment', 'Camping Gear', 'Cycling Accessories', 'Water Sports', 'Team Sports'],
  },
  {
    id: 'packaging',
    name: 'Packaging & Printing',
    imgId: 'prod-pack-p008',
    titleId: 'prod-pack-title',
    descId: 'prod-pack-desc',
    desc: 'Custom packaging, boxes, bags, labels, and printed materials for retail, e-commerce, and industrial use.',
    examples: ['Custom Boxes', 'Paper Bags', 'Labels & Stickers', 'Retail Packaging', 'Eco Packaging'],
  },
  {
    id: 'auto',
    name: 'Auto Parts & Accessories',
    imgId: 'prod-auto-p009',
    titleId: 'prod-auto-title',
    descId: 'prod-auto-desc',
    desc: 'Automotive parts, accessories, tools, and components for passenger vehicles, trucks, and motorcycles.',
    examples: ['Car Accessories', 'Replacement Parts', 'Lighting', 'Tools & Equipment', 'Motorcycle Parts'],
  },
  {
    id: 'homedecor',
    name: 'Home & Garden',
    imgId: 'prod-home-p010',
    titleId: 'prod-home-title',
    descId: 'prod-home-desc',
    desc: 'Kitchenware, garden tools, home improvement products, and outdoor living accessories.',
    examples: ['Kitchenware', 'Garden Tools', 'Outdoor Furniture', 'Home Improvement', 'Cleaning Products'],
  },
]

export default function Products() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-navy pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-gold text-sm font-semibold uppercase tracking-wider">Product Categories</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
              Products We Source from China
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              We have hands-on sourcing experience across 30+ product categories. If you don't see your product here, contact us — we likely have relevant factory connections.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map(({ id, name, imgId, titleId, descId, desc, examples }) => (
              <div key={id} className="bg-white border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-52">
                  <img
                    data-strk-img-id={imgId}
                    data-strk-img={`[${descId}] [${titleId}] China manufacturing`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <h2 id={titleId} className="text-white font-bold text-xl">{name}</h2>
                  </div>
                </div>
                <div className="p-6">
                  <p id={descId} className="text-text-muted text-sm leading-relaxed mb-4">{desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {examples.map((ex) => (
                      <span key={ex} className="bg-light-blue text-navy text-xs font-medium px-3 py-1 rounded-full">
                        {ex}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Don't See Your Product?</h2>
          <p className="text-white/70 text-lg mb-8">
            We source a wide range of products beyond this list. Tell us what you need and we'll assess whether we can help.
          </p>
          <CTAButton to="/contact" variant="primary" className="text-base px-8 py-4">
            Submit a Sourcing Inquiry
          </CTAButton>
        </div>
      </section>
    </div>
  )
}
