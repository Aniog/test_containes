import { useEffect, useRef } from 'react'
import PageHero from '../components/sections/PageHero'
import CtaBanner from '../components/sections/CtaBanner'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const categories = [
  {
    id: 'electronics',
    title: 'Consumer Electronics',
    desc: 'Small appliances, smart home accessories, audio, chargers, lifestyle electronics. We source mainly in Shenzhen, Dongguan and Huizhou with CE/FCC/RoHS-capable factories.',
    bullets: ['OEM/ODM with custom firmware', 'CE, FCC, RoHS, UKCA, PSE testing', 'EMS factories for assemblies and PCBA'],
    imgId: 'page-cat-elec-3120fa',
  },
  {
    id: 'home',
    title: 'Home & Kitchen',
    desc: 'Cookware, kitchen tools, storage, household and HoReCa supplies. Hubs: Yiwu, Guangzhou, Ningbo. Strong factories for stainless steel, plastic injection and silicone.',
    bullets: ['Private-label and white-label', 'Custom color, logo, packaging', 'LFGB / FDA food-grade testing'],
    imgId: 'page-cat-home-44a01b',
  },
  {
    id: 'apparel',
    title: 'Apparel & Textiles',
    desc: 'Fashion, sportswear, workwear and home textiles. We work with both small workshops for MOQ-friendly orders and vertically integrated factories for serious brands.',
    bullets: ['Tech packs and fit samples', 'Cotton, polyester, recycled and technical fabrics', 'OEKO-TEX, GRS, BSCI sourcing'],
    imgId: 'page-cat-apparel-001cbe',
  },
  {
    id: 'furniture',
    title: 'Furniture',
    desc: 'Living, office and outdoor furniture, including metal, solid wood and engineered wood. We help control container loading and minimize damage.',
    bullets: ['Custom design and prototypes', 'EU/US flammability standards', 'Container load planning'],
    imgId: 'page-cat-furniture-90fa31',
  },
  {
    id: 'industrial',
    title: 'Industrial & Machinery',
    desc: 'Components, OEM parts, packaging machinery, light industrial equipment. We coordinate technical drawings, tolerances and material certificates.',
    bullets: ['CNC, casting, sheet metal, plastic injection', 'Material certificates and inspection plans', 'On-site FAT (Factory Acceptance Tests)'],
    imgId: 'page-cat-industrial-6f12ca',
  },
  {
    id: 'beauty',
    title: 'Beauty & Personal Care',
    desc: 'Beauty tools, salon equipment, personal care devices and skincare packaging. We source bottles, jars, droppers, applicators and finished accessories.',
    bullets: ['Custom molds and decoration', 'GMP-aware suppliers when needed', 'Cosmetic packaging at scale'],
    imgId: 'page-cat-beauty-22cda1',
  },
  {
    id: 'sports',
    title: 'Sports & Outdoor',
    desc: 'Fitness equipment, camping, cycling, team sports. We source both branded accessories and full custom equipment.',
    bullets: ['Custom branding and colorways', 'Safety standards as required', 'Carton and pallet optimization'],
    imgId: 'page-cat-sports-aa61bb',
  },
  {
    id: 'toys',
    title: 'Toys & Baby',
    desc: 'Educational toys, plush, baby accessories and licensed merchandise — with mandatory safety testing.',
    bullets: ['EN71, ASTM F963, CPSIA testing', 'Trusted factories with audit history', 'Strict QC on small parts and labels'],
    imgId: 'page-cat-toys-bb22f1',
  },
  {
    id: 'auto',
    title: 'Auto Parts & Accessories',
    desc: 'Aftermarket auto accessories, lighting, interior parts and tooling. We source IATF 16949-aware suppliers when needed.',
    bullets: ['Aftermarket and OEM-style parts', 'Material and dimensional inspections', 'Spec sheet and approval process'],
    imgId: 'page-cat-auto-cc81df',
  },
]

export default function Products() {
  const ref = useRef(null)
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <>
      <PageHero
        eyebrow="Products we source"
        title="Categories and product types we handle"
        description="If your product is mass-produced in China, we likely know the right city, cluster and factory. Here are the categories we work with most often."
        bgQuery="China factory production line workers"
        bgId="products-page-bg-77ab12"
      />

      <section ref={ref} className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((c) => (
              <article
                key={c.id}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="relative aspect-[3/2] overflow-hidden bg-slate-100">
                  <img
                    alt={c.title}
                    data-strk-img-id={c.imgId}
                    data-strk-img={`[products-${c.id}-title] [products-${c.id}-desc] manufacturing China`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6 md:p-7">
                  <h3 id={`products-${c.id}-title`} className="text-lg font-semibold text-slate-900">
                    {c.title}
                  </h3>
                  <p id={`products-${c.id}-desc`} className="mt-2 text-sm leading-relaxed text-slate-600">
                    {c.desc}
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-slate-700">
                    {c.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
