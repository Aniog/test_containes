import React from 'react';
import { useParams } from 'react-router-dom';

const titles = {
  collections: 'Collections',
  about: 'About Velmora',
  journal: 'Journal',
  shipping: 'Shipping & Returns',
  care: 'Jewelry Care',
  contact: 'Contact Us',
  faq: 'FAQ',
  sustainability: 'Sustainability',
  press: 'Press',
};

export default function PlaceholderPage() {
  const { page } = useParams();
  const title = titles[page] || 'Page';

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center bg-ivory px-4 text-center">
      <h1 className="font-serif text-3xl font-medium text-espresso md:text-4xl">
        {title}
      </h1>
      <p className="mt-4 max-w-md font-sans text-sm text-taupe">
        This page is coming soon. In the meantime, explore the collection or
        sign up for early access.
      </p>
    </div>
  );
}
