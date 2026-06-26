import SectionHeading from '@/components/ui/SectionHeading'
import InquiryForm from '@/components/common/InquiryForm'
import Icon from '@/components/ui/Icon'

const POINTS = [
  'Free, no-obligation sourcing quote within one business day',
  'Confidential — we never share your project with suppliers',
  'No large commitment required to start a conversation',
]

export default function HomeInquiry() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Get Started"
              title="Get a free sourcing quote"
              description="Tell us what you want to source. We will review your requirements and come back with a clear plan, candidate suppliers, and an honest assessment of feasibility and cost."
            />
            <ul className="mt-8 space-y-4">
              {POINTS.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                  <span className="text-sm leading-relaxed text-ink-muted">{p}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200">
              <div className="aspect-[16/9] overflow-hidden bg-slate-100">
                <img
                  alt="Quality inspection on a factory production line in China"
                  data-strk-img-id="home-inquiry-img-2b7e91"
                  data-strk-img="[home-inquiry-desc] [home-inquiry-title]"
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="900"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="bg-surface p-4">
                <p id="home-inquiry-title" className="text-sm font-semibold text-ink">
                  On-site quality inspection
                </p>
                <p id="home-inquiry-desc" className="mt-1 text-xs text-ink-muted">
                  Our inspectors check every order against your spec sheet before it ships.
                </p>
              </div>
            </div>
          </div>

          <div id="inquiry">
            <InquiryForm sourcePage="home" />
          </div>
        </div>
      </div>
    </section>
  )
}
