import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'
import { Separator } from '@/components/ui/Separator'

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="space-y-4">
            <Link to="/" className="inline-block font-serif text-2xl tracking-[0.18em]">
              VELMORA
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-background/70">
              Demi-fine jewelry designed to be treasured. Crafted with care, made for everyday luxury.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-background/60">
              Shop
            </h4>
            <ul className="space-y-3 text-sm text-background/80">
              <li><Link to="/shop?category=earrings" className="hover:text-accent">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="hover:text-accent">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="hover:text-accent">Huggies</Link></li>
              <li><Link to="/shop?category=sets" className="hover:text-accent">Gift Sets</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-background/60">
              Help
            </h4>
            <ul className="space-y-3 text-sm text-background/80">
              <li><Link to="/shipping" className="hover:text-accent">Shipping & Returns</Link></li>
              <li><Link to="/care" className="hover:text-accent">Jewelry Care</Link></li>
              <li><Link to="/faq" className="hover:text-accent">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-accent">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-background/60">
              Company
            </h4>
            <ul className="space-y-3 text-sm text-background/80">
              <li><Link to="/about" className="hover:text-accent">Our Story</Link></li>
              <li><Link to="/journal" className="hover:text-accent">Journal</Link></li>
              <li><Link to="/sustainability" className="hover:text-accent">Sustainability</Link></li>
              <li><Link to="/careers" className="hover:text-accent">Careers</Link></li>
            </ul>
          </div>
        </div>

        <Separator className="my-10 bg-background/10" />

        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="text-xs text-background/50">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              <Instagram className="h-5 w-5 text-background/70 hover:text-accent" />
            </Link>
            <Link to="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
              <Facebook className="h-5 w-5 text-background/70 hover:text-accent" />
            </Link>
            <Link to="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
              <Twitter className="h-5 w-5 text-background/70 hover:text-accent" />
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <span className="h-6 w-10 rounded bg-background/10" />
            <span className="h-6 w-10 rounded bg-background/10" />
            <span className="h-6 w-10 rounded bg-background/10" />
            <span className="h-6 w-10 rounded bg-background/10" />
          </div>
        </div>
      </div>
    </footer>
  )
}
