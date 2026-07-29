import React from 'react';

const SimplePage = ({ title }) => (
  <div className="py-20 text-center">
    <h1 className="text-4xl font-bold">{title}</h1>
    <p className="mt-4 text-slate-600">This page is under construction.</p>
  </div>
);

export const Services = () => <SimplePage title="Our Services" />;
export const HowItWorks = () => <SimplePage title="How It Works" />;
export const Products = () => <SimplePage title="Products We Source" />;
export const CaseStudies = () => <SimplePage title="Case Studies" />;
export const Blog = () => <SimplePage title="Sourcing Blog" />;
export const Contact = () => <SimplePage title="Contact Us" />;
