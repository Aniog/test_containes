import { INDUSTRIES } from '@/data/site'

export default function Industries() {
  return (
    <section id="industries" className="bg-ink-50 py-20 md:py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 mb-14">
          <div className="lg:col-span-7">
            <p className="eyebrow">Industries served</p>
            <h2 className="mt-4 section-title">
              Built for the fabricators
              <br />
              behind the things you use.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-8">
            <p className="text-base text-steel-600 leading-relaxed">
              From the ducts in your office to the enclosures in your data
              centre, ARTITECT machinery is in service across industries
              where accuracy, repeatability and uptime are not negotiable.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line rounded-md overflow-hidden border border-line">
          {INDUSTRIES.map((industry, index) => (
            <article
              key={industry.id}
              className="group bg-ink-50 p-8 lg:p-10 hover:bg-paper transition-colors duration-300"
            >
              <div className="flex items-baseline gap-4">
                <span className="font-display text-3xl text-copper-500">
                  0{index + 1}
                </span>
                <h3 className="text-lg font-semibold text-ink-900">
                  {industry.title}
                </h3>
              </div>
              <p className="mt-4 text-sm text-steel-600 leading-relaxed">
                {industry.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
