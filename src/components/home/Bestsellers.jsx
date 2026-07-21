import {useRef, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { products } from '@/data/products'
import ProductCard from '@/components/ProductCard'
import Button from '@/components/ui/Button'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function Bestsellers() {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, node)
    })
    return () => window.cancelAnimationFrame(frameId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const bestsellers = products.filter((p) => p.badges?.includes('Bestseller')).slice(0, 5)
  const list = bestsellers.length >= 5 ? bestsellers : products.slice(0, 5)

  return (
    <section ref={ref} className="bg-ivory py-20 md:py-28">
      <div className="max-w-8xl mx-auto px-6 md:px-10">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[11px] uppercase tracking-widest3 text-gold mb-3">
            Most Loved
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink">
            Bestsellers
          </h2>
          <p className="mt-4 text-sand max-w-md mx-auto">
            The pieces our community reaches for, again and again.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-5 gap-y-10">
          {list.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>

        <div className="text-center mt-14">
          <Button as={Link} to="/shop" variant="outline" size="md">
            View All Jewelry
          </Button>
        </div>
      </div>
    </section>
  )
}
