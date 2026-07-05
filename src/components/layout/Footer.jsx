import { Facebook, Instagram, Twitter } from 'lucide-react'
import { Link } from 'react-router-dom'

const columns = [
  { title: 'Shop', links: ['Earrings', 'Necklaces', 'Huggies', 'Gift Sets'] },
  { title: 'Help', links: ['Shipping', 'Returns', 'Care Guide', 'Contact'] },
  { title: 'Company', links: ['About', 'Journal', 'Sustainability', 'Stockists'] },
]

export default function Footer() {
  return (
    <footer className="bg-[#17110D] px-5 py-14 text-[#FBF8F2] md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 border-b border-[#FBF8F2]/15 pb-10 md:grid-cols-[1.2fr_2fr]">
          <div>
            <Link to="/" className="font-serif text-3xl tracking-[0.24em] text-[#FBF8F2]">VELMORA</Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-[#FBF8F2]/70">
              Premium demi-fine gold jewelry designed direct-to-you for gifting, keeping, and daily ritual.
            </p>
            <div className="mt-6 flex gap-3 text-[#B9853B]">
              <Instagram className="h-5 w-5" />
              <Facebook className="h-5 w-5" />
              <Twitter className="h-5 w-5" />
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="text-xs font-bold uppercase tracking-[0.22em] text-[#B9853B]">{column.title}</h3>
                <ul className="mt-5 space-y-3">
                  {column.links.map((link) => (
                    <li key={link}>
                      <Link to="/shop" className="text-sm text-[#FBF8F2]/75 transition hover:text-[#B9853B]">{link}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-between gap-5 pt-7 text-xs text-[#FBF8F2]/60 md:flex-row md:items-center">
          <p>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex gap-2" aria-label="Payment methods">
            {['VISA', 'MC', 'AMEX', 'PAY'].map((card) => (
              <span key={card} className="border border-[#FBF8F2]/20 px-2 py-1 text-[0.65rem] tracking-[0.12em] text-[#FBF8F2]/75">{card}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
