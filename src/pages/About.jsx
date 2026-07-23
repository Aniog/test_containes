import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="bg-brand-bg">
      <div className="container-editorial section-padding">
        <h1 className="font-serif text-4xl text-brand-ink">Our Story</h1>
        <div className="mt-10 grid gap-10 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl">
            <img alt="Velmora studio" className="h-full w-full object-cover" src="https://picsum.photos/seed/velmora-about/1000/1000" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-brand-muted">
              Velmora Fine Jewelry was founded with a singular mission: to create jewelry that feels luxurious, intentional, and within reach. We design every piece in California, working with skilled artisans who share our commitment to quality and sustainability.
            </p>
            <p className="mt-4 text-brand-muted">
              Our materials are carefully sourced, and each design is tested for comfort and durability. From daily essentials to statement gifts, Velmora is made for real life.
            </p>
            <Link to="/shop" className="btn-primary mt-8 w-fit">Shop the Collection</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
