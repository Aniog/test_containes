import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Microscope, ZoomIn, Eye, Activity } from 'lucide-react';

const galleries = [
  { id: 'tardigrade', title: 'Water Bears', desc: 'Indestructible micro-animals.', imgId: 'micro-tardigrade-1' },
  { id: 'pollen', title: 'Pollen Grains', desc: 'The dust of life up close.', imgId: 'micro-pollen-2' },
  { id: 'bloodcells', title: 'Red Blood Cells', desc: 'Carriers of oxygen.', imgId: 'micro-blood-3' },
  { id: 'neurons', title: 'Neuron Network', desc: 'The wiring of the brain.', imgId: 'micro-neuron-4' },
  { id: 'diatoms', title: 'Diatoms', desc: 'Algae with glass shells.', imgId: 'micro-diatom-5' },
  { id: 'chloroplasts', title: 'Chloroplasts', desc: 'Engines of photosynthesis.', imgId: 'micro-chloroplast-6' },
  { id: 'dustmite', title: 'Dust Mites', desc: 'Microscopic companions.', imgId: 'micro-mite-7' },
  { id: 'crystals', title: 'Crystal Structure', desc: 'Geometric perfection.', imgId: 'micro-crystal-8' },
];

const features = [
  {
    id: 'feat-1',
    title: 'Cellular Complexity',
    desc: 'Dive deep into the functional building blocks of all living organisms.',
    icon: Activity,
    imgId: 'feat-img-1'
  },
  {
    id: 'feat-2',
    title: 'Macro Textures',
    desc: 'Everyday surfaces reveal alien landscapes when magnified a thousand times.',
    icon: ZoomIn,
    imgId: 'feat-img-2'
  },
  {
    id: 'feat-3',
    title: 'Microbial Life',
    desc: 'Meet the strange, invisible creatures thriving in every drops of water.',
    icon: Microscope,
    imgId: 'feat-img-3'
  }
];

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full backdrop-blur-lg bg-white/80 dark:bg-slate-950/80 border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
            <Microscope className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            <span>MicroCosmos</span>
          </div>
          <div className="hidden md:flex gap-6 font-medium text-sm">
            <a href="#discover" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Discover</a>
            <a href="#gallery" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Gallery</a>
            <a href="#science" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Science</a>
          </div>
          <Button>Subscribe</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden w-full">
        {/* Background Image injected via system */}
        <div
          className="absolute inset-0 z-0 bg-slate-900"
          data-strk-bg-id="hero-bg-microcosmos-99x"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 z-10 bg-slate-900/60 dark:bg-slate-950/70" />
        
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto space-y-6">
          <h1 id="hero-title" className="text-5xl md:text-7xl font-extrabold tracking-tight text-white shadow-sm">
            The MicroCosmos
          </h1>
          <p id="hero-subtitle" className="text-xl md:text-2xl text-slate-200 font-light max-w-2xl mx-auto">
            Journey into the unseen world. Magnificent landscapes, alien-like organisms, and atomic perfection waiting to be discovered.
          </p>
          <div className="pt-4 flex items-center justify-center gap-4">
            <a href="#discover">
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white border-0">
                Start Exploring
              </Button>
            </a>
            <a href="#gallery">
              <Button size="lg" variant="outline" className="text-white border-white bg-transparent hover:bg-white/20">
                View Gallery
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Discover Section */}
      <section id="discover" className="py-24 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 id="discover-title" className="text-3xl md:text-4xl font-bold mb-4">Discover the Unseen</h2>
            <p id="discover-subtitle" className="text-slate-600 dark:text-slate-400 text-lg">
              Beyond the limits of human eyes lies an intricately woven tapestry of beauty and complexity. Let's delve into what makes up our physical reality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feat) => (
              <Card key={feat.id} className="overflow-hidden border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-64 overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img
                    alt={feat.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    data-strk-img-id={feat.imgId}
                    data-strk-img={`[${feat.id}-desc] [${feat.id}-title] [discover-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <CardContent className="p-6 text-center shadow-none border-none">
                  <div className="flex justify-center mb-4">
                    <feat.icon className="w-10 h-10 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <h3 id={`${feat.id}-title`} className="text-xl font-bold mb-2">{feat.title}</h3>
                  <p id={`${feat.id}-desc`} className="text-slate-600 dark:text-slate-400">{feat.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Science of Scale Section */}
      <section id="science" className="py-24 bg-slate-50 dark:bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1 space-y-6">
              <h2 id="science-title" className="text-3xl md:text-5xl font-bold leading-tight">The Science <br/>of Scale</h2>
              <p id="science-desc-1" className="text-lg text-slate-600 dark:text-slate-400">
                At the micro scale, physics begins to behave differently. Surface tension becomes a dominant force, and water droplets act as impenetrable barriers for tiny insects.
              </p>
              <p id="science-desc-2" className="text-lg text-slate-600 dark:text-slate-400">
                Electron microscopy allows us to blast subjects with electron beams rather than photons, enabling resolutions thousands of times finer than optical scopes.
              </p>
              <ul className="space-y-4 pt-4">
                {[
                  'Resolutions up to 50 picometers',
                  'Revealing crystalline lattice structures',
                  'Discovering new microscopic species annually'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-medium">
                    <Eye className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 w-full">
              <div className="rounded-2xl overflow-hidden shadow-2xl relative h-[500px] w-full">
                <img
                  alt="Electron microscope scale"
                  className="w-full h-full object-cover"
                  data-strk-img-id="science-hero-img-1"
                  data-strk-img="[science-desc-2] [science-desc-1] [science-title]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="1200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 id="gallery-main-title" className="text-3xl md:text-4xl font-bold mb-4">Gallery of the Tiny</h2>
            <p id="gallery-main-desc" className="text-slate-600 dark:text-slate-400 text-lg">
              A curated collection of micro-organisms, cellular structures, and astonishing details normally hidden from everyday view.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {galleries.map((g) => (
              <div key={g.id} className="group relative aspect-square overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800">
                <img
                  alt={g.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  data-strk-img-id={g.imgId}
                  data-strk-img={`[gallery-${g.id}-desc] [gallery-${g.id}-title] [gallery-main-title]`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 id={`gallery-${g.id}-title`} className="text-white font-bold text-lg">{g.title}</h3>
                  <p id={`gallery-${g.id}-desc`} className="text-slate-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity delay-100">{g.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button size="lg" variant="outline" className="border-indigo-600 text-indigo-600 hover:bg-indigo-50 dark:border-indigo-400 dark:text-indigo-400 dark:hover:bg-indigo-950">
              Load More Samples
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2 font-bold text-xl tracking-tight text-white">
              <Microscope className="w-6 h-6 text-indigo-500" />
              <span>MicroCosmos</span>
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-white transition-colors">About Us</a>
              <a href="#" className="hover:text-white transition-colors">Exhibitions</a>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            </div>
            <p className="text-sm">© {new Date().getFullYear()} MicroCosmos Team. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
