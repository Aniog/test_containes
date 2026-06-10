import PageHeader from '../components/PageHeader'
import ProductsWeSource from '../components/home/ProductsWeSource'
import InquirySection from '../components/home/InquirySection'

const CLUSTERS = [
  { city: 'Yiwu', focus: 'General merchandise, gifts, accessories, small consumer goods' },
  { city: 'Shenzhen', focus: 'Consumer electronics, smart devices, audio, lighting' },
  { city: 'Ningbo', focus: 'Hardware, kitchenware, small appliances, fitness equipment' },
  { city: 'Foshan', focus: 'Furniture, ceramics, lighting, building materials' },
  { city: 'Dongguan', focus: 'Plastics, toys, packaging, electromechanical assembly' },
  { city: 'Hangzhou / Shaoxing', focus: 'Apparel, knitwear, home textiles' },
]

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Products We Source"
        title="Categories and supply clusters we cover"
        subtitle="We focus on durable consumer and industrial categories with mature supply clusters across China — where quality, capacity, and pricing are all reliable."
      />

      <ProductsWeSource heading={false} />

      <section className="py-16 md:py-24 bg-surface-muted">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue">Supply Clusters</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-brand-navy">
              Where we source, and why it matters
            </h2>
            <p className="mt-4 text-ink-700 text-lg">
              China's manufacturing is concentrated in specialized regional clusters. Knowing the
              right cluster for your product means better factories, better pricing, and shorter
              lead times.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {CLUSTERS.map((c) => (
              <div key={c.city} className="rounded-xl border border-ink-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-brand-navy">{c.city}</h3>
                <p className="mt-2 text-sm text-ink-700 leading-relaxed">{c.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <InquirySection sourcePage="products" />
    </>
  )
}
