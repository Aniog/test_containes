import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/lib/CartContext';
import { cn } from '@/lib/utils';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { cartCount, setIsCartOpen } = useCart();
    const location = useLocation();
    const isHome = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Shop', path: '/shop' },
        { name: 'Collections', path: '/collections' },
        { name: 'About', path: '/about' },
        { name: 'Journal', path: '/journal' },
    ];

    return (
        <nav
            className={cn(
                'fixed top-0 left-0 w-full z-50 transition-all duration-500 py-6 px-4 md:px-10 flex items-center justify-between',
                isScrolled || !isHome
                    ? 'bg-white text-velmora-black shadow-sm py-4'
                    : 'bg-transparent text-white'
            )}
        >
            {/* Mobile Menu Toggle */}
            <button
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Left Links - Desktop */}
            <div className="hidden md:flex items-center gap-8 flex-1">
                {navLinks.slice(0, 2).map((link) => (
                    <Link
                        key={link.name}
                        to={link.path}
                        className="text-xs uppercase tracking-[0.15em] hover:opacity-60 transition-opacity"
                    >
                        {link.name}
                    </Link>
                ))}
            </div>

            {/* Logo */}
            <Link
                to="/"
                className="text-2xl md:text-3xl font-serif tracking-[0.3em] font-medium"
            >
                VELMORA
            </Link>

            {/* Right Side */}
            <div className="flex items-center justify-end gap-6 flex-1">
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.slice(2).map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className="text-xs uppercase tracking-[0.15em] hover:opacity-60 transition-opacity"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
                <button className="hover:opacity-60 transition-opacity">
                    <Search size={20} strokeWidth={1.5} />
                </button>
                <button
                    className="relative hover:opacity-60 transition-opacity"
                    onClick={() => setIsCartOpen(true)}
                >
                    <ShoppingBag size={20} strokeWidth={1.5} />
                    {cartCount > 0 && (
                        <span className="absolute -top-1 -right-1 bg-velmora-gold text-white text-[8px] w-3.5 h-3.5 flex items-center justify-center rounded-full">
                            {cartCount}
                        </span>
                    )}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={cn(
                    'fixed inset-0 bg-background z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-500 md:hidden',
                    isMenuOpen ? 'translate-y-0' : '-translate-y-full'
                )}
            >
                <button
                    className="absolute top-6 right-4 text-velmora-black"
                    onClick={() => setIsMenuOpen(false)}
                >
                    <X size={24} />
                </button>
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        to={link.path}
                        className="text-2xl font-serif tracking-widest text-velmora-black"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        {link.name}
                    </Link>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;
