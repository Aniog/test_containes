import React, { useEffect, useRef } from 'react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, ShieldCheck, Zap, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = React.useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        const { data: response } = await client
          .from('IndustrialProduct')
          .select('*')
          .eq('featured', true)
          .limit(3);
        setFeaturedProducts(response?.data?.list || []);
      } catch (err) {
        console.error('Failed to fetch products', err);
      }
    };
    fetchFeatured();
  }, []);

  useEffect(() => {
    if (featuredProducts.length > 0) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [featuredProducts]);

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden bg-slate-900">
        <div 
          className="absolute inset-0 opacity-40"
          data-strk-bg-id="hero-bg-artitect"
          data-strk-bg="[hero-title] [hero-description]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="max-w-2xl text-white">
            <Badge className="mb-4 bg-blue-600 hover:bg-blue-700 border-none px-3 py-1 text-xs uppercase tracking-widest font-bold">New Standards In Metal Folding</Badge>
            <h1 id="hero-title" className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
              PRECISION <br /><span className="text-blue-500">ENGINEERED</span> MASTERY
            </h1>
            <p id="hero-description" className="text-lg md:text-xl text-slate-300 mb-8 max-w-lg leading-relaxed">
              Industrial-grade double folding machines and sheet metal folders designed for high-performance fabrication.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 shadow-lg shadow-blue-900/20" asChild>
                <Link to="/products">Explore Range <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white/20 hover:bg-white/10" asChild>
                <Link to="/contact">Request Technical Specs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="features-title" className="text-3xl font-extrabold tracking-tight text-slate-900 mb-4 sm:text-4xl">Built for Reliability</h2>
            <p className="max-w-2xl mx-auto text-slate-600">Our machinery is manufactured with the highest quality standards to ensure efficiency in every fold.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: ShieldCheck, title: "Precision Accuracy", desc: "Digital control systems ensure fold accuracy within microns for flawless repeatability." },
              { icon: Zap, title: "High Speed Operation", desc: "Automated sequences and high-torque motors reduce cycle times by up to 40%." },
              { icon: Settings, title: "Custom Configurations", desc: "Modular designs allows for tooling setups tailored to your specific production needs." }
            ].map((feature, i) => (
              <div key={i} className="flex flex-col items-center text-center p-6 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="h-12 w-12 rounded-xl bg-blue-100 flex items-center justify-center mb-6">
                  <feature.icon className="h-6 w-6 text-blue-700" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 id="featured-title" className="text-3xl font-extrabold tracking-tight text-slate-900">Elite Machinery</h2>
              <p className="text-slate-600 mt-2">Our most popular solutions for sheet metal fabrication.</p>
            </div>
            <Button variant="link" asChild className="text-blue-700 font-bold p-0">
              <Link to="/products">View All Products <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => {
              const { data: fields } = product;
              return (
                <Card key={product.id} className="overflow-hidden border-none shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group">
                  <div className="relative h-64 bg-slate-200 overflow-hidden">
                     <img
                      data-strk-img-id={`prod-img-${product.id}`}
                      data-strk-img={`[prod-title-${product.id}] [prod-desc-${product.id}] [featured-title]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={fields.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-white/90 backdrop-blur-sm border-none shadow-sm">{fields.category}</Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle id={`prod-title-${product.id}`} className="text-xl font-bold group-hover:text-blue-700 transition-colors uppercase tracking-tight">{fields.name}</CardTitle>
                    <p id={`prod-desc-${product.id}`} className="text-slate-500 text-sm line-clamp-2 mt-2">{fields.description}</p>
                  </CardHeader>
                  <CardContent className="mt-auto">
                    <div className="space-y-2">
                       {fields.specifications && Object.entries(fields.specifications).slice(0, 2).map(([key, val]) => (
                        <div key={key} className="flex justify-between text-xs py-1 border-b border-slate-100 last:border-none">
                          <span className="text-slate-500 font-medium capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                          <span className="text-slate-900 font-bold">{val}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Button variant="outline" className="w-full border-slate-200 hover:border-blue-300 hover:bg-blue-50 text-slate-700" asChild>
                      <Link to="/contact" state={{ product: fields.name }}>Inquire Now</Link>
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-800 py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 id="cta-title" className="text-3xl font-extrabold text-white mb-6">Optimized for Your Production Line</h2>
          <p className="text-blue-100 mb-10 max-w-xl mx-auto text-lg">Contact our engineering team today to discuss how ARTITECT machinery can streamline your operations.</p>
          <Button size="xl" className="bg-white text-blue-900 hover:bg-slate-100 px-10 py-6 text-lg font-extrabold shadow-2xl" asChild>
             <Link to="/contact">Get a Free Consultation</Link>
          </Button>
        </div>
        <div className="absolute top-0 right-0 -mr-20 -mt-20 h-64 w-64 rounded-full bg-blue-700/30 blur-3xl" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-96 w-96 rounded-full bg-blue-900/40 blur-3xl" />
      </section>
    </div>
  );
};

export default Home;
