import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';
const Footer = () => (
  <footer className='bg-brand-stone/30 pt-16 pb-8 px-6 md:px-12 mt-16'>
    <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-left'>
      <div className='space-y-6'>
        <Link to='/' className='font-serif text-2xl tracking-widest font-medium'>VELMORA</Link>
        <p className='text-sm text-brand-muted leading-relaxed max-w-xs'>Demi-fine jewelry designed for the modern woman. Timeless pieces crafted to be treasured for a lifetime.</p>
        <div className='flex space-x-4'><Instagram className='w-5 h-5'/><Facebook className='w-5 h-5'/><Twitter className='w-5 h-5'/></div>
      </div>
      <div>
        <h4 className='font-serif text-lg mb-6'>Shop</h4>
        <ul className='space-y-4 text-sm text-brand-muted'>
          <li><Link to='/shop'>All Jewelry</Link></li>
          <li><Link to='/shop'>Earrings</Link></li>
          <li><Link to='/shop'>Necklaces</Link></li>
        </ul>
      </div>
    </div>
  </footer>
);
export default Footer;