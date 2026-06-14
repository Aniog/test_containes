import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import {
  ArrowRight,
  Cpu,
  Shirt,
  Sofa,
  Sparkles,
  Wrench,
  Package,
  Lightbulb,
  Bike,
  Baby,
  Box,
  CheckCircle2,
  Boxes,
} from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import PageHero from "@/components/sections/PageHero.jsx"
import CTASection from "@/components/sections/CTASection.jsx"

const CATEGORIES = [
  {
    slug: "consumer-electronics",
    title: "Consumer electronics & accessories",
    icon: Cpu,
    blurb:
      "Chargers, cables, audio, smart-home devices, phone and laptop accessories. Strong cluster in Shenzhen and Dongguan.",
    capabilities: [
      "Bluetooth, Qi and USB-C compliance",
      "Lithium battery shipping documentation (UN38.3)",
      "CE, FCC, RoHS, REACH testing coordination",
      "Firmware / packaging / private label support",
    ],
  },
  {
    slug: "apparel-and-textiles",
    title: "Apparel, textiles & fashion accessories",
    icon: Shirt,
    blurb:
      "Cut-and-sew, knitwear, activewear, bags, hats and fashion accessories. Strong cluster in Guangdong, Zhejiang and Fujian.",
    capabilities: [
      "Fabric and trim sourcing (GRS, OEKO-TEX)",
      "Tech packs, sample rooms and graded size sets",
      "Inline and final inspections per AQL",
      "Care label and fiber-content compliance",
    ],
  },
  {
    slug: "home-and-kitchen",
    title: "Home, kitchen & household goods",
    icon: Sofa,
    blurb:
      "Cookware, tableware, storage, cleaning, organizers and small appliances. Strong cluster in Yongkang, Foshan and Ningbo.",
    capabilities: [
      "Food-grade silicone and stainless steel",
      "LFGB, FDA, Prop 65 documentation",
      "Retail-ready packaging and barcodes",
      "Drop-ship and Amazon FBA prep",
    ],
  },
  {
    slug: "beauty-and-personal-care",
    title: "Beauty, personal care & cosmetics",
    icon: Sparkles,
    blurb:
      "Skincare, haircare, body care, color cosmetics and tools. Strong cluster in Guangzhou, Shanghai and Hangzhou.",
    capabilities: [
      "GMP and ISO 22716 audited factories",
      "CPSR, CPNP, FDA MoCRA documentation",
      "Stability and challenge testing coordination",
      "Custom formulation and packaging",
    ],
  },
  {
    slug: "industrial-and-hardware",
    title: "Industrial parts, hardware & tools",
    icon: Wrench,
    blurb:
      "CNC, sheet metal, casting, plastic injection, hand tools and fasteners. Strong cluster in Shenzhen, Dongguan and Ningbo.",
    capabilities: [
      "GD&T drawing review and DFM feedback",
      "Material certificates (mill test reports)",
      "PPAP-style first article inspections",
      "Custom tooling, jigs and fixtures",
    ],
  },
  {
    slug: "packaging-and-printing",
    title: "Packaging, paper & printing",
    icon: Package,
    blurb:
      "Folding cartons, rigid boxes, paper bags, labels, stickers and flexible packaging. Strong cluster in Shenzhen and Dongguan.",
    capabilities: [
      "Offset, digital and flexo printing",
      "Color management per Pantone / GMG",
      "Eco materials (FSC, recycled, biodegradable)",
      "FBA-ready kits and bundle packaging",
    ],
  },
  {
    slug: "furniture-and-lighting",
    title: "Furniture, lighting & home decor",
    icon: Lightbulb,
    blurb:
      "Indoor and outdoor furniture, decorative lighting, soft furnishings and home decor. Strong cluster in Foshan and Zhongshan.",
    capabilities: [
      "KD / RTA / assembled packing options",
      "Drop-test and carton-drop simulation",
      "FSC wood, REACH finishes, CARB compliance",
      "Container loading optimization",
    ],
  },
  {
    slug: "sports-and-outdoor",
    title: "Sports, outdoor & fitness equipment",
    icon: Bike,
    blurb:
      "Camping, fitness, water sports, cycling and outdoor accessories. Strong cluster in Zhejiang, Fujian and Guangdong.",
    capabilities: [
      "Material performance testing (UV, salt spray)",
      "CE / EN 71 / CPSIA documentation",
      "Branded packaging and instructional inserts",
      "Consolidation with other product lines",
    ],
  },
  {
    slug: "toys-kids-and-pet",
    title: "Toys, kids & pet products",
    icon: Baby,
    blurb:
      "Toys, baby products, pet accessories and seasonal items. Strong cluster in Chenghai, Shantou and Yangzhou.",
    capabilities: [
      "EN 71, ASTM F963, CPSIA compliance",
      "Lab testing coordination for small parts",
      "Age grading and warning label review",
      "Color and material sample approval",
    ],
  },
]

export default function Products() {
  const containerRef = useRef(null)
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])
  return (
    <div ref={containerRef}>
      <PageHero
        eyebrow="Products we source"
        title="We cover the categories overseas buyers ask for most"
        subtitle="Our supplier network is concentrated in China's major industrial clusters. Below are the categories we actively work in, with the typical compliance and packaging support we coordinate."
        bullets={["1,400+ vetted suppliers", "Multi-cluster coverage", "Compliance support built-in"]}
      />

      <section className="section bg-white">
        <div className="container-wide">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES.map((c) => (
              <article
                key={c.slug}
                id={c.slug}
                className="card flex h-full flex-col overflow-hidden p-0"
              >
                <img
                  alt={c.title}
                  data-strk-img-id={`products-${c.slug}-img`}
                  data-strk-img={`[products-${c.slug}-blurb] [products-${c.slug}-title] China sourcing agent product category factory`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="aspect-[16/9] w-full object-cover"
                />
                <div className="flex h-full flex-col p-6">
                <div className="flex items-center gap-3">
                  <span className="icon-bubble-accent">
                    <c.icon className="h-6 w-6" />
                  </span>
                  <h2
                    id={`products-${c.slug}-title`}
                    className="text-lg font-semibold text-slate-900"
                  >
                    {c.title}
                  </h2>
                </div>
                <p
                  id={`products-${c.slug}-blurb`}
                  className="mt-3 text-sm text-slate-600"
                >
                  {c.blurb}
                </p>
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  {c.capabilities.map((cap) => (
                    <li key={cap} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success-600" />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="btn-ghost mt-5 self-start"
                >
                  Request a supplier shortlist for {c.title.split(",")[0].toLowerCase()}{" "}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container-wide">
          <div className="grid items-start gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="eyebrow">Don't see your category?</p>
              <h2 className="h2 mt-3">If it can be made in China, we can source it</h2>
              <p className="lead mt-4">
                The list above covers the categories we work in most often, but we have
                helped buyers in adjacent categories from time to time — including
                promotional products, agricultural equipment, lab supplies, and
                specialty B2B items.
              </p>
              <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6">
                <p className="text-base font-semibold text-slate-900">
                  A sourcing manager will tell you in plain English whether we are the
                  right fit.
                </p>
                <p className="mt-2 text-sm text-slate-600">
                  If we are not, we will point you to a more relevant partner. We do
                  not take on projects we cannot deliver well.
                </p>
                <Link to="/contact" className="btn-primary mt-5">
                  Tell us what you want to source <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                <h3 className="text-xl font-semibold text-slate-900">
                  Common special-request projects
                </h3>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {[
                    "Promotional and branded merchandise",
                    "Lab and medical consumables (non-regulated)",
                    "Agricultural tools and equipment",
                    "Specialty packaging and gift sets",
                    "Educational kits and STEM products",
                    "Travel, luggage and accessories",
                    "Stationery, craft and hobby items",
                    "Specialty pet products and supplies",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 rounded-md border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700"
                    >
                      <Boxes className="mt-0.5 h-4 w-4 shrink-0 text-navy-700" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
