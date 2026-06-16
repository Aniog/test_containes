import { Check } from 'lucide-react'

const features = [
  'Refined operator workflow with clear process steps',
  'Strong visual emphasis on precision metal folding',
  'Premium brand framing for industrial equipment buyers',
  'Structured sections that are easy to scan on desktop and mobile',
]

const ProductShowcase = () => {
  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-20 md:px-10 md:py-28 lg:grid-cols-[1fr_0.95fr] lg:items-center">
        <div className="rounded-[2rem] border border-slate-200 bg-stone-50 p-8 shadow-sm md:p-10">
          <p className="text-xs font-medium uppercase tracking-[0.32em] text-amber-700">
            User-friendly structure
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
            Elegant on first impression, straightforward in every section.
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-700 md:text-lg">
            Buyers can move from brand impression to product understanding without friction. The page uses clear hierarchy, readable spacing, and practical product naming to support faster decision-making.
          </p>

          <div className="mt-8 grid gap-4">
            {features.map((feature) => (
              <div key={feature} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-4">
                <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                  <Check className="h-4 w-4" />
                </span>
                <p className="text-sm leading-6 text-slate-700">{feature}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-8 text-white shadow-xl md:p-10">
          <p className="text-xs font-medium uppercase tracking-[0.32em] text-slate-400">
            Ideal buyer impression
          </p>
          <div className="mt-6 space-y-6">
            <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-400">What they see</p>
              <p className="mt-3 text-2xl font-semibold tracking-tight text-white">
                Premium machinery with a clear industrial focus
              </p>
            </div>
            <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-400">What they understand</p>
              <p className="mt-3 text-lg leading-7 text-slate-200">
                ARTITECT MACHINERY specializes in double folding machines, sheet metal folders, and metal folding equipment with a polished and trustworthy presentation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductShowcase
