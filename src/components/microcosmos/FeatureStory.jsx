import React from 'react'
import { Quote } from 'lucide-react'

export default function FeatureStory() {
  return (
    <section
      id="stories"
      className="relative py-24 md:py-32 border-t border-slate-900 overflow-hidden"
    >
      {/* Background blob */}
      <div className="pointer-events-none absolute top-1/4 -left-32 w-[28rem] h-[28rem] rounded-full bg-emerald-500/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-[28rem] h-[28rem] rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 grid grid-cols-2 gap-4">
          <div className="rounded-2xl overflow-hidden border border-slate-800 aspect-[3/4]">
            <img
              alt="Tardigrade close-up"
              className="w-full h-full object-cover"
              data-strk-img-id="story-tardigrade-portrait-c4319f"
              data-strk-img="[story-tardigrade-caption] tardigrade water bear electron microscope"
              data-strk-img-ratio="3x4"
              data-strk-img-width="700"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
            <span id="story-tardigrade-caption" className="sr-only">
              tardigrade water bear electron microscope
            </span>
          </div>
          <div className="flex flex-col gap-4">
            <div className="rounded-2xl overflow-hidden border border-slate-800 aspect-[4/3]">
              <img
                alt="Moss habitat"
                className="w-full h-full object-cover"
                data-strk-img-id="story-moss-habitat-92ef0b"
                data-strk-img="[story-moss-caption] moss garden green macro"
                data-strk-img-ratio="4x3"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <span id="story-moss-caption" className="sr-only">
                moss garden green macro
              </span>
            </div>
            <div className="rounded-2xl overflow-hidden border border-slate-800 aspect-[4/3]">
              <img
                alt="Water droplet life"
                className="w-full h-full object-cover"
                data-strk-img-id="story-droplet-life-67ac1d"
                data-strk-img="[story-droplet-caption] water droplet microorganisms"
                data-strk-img-ratio="4x3"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <span id="story-droplet-caption" className="sr-only">
                water droplet microorganisms
              </span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6">
          <span className="text-xs uppercase tracking-[0.3em] text-cyan-400">
            Featured story
          </span>
          <h2 id="story-title" className="font-serif text-4xl md:text-5xl text-slate-50 mt-4 leading-tight">
            One drop of moss water, a thousand worlds.
          </h2>
          <p id="story-desc" className="text-slate-300 mt-6 leading-relaxed text-lg">
            We followed marine biologist Dr. Ines Sato through six months of
            observation in a single forest pond. Her glass slide diaries record
            the daily life of tardigrades, rotifers, and ciliates that bloom and
            vanish with the rain.
          </p>

          <figure className="mt-8 border-l-2 border-cyan-400 pl-6">
            <Quote className="w-6 h-6 text-cyan-400 mb-3" />
            <blockquote className="font-serif text-2xl text-slate-100 leading-relaxed">
              “The closer you look, the more the world refuses to be small.”
            </blockquote>
            <figcaption className="text-sm text-slate-400 mt-3">
              — Dr. Ines Sato, contributing scientist
            </figcaption>
          </figure>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#journal"
              className="inline-flex items-center bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold rounded-full px-6 py-3 transition-colors"
            >
              Read the full study
            </a>
            <a
              href="#gallery"
              className="inline-flex items-center border border-slate-700 hover:border-cyan-400 text-slate-100 rounded-full px-6 py-3 transition-colors"
            >
              See the slides
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
