import { ArrowUpRight } from 'lucide-react'

const InquiryBanner = () => {
  return (
    <section id="inquiry" className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-800 p-8 md:p-12">
          <p className="text-xs font-medium uppercase tracking-[0.32em] text-amber-400">
            Ready to position the brand
          </p>
          <div className="mt-5 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                Present ARTITECT MACHINERY as the premium choice for folding equipment.
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-300 md:text-lg">
                This homepage is designed to introduce your double folding machine range with an elegant industrial tone and a visitor-friendly layout.
              </p>
            </div>

            <a
              className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-400"
              href="#products"
            >
              Review product range
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InquiryBanner
