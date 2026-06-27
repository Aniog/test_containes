import { strings } from '@/lib/strings'

export default function ClosingCta() {
  const { cta } = strings

  return (
    <section className="bg-white py-[80px] border-t border-[color:var(--color-divider)]">
      <div className="max-w-[800px] mx-auto px-5 text-center flex flex-col items-center">
        <h2 className="heading text-[28px] md:text-[36px] text-[color:var(--color-text-heading-dark)] mb-4">
          {cta.headline}
        </h2>
        <p className="text-[16px] md:text-[18px] text-[color:var(--color-text-body)] mb-8">
          {cta.sub}
        </p>
        <a 
          href="/s/ai_site_builder" 
          className="ai-gradient-bg text-white font-[family-name:var(--font-heading)] font-bold uppercase text-[16px] px-[24px] h-[44px] rounded-[4px] flex items-center justify-center hover:opacity-90 transition-opacity"
        >
          {cta.button}
        </a>
      </div>
    </section>
  )
}
