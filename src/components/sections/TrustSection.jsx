import { Container } from "@/components/ui/primitives"
import { trustPoints } from "@/data/site"

export default function TrustSection() {
  return (
    <section className="border-y border-slate-200 bg-white py-14">
      <Container>
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {trustPoints.map((t) => (
            <div key={t.label} className="text-center">
              <p className="text-4xl font-bold tracking-tight text-blue-700 md:text-5xl">{t.value}</p>
              <p className="mt-2 text-sm font-medium text-slate-600">{t.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
