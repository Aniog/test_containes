import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { aboutValues } from '@/data/storeData'

const AboutPage = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
    }
  }, [])

  return (
    <div ref={containerRef} className="bg-[#f7f2ea]">
      <section className="border-b border-[rgba(215,195,171,0.7)] bg-white/40">
        <div className="mx-auto max-w-7xl px-5 pb-16 pt-32 sm:px-6 lg:px-10 lg:pb-20">
          <p className="text-xs uppercase tracking-[0.32em] text-[#c19a6b]">About Velmora</p>
          <h1 className="mt-4 max-w-4xl font-['Cormorant_Garamond'] text-5xl leading-none text-[#241a13] sm:text-6xl lg:text-7xl">
            A warm, editorial jewelry brand built for thoughtful gifting and everyday polish.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[#6f5946]">
            Velmora Fine Jewelry was imagined for women who want pieces that feel premium without waiting for a special occasion. Our collections sit between trend and heirloom—easy to wear, beautiful to gift, and always quietly elegant.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:py-16">
        <div className="overflow-hidden rounded-[2rem] border border-[rgba(215,195,171,0.7)] bg-[#241a13] shadow-[0_18px_45px_rgba(36,26,19,0.08)]">
          <img
            alt="Velmora atelier"
            className="aspect-[4/5] w-full object-cover"
            data-strk-img-id="about-image-a2"
            data-strk-img="[about-body] [about-title] [about-kicker]"
            data-strk-img-ratio="4x3"
            data-strk-img-width="1200"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
        </div>
        <div className="flex items-center">
          <div>
            <p id="about-kicker" className="text-xs uppercase tracking-[0.32em] text-[#c19a6b]">
              Quiet luxury, translated
            </p>
            <h2 id="about-title" className="mt-4 font-['Cormorant_Garamond'] text-5xl leading-none text-[#241a13] sm:text-6xl">
              Premium finish. Soft statement. Honest pricing.
            </h2>
            <p id="about-body" className="mt-6 text-base leading-8 text-[#6f5946]">
              We focus on demi-fine materials, warm metallic finishes, and silhouettes that flatter both everyday dressing and meaningful moments. Every detail—from the clasp to the box—aims to feel elevated, giftable, and enduring.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-[rgba(215,195,171,0.7)] bg-white/50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
          <div className="grid gap-5 lg:grid-cols-3">
            {aboutValues.map((value) => (
              <article
                key={value.title}
                className="rounded-[2rem] border border-[rgba(215,195,171,0.7)] bg-white/90 p-8 shadow-[0_18px_45px_rgba(36,26,19,0.08)]"
              >
                <h3 className="font-['Cormorant_Garamond'] text-4xl leading-none text-[#241a13]">
                  {value.title}
                </h3>
                <p className="mt-5 text-base leading-8 text-[#6f5946]">{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
