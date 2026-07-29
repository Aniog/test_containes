import React, { useEffect, useState } from 'react';
import { fetchCaseStudies } from '@/api/sourcing';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Briefcase, Target, Lightbulb, CheckCircle } from 'lucide-react';

const CaseStudies = () => {
  const [cases, setCases] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchCaseStudies();
        setCases(data);
      } catch (error) {
        console.error("Failed to fetch case studies:", error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="bg-[#002D62] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Case Studies</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Real-world examples of how we help our clients succeed in China.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          {loading ? (
            <div className="text-center py-20">Loading case studies...</div>
          ) : cases.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-8">
              {cases.map((cs) => {
                const data = cs.data;
                return (
                  <Card key={cs.id} className="border-none shadow-lg overflow-hidden">
                    <CardHeader className="bg-white border-b border-gray-100 p-8">
                      <div className="flex items-center gap-3 text-[#FF6B00] mb-4">
                        <Briefcase size={20} />
                        <span className="font-bold text-sm tracking-widest uppercase">{data.client}</span>
                      </div>
                      <CardTitle className="text-2xl font-bold text-[#002D62]">{data.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-8 space-y-6">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-600">
                          <Target size={20} />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 mb-1">The Challenge</h4>
                          <p className="text-gray-600">{data.challenge}</p>
                        </div>
                      </div>
                      
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                          <Lightbulb size={20} />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 mb-1">Our Solution</h4>
                          <p className="text-gray-600">{data.solution}</p>
                        </div>
                      </div>

                      <div className="flex gap-4 p-5 bg-green-50 rounded-xl border border-green-100">
                        <div className="flex-shrink-0 text-green-600">
                          <CheckCircle size={24} />
                        </div>
                        <div>
                          <h4 className="font-bold text-green-800 mb-1">Results</h4>
                          <p className="text-green-700 font-medium">{data.result}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-gray-500 italic">No case studies found.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
