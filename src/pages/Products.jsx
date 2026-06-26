import PageHeader from '@/components/PageHeader.jsx'
import ProductsWeSource from '@/components/sections/ProductsWeSource.jsx'
import InquiryForm from '@/components/sections/InquiryForm.jsx'

const NOTES = [
  {
    title: 'Where we are strongest',
    body: 'Mid-volume orders for B2B importers, brands and e-commerce sellers across home goods, consumer electronics accessories, apparel basics, promotional merchandise and OEM hardware.',
  },
  {
    title: 'How we choose suppliers',
    body: 'We prioritize stable medium-sized factories with their own production lines, real engineering capability and a track record of working with overseas buyers. We avoid pure trading offices that resell other factories\' work.',
  },
  {
    title: 'Categories we usually decline',
    body: 'We do not handle regulated food and pharma products, dangerous goods, illegal or counterfeit items. For batteries, cosmetics and medical devices we only work with properly certified factories.',
  },
]

export default function Products() {
  return (
    <>
      <PageHeader
        eyebrow="Products we source"
        title="Focused categories, deep supplier networks"
        description="We work across a focused set of categories where we already have vetted factories, technical knowledge and reliable QC checklists."
      />

      <ProductsWeSource compact />

      <section className="border-b border-slate-200 bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {NOTES.map((n) => (
              <article
                key={n.title}
                className="rounded-xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-slate-900">{n.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">
                  {n.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <InquiryForm />
    </>
  )
}
