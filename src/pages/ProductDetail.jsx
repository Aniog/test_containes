import * as React from "react"
import { useEffect, useRef } from "react"
import { Link, useParams, Navigate } from "react-router-dom"
import { ArrowLeft, ArrowRight, Check, Download, Mail } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { Button } from "@/components/ui/Button"
import { useToast } from "@/components/ui/Toaster"
import { products } from "@/data/products"
import { cn } from "@/lib/utils"

export default function ProductDetail() {
  const { slug } = useParams()
  const product = products.find((p) => p.slug === slug)
  const heroRef = useRef(null)
  const { success } = useToast()

  useEffect(() => {
    if (!heroRef.current) return
    return ImageHelper.loadImages(strkImgConfig, heroRef.current)
  }, [slug])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [slug])

  if (!product) return <Navigate to="/products" replace />

  const others = products.filter((p) => p.slug !== product.slug).slice(0, 3)

  return (
    <main className="bg-ink" ref={heroRef}>
      <section className="relative isolate overflow-hidden border-b border-line">
        <div
          className="absolute inset-0 -z-10"
          data-strk-bg-id={`detail-bg-${product.slug}-hero`}
          data-strk-bg={`[${product.slug}-detail-tagline] [${product.slug}-detail-name]`}
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/40 via-ink/75 to-ink" />

        <div className="container-x pt-16 pb-20 md:pt-24 md:pb-28">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-copper-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            All machines
          </Link>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <p className="eyebrow">{product.category} · {product.model}</p>
              <h1
                id={`${product.slug}-detail-name`}
                className="mt-5 text-4xl md:text-5xl lg:text-6xl font-semibold text-text leading-[1.05] text-balance"
              >
                {product.name}
              </h1>
              <p
                id={`${product.slug}-detail-tagline`}
                className="mt-5 text-lg text-text-muted max-w-2xl leading-relaxed"
              >
                {product.tagline}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  asChild={false}
                  size="lg"
                  onClick={() =>
                    success({
                      title: "Quote requested",
                      description: `We'll be in touch about the ${product.model} within one business day.`,
                    })
                  }
                >
                  <span className="inline-flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Request a quote
                  </span>
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={() =>
                    success({
                      title: "Spec sheet on its way",
                      description: "We've sent the PDF to your downloads.",
                    })
                  }
                >
                  <span className="inline-flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    Download spec sheet
                  </span>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-4 rounded-md border border-line bg-slate-850 p-6 backdrop-blur">
              <p className="text-xs tracking-eyebrow uppercase text-text-dim">
                Covers
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {product.covers.map((c) => (
                  <li
                    key={c}
                    className="text-xs px-2 py-1 rounded border border-line text-text-muted"
                  >
                    {c}
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-xs tracking-eyebrow uppercase text-text-dim">
                Typical applications
              </p>
              <p className="mt-2 text-sm text-text">{product.bestFor}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-x py-20 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <p className="eyebrow">Overview</p>
            <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-text text-balance">
              Built for the work you do every day.
            </h2>
            <p className="mt-5 text-base text-text-muted leading-relaxed">
              {product.summary}
            </p>

            <p className="eyebrow mt-12">Features</p>
            <h3 className="mt-3 text-xl font-semibold text-text">
              What's in the box
            </h3>
            <ul className="mt-5 space-y-3">
              {product.features.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-3 text-text-muted"
                >
                  <span className="mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full border border-copper-500/40 bg-copper-500/10 text-copper-400">
                    <Check className="w-3 h-3" strokeWidth={3} />
                  </span>
                  <span className="text-sm md:text-base leading-relaxed">
                    {f}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="lg:col-span-5">
            <div className="rounded-md border border-line bg-slate-850 p-6">
              <p className="eyebrow">Specifications</p>
              <h3 className="mt-2 text-xl font-semibold text-text">
                Technical specs
              </h3>
              <dl className="mt-6 divide-y divide-line">
                {product.specs.map((s) => (
                  <div
                    key={s.label}
                    className="flex items-center justify-between py-3 text-sm"
                  >
                    <dt className="text-text-muted">{s.label}</dt>
                    <dd className="text-text font-medium tabular">{s.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="mt-6 rounded-md border border-line bg-ink p-6">
              <p className="eyebrow">Lead time</p>
              <p className="mt-3 text-3xl font-semibold text-text tabular">
                10–14 wks
              </p>
              <p className="mt-2 text-sm text-text-muted">
                From purchase order to commissioning on your floor. We hold
                stock on the most popular configurations — ask us.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="container-x pb-24 md:pb-32">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="eyebrow">More from the lineup</p>
            <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-text">
              Other machines to consider
            </h2>
          </div>
          <Link
            to="/products"
            className="hidden sm:inline-flex items-center gap-2 text-sm text-copper-400 hover:text-copper-300"
          >
            See all <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {others.map((p) => (
            <Link
              key={p.slug}
              to={`/products/${p.slug}`}
              className={cn(
                "block rounded-md border border-line bg-slate-850 p-6 hover:border-copper-500/60 transition-colors"
              )}
            >
              <p className="text-xs tracking-eyebrow uppercase text-text-dim">
                {p.model}
              </p>
              <p className="mt-3 text-lg font-semibold text-text">{p.name}</p>
              <p className="mt-2 text-sm text-text-muted line-clamp-2">
                {p.tagline}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-copper-400">
                View details
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
