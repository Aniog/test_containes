import React from 'react';

export default function About() {
  return (
    <div className="pt-28 pb-20 bg-background min-h-screen">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <h1 className="font-serif text-3xl lg:text-4xl uppercase tracking-widest text-center">Our Story</h1>
        <div className="max-w-2xl mx-auto mt-8 space-y-5 text-sm text-muted leading-relaxed">
          <p>
            Velmora Fine Jewelry was founded in New York with a simple belief: that beautiful jewelry should be worn every day, not saved for special occasions. Our pieces bridge the gap between costume and fine jewelry — crafted with genuine care, plated in rich 18K gold, and priced so you can collect them.
          </p>
          <p>
            Every design begins in our Manhattan studio, where we draw inspiration from architecture, art, and the quiet confidence of the women who wear our pieces. We partner with ethical manufacturers who share our commitment to quality and sustainability.
          </p>
          <p>
            Whether you are treating yourself or searching for the perfect gift, we hope Velmora becomes part of your story.
          </p>
        </div>
      </div>
    </div>
  );
}