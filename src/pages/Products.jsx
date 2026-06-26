import { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Badge } from "@/components/ui/Badge"
import { SectionHeader } from "@/components/ui/SectionHeader"

const categories = [
  {
    id: "electronics",
    name: "Electronics & Components",
    items: ["Consumer electronics", "PCBs and components", "LED lighting", "Cables and connectors", "Smart home devices", "Power banks and chargers"],
    imgId: "prod-electronics-img-a1b2c3",
    titleId: "prod-electronics-title",
    descId: "prod-electronics-desc",
    desc: "Consumer electronics, PCBs, LED lighting, cables, smart home devices",
  },
  {
    id: "furniture",
    name: "Furniture & Home Décor",
    items: ["Office furniture", "Bedroom and living room furniture", "Outdoor furniture", "Home accessories", "Mirrors and wall art", "Storage solutions"],
    imgId: "prod-furniture-img-d4e5f6",
    titleId: "prod-furniture-title",
    descId: "prod-furniture-desc",
    desc: "Office furniture, bedroom sets, outdoor furniture, home accessories",
  },
  {
    id: "apparel",
    name: "Apparel & Textiles",
    items: ["Men's and women's clothing", "Sportswear and activewear", "Uniforms and workwear", "Bags and accessories", "Fabrics and materials", "Footwear"],
    imgId: "prod-apparel-img-g7h8i9",
    titleId: "prod-apparel-title",
    descId: "prod-apparel-desc",
    desc: "Clothing, sportswear, uniforms, bags, fabrics, footwear",
  },
  {
    id: "industrial",
    name: "Industrial Equipment",
    items: ["Machinery and tools", "Safety equipment", "Hydraulic components", "Pumps and motors", "Welding equipment", "Measurement instruments"],
    imgId: "prod-industrial-img-j1k2l3",
    titleId: "prod-industrial-title",
    descId: "prod-industrial-desc",
    desc: "Machinery, tools, safety equipment, hydraulic components, pumps",
  },
  {
    id: "toys",
    name: "Toys & Baby Products",
    items: ["Educational toys", "Outdoor play equipment", "Baby care products", "Stuffed animals", "Board games", "STEM toys"],
    imgId: "prod-toys-img-m4n5o6",
    titleId: "prod-toys-title",
    descId: "prod-toys-desc",
    desc: "Educational toys, outdoor play, baby care, board games, STEM toys",
  },
  {
    id: "sports",
    name: "Sports & Outdoor Gear",
    items: ["Fitness equipment", "Camping gear", "Cycling accessories", "Water sports equipment", "Team sports gear", "Yoga and wellness products"],
    imgId: "prod-sports-img-p7q8r9",
    titleId: "prod-sports-title",
    descId: "prod-sports-desc",
    desc: "Fitness equipment, camping gear, cycling, water sports, yoga products",
  },
  {
    id: "health",
    name: "Health & Beauty",
    items: ["Skincare products", "Hair care", "Medical devices", "Supplements packaging", "Personal care tools", "Wellness accessories"],
    imgId: "prod-health-img-s1t2u3",
    titleId: "prod-health-title",
    descId: "prod-health-desc",
    desc: "Skincare, hair care, medical devices, personal care tools, wellness",
  },
  {
    id: "packaging",
    name: "Packaging Materials",
    items: ["Corrugated boxes", "Custom printed packaging", "Bags and pouches", "Labels and stickers", "Foam and protective inserts", "Eco-friendly packaging"],
    imgId: "prod-packaging-img-v4w5x6",
    titleId: "prod-packaging-title",
    descId: "prod-packaging-desc",
    desc: "Corrugated boxes, custom printed packaging, bags, labels, eco packaging",
  },
  {
    id: "auto",
    name: "Auto Parts",
    items: ["Car accessories", "Replacement parts", "Lighting systems", "Interior accessories", "Tires and wheels", "Tools and equipment"],
    imgId: "prod-auto-img-y7z8a9",
    titleId: "prod-auto-title",
    descId: "prod-auto-desc",
    desc: "Car accessories, replacement parts, lighting, interior accessories, tires",
  },
  {
    id: "kitchen",
    name: "Kitchen & Cookware",
    items: ["Cookware sets", "Kitchen appliances", "Utensils and tools", "Storage containers", "Bakeware", "Coffee and tea accessories"],
    imgId: "prod-kitchen-img-b1c2d3",
    titleId: "prod-kitchen-title",
    descId: "prod-kitchen-desc",
    desc: "Cookware sets, kitchen appliances, utensils, storage containers, bakeware",
  },
  {
    id: "office",
    name: "Office Supplies",
    items: ["Stationery", "Desk accessories", "Filing and storage", "Presentation materials", "Promotional items", "Corporate gifts"],
    imgId: "prod-office-img-e4f5g6",
    titleId: "prod-office-title",
    descId: "prod-office-desc",
    desc: "Stationery, desk accessories, filing, presentation materials, corporate gifts",
  },
  {
    id: "led",
    name: "LED Lighting",
    items: ["Commercial LED fixtures", "Residential lighting", "Outdoor and street lighting", "LED strips and modules", "Smart lighting systems", "Emergency lighting"],
    imgId: "prod-led-img-h7i8j9",
    titleId: "prod-led-title",
    descId: "prod-led-desc",
    desc: "Commercial LED fixtures, residential lighting, outdoor lighting, LED strips",
  },
]

export default function Products() {
  const containerRef = useRef(null)
  const [active, setActive] = useState(categories[0].id)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [active])

  const activeCategory = categories.find((c) => c.id === active)

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-[#1A1F2E] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-[#D4A017] mb-3">Product Categories</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Products We Source</h1>
            <p className="text-lg text-[#9AAABB] leading-relaxed">
              We source across a wide range of industries. If your product is manufactured in China, we can help you find the right supplier.
            </p>
          </div>
        </div>
      </section>

      {/* Category Browser */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Browse by Category"
            title="What Can We Source for You?"
            subtitle="Select a category to see the types of products we regularly source from China."
          />

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border ${
                  active === cat.id
                    ? "bg-[#1A4B8C] text-white border-[#1A4B8C]"
                    : "bg-white text-[#3D4A5C] border-[#D8E0EA] hover:border-[#1A4B8C] hover:text-[#1A4B8C]"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Active Category Detail */}
          {activeCategory && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 id={activeCategory.titleId} className="text-2xl md:text-3xl font-bold text-[#1A1F2E] mb-4">
                  {activeCategory.name}
                </h2>
                <p id={activeCategory.descId} className="text-[#3D4A5C] mb-6">
                  We source {activeCategory.desc} from verified Chinese manufacturers. Our team handles supplier identification, factory audits, quality inspection, and shipping.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
                  {activeCategory.items.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-[#3D4A5C] text-sm">
                      <div className="w-1.5 h-1.5 bg-[#1A4B8C] rounded-full flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
                <Link to="/contact">
                  <Button variant="primary" size="md">
                    Source This Product <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  alt={activeCategory.name}
                  data-strk-img-id={activeCategory.imgId}
                  data-strk-img={`[${activeCategory.descId}] [${activeCategory.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
                  className="w-full h-72 object-cover"
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* All Categories Grid */}
      <section className="py-16 bg-[#F7F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="All Categories"
            title="Full Category Overview"
            subtitle="A quick reference of all product categories we source."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => { setActive(cat.id); window.scrollTo({ top: 400, behavior: "smooth" }) }}
                className="bg-white rounded-xl border border-[#D8E0EA] p-4 text-left hover:border-[#1A4B8C] hover:shadow-md transition-all group"
              >
                <p className="text-[#1A1F2E] font-semibold text-sm group-hover:text-[#1A4B8C] transition-colors">{cat.name}</p>
                <p className="text-[#6B7A8D] text-xs mt-1">{cat.items.length} product types</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1A4B8C]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Don't See Your Product?</h2>
          <p className="text-[#93C5FD] text-lg mb-8">
            We source a wide range of products beyond the categories listed. Contact us and we'll let you know if we can help.
          </p>
          <Link to="/contact">
            <Button variant="cta" size="lg">Ask About Your Product</Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
