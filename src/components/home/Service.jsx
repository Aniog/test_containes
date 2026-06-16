import { PhoneCall, Truck, GraduationCap, Wrench } from 'lucide-react'

const SERVICE_POINTS = [
  {
    icon: PhoneCall,
    title: '24/7 technical hotline',
    body: 'A real engineer answers the phone — not a queue. Round-the-clock, every day of the year.',
  },
  {
    icon: Truck,
    title: 'Regional spare parts',
    body: 'Depots in Pittsburgh, Stuttgart, Yokohama and Monterrey carry the parts your line depends on.',
  },
  {
    icon: GraduationCap,
    title: 'Operator training',
    body: 'On-site or in our plant — programs that turn good operators into folding experts.',
  },
  {
    icon: Wrench,
    title: 'Scheduled maintenance',
    body: 'Predictive service intervals that respect your production calendar, not interrupt it.',
  },
]

export default function Service() {
  return (
    <section id="service" className="bg-paper py-20 md:py-28 border-t border-line">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mb-14">
          <p className="eyebrow">Service & support</p>
          <h2 className="mt-4 section-title">
            The relationship begins at delivery.
          </h2>
          <p className="mt-6 lead">
            A folding machine is a thirty-year asset. We treat the
            relationship the same way — long, attentive, and never
            outsourced.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICE_POINTS.map((point) => {
            const Icon = point.icon
            return (
              <div key={point.title} className="flex flex-col">
                <span
                  aria-hidden="true"
                  className="inline-flex items-center justify-center w-12 h-12 rounded-md bg-ink-900 text-copper-500 mb-5"
                >
                  <Icon className="w-5 h-5" strokeWidth={1.5} />
                </span>
                <h3 className="text-base font-semibold text-ink-900">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm text-steel-600 leading-relaxed">
                  {point.body}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
