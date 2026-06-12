import { Link } from 'react-router-dom'

export default function CtaSection() {
  return (
    <section className="bg-blue-700 py-14 text-white">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 px-4 sm:px-6 md:flex-row md:items-center lg:px-8">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-blue-100">Ready to discuss your product?</p>
          <h2 className="mt-2 text-3xl font-bold text-white">Send your sourcing details for a practical review.</h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-blue-50">
            Tell us what you need to source, your target quantity, quality requirements, and shipping destination.
          </p>
        </div>
        <Link to="/contact" className="inline-flex shrink-0 justify-center rounded-full bg-white px-6 py-3.5 text-sm font-bold text-blue-700 hover:bg-blue-50">
          Get a Free Sourcing Quote
        </Link>
      </div>
    </section>
  )
}
