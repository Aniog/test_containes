import React from 'react';

const About = () => {
  return (
    <div className="pt-20">
      <div className="max-w-[900px] mx-auto px-6 py-16 text-center">
        <p className="text-xs tracking-[0.15em] text-[#C5A26F]">EST. 2018 • NEW YORK</p>
        <h1 className="serif text-6xl tracking-[0.02em] mt-4 mb-8">Quietly Beautiful</h1>
        <p className="text-lg text-[#5A5548] max-w-lg mx-auto">Velmora exists at the intersection of craftsmanship and accessibility. We believe that fine jewelry should feel personal, not precious.</p>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-5 gap-8 text-sm">
          <div className="md:col-span-3">
            <div className="aspect-[16/9] bg-[#E8E4DC] mb-8">
              <img src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1200&q=80" alt="Atelier" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="md:col-span-2 pt-2">
            <h3 className="serif text-2xl tracking-[0.02em] mb-4">Our Philosophy</h3>
            <div className="space-y-4 text-[#5A5548]">
              <p>Every piece begins with a sketch and ends with a promise: that it will be worn, loved, and passed on.</p>
              <p>We source responsibly, design intentionally, and finish each piece by hand. Our gold plating is thicker than industry standard. Our crystals are hand-selected. Nothing leaves our studio unless it meets our standards.</p>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-12 border-t border-[#E8E4DC] grid md:grid-cols-3 gap-10 text-sm">
          {[
            { title: "Thoughtful Design", text: "Minimal silhouettes that feel current, never trendy." },
            { title: "Lasting Materials", text: "18K gold plating over hypoallergenic bases. Built to endure." },
            { title: "Personal Service", text: "Questions? Reach us directly. We're here for you." },
          ].map((v, i) => (
            <div key={i}>
              <div className="serif text-xl tracking-[0.02em] mb-3">{v.title}</div>
              <p className="text-[#5A5548]">{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
