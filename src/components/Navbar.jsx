import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext.jsx';
import { cn } from '../lib/utils.js';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn('fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 md:px-12 py-4', isScrolled || !isHome ? 'bg-brand-cream/95 backdrop-blur-sm shadow-sm py-3' : 'bg-transparent')}>
      <div className='max-w-7xl mx-auto flex items-center justify-between'>
        <Link to='/' className='font-serif text-2xl tracking-widest font-medium'>VELMORA</Link>
        <div className='hidden md:flex items-center space-x-8'>
          <Link to='/shop' className='text-sm uppercase tracking-wider hover:opacity-70 transition-opacity'>Shop</Link>
          <Link to='/shop' className='text-sm uppercase tracking-wider hover:opacity-70 transition-opacity'>Collections</Link>
          <Link to='/' className='text-sm uppercase tracking-wider hover:opacity-70 transition-opacity'>About</Link>
          <Link to='/' className='text-sm uppercase tracking-wider hover:opacity-70 transition-opacity'>Journal</Link>
        </div>
        <div className='flex items-center space-x-5'>
          <button className='hover:opacity-70 transition-opacity'><Search className='w-5 h-5'/></button>
          <button className='relative hover:opacity-70 transition-opacity' onClick={() => setIsCartOpen(true)}>
            <ShoppingBag className='w-5 h-5'/>
            {cartCount > 0 && <span className='absolute -top-1 -right-1 bg-brand-gold text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full'>{cartCount}</span>}
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
EOF > /workspace/my-app/src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext.jsx';
import { cn } from '../lib/utils.js';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn('fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 md:px-12 py-4', isScrolled || !isHome ? 'bg-brand-cream/95 backdrop-blur-sm shadow-sm py-3' : 'bg-transparent')}>
      <div className='max-w-7xl mx-auto flex items-center justify-between'>
        <Link to='/' className='font-serif text-2xl tracking-widest font-medium'>VELMORA</Link>
        <div className='hidden md:flex items-center space-x-8'>
          <Link to='/shop' className='text-sm uppercase tracking-wider hover:opacity-70 transition-opacity'>Shop</Link>
          <Link to='/shop' className='text-sm uppercase tracking-wider hover:opacity-70 transition-opacity'>Collections</Link>
          <Link to='/' className='text-sm uppercase tracking-wider hover:opacity-70 transition-opacity'>About</Link>
          <Link to='/' className='text-sm uppercase tracking-wider hover:opacity-70 transition-opacity'>Journal</Link>
        </div>
        <div className='flex items-center space-x-5'>
          <button className='hover:opacity-70 transition-opacity'><Search className='w-5 h-5'/></button>
          <button className='relative hover:opacity-70 transition-opacity' onClick={() => setIsCartOpen(true)}>
            <ShoppingBag className='w-5 h-5'/>
            {cartCount > 0 && <span className='absolute -top-1 -right-1 bg-brand-gold text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full'>{cartCount}</span>}
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
