import React from 'react'

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 py-6 px-8 flex justify-between items-center">
      <div className="text-2xl font-bold tracking-widest text-white uppercase">
        MICRO<span className="text-emerald-400">COSMOS</span>
      </div>
      <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-300 gap-6">
        <a href="#discover" className="hover:text-emerald-400 transition-colors">Discover</a>
        <a href="#inhabitants" className="hover:text-emerald-400 transition-colors">Inhabitants</a>
        <a href="#gallery" className="hover:text-emerald-400 transition-colors">Gallery</a>
      </div>
    </nav>
  )
}

export default Navbar;
