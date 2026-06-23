import React from 'react'

const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-slate-950 border-t border-slate-900 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 tracking-tight text-slate-200">MicroCosmos</h2>
        <p className="text-slate-500 mb-8 text-sm">
          Revealing the spectacular details of our microscopic universe, one image at a time.
        </p>
        <div className="text-slate-600 text-xs">
          &copy; {new Date().getFullYear()} MicroCosmos Society. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
