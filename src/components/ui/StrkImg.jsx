import { useId } from 'react'

export default function StrkImg({
  id,
  query,
  ratio = '4x3',
  width = 800,
  alt = '',
  className = '',
}) {
  const fallbackId = useId().replace(/:/g, '')
  const imgId = id || `strk-img-${fallbackId}`
  return (
    <img
      id={id ? undefined : undefined}
      data-strk-img-id={imgId}
      data-strk-img={query}
      data-strk-img-ratio={ratio}
      data-strk-img-width={width}
      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
      alt={alt}
      className={className}
    />
  )
}
