import React from 'react';
import Button from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="max-w-3xl">
        <p className="text-[11px] tracking-[0.25em] uppercase text-gold mb-3">Our Story</p>
        <h1 className="font-serif text-3xl md:text-5xl text-charcoal leading-tight">
          Quiet luxury, made for real life.
        </h1>
        <div className="mt-8 space-y-5 text-sm text-muted leading-relaxed">
          <p>
            Velmora Fine Jewelry was created to fill a gap between costume jewelry and inaccessible
            fine jewelry. We design pieces that feel considered, wear beautifully, and hold their
            finish over time.
          </p>
          <p>
            Every design starts with a simple question: will someone reach for this piece every
            morning? If the answer is yes, it becomes part of the collection. We work with small
            manufacturers who share our standards for materials, finish, and fit.
          </p>
          <p>
            Our materials include 18K gold-plated brass, hypoallergenic findings, and carefully
            selected crystals. We believe in fewer, better pieces rather than trends meant to be
            forgotten.
          </p>
        </div>
        <div className="mt-10">
          <Link to="/shop">
            <Button variant="accent">Shop the Collection</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
