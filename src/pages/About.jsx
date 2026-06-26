import React from 'react';
import { Target, Users, Zap } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-slate-900 py-24 text-center">
        <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Engineering the Future of Folding</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
                At Artitect Machinery, we believe that industrial equipment shouldn't just be functional—it should be a joy to operate, elegantly designed, and unfailingly precise.
            </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
                <div>
                    <h2 className="text-3xl font-bold text-primary mb-6">Our Story</h2>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                        Founded by operators who were frustrated by the clunky, unintuitive metal folders of the past, Artitect Machinery was born out of a desire to bring true design thinking to heavy industry.
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        We started with a single concept: The double folding machine. By reimagining the kinematics and software from the ground up, we created machines that look as good as the parts they produce. Today, we supply forward-thinking fabrication shops worldwide.
                    </p>
                </div>
                <div className="h-96 bg-gray-100 rounded-2xl overflow-hidden">
                     <img
                        alt="Engineering team"
                        className="w-full h-full object-cover"
                        src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200"
                    />
                </div>
            </div>

            {/* Values */}
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-primary mb-4">Core Values</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
                <div className="p-6">
                    <div className="w-16 h-16 bg-blue-50 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                        <Target className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3">Absolute Precision</h3>
                    <p className="text-gray-600">Every machine is calibrated to tolerances that exceed industry standards.</p>
                </div>
                <div className="p-6">
                    <div className="w-16 h-16 bg-orange-50 text-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                        <Zap className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3">Elegant Utility</h3>
                    <p className="text-gray-600">Complex operations are simplified through superior software and ergonomic design.</p>
                </div>
                <div className="p-6">
                    <div className="w-16 h-16 bg-slate-100 text-slate-800 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Users className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3">Operator First</h3>
                    <p className="text-gray-600">We design machines that reduce fatigue and empower the fabricator.</p>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default About;