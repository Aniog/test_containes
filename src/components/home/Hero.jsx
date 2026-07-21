import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function Hero() {
  const sectionRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, sectionRef.current)
  }, [])

  return (
    <section ref={sectionRef} className="relative min-h-screen overflow-hidden bg-velmora-obsidian text-velmora-cream">
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_72%_30%,rgba(185,139,75,0.26),transparent_34%),linear-gradient(110deg,rgba(21,17,14,0.96),rgba(21,17,14,0.62),rgba(21,17,14,0.22))]"
        data-strk-bg-id="velmora-hero-bg-9c8a1f"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-velmora-obsidian via-velmora-obsidian/25 to-transparent" />
      <div className="relative mx-auto flex min-h-screen max-w-7xl items-end px-5 pb-16 pt-32 md:px-10 md:pb-24">
        <div className="max-w-3xl animate-fadeUp">
          <p className="mb-5 font-sansBody text-xs font-bold uppercase tracking-nav text-velmora-gold">Demi-fine gold jewelry</p>
          <h1 id="hero-title" className="font-serifDisplay text-6xl font-medium leading-[0.92] text-velmora-cream md:text-8xl lg:text-9xl">
            Crafted to be Treasured
          </h1>
          <p id="hero-subtitle" className="mt-7 max-w-xl font-sansBody text-base leading-8 text-velmora-cream/78 md:text-lg">
            Warm 18K gold-plated pieces for the rituals, gifts, and everyday moments that deserve a little ceremony.
          </p>
          <Link
            to="/shop"
            className="mt-10 inline-flex rounded-full bg-velmora-gold px-8 py-4 font-sansBody text-xs font-extrabold uppercase tracking-nav text-velmora-obsidian shadow-softGold transition hover:bg-velmora-cream hover:text-velmora-obsidian"
          >
            Shop the Collection
          </Link>
        </div>
      </div>
    </section>
  )
}
