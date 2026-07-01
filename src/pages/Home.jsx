import { useEffect, useState } from 'react'
import Hero from '../components/home/Hero'
import TrustBar from '../components/home/TrustBar'
import Bestsellers from '../components/home/Bestsellers'
import UGCReel from '../components/home/UGCReel'
import CategoryTiles from '../components/home/CategoryTiles'
import BrandStory from '../components/home/BrandStory'
import Testimonials from '../components/home/Testimonials'
import Newsletter from '../components/home/Newsletter'
import { fetchBestsellers } from '../api/products'

export default function Home() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchBestsellers()
      .then((data) => {
        setProducts(data)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  return (
    <div>
      <Hero />
      <TrustBar />
      {loading ? (
        <div className="bg-velmora-cream py-24 text-center">
          <p className="text-sm text-velmora-taupe">Loading bestsellers…</p>
        </div>
      ) : error ? (
        <div className="bg-velmora-cream py-24 text-center">
          <p className="text-sm text-red-600">{error}</p>
        </div>
      ) : (
        <Bestsellers products={products} />
      )}
      <UGCReel />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </div>
  )
}
