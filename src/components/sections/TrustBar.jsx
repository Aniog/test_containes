import { COMPANY } from "@/data/content"

export default function TrustBar() {
  return (
    <section className="border-y border-border-soft bg-white">
      <div className="container-x flex flex-col items-center justify-between gap-6 py-8 md:flex-row">
        <p className="text-sm font-medium text-ink-500">
          Trusted by importers, brands and distributors in
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-semibold text-ink-700">
          {COMPANY.markets.map((m) => (
            <li key={m} className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
              {m}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
