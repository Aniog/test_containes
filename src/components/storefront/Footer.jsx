import { Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer({ onNavigate }) {
  return (
    <footer className="bg-velmora-ink text-velmora-ivory">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_2fr] lg:px-8">
        <div>
          <button type="button" onClick={() => onNavigate('home')} className="bg-transparent p-0 font-serif text-4xl tracking-[0.18em] text-velmora-ivory transition hover:text-velmora-champagne">
            VELMORA
          </button>
          <p className="mt-5 max-w-sm text-sm leading-7 text-velmora-sand">
            Demi-fine gold jewelry made for daily rituals, meaningful gifting, and quiet radiance.
          </p>
          <div className="mt-6 flex gap-3 text-velmora-ivory">
            <Instagram className="h-5 w-5" />
            <Facebook className="h-5 w-5" />
            <Twitter className="h-5 w-5" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          <FooterColumn title="Shop" items={['Earrings', 'Necklaces', 'Huggies', 'Gift Sets']} />
          <FooterColumn title="Help" items={['Shipping', 'Returns', 'Care Guide', 'Contact']} />
          <FooterColumn title="Company" items={['Our Story', 'Journal', 'Sustainability', 'Press']} />
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.24em] text-velmora-champagne">Payments</h3>
            <div className="mt-4 grid grid-cols-2 gap-2 text-xs font-bold text-velmora-ink">
              {['VISA', 'MC', 'AMEX', 'PAY'].map((pay) => (
                <span key={pay} className="rounded-full bg-velmora-ivory px-3 py-2 text-center">{pay}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-velmora-ivory/10 px-4 py-5 text-center text-xs uppercase tracking-[0.22em] text-velmora-sand">
        © 2026 Velmora Fine Jewelry · Crafted to be Treasured
      </div>
    </footer>
  )
}

function FooterColumn({ title, items }) {
  return (
    <div>
      <h3 className="text-xs font-bold uppercase tracking-[0.24em] text-velmora-champagne">{title}</h3>
      <ul className="mt-4 space-y-3 text-sm text-velmora-sand">
        {items.map((item) => (
          <li key={item}>
            <button type="button" className="bg-transparent p-0 text-left text-velmora-sand transition hover:text-velmora-champagne">{item}</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
