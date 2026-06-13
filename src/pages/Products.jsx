import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ArrowRight, CheckCircle } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

const categories = [
  {
    name: "Consumer Electronics",
    items: [
      "Smartphones & accessories",
      "Bluetooth earphones & speakers",
      "Smart home devices",
      "Phone cases & screen protectors",
      "Chargers, cables & power banks",
      "Wearable technology",
    ],
  },
  {
    name: "Home & Kitchen",
    items: [
      "Cookware & bakeware",
      "Kitchen appliances",
      "Home storage & organization",
      "Home decor & furnishings",
      "Bathroom accessories",
      "Cleaning products & tools",
    ],
  },
  {
    name: "Fashion & Apparel",
    items: [
      "Men's & women's clothing",
      "Shoes & footwear",
      "Bags & luggage",
      "Fashion accessories",
      "Textiles & fabrics",
      "Underwear & socks",
    ],
  },
  {
    name: "Industrial & MRO",
    items: [
      "Machinery & equipment",
      "Hand & power tools",
      "Hardware & fasteners",
      "Safety equipment & PPE",
      "Hydraulic & pneumatic components",
      "Measurement & testing instruments",
    ],
  },
  {
    name: "Health & Beauty",
    items: [
      "Skincare & cosmetics",
      "Hair care products",
      "Supplements & vitamins",
      "Personal care appliances",
      "Essential oils & aromatherapy",
      "Medical supplies",
    ],
  },
  {
    name: "Auto Parts & Accessories",
    items: [
      "Car interior accessories",
      "Car exterior accessories",
      "Replacement parts",
      "Car care products",
      "Motorcycle parts",
      "GPS & electronics",
    ],
  },
  {
    name: "Sports & Outdoor",
    items: [
      "Fitness equipment",
      "Camping & hiking gear",
      "Sportswear & shoes",
      "Cycling accessories",
      "Water sports equipment",
      "Yoga & exercise mats",
    ],
  },
  {
    name: "Packaging & Printing",
    items: [
      "Custom boxes & cartons",
      "Label & sticker printing",
      "Flexible packaging",
      "Paper & board packaging",
      "Gift packaging",
      "Plastic & metal packaging",
    ],
  },
  {
    name: "Pet Products",
    items: [
      "Pet food & treats",
      "Pet beds & furniture",
      "Pet toys & accessories",
      "Pet grooming tools",
      "Pet clothing & collars",
      "Aquarium & terrarium supplies",
    ],
  },
  {
    name: "Baby & Kids",
    items: [
      "Baby clothing & accessories",
      "Toys & educational games",
      "Baby care products",
      "Strollers & car seats",
      "Nursery furniture & decor",
      "Feeding & nursing supplies",
    ],
  },
  {
    name: "Furniture",
    items: [
      "Home furniture (sofas, tables, beds)",
      "Office furniture",
      "Outdoor furniture",
      "Storage furniture",
      "Restaurant & hotel furniture",
      "Custom furniture manufacturing",
    ],
  },
  {
    name: "Lighting",
    items: [
      "LED lighting",
      "Decorative lighting",
      "Commercial lighting",
      "Solar lighting",
      "Smart lighting systems",
      "Emergency lighting",
    ],
  },
]

export default function Products() {
  const ref = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <div ref={ref}>
      {/* Page Header */}
      <section className="bg-primary text-white py-20 md:py-24">
        <div className="section-container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Products We Source
            </h1>
            <p className="text-lg text-white/80 max-w-2xl">
              We source across dozens of product categories spanning consumer goods,
              industrial equipment, and everything in between.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="section-padding bg-bg">
        <div className="section-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, i) => (
              <div key={i} className="card-hover">
                <h2 className="text-lg font-semibold text-primary mb-4 pb-3 border-b border-border">
                  {cat.name}
                </h2>
                <ul className="space-y-2">
                  {cat.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-txt-secondary">
                      <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="bg-white py-12">
        <div className="section-container text-center max-w-3xl">
          <p className="text-txt-secondary">
            Don't see your product category listed? We source across virtually all manufacturing
            sectors. <Link to="/contact" className="text-accent font-medium">Contact us</Link> and we'll confirm if we can help source what you need.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-dark text-white py-16">
        <div className="section-container text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need a Specific Product?
          </h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Tell us exactly what you're looking for and we'll find the right supplier.
          </p>
          <Link to="/contact" className="btn-primary text-base px-8 py-4 inline-flex items-center gap-2">
            Tell Us What You Need <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}