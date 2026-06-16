import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 md:py-24 bg-[#F8F6F1]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-white border border-[#E8E6E1]">
              <span className="text-xs tracking-[2px] text-[#C5A46E] font-medium">OUR HERITAGE</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-[-1px] text-[#0A1628] mb-6 leading-tight">
              Built on<br />Craftsmanship
            </h2>
          </div>
          
          <div className="space-y-6 text-[#2C3E50] leading-relaxed">
            <p>
              Since 1987, ARTITECT MACHINERY has been at the forefront of metal fabrication technology. What began as a small workshop has grown into a globally recognized manufacturer of precision folding equipment.
            </p>
            <p>
              Our commitment to engineering excellence and customer satisfaction has earned us the trust of fabricators, manufacturers, and metalworkers across more than 40 countries.
            </p>
            <p>
              Every machine we produce reflects our dedication to quality, innovation, and the belief that superior tools empower superior craftsmanship.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-16 border-t border-[#E8E6E1]">
          <div>
            <div className="text-4xl font-semibold text-[#0A1628] mb-2">37</div>
            <div className="text-sm text-[#6B7280] tracking-wide">YEARS OF EXCELLENCE</div>
          </div>
          <div>
            <div className="text-4xl font-semibold text-[#0A1628] mb-2">12,000+</div>
            <div className="text-sm text-[#6B7280] tracking-wide">MACHINES INSTALLED</div>
          </div>
          <div>
            <div className="text-4xl font-semibold text-[#0A1628] mb-2">40+</div>
            <div className="text-sm text-[#6B7280] tracking-wide">COUNTRIES SERVED</div>
          </div>
          <div>
            <div className="text-4xl font-semibold text-[#0A1628] mb-2">98%</div>
            <div className="text-sm text-[#6B7280] tracking-wide">CUSTOMER RETENTION</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;