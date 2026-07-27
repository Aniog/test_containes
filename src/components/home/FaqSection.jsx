import SectionHeading from '@/components/shared/SectionHeading'
import FaqList from '@/components/shared/FaqList'
import { Link } from 'react-router-dom'

export default function FaqSection() {
  return (
    <section className="section-pad bg-white">
      <div className="container-page">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions buyers often ask"
          subtitle="Straight answers about how we work, what we charge, and what to expect."
          align="center"
        />
        <div className="mt-12">
          <FaqList />
        </div>
        <p className="mt-8 text-center text-sm text-muted">
          Still have questions?{' '}
          <Link to="/contact" className="font-semibold text-steel hover:text-navy">
            Talk to a sourcing specialist
          </Link>
          .
        </p>
      </div>
    </section>
  )
}
