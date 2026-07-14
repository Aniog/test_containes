import { Instagram, Linkedin, MoveRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const footerGroups = {
  Shop: ['Earrings', 'Necklaces', 'Huggies', 'Gift Sets'],
  Help: ['Shipping', 'Returns', 'Care Guide', 'FAQ'],
  Company: ['Our Story', 'Journal', 'Contact', 'Stockists'],
}

const Footer = () => (
  <footer className="border-t border-velmora-line bg-velmora-ink text-velmora-ivory">
    <div className="container-shell grid gap-12 py-16 lg:grid-cols-[1.2fr_repeat(3,1fr)]">
      <div className="space-y-6">
        <Link to="/" className="font-serif text-3xl tracking-[0.35em]">VELMORA</Link>
        <p className="max-w-sm text-sm leading-7 text-velmora-ivory/70">Fine-feeling demi-fine jewelry designed for everyday ceremony, gifting, and the pieces you never want to take off.</p>
        <div className="flex items-center gap-4 text-sm uppercase tracking-[0.18em] text-velmora-ivory/80">
          <span className="inline-flex items-center gap-2"><Instagram className="h-4 w-4" /> Instagram</span>
          <span className="inline-flex items-center gap-2">Pinterest</span>
          <span className="inline-flex items-center gap-2"><Linkedin className="h-4 w-4" /> LinkedIn</span>
        </div>
      </div>
      {Object.entries(footerGroups).map(([title, links]) => (
        <div key={title} className="space-y-4">
          <h3 className="text-sm uppercase tracking-[0.2em] text-velmora-ivory/65">{title}</h3>
          <ul className="space-y-3 text-sm text-velmora-ivory/80">
            {links.map((link) => <li key={link}><a href="#" className="transition hover:text-velmora-gold">{link}</a></li>)}
          </ul>
        </div>
      ))}
    </div>
    <div className="border-t border-velmora-ivory/10">
      <div className="container-shell flex flex-col gap-5 py-6 text-sm text-velmora-ivory/65 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap items-center gap-3">
          {['Visa', 'Mastercard', 'Amex', 'Apple Pay'].map((item) => (
            <span key={item} className="rounded-full border border-velmora-ivory/15 px-3 py-1">{item}</span>
          ))}
        </div>
        <span className="inline-flex items-center gap-2">Crafted for keeps <MoveRight className="h-4 w-4" /></span>
      </div>
    </div>
  </footer>
)

export default Footer
