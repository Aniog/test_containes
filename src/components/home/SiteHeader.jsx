const links = [
  { label: 'Products', href: '#products' },
  { label: 'Why ARTITECT', href: '#advantages' },
  { label: 'Applications', href: '#industries' },
  { label: 'Contact', href: '#contact' },
]

const SiteHeader = () => {
  return (
    <header className="sticky top-0 z-40 border-b border-brand-ink/10 bg-brand-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-4 md:flex-row md:items-center md:justify-between md:px-8">
        <a href="#top" className="flex items-center gap-3 text-brand-ink">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-ink text-sm font-semibold text-brand-white">
            AM
          </span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-bronze">
              Precision Folding Systems
            </p>
            <p className="text-base font-semibold tracking-tight">ARTITECT MACHINERY</p>
          </div>
        </a>

        <nav className="flex flex-wrap items-center gap-3 text-sm font-medium text-brand-slate md:justify-center">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-2 transition hover:bg-brand-mist hover:text-brand-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="mailto:sales@artitectmachinery.com?subject=ARTITECT%20Machinery%20Enquiry"
          className="inline-flex items-center justify-center rounded-full bg-brand-ink px-5 py-3 text-sm font-semibold text-brand-white transition hover:bg-brand-slate"
        >
          Request Consultation
        </a>
      </div>
    </header>
  )
}

export default SiteHeader
