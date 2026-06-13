import React from 'react'
import { Link } from 'react-router-dom'

const CTAButton = ({ children, to = '/contact', className = '' }) => {
  return (
    <Link
      to={to}
      className={`inline-flex items-center justify-center h-12 px-8 bg-[#0A2540] text-white text-sm font-medium rounded hover:bg-[#1E40AF] transition-colors ${className}`}
    >
      {children}
    </Link>
  )
}

export default CTAButton