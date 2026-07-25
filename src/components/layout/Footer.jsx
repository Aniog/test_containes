import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border pt-20 pb-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-1 border-b md:border-none pb-8 md:pb-0">
            <Link to="/" className="inline-block mb-6">
              <span className="font-serif text-3xl tracking-[0.2em] font-medium uppercase">Velmora</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-sm">
              Demi-fine jewelry crafted for everyday elegance. Designed for the modern woman who appreciates quiet luxury.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-xl mb-6 uppercase tracking-wider">Shop</h3>
            <ul className="space-y-4 text-muted-foreground text-sm">
              <li><Link to="/shop" className="hover:text-foreground transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="hover:text-foreground transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="hover:text-foreground transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="hover:text-foreground transition-colors">Huggies</Link></li>
              <li><Link to="/shop?category=sets" className="hover:text-foreground transition-colors">Gift Sets</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-xl mb-6 uppercase tracking-wider">Help</h3>
            <ul className="space-y-4 text-muted-foreground text-sm">
              <li><Link to="#" className="hover:text-foreground transition-colors">FAQ</Link></li>
              <li><Link to="#" className="hover:text-foreground transition-colors">Shipping & Returns</Link></li>
              <li><Link to="#" className="hover:text-foreground transition-colors">Jewelry Care</Link></li>
              <li><Link to="#" className="hover:text-foreground transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-xl mb-6 uppercase tracking-wider">Company</h3>
            <ul className="space-y-4 text-muted-foreground text-sm">
              <li><Link to="#" className="hover:text-foreground transition-colors">Our Story</Link></li>
              <li><Link to="#" className="hover:text-foreground transition-colors">Journal</Link></li>
              <li><Link to="#" className="hover:text-foreground transition-colors">Sustainability</Link></li>
              <li><Link to="#" className="hover:text-foreground transition-colors">Careers</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <span className="sr-only">Instagram</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <span className="sr-only">Facebook</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <span className="sr-only">Pinterest</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.017 2c-5.523 0-10 4.477-10 10 0 4.257 2.656 7.914 6.452 9.387-.087-.796-.065-1.685.195-2.527.279-.904 1.83-6.27 1.83-6.27s-.455-.911-.455-2.253c0-2.11 1.226-3.684 2.753-3.684 1.299 0 1.924.975 1.924 2.146 0 1.306-.831 3.26-.188 4.227.534.805 1.846.805 1.846.805s-2.072 6.002-2.316 7.828c-.147 1.099.186 2.051.186 2.051s3.784-1.93 5.4-7.221c.883-2.906.84-5.32-.475-6.529-1.503-1.38-4.148-1.55-6.4-.648-2.673 1.07-4.195 3.32-4.195 6.01 0 1.637.747 3.393 2.127 4.385.192.138.423.088.463-.105.031-.157.34-1.282.383-1.458.077-.31.026-.453-.186-.688-.83-.915-1.206-2.132-1.206-3.551 0-4.062 3.125-7.79 7.838-7.79 4.208 0 7.377 2.923 7.377 6.818 0 4.316-2.454 7.64-6.008 7.64-1.332 0-2.593-.69-2.261-2.046.395-1.611 1.132-3.348 1.132-4.512 0-1.07-.574-1.966-1.748-1.966-1.38 0-2.49 1.428-2.49 3.34 0 1.245.474 2.585.474 2.585z" clipRule="evenodd" /></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}