const footerLinks = {
  Shop: ['All Jewelry', 'Earrings', 'Necklaces', 'Huggies'],
  Help: ['Shipping', 'Returns', 'Care Guide', 'Contact'],
  Company: ['Our Story', 'Journal', 'Stockists', 'Careers'],
}

const paymentIcons = ['Visa', 'Mastercard', 'AmEx', 'PayPal']
const socials = ['Instagram', 'Pinterest', 'TikTok']

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-obsidian text-ivory">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_repeat(3,minmax(0,1fr))]">
          <div>
            <p className="font-serif text-2xl tracking-[0.36em] text-ivory">VELMORA</p>
            <p className="mt-5 max-w-sm text-sm leading-7 text-ivory/72">
              Demi-fine jewelry for gifting, keeping, and collecting. Designed with a warm editorial point of view.
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-xs uppercase tracking-[0.28em] text-ivory/60">{title}</h3>
              <ul className="mt-5 space-y-3 text-sm text-ivory/78">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="transition hover:text-champagne">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-white/10 pt-8 text-sm text-ivory/70 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-3">
            {paymentIcons.map((payment) => (
              <span key={payment} className="rounded-full border border-white/15 px-3 py-2 text-xs uppercase tracking-[0.22em] text-ivory/78">
                {payment}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-4">
            {socials.map((social) => (
              <a key={social} href="#" className="transition hover:text-champagne">
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
