import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-artitect-ink px-5 py-10 text-white sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-lg font-bold tracking-[0.18em] text-white">ARTITECT MACHINERY</p>
          <p className="mt-2 text-sm text-white/60">Double folding machines and sheet metal folding solutions.</p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm font-medium text-white/70">
          <a href="#products" className="transition hover:text-white">Products</a>
          <a href="#engineering" className="transition hover:text-white">Engineering</a>
          <a href="#service" className="transition hover:text-white">Service</a>
          <a href="#contact" className="transition hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
