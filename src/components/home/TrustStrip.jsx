import { Container } from "@/components/ui/primitives"

export default function TrustStrip() {
  const items = [
    "Sourcing",
    "Verification",
    "Sampling",
    "Quality Control",
    "Production",
    "Logistics",
  ]
  return (
    <section className="bg-white border-b border-slate-200">
      <Container className="py-6">
        <p className="text-xs uppercase tracking-widest text-slate-500 font-semibold text-center">
          End-to-end China sourcing — managed by one team
        </p>
        <ul className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 md:gap-x-10">
          {items.map((item) => (
            <li
              key={item}
              className="text-sm md:text-base font-semibold text-slate-700"
            >
              {item}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}