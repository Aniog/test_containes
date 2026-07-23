import React from 'react'

const IconButton = ({ children, className = '', ...props }) => (
  <button
    type="button"
    className={`inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur transition-all duration-300 ease-luxury hover:border-velmora-gold hover:text-velmora-gold ${className}`}
    {...props}
  >
    {children}
  </button>
)

export default IconButton
