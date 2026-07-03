import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import CartDrawer from '@/components/layout/CartDrawer'

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <CartDrawer />
      <main>
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="font-serif text-3xl sm:text-4xl">About Velmora</h1>
          <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div className="space-y-4 text-sm leading-relaxed text-current/70 sm:text-base">
              <p>
                Velmora Fine Jewelry was founded with a clear purpose: to create jewelry that feels as good as it looks.
                We believe in quiet luxury — pieces that speak softly but leave a lasting impression.
              </p>
              <p>
                Our designs are crafted in small batches using 18K gold-plated recycled brass, hypoallergenic findings,
                and ethically sourced crystals. Every piece is inspected by hand before it leaves our studio.
              </p>
              <p>
                From our London atelier to your doorstep, we prioritize sustainable materials, responsible packaging,
                and a customer experience that feels personal.
              </p>
            </div>
            <div className="space-y-4 text-sm leading-relaxed text-current/70 sm:text-base">
              <p>
                Whether you&apos;re treating yourself or selecting a gift, our collection is built for real life.
                Our pieces transition seamlessly from day to evening, from the office to a special occasion.
              </p>
              <p>
                Questions? We&apos;d love to hear from you. Reach us at hello@velmora.com.
              </p>
              <div className="pt-4">
                <Link to="/shop" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#b08d57] hover:text-[#9a7a4a]">
                  Explore the Collection
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
