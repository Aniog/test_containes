import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import strkImgConfig from '@/strk-img-config.json'
import SectionHeading from '@/components/shared/SectionHeading'
import CtaBand from '@/components/shared/CtaBand'

const categories = [
  {
    id: 'electronics',
    title: 'Consumer Electronics',
    description:
      'Bluetooth audio, chargers and cables, smart home accessories, wearables, and small home appliances — mainly from Shenzhen and Dongguan, the heart of China’s electronics supply chain.',
    examples: ['Bluetooth speakers & earbuds', 'Chargers, cables & power banks', 'Smart home devices', 'Small home appliances'],
    compliance: 'Typical compliance: CE, FCC, RoHS, UL',
    imgId: 'cat-electronics-1c47a9',
  },
  {
    id: 'home-kitchen',
    title: 'Home & Kitchen',
    description:
      'Cookware, kitchen tools, storage solutions, tableware, and everyday household essentials from long-established factory clusters in Guangdong, Zhejiang, and Fujian.',
    examples: ['Cookware & bakeware', 'Food storage & organizers', 'Tableware & drinkware', 'Cleaning & household tools'],
    compliance: 'Typical compliance: FDA/LFGB food-contact testing',
    imgId: 'cat-homekitchen-8e25b3',
  },
  {
    id: 'furniture',
    title: 'Furniture & Home Decor',
    description:
      'Indoor and outdoor furniture, lighting, rugs, and decor. We pay special attention to materials, finishes, moisture control, and loading plans for bulky cargo.',
    examples: ['Indoor & outdoor furniture', 'Lighting fixtures', 'Home textiles & rugs', 'Decorative accessories'],
    compliance: 'Typical compliance: EN 12520/581, CARB, fire-retardancy standards',
    imgId: 'cat-furniture-6d91c4',
  },
  {
    id: 'apparel',
    title: 'Apparel & Textiles',
    description:
      'Garments, activewear, uniforms, and home textiles. Fabric composition, colorfastness, measurements, and workmanship are verified against your tech pack.',
    examples: ['Casual & activewear', 'Workwear & uniforms', 'Bedding & towels', 'Bags & accessories'],
    compliance: 'Typical compliance: OEKO-TEX, AZO-free, fiber content labeling',
    imgId: 'cat-apparel-3b78e5',
  },
  {
    id: 'beauty',
    title: 'Beauty & Personal Care',
    description:
      'Cosmetic tools, skincare and beauty device housings, brushes, and packaging from GMP-compliant workshops. We verify hygiene conditions and material safety in person.',
    examples: ['Makeup brushes & tools', 'Beauty device housings', 'Cosmetic packaging', 'Personal care accessories'],
    compliance: 'Typical compliance: GMP, ISO 22716, material safety data',
    imgId: 'cat-beauty-9a34f6',
  },
  {
    id: 'toys',
    title: 'Toys & Games',
    description:
      'Plush toys, educational toys, outdoor play equipment, and board games. Safety testing and age-grading requirements are checked before a factory even enters our shortlist.',
    examples: ['Plush & soft toys', 'Educational & STEM toys', 'Outdoor play equipment', 'Board games & puzzles'],
    compliance: 'Typical compliance: EN71, ASTM F963, CPSIA',
    imgId: 'cat-toys-2f56d1',
  },
  {
    id: 'industrial',
    title: 'Industrial & Hardware',
    description:
      'Tools, fasteners, custom metal and plastic parts, and machinery components. Dimensional checks, material certificates, and hardness testing are part of our standard QC.',
    examples: ['Hand & power tools', 'Fasteners & fittings', 'CNC & sheet-metal parts', 'Injection-molded components'],
    compliance: 'Typical compliance: material certs (SGS/RoHS), ISO 9001 factories',
    imgId: 'cat-industrial-7c83b8',
  },
  {
    id: 'packaging',
    title: 'Packaging & Printing',
    description:
      'Custom boxes, pouches, labels, and retail-ready packaging. We manage dielines, print proofs, and color matching so your packaging arrives as approved.',
    examples: ['Rigid & folding cartons', 'Flexible pouches & bags', 'Labels & stickers', 'Retail display packaging'],
    compliance: 'Typical compliance: FSC paper options, food-grade inks',
    imgId: 'cat-packaging-4e19a7',
  },
]

const Products = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-paper py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Products We Source"
            title="Eight categories, deep factory networks"
            description="We focus on categories where we have audited factories, run inspections for years, and know what typically goes wrong. If your product falls outside these, ask us — we will tell you honestly whether we can help."
          />
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 md:gap-8">
            {categories.map((category) => (
              <article
                key={category.id}
                className="group flex flex-col overflow-hidden rounded-xl border border-line bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="aspect-[16/9] overflow-hidden bg-paper">
                  <img
                    alt={category.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    data-strk-img-id={category.imgId}
                    data-strk-img={`[cat-${category.id}-desc] [cat-${category.id}-title]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6 md:p-8">
                  <h2 id={`cat-${category.id}-title`} className="text-xl font-bold text-ink md:text-2xl">
                    {category.title}
                  </h2>
                  <p id={`cat-${category.id}-desc`} className="mt-3 text-base leading-relaxed text-slate-body">
                    {category.description}
                  </p>
                  <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                    {category.examples.map((example) => (
                      <li key={example} className="flex items-start gap-2 text-sm text-slate-body">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                        {example}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 rounded-lg bg-paper px-4 py-2.5 text-sm font-medium text-ink">
                    {category.compliance}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14 rounded-xl border border-line bg-paper p-8 text-center md:p-10">
            <h2 className="text-2xl font-bold tracking-tight text-ink">
              Sourcing something else?
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-slate-body">
              These are our core categories, not a hard limit. Send us your product
              brief — if it is outside our expertise, we will say so and point you
              in the right direction.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-brand-600 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-brand-700"
            >
              Ask about your product <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </div>
  )
}

export default Products
