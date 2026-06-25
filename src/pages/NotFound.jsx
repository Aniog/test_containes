import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#E63946]">404</p>
        <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight text-[#0B2545]">Page not found</h1>
        <p className="mt-4 text-base text-slate-600 leading-relaxed">
          The page you are looking for may have been moved. Try one of the links below.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link to="/" className="inline-flex items-center gap-2 bg-[#E63946] hover:bg-[#C42E3A] text-white font-semibold px-5 py-2.5 rounded-md">Back to Home</Link>
          <Link to="/services" className="inline-flex items-center gap-2 bg-white text-[#0B2545] border border-slate-300 hover:border-[#0B2545] font-semibold px-5 py-2.5 rounded-md">Our Services</Link>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-[#0B2545] border border-slate-300 hover:border-[#0B2545] font-semibold px-5 py-2.5 rounded-md">Contact Us</Link>
        </div>
      </div>
    </section>
  )
}
