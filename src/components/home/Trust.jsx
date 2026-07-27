import { ShieldCheck, Users, Globe, Clock, Award, Headphones } from "lucide-react"

const trustPoints = [
  { icon: ShieldCheck, title: "Verified Networks", desc: "Relationships with audited manufacturers across key Chinese industrial clusters." },
  { icon: Users, title: "Local Teams", desc: "Bilingual staff on the ground in Shenzhen, Yiwu, Guangzhou, and Ningbo." },
  { icon: Globe, title: "Global Clients", desc: "Supporting buyers in North America, Europe, Australia, and the Middle East." },
  { icon: Clock, title: "Fast Turnaround", desc: "Initial supplier shortlist typically delivered within 5–7 business days." },
  { icon: Award, title: "Transparent Fees", desc: "Clear service fees with no hidden commissions from factories." },
  { icon: Headphones, title: "Dedicated Support", desc: "Single point of contact from sourcing through to delivery." },
]

export default function Trust() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-site">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">Trust Points</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-primary md:text-4xl">
            Why Buyers Trust SSourcing China
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {trustPoints.map((point) => (
            <div key={point.title} className="flex gap-4 rounded-lg border bg-card p-5 shadow-sm">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-accent/10 text-accent">
                <point.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-primary">{point.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{point.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
