import React from 'react';
import HeroSection from '../components/home/HeroSection';
import TrustBar from '../components/home/TrustBar';
import BestsellersSection from '../components/home/BestsellersSection';
import UGCRow, { TestimonialsSection } from '../components/home/UGCRow';
import CategoryTiles from '../components/home/CategoryTiles';
import BrandStory from '../components/home/BrandStory';
import NewsletterSection from '../components/home/NewsletterSection';
import { useInView } from '../hooks/useInView';

function AnimatedSection({ children, className = '', delay = 0 }) {
  const [ref, isInView] = useInView();
  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-700 ease-out ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <TrustBar />
      <AnimatedSection>
        <BestsellersSection />
      </AnimatedSection>
      <AnimatedSection delay={100}>
        <UGCRow />
      </AnimatedSection>
      <AnimatedSection delay={200}>
        <CategoryTiles />
      </AnimatedSection>
      <AnimatedSection delay={100}>
        <BrandStory />
      </AnimatedSection>
      <AnimatedSection delay={200}>
        <TestimonialsSection />
      </AnimatedSection>
      <AnimatedSection delay={100}>
        <NewsletterSection />
      </AnimatedSection>
    </main>
  );
}
