export default function Footer() {
  return (
    <footer className="bg-background border-t border-border mt-auto">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-2xl font-serif tracking-widest mb-6">VELMORA</h2>
            <p className="text-sm text-muted-foreground">Fine demi-jewelry crafted to be treasured. Elevate your everyday with enduring elegance.</p>
          </div>
          <div>
            <h3 className="font-serif text-lg mb-4">Shop</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary">All Jewelry</a></li>
              <li><a href="#" className="hover:text-primary">Earrings</a></li>
              <li><a href="#" className="hover:text-primary">Necklaces</a></li>
              <li><a href="#" className="hover:text-primary">Huggies</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-lg mb-4">Help</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-primary">Care Guide</a></li>
              <li><a href="#" className="hover:text-primary">FAQ</a></li>
              <li><a href="#" className="hover:text-primary">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary">Our Story</a></li>
              <li><a href="#" className="hover:text-primary">Journal</a></li>
              <li><a href="#" className="hover:text-primary">Careers</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary">Instagram</a>
            <a href="#" className="hover:text-primary">Pinterest</a>
            <a href="#" className="hover:text-primary">TikTok</a>
          </div>
        </div>
      </div>
    </footer>
  );
}