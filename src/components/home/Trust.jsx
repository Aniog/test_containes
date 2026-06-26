import React from 'react'
import { Section } from '../Section'
import { ShieldCheck, MapPin, Users, FileCheck2, Languages, Wallet } from 'lucide-react'

const points = [
  {
    icon: MapPin,
    title: 'Local team on the ground',
    description: 'Our staff is based in Yiwu, Shenzhen and Guangzhou — close to the factories you need.',
  },
  {
    icon: ShieldCheck,
    title: 'Verified supplier network',
    description: 'Over 800 audited factories across consumer and industrial product categories.',
  },
  {
    icon: FileCheck2,
    title: 'Transparent reporting',
    description: 'Detailed factory reports, inspection results and shipping documents shared at every stage.',
  },
  {
    icon: Wallet,
    title: 'No hidden fees',
    description: 'Clear service fees agreed upfront. We do not take commissions from suppliers.',
  },
  {
    icon: Languages,
    title: 'English-speaking PMs',
    description: 'Project managers handle factory communication so you do not lose time in translation.',
  },
  {
    icon: Users,
    title: 'Serving buyers worldwide',
    description: 'Importers, brands, Amazon sellers and distributors in 40+ countries trust our process.',
  },
]

export default function Trust() {
  return (
    <Section id="trust" className="bg-slate-900 text-slate-100">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-widest text-blue-300">Why Buyers Choose Us</p>
        <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-white">
          Built for serious B2B buyers, not marketplaces
        </h2>
        <p className="mt-4 text-base md:text-lg text-slate-300 leading-relaxed">
          We focus on long-term sourcing relationships. That means transparency, accountability,
          and consistent quality — not the cheapest price for one order.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {points.map((p) => (
          <div key={p.title} className="rounded-xl border border-slate-800 bg-slate-800/40 p-6">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-blue-700/20 text-blue-300">
              <p.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-5 text-lg font-semibold text-white">{p.title}</h3>
            <p className="mt-2 text-sm text-slate-300 leading-relaxed">{p.description}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
