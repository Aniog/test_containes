import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import Bestsellers from '@/components/home/Bestsellers.jsx'
import BrandStory from '@/components/home/BrandStory.jsx'
import CategoryTiles from '@/components/home/CategoryTiles.jsx'
import Newsletter from '@/components/home/Newsletter.jsx'
import Testimonials from '@/components/home/Testimonials.jsx'
import TrustBar from '@/components/home/TrustBar.jsx'
import UGCReel from '@/components/home/UGCReel.jsx'
import strkImgConfig from '@/strk-img-config.json'

function HeroSection() {
  return <section className="hero-invert relative min-h-screen overflow-hidden bg-velmora-espresso text-velmora-porcelain"><div className="absolute inset-0" data-strk-bg-id="home-hero-bg-vlm-18k" data-strk-bg="[hero-subtitle] [hero-title]" data-strk-bg-ratio="16x9" data-strk-bg-width="1800" /><div className="absolute inset-0 bg-gradient-to-b from-velmora-espresso/45 via-velmora-espresso/30 to-velmora-espresso/70" /><div className="relative mx-auto flex min-h-screen max-w-7xl items-end px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pb-24"><div className="max-w-2xl animate-fade-up"><p className="hero-kicker mb-5 text-xs font-semibold uppercase tracking-luxury text-velmora-gold">Demi-fine gold jewelry</p><h1 id="hero-title" className="font-serif text-6xl font-medium leading-none sm:text-7xl lg:text-8xl">Crafted to be Treasured</h1><p id="hero-subtitle" className="hero-copy mt-6 max-w-xl text-base leading-8 text-velmora-stone sm:text-lg">Warm, luminous pieces made for daily rituals, meaningful gifts, and the subtle art of feeling polished.</p><Link to="/shop" className="hero-cta mt-8 inline-flex bg-velmora-gold px-7 py-4 text-sm font-semibold uppercase tracking-luxury text-velmora-espresso transition hover:bg-velmora-porcelain">Shop the Collection</Link></div></div></section>
}

export default function Home() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return <main ref={containerRef}><HeroSection /><TrustBar /><Bestsellers /><UGCReel /><CategoryTiles /><BrandStory /><Testimonials /><Newsletter /></main>
}
