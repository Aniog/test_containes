const footerColumns = [
  {
    title: 'Shop',
    links: [
      { label: 'Bestsellers', href: '/shop' },
      { label: 'Earrings', href: '/shop?category=Earrings' },
      { label: 'Necklaces', href: '/shop?category=Necklaces' },
      { label: 'Huggies', href: '/shop?category=Huggies' },
    ],
  },
  {
    title: 'Help',
    links: [
      { label: 'Shipping', href: '/#newsletter' },
      { label: 'Returns', href: '/#newsletter' },
      { label: 'Care Guide', href: '/#journal' },
      { label: 'Contact', href: '/#newsletter' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Our Story', href: '/#about' },
      { label: 'Journal', href: '/#journal' },
      { label: 'Gift Edit', href: '/shop' },
      { label: 'Instagram', href: '/#journal' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-obsidian text-porcelain">
      <div className="container-shell py-14 sm:py-16">
        <div className="grid gap-12 border-b border-porcelain/10 pb-12 lg:grid-cols-[1.2fr_2fr]">
          <div className="space-y-5">
            <div className="font-serif text-3xl tracking-[0.35em] text-porcelain">VELMORA</div>
            <p className="max-w-md text-sm leading-7 text-porcelain/70">
              Premium demi-fine gold jewelry for self-purchase, gifting, and the moments that stay with you.
            </p>
            <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.25em] text-porcelain/65">
              <span className="rounded-full border border-porcelain/15 px-3 py-2">Visa</span>
              <span className="rounded-full border border-porcelain/15 px-3 py-2">Mastercard</span>
              <span className="rounded-full border border-porcelain/15 px-3 py-2">Amex</span>
              <span className="rounded-full border border-porcelain/15 px-3 py-2">PayPal</span>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            {footerColumns.map((column) => (
              <div key={column.title} className="space-y-4">
                <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.32em] text-champagne">
                  {column.title}
                </h3>
                <div className="space-y-3 text-sm text-porcelain/72">
                  {column.links.map((link) => (
                    <a key={link.label} href={link.href} className="block transition duration-300 hover:text-porcelain">
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-6 text-xs uppercase tracking-[0.22em] text-porcelain/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Velmora Fine Jewelry</p>
          <div className="flex gap-4">
            <a href="/#journal" className="hover:text-porcelain">Instagram</a>
            <a href="/#journal" className="hover:text-porcelain">Pinterest</a>
            <a href="/#newsletter" className="hover:text-porcelain">Email</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
