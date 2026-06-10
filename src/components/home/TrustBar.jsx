import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { trustStats } from "@/data/company"

export function TrustBar() {
  const ref = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <section
      ref={ref}
      aria-label="Trust statistics"
      className="relative isolate overflow-hidden border-y border-hairline bg-bone"
    >
      <div
        aria-hidden="true"
        data-strk-bg-id="trust-bg-floor"
        data-strk-bg="[trust-eyebrow]"
        data-strk-bg-ratio="16x4"
        data-strk-bg-width="1920"
        className="absolute inset-0 opacity-[0.12] mix-blend-multiply"
      />
      <div className="container-content relative py-14 md:py-16">
        <p
          id="trust-eyebrow"
          className="eyebrow justify-center"
        >
          Trusted by fabricators in 48 countries
        </p>
        <dl className="mt-8 grid grid-cols-2 gap-y-10 sm:grid-cols-4">
          {trustStats.map((s) => (
            <div key={s.label} className="text-center">
              <dt className="font-serif text-4xl font-medium text-ink num-tabular md:text-5xl">
                {s.value}
              </dt>
              <dd className="mt-2 text-xs uppercase tracking-eyebrow text-steel-soft">
                {s.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
