const footerLinks = [
  'Double folding machine',
  'Double folder',
  'Sheet metal folder',
  'Metal folder machine',
]

const SiteFooter = () => {
  return (
    <footer className="border-t border-brand-ink/10 bg-brand-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8 text-sm text-brand-slate md:flex-row md:items-center md:justify-between md:px-8">
        <div>
          <p className="font-semibold tracking-tight text-brand-ink">ARTITECT MACHINERY</p>
          <p className="mt-1">Elegant and user-friendly machinery presentation for modern fabrication buyers.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          {footerLinks.map((link) => (
            <span key={link} className="rounded-full bg-brand-mist px-3 py-2 text-brand-ink">
              {link}
            </span>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter
