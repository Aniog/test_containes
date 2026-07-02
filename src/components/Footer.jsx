import { Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-foreground text-background pt-16 pb-8 border-t border-border/10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <h3 className="font-serif text-2xl tracking-widest uppercase mb-6">Velmora</h3>
            <p className="text-sm text-background/70 leading-relaxed mb-6">
              Quiet luxury crafted to be treasured. Demi-fine jewelry for everyday elegance.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-background/70 hover:text-accent transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-background/70 hover:text-accent transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-background/70 hover:text-accent transition-colors"><Twitter size={20} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-serif text-lg mb-6">Shop</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li><a href="#" className="hover:text-accent transition-colors">All Jewelry</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Earrings</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Necklaces</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Huggies</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Gift Sets</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6">Help & Support</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li><a href="#" className="hover:text-accent transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Jewelry Care</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6">Join the List</h4>
            <p className="text-sm text-background/70 mb-4">
              Subscribe for early access, new arrivals, and 10% off your first order.
            </p>
            <form className="flex" onSubmit={e => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-transparent border border-background/20 px-4 py-2 w-full text-sm outline-none focus:border-accent"
              />
              <button className="bg-accent text-accent-foreground px-4 text-sm uppercase tracking-widest hover:bg-accent/90 transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-background/10 text-xs text-background/50">
          <p>&copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}