import HeroSection from '../components/home/HeroSection'
import TrustBar from '../components/home/TrustBar'
import Bestsellers from '../components/home/Bestsellers'
import UGCReel from '../components/home/UGCReel'
import ShopByCategory from '../components/home/ShopByCategory'
import BrandStory from '../components/home/BrandStory'
import Testimonials from '../components/home/Testimonials'
import Newsletter from '../components/home/Newsletter'
import { useScrollReveal } from '../lib/useScrollReveal'

function RevealSection({ children, className = '', delay = 0 }) {
  const [ref, isVisible] = useScrollReveal()
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className} ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <TrustBar />
      <RevealSection><Bestsellers /></RevealSection>
      <RevealSection delay={100}><UGCReel /></RevealSection>
      <RevealSection><ShopByCategory /></RevealSection>
      <RevealSection delay={100}><BrandStory /></RevealSection>
      <RevealSection><Testimonials /></RevealSection>
      <RevealSection delay={100}><Newsletter /></RevealSection>
    </main>
  )
}
