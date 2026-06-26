import React from 'react';
import Card from '@/components/ui/Card';

const About = () => {
  const values = [
    {
      title: 'Precision Engineering',
      description: 'Every machine is crafted with meticulous attention to detail, ensuring accuracy down to the millimeter.',
    },
    {
      title: 'User-Centered Design',
      description: 'We design our machines with operators in mind, combining powerful functionality with intuitive controls.',
    },
    {
      title: 'Built to Last',
      description: 'Using only the highest-grade materials and components, our machines deliver decades of reliable service.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#c5a46e] font-semibold tracking-wider text-sm">OUR STORY</span>
            <h2 className="text-4xl font-bold tracking-tight text-[#1a1f2e] mt-4 mb-6">
              Four Decades of Manufacturing Excellence
            </h2>
            <div className="space-y-4 text-[#4a5568] text-lg">
              <p>
                Founded in 1985, ARTITECT MACHINERY has grown from a small workshop to a global leader in industrial folding equipment.
              </p>
              <p>
                Our commitment to innovation and quality has earned us the trust of manufacturers worldwide who rely on our machines for their most demanding projects.
              </p>
            </div>
          </div>
          <div className="grid gap-6">
            {values.map((value, index) => (
              <Card key={index} className="border-l-4 border-l-[#c5a46e]">
                <h3 className="font-semibold text-xl text-[#1a1f2e] mb-2">{value.title}</h3>
                <p className="text-[#4a5568]">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;