import { useImageLoader } from '@/hooks/useImageLoader'

export function ImageContainer({ children, deps = [], className = '', as: Component = 'div' }) {
  const containerRef = useImageLoader(deps)

  return (
    <Component ref={containerRef} className={className}>
      {children}
    </Component>
  )
}

ImageContainer.displayName = 'ImageContainer'
