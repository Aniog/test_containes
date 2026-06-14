import Section, { SectionHeader } from '@/components/shared/Section'
import InquiryForm from '@/components/shared/InquiryForm'

const InquirySection = () => (
  <Section id="inquiry" soft>
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
      <div className="lg:col-span-5">
        <p className="kicker">Free, no obligation</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary tracking-tight">
          Tell us what you want to source.
        </h2>
        <p className="mt-4 md:mt-5 text-base md:text-lg text-primary-600 leading-relaxed">
          A sourcing manager — not a chatbot — reads every inquiry and replies within one business day with a sourcing plan, a list of candidate factories, and a transparent fee structure.
        </p>
        <ul className="mt-7 space-y-3 text-sm md:text-base text-primary-600">
          <li className="flex items-start gap-2.5">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
            <span>Replies within 24 hours on business days.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
            <span>Your data is not shared with factories or third parties without your approval.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
            <span>Free, written quote on the sourcing fee for your project.</span>
          </li>
        </ul>
      </div>
      <div className="lg:col-span-7">
        <InquiryForm sourcePage="home" />
      </div>
    </div>
  </Section>
)

export default InquirySection
