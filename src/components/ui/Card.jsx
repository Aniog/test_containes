import React from 'react'
import { cn } from '@/lib/utils'

const Card = ({ 
  children, 
  className = '', 
  hover = false,
  ...props 
}) => {
  return (
    <div 
      className={cn(
        'bg-white rounded-xl shadow-md border border-slate-100 p-6 transition-all duration-300',
        hover && 'hover:shadow-xl hover:-translate-y-1',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export default Card