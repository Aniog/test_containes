import { Wrench, Headphones, Truck, Award } from 'lucide-react'

const reasons = [
  {
    icon: Wrench,
    title: 'Precision Craftsmanship',
    description:
      'Every machine is engineered and assembled to tight tolerances, ensuring repeatable accuracy across millions of cycles.',
  },
  {
    icon: Headphones,
    title: 'Dedicated Support',
    description:
      'Our technical team provides responsive support, from installation and commissioning to ongoing maintenance guidance.',
  },
  {
    icon: Truck,
    title: 'Global Shipping',
    description:
      'We ship worldwide with protective crating and logistics partners experienced in heavy industrial equipment transport.',
  },
  {
    icon: Award,
    title: 'Quality Certified',
    description:
      'Our manufacturing processes and machines are backed by rigorous quality testing and industry-standard certifications.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-surface">
      <div className="container-main">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
            Why Artitect
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            The Partner Modern Shops Trust
          </h2>
          <p className="text-muted leading-relaxed">
            Decades of engineering experience go into every machine we build. Here is
            what sets us apart.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="bg-white rounded-xl border border-border p-6 md:p-8 text-center transition-all duration-300 hover:shadow-md hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-5">
                <r.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-base font-bold mb-3">{r.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{r.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
