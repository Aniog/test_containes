import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-slate-900 py-12 px-8 border-t border-slate-800 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold tracking-widest text-white uppercase mb-4">
          MICRO<span className="text-emerald-400">COSMOS</span>
        </h2>
        <p className="text-slate-400 text-sm mb-8">
          Dedicated to the microscopic universe that goes unseen every day. 
        </p>
        <div className="text-slate-500 text-xs">
          &copy; {new Date().getFullYear()} MicroCosmos. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer;
