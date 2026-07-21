import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="bg-background pt-16 pb-8 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 text-sm">
          {/* Brand */}
          <div className="md:col-span-1">
            <h2 className="font-heading text-2xl font-bold tracking-widest uppercase mb-4">VELMORA</h2>
            <p className="text-muted-foreground mb-4 max-w-xs text-balance">
              Accessible luxury. Demi-fine pieces crafted to be treasured for a lifetime.
            </p>
          </div>
          
          {/* Shop */}
          <div>
            <h3 className="font-semibold mb-4 tracking-wide uppercase">Shop</h3>
            <ul className="space-y-3 test-muted-foreground">
              <li><Link to="/collections?category=earrings" className="hover:text-primary transition-colors">Earrings</Link></li>
              <li><Link to="/collections?category=necklaces" className="hover:text-primary transition-colors">Necklaces</Link></li>
              <li><Link to="/collections?category=huggies" className="hover:text-primary transition-colors">Huggies</Link></li>
              <li><Link to="/collections" className="hover:text-primary transition-colors">All Jewelry</Link></li>
            </ul>
          </div>
          
          {/* Help */}
          <div>
            <h3 className="font-semibold mb-4 tracking-wide uppercase">Help</h3>
            <ul className="space-y-3 test-muted-foreground">
              <li><Link to="#" className="hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Shipping & Returns</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Jewelry Care</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4 tracking-wide uppercase">Company</h3>
            <ul className="space-y-3 test-muted-foreground">
              <li><Link to="#" className="hover:text-primary transition-colors">Our Story</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Sustainability</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Journal</Link></li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground space-y-4 md:space-y-0">
          <p>© {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex space-x-4">
            <Link to="#" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}