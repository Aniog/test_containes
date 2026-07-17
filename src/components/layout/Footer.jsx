export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground pt-20 pb-10 border-t border-border/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="md:col-span-1">
            <h2 className="text-3xl font-serif tracking-widest uppercase mb-6">Velmora</h2>
            <p className="text-primary-foreground/70 mb-6 max-w-sm">
              Fine demi-jewelry crafted to be treasured. Everyday luxury for the modern romantic.
            </p>
          </div>

          {/* Links 1 */}
          <div>
            <h3 className="uppercase tracking-widest text-sm mb-6 font-semibold">Shop</h3>
            <ul className="space-y-4 text-primary-foreground/70">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">All Jewelry</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Earrings</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Necklaces</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Huggies</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Best Sellers</a></li>
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h3 className="uppercase tracking-widest text-sm mb-6 font-semibold">Help</h3>
            <ul className="space-y-4 text-primary-foreground/70">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Jewelry Care</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Links 3 */}
          <div>
            <h3 className="uppercase tracking-widest text-sm mb-6 font-semibold">Company</h3>
            <ul className="space-y-4 text-primary-foreground/70">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Journal</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/50">
          <p>&copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary-foreground transition-colors">Instagram</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">Pinterest</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">TikTok</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
