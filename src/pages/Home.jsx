import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import { ArrowRight, Sparkles } from 'lucide-react';
import ContactForm from '@/components/contact/ContactForm';
import strkImgConfig from '@/strk-img-config.json';

export default function Home({ onAddContact }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-900 py-20 text-white md:py-28">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          data-strk-bg-id="home-hero-bg-a1b2c3"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="relative mx-auto max-w-5xl px-6">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm font-medium backdrop-blur">
              <Sparkles className="h-4 w-4" />
              <span>Now accepting messages</span>
            </div>
            <h1 id="hero-title" className="text-4xl font-bold leading-tight md:text-6xl">
              Let&apos;s stay in touch
            </h1>
            <p id="hero-subtitle" className="mt-4 text-lg text-slate-200 md:text-xl">
              Drop your details and we’ll get back to you. Your contact information is saved so you can review it anytime.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contacts"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900"
              >
                View saved contacts
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Form section */}
      <section className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Send us a message</h2>
            <p className="mt-3 text-slate-600">
              Fill out the form and your message will be saved locally so you can keep track of everyone who reaches out.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-600">
              <li className="flex items-center gap-2">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand-100 text-brand-600">✓</span>
                Instantly saved on this device
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand-100 text-brand-600">✓</span>
                Review all contacts in one place
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand-100 text-brand-600">✓</span>
                Simple, fast, and private
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-md md:p-8">
            <ContactForm onSubmit={onAddContact} />
          </div>
        </div>
      </section>
    </div>
  );
}
