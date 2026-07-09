import { useRef } from 'react'
import HomeSections from '@/components/home/HomeSections'
import { useImageLoader } from '@/hooks/useImageLoader'

export default function HomePage({ onAddToCart }) {
  const containerRef = useRef(null)
  useImageLoader(containerRef, [])

  return (
    <main ref={containerRef} className="bg-velmora-ivory">
      <HomeSections onAddToCart={onAddToCart} />
    </main>
  )
}
