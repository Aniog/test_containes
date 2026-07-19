import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-velmora-ink text-velmora-cream">
      <div className="absolute inset-0 bg-cover bg-center opacity-75" data-strk-bg-id="home-hero-bg-velmora-vm" data-strk-bg="[hero-subtitle] [hero-title]" data-strk-bg-ratio="16x9" data-strk-bg-width="1800" />
      <div className="absolute inset-0 bg-gradient-to-b from-velmora-ink/30 via-velmora-ink/25 to-velmora-ink/75" />
      <div className="velmora-container relative flex min-h-screen items-end pb-16 pt-32 md:pb-24"><div className="max-w-3xl animate-soft-rise"><p className="eyebrow text-velmora-champagne">Demi-fine gold jewelry</p><h1 id="hero-title" className="mt-5 font-display text-6xl font-medium leading-none text-velmora-cream md:text-8xl lg:text-9xl">Crafted to be Treasured</h1><p id="hero-subtitle" className="mt-6 max-w-2xl text-base leading-8 text-velmora-sand md:text-lg">Warm, luminous pieces for everyday rituals, considered gifts, and the quiet confidence of wearing something meaningful.</p><Link to="/shop" className="primary-button mt-9 gap-2">Shop the Collection <ArrowRight className="h-4 w-4" /></Link></div></div>
    </section>
  )
}
