import { strings } from '@/lib/strings'

export default function Hero() {
  const { hero } = strings

  return (
    <section className="max-w-[1200px] mx-auto px-5 py-[60px] md:py-[80px]">
      <div className="flex flex-col md:flex-row gap-10 items-center">
        <div className="flex-1 text-center md:text-left">
          <h1 className="heading text-[32px] md:text-[48px] mb-4">
            <span className="block text-[color:var(--color-text-heading-dark)]">{hero.h1Line1}</span>
            <span className="block ai-gradient-text">{hero.h1Line2}</span>
          </h1>
          <p className="text-[16px] md:text-[18px] mb-8 max-w-[500px] mx-auto md:mx-0">
            {hero.sub}
          </p>
          <div className="flex flex-col sm:flex-row gap-2.5 justify-center md:justify-start">
            <a 
              href="/s/ai_site_builder" 
              className="ai-gradient-bg text-white font-[family-name:var(--font-heading)] font-bold uppercase text-[14px] px-[15px] h-[44px] rounded-[4px] flex items-center justify-center hover:opacity-90 transition-opacity"
            >
              {hero.primaryCta}
            </a>
            <a 
              href="#all-generators" 
              className="bg-transparent border border-[color:var(--color-brand-purple)] text-[color:var(--color-brand-purple)] font-[family-name:var(--font-heading)] font-bold uppercase text-[14px] px-[15px] h-[44px] rounded-[4px] flex items-center justify-center hover:bg-[color:var(--color-brand-purple)] hover:text-white transition-colors"
            >
              {hero.secondaryCta}
            </a>
          </div>
        </div>
        <div className="flex-1 flex justify-center md:justify-end w-full">
          <div className="w-full max-w-[500px] aspect-[4/3]">
            {/* Inline SVG Placeholder */}
            <svg 
              width="100%" height="100%" viewBox="0 0 400 300" 
              fill="none" xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <rect x="0.5" y="0.5" width="399" height="299" rx="7.5" fill="#FBF9FF" stroke="#DCD6F7"/>
              <rect x="20" y="20" width="360" height="40" rx="4" fill="#EAE5F9"/>
              <rect x="20" y="80" width="160" height="20" rx="4" fill="#EAE5F9"/>
              <rect x="20" y="110" width="300" height="10" rx="5" fill="#EAE5F9"/>
              <rect x="20" y="130" width="260" height="10" rx="5" fill="#EAE5F9"/>
              <rect x="20" y="170" width="100" height="30" rx="4" fill="#DCD6F7"/>
              
              <rect x="240" y="80" width="140" height="180" rx="4" fill="#EAE5F9"/>
              <circle cx="310" cy="170" r="40" fill="#DCD6F7"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
