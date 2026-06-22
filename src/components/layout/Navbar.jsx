import React from 'react'
import { Microscope } from 'lucide-react'

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Microscope className="w-8 h-8 text-emerald-400" />
          <span className="text-xl font-bold tracking-tight text-white">MicroCosmos</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
          <a href="#wonders" className="hover:text-emerald-400 transition-colors">Wonders</a>
          <a href="#gallery" className="hover:text-emerald-400 transition-colors">Gallery</a>
          <a href="#explore" className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-slate-900 rounded-full transition-colors font-bold">Explore</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
