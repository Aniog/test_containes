import { Box } from 'lucide-react'
import PageHero from '@/components/common/PageHero'
import { productCategories } from '@/content/siteContent'

export default function Products() {
  return (
    <main>
      <PageHero
        eyebrow="Products We Source"
        title="Product categories commonly sourced through China"
        description="We support categories where supplier evaluation, factory follow-up, inspection planning, and packaging control matter to overseas buyers."
      />

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {productCategories.map((category) => (
              <article key={category.title} className="rounded-3xl border border-slate-950/10 bg-slate-50 p-6 shadow-sm md:p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-stone-100 text-slate-950">
                  <Box className="h-6 w-6" />
                </div>
                <h2 className="mt-6 text-xl font-semibold text-slate-950">{category.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-700/75">{category.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
