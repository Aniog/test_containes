import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import SectionHeader from '@/components/home/SectionHeader'

const categories = [
  {
    title: 'Electronics & PCB Assembly',
    desc: 'Consumer electronics, industrial electronics, PCB fabrication and assembly, wire harnesses, connectors, and electronic components.',
    products: ['Smart home devices', 'PCB assembly', 'LED lighting', 'Power adapters', 'Cables & connectors', 'IoT devices'],
    imgId: 'prod-electronics-a1b2c3',
  },
  {
    title: 'Furniture & Home Goods',
    desc: 'Residential and commercial furniture, home decor, storage solutions, and custom designs for retail and hospitality.',
    products: ['Indoor furniture', 'Outdoor furniture', 'Home decor', 'Storage & shelving', 'Custom designs', 'Office furniture'],
    imgId: 'prod-furniture-d4e5f6',
  },
  {
    title: 'Textiles, Apparel & Fabrics',
    desc: 'Clothing, accessories, bags, home textiles, performance fabrics, and customized textile products for brands and retailers.',
    products: ['Casual wear', 'Sportswear', 'Bags & backpacks', 'Bedding & linens', 'Towels & bath', 'Performance fabrics'],
    imgId: 'prod-textiles-g7h8i9',
  },
  {
    title: 'Hardware & Industrial Tools',
    desc: 'Power tools, hand tools, fasteners, hardware accessories, safety equipment, and industrial supplies for construction and manufacturing.',
    products: ['Power tools', 'Hand tools', 'Fasteners', 'Safety equipment', 'Garden tools', 'Industrial supplies'],
    imgId: 'prod-hardware-j0k1l2',
  },
  {
    title: 'Plastics, Molding & Packaging',
    desc: 'Injection molding, blow molding, custom packaging, food-grade packaging, and plastic products for industrial and consumer use.',
    products: ['Injection molded parts', 'Food packaging', 'Custom containers', 'PET preforms', 'Plastic household items', 'Industrial packaging'],
    imgId: 'prod-plastics-m3n4o5',
  },
  {
    title: 'Automotive Parts & Accessories',
    desc: 'OEM and aftermarket automotive parts, accessories, tools, and components for passenger vehicles, trucks, and specialty vehicles.',
    products: ['Engine components', 'Brake systems', 'Interior accessories', 'Lighting & electronics', 'Suspension parts', 'Car care products'],
    imgId: 'prod-automotive-p6q7r8',
  },
  {
    title: 'Kitchenware & Houseware',
    desc: 'Cookware, kitchen gadgets, tableware, drinkware, food storage, and hotel/restaurant supplies for retail and hospitality.',
    products: ['Cookware sets', 'Kitchen gadgets', 'Tableware', 'Drinkware', 'Food storage', 'Hotel supplies'],
    imgId: 'prod-kitchenware-s1t2u3',
  },
  {
    title: 'Sports & Outdoor Equipment',
    desc: 'Fitness equipment, outdoor gear, camping supplies, sports accessories, and recreational products for brands and retailers.',
    products: ['Fitness equipment', 'Camping gear', 'Sports accessories', 'Outdoor furniture', 'Bicycle parts', 'Water sports'],
    imgId: 'prod-sports-v4w5x6',
  },
  {
    title: 'Toys, Games & Educational Products',
    desc: 'Plush toys, educational toys, board games, puzzles, outdoor play equipment, and licensed merchandise for all age groups.',
    products: ['Plush toys', 'Educational toys', 'Board games', 'Outdoor play', 'Puzzles', 'STEM kits'],
    imgId: 'prod-toys-y7z8a9',
  },
  {
    title: 'Building Materials & Hardware',
    desc: 'Construction materials, doors, windows, flooring, bathroom fixtures, lighting, and architectural hardware for residential and commercial projects.',
    products: ['Doors & windows', 'Flooring', 'Bathroom fixtures', 'Lighting fixtures', 'Hardware', 'Insulation materials'],
    imgId: 'prod-building-b0c1d2',
  },
  {
    title: 'Medical Supplies & Devices',
    desc: 'PPE, medical consumables, diagnostic equipment, rehabilitation products, and healthcare supplies meeting international standards.',
    products: ['PPE & masks', 'Medical consumables', 'Diagnostic devices', 'Rehabilitation products', 'Hospital furniture', 'Lab supplies'],
    imgId: 'prod-medical-e3f4g5',
  },
  {
    title: 'Pet Products & Supplies',
    desc: 'Pet toys, beds, grooming products, feeding accessories, and pet care items for dogs, cats, and other companion animals.',
    products: ['Pet toys', 'Pet beds', 'Grooming tools', 'Feeding bowls', 'Leashes & collars', 'Pet carriers'],
    imgId: 'prod-pets-h6i7j8',
  },
]

export default function Products() {
  const containerRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Page Hero */}
      <section className="bg-brand-900 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-accent-400 font-medium text-sm mb-3">PRODUCT CATEGORIES</p>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Products We Source</h1>
          <p className="text-lg text-slate-200 max-w-2xl">
            We source across virtually all product categories. Our team has specialists with deep experience in each sector, ensuring you work with someone who understands your industry.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow flex flex-col">
                <div className="aspect-[16/9] bg-slate-200 overflow-hidden">
                  <img
                    alt={cat.title}
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[cat-${i}-title]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 id={`cat-${i}-title`} className="text-lg font-semibold text-brand-900 mb-2">{cat.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-1">{cat.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {cat.products.map((p, j) => (
                      <span key={j} className="inline-flex items-center gap-1 text-xs bg-slate-50 text-slate-600 px-2.5 py-1 rounded-full">
                        <CheckCircle className="w-3 h-3 text-brand-500" />
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-500">
            Don't see your product category? Contact us — our network extends across hundreds of industries.
            If it's manufactured in China, we can help you source it.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-brand-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Tell us what you need to source</h2>
          <p className="text-slate-200 mb-8">Get matched with the right suppliers for your specific product and requirements.</p>
          <Button variant="accent" size="xl" onClick={() => navigate('/contact')}>
            Get a Free Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  )
}