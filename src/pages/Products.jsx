import PageHeader from '@/components/layout/PageHeader'
import ProductsSection from '@/components/sections/ProductsSection'
import CTASection from '@/components/sections/CTASection'
import { Section, SectionHeader } from '@/components/ui/Section'
import { MapPin } from 'lucide-react'

const HUBS = [
  { region: 'Shenzhen & Dongguan', focus: 'Electronics, gadgets, accessories' },
  { region: 'Guangzhou & Foshan', focus: 'Apparel, furniture, home goods' },
  { region: 'Yiwu & Shantou', focus: 'Small commodities, toys, daily use' },
  { region: 'Ningbo & Shaoxing', focus: 'Textiles, hardware, home appliances' },
  { region: 'Yongkang & Wenzhou', focus: 'Hardware, tools, valves, fittings' },
  { region: 'Quanzhou & Xiamen', focus: 'Footwear, bags, sporting goods' },
]

export default function Products() {
  return (
    <>
      <PageHeader
        eyebrow="Products We Source"
        title="Products we source from China"
        description="We source across China's main manufacturing hubs, matching each product category to the region that specializes in it."
      />
      <ProductsSection showCta={false} />

      <Section className="bg-slate-50">
        <SectionHeader
          eyebrow="Manufacturing Hubs"
          title="Where we source"
          description="Each region of China specializes in different product categories. We route your inquiry to the right hub."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {HUBS.map((hub) => (
            <div key={hub.region} className="card p-6 md:p-8">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                <MapPin className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-bold text-slate-900">
                {hub.region}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{hub.focus}</p>
            </div>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  )
}
