export default function TrustBar() {
  const logos = [
    { label: 'Alibaba Gold Supplier', sublabel: 'Verified Partner' },
    { label: 'ISO 9001 Certified', sublabel: 'Quality Management' },
    { label: 'SGS Approved', sublabel: 'Inspection Partner' },
    { label: '10+ Years', sublabel: 'Industry Experience' },
    { label: '500+ Projects', sublabel: 'Successfully Delivered' },
  ]

  return (
    <section className="bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <p className="text-center text-sm text-slate-400 font-medium uppercase tracking-wider mb-6">
          Trusted & Verified by Leading Platforms
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {logos.map((logo) => (
            <div
              key={logo.label}
              className="flex flex-col items-center justify-center p-4 rounded-lg bg-slate-50 border border-slate-100"
            >
              <span className="font-bold text-primary text-sm text-center">{logo.label}</span>
              <span className="text-xs text-slate-400 mt-1">{logo.sublabel}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
