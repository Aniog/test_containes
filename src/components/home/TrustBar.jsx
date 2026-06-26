export default function TrustBar() {
  return (
    <section className="bg-surface-alt border-b border-border py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs text-text-light font-medium uppercase tracking-wider mb-6">
          Trusted by importers across 40+ countries
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {['United States', 'Germany', 'United Kingdom', 'Australia', 'Canada', 'Netherlands'].map((country) => (
            <span key={country} className="text-sm font-semibold text-text-muted/50 tracking-wide uppercase">
              {country}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
