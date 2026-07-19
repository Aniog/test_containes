import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-velmora-sand pt-20 pb-10 px-4 md:px-10 border-t border-stone-200">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                {/* Logo & About */}
                <div className="col-span-1 md:col-span-1">
                    <Link to="/" className="text-2xl font-serif tracking-[0.3em] font-medium mb-6 block">
                        VELMORA
                    </Link>
                    <p className="text-sm text-velmora-stone max-w-xs leading-relaxed">
                        Demis-fine jewelry crafted for the modern woman. Timeless pieces designed to be treasured every day.
                    </p>
                </div>

                {/* Shop Links */}
                <div>
                    <h4 className="text-xs uppercase tracking-widest font-semibold mb-6">Shop</h4>
                    <ul className="space-y-4 text-sm text-velmora-stone">
                        <li><Link to="/shop" className="hover:text-velmora-black transition-colors">All Jewelry</Link></li>
                        <li><Link to="/shop/earrings" className="hover:text-velmora-black transition-colors">Earrings</Link></li>
                        <li><Link to="/shop/necklaces" className="hover:text-velmora-black transition-colors">Necklaces</Link></li>
                        <li><Link to="/shop/huggies" className="hover:text-velmora-black transition-colors">Huggies</Link></li>
                    </ul>
                </div>

                {/* Help Links */}
                <div>
                    <h4 className="text-xs uppercase tracking-widest font-semibold mb-6">Help</h4>
                    <ul className="space-y-4 text-sm text-velmora-stone">
                        <li><Link to="/shipping" className="hover:text-velmora-black transition-colors">Shipping</Link></li>
                        <li><Link to="/returns" className="hover:text-velmora-black transition-colors">Returns</Link></li>
                        <li><Link to="/care" className="hover:text-velmora-black transition-colors">Jewelry Care</Link></li>
                        <li><Link to="/contact" className="hover:text-velmora-black transition-colors">Contact Us</Link></li>
                    </ul>
                </div>

                {/* Social & Payment */}
                <div>
                    <h4 className="text-xs uppercase tracking-widest font-semibold mb-6">Connect</h4>
                    <div className="flex gap-4 mb-8">
                        <a href="https://instagram.com" className="text-velmora-stone hover:text-velmora-black transition-colors"><Instagram size={20} /></a>
                        <a href="https://facebook.com" className="text-velmora-stone hover:text-velmora-black transition-colors"><Facebook size={20} /></a>
                        <a href="https://twitter.com" className="text-velmora-stone hover:text-velmora-black transition-colors"><Twitter size={20} /></a>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-stone-200/50 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-velmora-stone">
                <p>&copy; {new Date().getFullYear()} VELMORA FINE JEWELRY. ALL RIGHTS RESERVED.</p>
                <div className="flex gap-6">
                    <span>Visa</span>
                    <span>Mastercard</span>
                    <span>Amex</span>
                    <span>Apple Pay</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
