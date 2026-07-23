import { CircleDot, Instagram, Music2 } from 'lucide-react'

const footerColumns = {
  Shop: ['Earrings', 'Necklaces', 'Huggies', 'Gift Sets'],
  Help: ['Shipping', 'Returns', 'Care Guide', 'Contact'],
  Company: ['About Velmora', 'Journal', 'Stockists', 'Privacy'],
}

const Footer = () => {
  return (
    <footer className="border-t border-stone-200 bg-stone-950 text-stone-50">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1.3fr_repeat(3,1fr)] lg:px-8">
        <div>
          <p className="font-display text-3xl tracking-[0.32em] text-stone-50">VELMORA</p>
          <p className="mt-4 max-w-sm text-sm leading-7 text-stone-300">
            Quiet luxury jewelry for everyday ritual, intimate gifting, and polished layering.
          </p>
          <div className="mt-8 flex items-center gap-4 text-stone-300">
            <Instagram className="h-5 w-5" />
            <CircleDot className="h-5 w-5" />
            <Music2 className="h-5 w-5" />
          </div>
        </div>

        {Object.entries(footerColumns).map(([title, items]) => (
          <div key={title}>
            <h3 className="text-xs uppercase tracking-[0.3em] text-stone-400">{title}</h3>
            <ul className="mt-5 space-y-3 text-sm text-stone-200">
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-stone-800">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 text-xs uppercase tracking-[0.22em] text-stone-400 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>Visa · Mastercard · Amex · PayPal</p>
          <p>© 2026 Velmora Fine Jewelry</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
