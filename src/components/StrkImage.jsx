import React from 'react'
import { cn } from '@/lib/utils'
import { strkSrc } from '@/lib/strk-src'

export function StrkImage({ id, query, ratio = '4x3', width = 800, alt = '', className }) {
  return (
    <img
      data-strk-img-id={id}
      data-strk-img={query}
      data-strk-img-ratio={ratio}
      data-strk-img-width={width}
      src={strkSrc(id)}
      alt={alt}
      loading="lazy"
      className={cn('h-full w-full object-cover', className)}
    />
  )
}

export function StrkBackground({ id, query, ratio = '16x9', width = 1600, className, children }) {
  return (
    <div
      data-strk-bg-id={id}
      data-strk-bg={query}
      data-strk-bg-ratio={ratio}
      data-strk-bg-width={width}
      className={cn('bg-cover bg-center', className)}
    >
      {children}
    </div>
  )
}
