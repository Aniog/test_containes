import { testimonials } from "@/data/products"

function Stars({ count }) {
  return (
    <div className="flex items-center gap-1 text-brand-accent">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className={`h-4 w-4 ${i < count ? "fill-current" : "fill-none stroke-current"}`} viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.562.562 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.562.562 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.562.562 0 00.475-.345L11.48 3.5z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="bg-white border-y border-brand-line">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h2 className="section-title text-center mb-10">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((item) => (
            <div key={item.id} className="rounded-xl border border-brand-line bg-brand-bg p-6">
              <Stars count={item.stars} />
              <p className="mt-4 text-sm text-brand-ink leading-relaxed">“{item.text}”</p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-brand-subtle">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
