import React from 'react'
import { cn } from '@/lib/utils'

const Separator = ({ className, orientation = 'horizontal' }) => (
  <div
    role="none"
    className={cn('shrink-0 bg-brand-line', orientation === 'horizontal' ? 'h-px w-full' : 'h-full w-px', className)}
  />
)

export { Separator }
